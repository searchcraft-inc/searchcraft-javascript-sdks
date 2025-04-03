import type { SearchcraftCore } from '../classes';
import type {
  QueryObject,
  SearchParams,
  SearchcraftConfig,
  SearchcraftResponse,
} from '../types';
import { buildQueryObject } from '../utils';
import { sanitize } from '../utils/sanitize';

const SEARCH_COMPLETED_EVENT_DEBOUNCE = 500;

export class SearchClient {
  private config: SearchcraftConfig;
  private userId: string;
  private parent: SearchcraftCore;
  private searchCompletedEventTimeout: NodeJS.Timeout | undefined;

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
   * Performs a search operation.
   * @param {SearchParams} searchParams - The parameters for the search.
   */
  getSearchResponse = async (
    searchParams: SearchParams,
  ): Promise<SearchcraftResponse> => {
    const searchTerm = sanitize(searchParams.searchTerm);

    this.parent.measureClient?.sendMeasureEvent('search_requested', {
      search_term: searchTerm,
    });

    this.parent.emitEvent('query_submitted', {
      name: 'query_submitted',
      data: {
        searchTerm,
      },
    });

    this.parent.adClient?.onQuerySubmitted(searchParams);

    try {
      // Build the request body
      const requestBody: {
        query: QueryObject;
        limit: number;
        offset?: number;
        order_by?: string;
        sort?: 'asc' | 'desc';
      } = {
        query: buildQueryObject(searchParams),
        offset: searchParams.offset || 0, // Default to 0 (first page) if not provided
        limit: searchParams.limit || this.config.searchResultsPerPage || 20, // Default to 20 if not provided
      };

      // Handles dynamic sorting and order_by logic
      if (searchParams.order_by) {
        requestBody.order_by = searchParams.order_by;

        // Ensure sort defaults to 'asc' if not provided or given an invalid value
        requestBody.sort =
          searchParams.sort === 'desc' || searchParams.sort === 'asc'
            ? searchParams.sort
            : 'asc';
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: this.config.readKey,
          'Content-Type': 'application/json',
          'X-Sc-User-Id': this.userId,
        },
        body: JSON.stringify(requestBody),
      };

      const response = await fetch(this.baseSearchUrl, requestOptions);
      if (!response.ok) {
        throw new Error(
          `Error: ${response.statusText} (Status: ${response.status})`,
        );
      }

      // TODO: Add schema validation here rather than optimistically cast to SearchcraftResponse.
      const searchcraftResponse =
        (await response.json()) as SearchcraftResponse;

      this.parent.measureClient?.sendMeasureEvent('search_response_received', {
        search_term: searchTerm,
        number_of_documents: searchcraftResponse.data.count,
      });

      clearTimeout(this.searchCompletedEventTimeout);
      this.searchCompletedEventTimeout = setTimeout(() => {
        this.parent.measureClient?.sendMeasureEvent('search_completed', {
          search_term: searchTerm,
          number_of_documents: searchcraftResponse.data.count,
        });
      }, SEARCH_COMPLETED_EVENT_DEBOUNCE);

      this.parent.emitEvent('query_fetched', {
        name: 'query_fetched',
        data: {
          searchTerm,
        },
      });

      if ((searchcraftResponse.data.hits?.length || 0) === 0) {
        this.parent.emitEvent('no_results_returned', {
          name: 'no_results_returned',
        });
      }

      this.parent.adClient?.onQueryFetched(searchParams, searchcraftResponse);

      return searchcraftResponse;
    } catch (error) {
      console.error('Error parsing response:', error);
      throw error;
    }
  };
}
