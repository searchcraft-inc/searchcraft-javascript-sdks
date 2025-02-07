import type {
  QueryObject,
  SearchParams,
  SearchcraftConfig,
  SearchcraftResponse,
} from '../types';
import { buildQueryObject } from '../utils';
import { sanitize } from '../utils/sanitize';

import type { MeasureClient } from './MeasureClient';

export class SearchClient {
  private measureClient: MeasureClient;
  private config: SearchcraftConfig;
  private userId: string;

  constructor(
    config: SearchcraftConfig,
    userId: string,
    measureClient: MeasureClient,
  ) {
    this.measureClient = measureClient;
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

    this.measureClient?.sendMeasureEvent('search_requested', {
      search_term: searchTerm,
    });

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

      this.measureClient?.sendMeasureEvent('search_response_received', {
        search_term: searchTerm,
        number_of_documents: searchcraftResponse.data.count,
      });

      return searchcraftResponse;
    } catch (error) {
      console.error('Error parsing response:', error);
      throw error;
    }
  };
}
