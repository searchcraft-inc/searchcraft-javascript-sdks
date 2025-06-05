import { nanoid } from 'nanoid';
import type { SearchcraftCore } from '@classes';

import type {
  SearchClientQuery,
  SearchcraftConfig,
  SearchcraftResponse,
  SearchClientRequestProperties,
  SearchClientRequest,
} from '@types';

import { sanitize } from '@utils/core-utils';

const SEARCH_COMPLETED_EVENT_DEBOUNCE = 500;

export class SearchClient {
  private config: SearchcraftConfig;
  private userId: string;
  private parent: SearchcraftCore;
  private searchCompletedEventTimeout: NodeJS.Timeout | undefined;
  private abortController: AbortController | undefined;
  private supplementalAbortController: AbortController | undefined;

  constructor(
    parent: SearchcraftCore,
    config: SearchcraftConfig,
    userId: string,
  ) {
    this.parent = parent;
    this.config = config;
    this.userId = userId;
  }

  /**
   * Getter for the base url used by the /search endpoint.
   */
  private get baseSearchUrl(): string {
    return `${this.config.endpointURL}/index/${this.config.index.join(',')}/search`;
  }

  /**
   * Immediately cancels all pending search requests.
   */
  abortRequests = () => {
    this.abortController?.abort(
      'The pending search request has been cancelled.',
    );
    this.supplementalAbortController?.abort(
      'The pending search request has been cancelled.',
    );
  };

  /**
   * Make the request to get the search results.
   * @param {properties} properties - The properties for the search.
   * @param isSupplemental - Whether or not this is a supplemental search request (for the purpose of getting top-level facet counts)
   * @returns
   */
  getSearchResponseItems = async (
    properties: SearchClientRequestProperties | string,
    isSupplemental = false,
  ) => {
    let response: SearchcraftResponse;
    let searchTerm = '';

    let abortController: AbortController;
    if (isSupplemental) {
      this.supplementalAbortController?.abort(
        'A newer search request has replaced this one.',
      );
      abortController = new AbortController();
      this.supplementalAbortController = abortController;
    } else {
      this.abortController?.abort(
        'A newer search request has replaced this one.',
      );
      abortController = new AbortController();
      this.abortController = abortController;
    }

    // Sanitize the search term prior to any request
    // The function will throw if it is not valid
    if (typeof properties === 'string') {
      searchTerm = sanitize(properties);
    } else {
      properties.searchTerm = sanitize(properties.searchTerm);
      searchTerm = properties.searchTerm;
    }

    this.parent.measureClient?.sendMeasureEvent('search_requested', {
      search_term: searchTerm,
    });

    this.parent.emitEvent('query_submitted', {
      name: 'query_submitted',
      data: {
        searchTerm,
      },
    });

    this.parent.adClient?.onQuerySubmitted(
      typeof properties === 'string'
        ? { searchTerm, mode: 'exact' }
        : properties,
    );

    if (typeof properties === 'string') {
      response = await this.handleGetSearchResponseItemsWithString(
        searchTerm,
        abortController,
      );
    } else {
      response = await this.handleGetSearchResponseItemsWithObject(
        properties,
        abortController,
      );
    }

    if (!isSupplemental) {
      this.parent.measureClient?.sendMeasureEvent('search_response_received', {
        search_term: searchTerm,
        number_of_documents: response.data.count,
      });

      clearTimeout(this.searchCompletedEventTimeout);
      this.searchCompletedEventTimeout = setTimeout(() => {
        this.parent.measureClient?.sendMeasureEvent('search_completed', {
          search_term: searchTerm,
          number_of_documents: response.data.count,
        });
      }, SEARCH_COMPLETED_EVENT_DEBOUNCE);

      this.parent.emitEvent('query_fetched', {
        name: 'query_fetched',
        data: {
          searchTerm,
        },
      });

      if ((response.data.hits?.length || 0) === 0) {
        this.parent.emitEvent('no_results_returned', {
          name: 'no_results_returned',
        });
      }

      this.parent.adClient?.onQueryFetched(
        typeof properties === 'string'
          ? { searchTerm, mode: 'exact' }
          : properties,
        response,
      );
    }

    return response;
  };

  private handleGetSearchResponseItemsWithString = async (
    str: string,
    abortController: AbortController,
  ): Promise<SearchcraftResponse> => {
    let body: SearchClientRequest;

    try {
      body = JSON.parse(str);
      body = {
        limit: this.config.searchResultsPerPage,
        ...body,
      };
    } catch {
      throw new Error('Error: Query string is not valid json.');
    }

    const response = await fetch(this.baseSearchUrl, {
      method: 'POST',
      headers: {
        Authorization: this.config.readKey,
        'Content-Type': 'application/json',
        'X-Sc-User-Id': this.userId,
        'X-Sc-Session-Id': this.parent.measureClient?.sessionId || nanoid(),
      },
      body: JSON.stringify(body),
      signal: abortController.signal,
    });

    if (!response.ok) {
      throw new Error(
        `Error: ${response.statusText} (Status: ${response.status})`,
      );
    }

    return (await response.json()) as SearchcraftResponse;
  };

  private handleGetSearchResponseItemsWithObject = async (
    properties: SearchClientRequestProperties,
    abortController: AbortController,
  ): Promise<SearchcraftResponse> => {
    const response = await fetch(this.baseSearchUrl, {
      method: 'POST',
      headers: {
        Authorization: this.config.readKey,
        'Content-Type': 'application/json',
        'X-Sc-User-Id': this.userId,
        'X-Sc-Session-Id': this.parent.measureClient?.sessionId || nanoid(),
      },
      body: JSON.stringify({
        query: this.formatParamsForRequest(properties),
        offset: properties.offset || 0,
        limit: properties.limit || this.config.searchResultsPerPage || 20,
        ...(properties.order_by && {
          order_by: properties.order_by,
        }),
        ...(properties.sort && {
          sort: properties.sort,
        }),
      } satisfies SearchClientRequest),
      signal: abortController.signal,
    });

    if (!response.ok) {
      throw new Error(
        `Error: ${response.statusText} (Status: ${response.status})`,
      );
    }

    return (await response.json()) as SearchcraftResponse;
  };

  /**
   * Builds a query object for the SearchClient request.
   * @param {properties} properties - The properties for the search.
   * @returns {SearchClientQuery} - A properly formatted SearchClient query object.
   */
  private formatParamsForRequest(
    properties: SearchClientRequestProperties,
  ): SearchClientQuery[] {
    const queries: SearchClientQuery[] = [];
    let occur: 'must' | 'should' = 'should';

    if (properties.facetPathsForIndexFields) {
      Object.keys(properties.facetPathsForIndexFields).forEach((fieldName) => {
        const item = properties.facetPathsForIndexFields?.[fieldName];

        if (item) {
          occur = 'must';
          queries.push({
            occur: 'must',
            exact: {
              ctx: sanitize(item.value),
            },
          });
        }
      });
    }

    if (properties.rangeValueForIndexFields) {
      Object.keys(properties.rangeValueForIndexFields).forEach((fieldName) => {
        const item = properties.rangeValueForIndexFields?.[fieldName];

        if (item) {
          occur = 'must';
          queries.push({
            occur: 'must',
            exact: {
              ctx: sanitize(item.value),
            },
          });
        }
      });
    }

    const searchTerm = properties.searchTerm;
    const query =
      properties.mode === 'fuzzy'
        ? { fuzzy: { ctx: searchTerm } }
        : {
            exact: {
              ctx: `${searchTerm.startsWith('"') ? searchTerm : `"${searchTerm}"`}`,
            },
          };
    queries.push({
      occur: properties.mode === 'exact' ? 'must' : occur, // Valid, as 'occur' is a required property in SearchClientQuery
      ...query,
    });

    return queries;
  }
}
