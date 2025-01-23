import { nanoid } from 'nanoid';
import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';

import type {
  SearchcraftConfig,
  QueryObject,
  SearchcraftResponse,
  SearchParams,
  QueryItem,
  MeasureRequest,
  MeasureRequestUser,
  MeasureEventName,
  MeasureRequestProperties,
  SearchcraftSDKInfo,
} from '../CoreSDKTypes';

const MEASURE_REQUEST_DEBOUNCE = 500;

/**
 * Javascript Class providing the functionality to interact with the Searchcraft BE
 */
export class SearchcraftCore {
  config: SearchcraftConfig;
  sdkInfo: SearchcraftSDKInfo;
  userId: string;
  sessionId: string;

  private searchRequestTimeout: NodeJS.Timeout | undefined;
  private measureRequestTimeout: NodeJS.Timeout | undefined;
  private measureRequestsBatched: MeasureRequest[] = [];

  constructor(config: SearchcraftConfig, sdkInfo: SearchcraftSDKInfo) {
    if (!config.endpointURL || !config.index || !config.readKey) {
      throw new Error(
        'Endpoint URL, Index value(s), and Read Key must be provided',
      );
    }

    this.config = config;
    this.sdkInfo = sdkInfo;
    this.userId = config.userId || '';
    this.sessionId = '';

    // Adds a timeout so that the resource-intensive `initMeasure` does not cause any render-blocking issues.
    setTimeout(() => {
      this.sessionId = nanoid();
      this.initMeasure();
    }, 300);
  }

  /**
   * Initializes this.userId based on config & sends the `sdk_innitialized` event.
   */
  async initMeasure() {
    if (!this.config.userId) {
      const fingerprint = await getFingerprint();
      this.userId = fingerprint;
    }

    this.sendMeasureEvent('sdk_initialized');
  }

  /**
   * Getter for the base url used by the /search endpoint.
   */
  private get baseSearchUrl(): string {
    return `${this.config.endpointURL}/index/${this.config.index.join(',')}/search`;
  }

  /**
   * Getter for the base url used by the /measure endpoints.
   */
  private get baseMeasureUrl(): string {
    return `${this.config.endpointURL}/measure`;
  }

  /**
   * Getter for the measure request user. Uses config values + navigator values.
   */
  private get measureRequestUser(): MeasureRequestUser {
    return {
      user_id: this.userId,
      locale: navigator.language || 'en-US',
      os: navigator.userAgent.includes('Windows')
        ? 'Windows'
        : navigator.userAgent.includes('Mac')
          ? 'Mac'
          : navigator.userAgent.includes('Linux')
            ? 'Linux'
            : 'Unknown',
      platform: navigator.platform || 'Unknown',
      sdk_name: this.sdkInfo.sdkName,
      sdk_version: this.sdkInfo.sdkVersion,
      user_agent: navigator.userAgent || 'Unknown',
    };
  }

  /**
   * Builds a query object for the search request.
   * @param {SearchParams} searchParams - The parameters for the search.
   * @returns {QueryObject} - A properly formatted query object.
   */
  private buildQueryObject(searchParams: SearchParams): QueryObject {
    const queryItems: QueryItem[] = [];
    let occur: 'must' | 'should' = 'should';

    if (searchParams.facetPathsForIndexFields) {
      Object.keys(searchParams.facetPathsForIndexFields).forEach(
        (fieldName) => {
          const item = searchParams.facetPathsForIndexFields?.[fieldName];
          if (item) {
            occur = 'must';
            queryItems.push({
              occur,
              exact: {
                ctx: item.value,
              },
            });
          }
        },
      );
    }

    if (searchParams.rangeValueForIndexFields) {
      Object.keys(searchParams.rangeValueForIndexFields).forEach(
        (fieldName) => {
          const item = searchParams.rangeValueForIndexFields?.[fieldName];
          if (item) {
            occur = 'must';
            queryItems.push({
              occur,
              exact: {
                ctx: item.value,
              },
            });
          }
        },
      );
    }

    if (searchParams.sort === 'desc') {
      searchParams.order_by = 'date_published';
    } else {
      searchParams.order_by = '';
    }

    queryItems.push({
      occur, // Valid, as 'occur' is a required property in QueryItem
      [searchParams.mode]: { ctx: searchParams.query }, // Ensure dynamic mode is inside queryType
    });

    return queryItems;
  }

  /**
   * Performs a search operation.
   * @param {SearchParams} searchParams - The parameters for the search.
   * @returns {Promise<SearchcraftResponse>} - Returns the search response or throws an error.
   */
  search = (
    searchParams: SearchParams,
    callback: (response: SearchcraftResponse) => void,
  ) => {
    const performSearch = async () => {
      this.sendMeasureEvent('search_requested', {
        search_term: searchParams.query,
      });

      const quoteCount = (searchParams.query.match(/"/g) || []).length;
      if (quoteCount % 2 !== 0) {
        throw new Error(
          'The search term contains an uneven number of quote characters.',
        );
      }

      try {
        // Build the request body
        const requestBody: {
          query: QueryObject;
          limit: number;
          offset?: number;
          order_by?: string;
          sort?: 'asc' | 'desc';
        } = {
          query: this.buildQueryObject(searchParams),
          limit: searchParams.limit ?? 20, // Default to 20 if not provided
        };

        // Add offset if provided
        if (searchParams.offset !== undefined) {
          requestBody.offset = searchParams.offset;
        }

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

        this.sendMeasureEvent('search_response_received', {
          search_term: searchParams.query,
          number_of_documents: searchcraftResponse.data.count,
        });

        callback(searchcraftResponse);
      } catch (error) {
        console.error('Error parsing response:', error);
        throw error;
      }
    };

    // Apply a debounce to the search if there is one in the config.
    clearTimeout(this.searchRequestTimeout);
    if (this.config.searchDebounceDelay) {
      this.searchRequestTimeout = setTimeout(
        performSearch,
        this.config.searchDebounceDelay,
      );
    } else {
      performSearch();
    }
  };

  /**
   * Sends a measure event to the `/measure/event` endpoint for analytics purposes.
   *
   * @param {MeasureEventName} eventName - Name of the event.
   * @param {Partial<MeasureRequestProperties>} properties - Additional properties to send with the event.
   * @param {Partial<MeasureRequestUser>} user - Additional user properites to send with the event.
   */
  sendMeasureEvent = (
    eventName: MeasureEventName,
    properties: Partial<MeasureRequestProperties> = {},
    user: Partial<MeasureRequestUser> = {},
  ) => {
    /**
     * Builds the request object based on config values + provided arguments.
     */
    const request: MeasureRequest = {
      event_name: eventName,
      properties: {
        searchcraft_index_names: this.config.index,
        ...properties,
      },
      user: {
        ...this.measureRequestUser,
        ...user,
      },
    };

    this.measureRequestsBatched.push(request);
    clearTimeout(this.measureRequestTimeout);

    this.measureRequestTimeout = setTimeout(async () => {
      const payload = JSON.stringify({ items: this.measureRequestsBatched });
      const url = `${this.baseMeasureUrl}/batch`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.config.readKey,
            'X-Sc-User-Id': this.userId,
          },
          body: payload,
          keepalive: true,
        });

        if (!response.ok) {
          throw new Error(
            `Failed to send request: ${response.status} ${response.statusText}`,
          );
        }

        this.measureRequestsBatched = [];

        return;
      } catch (error) {
        console.error('Error sending MeasureRequest:', error);
        throw error;
      }
    }, MEASURE_REQUEST_DEBOUNCE);
  };
}
