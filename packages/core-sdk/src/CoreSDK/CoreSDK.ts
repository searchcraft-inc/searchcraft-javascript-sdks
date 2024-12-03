import type {
  CoreConfigSDK,
  SearchParams,
  SearchResult,
} from '../CoreSDKTypes';

/**
 * * Javascript Class providing the functionality to interact with the Searchcraft BE
 */
export class CoreSDK {
  config: CoreConfigSDK;

  constructor(config: CoreConfigSDK) {
    if (!config.endpointURL || !config.index) {
      throw new Error('Endpoint URL and Index value(s) must be provided');
    }
    this.config = config;
  }

  /**
   * @param {SearchParams} searchParams - The parameters for the search.
   * @returns {Promise<SearchResult>} - Returns a `SearchResult` object with the results from the search or throws an error.
   */
  search = async (searchParams: SearchParams): Promise<SearchResult> => {
    const quoteCount = (searchParams.query.match(/"/g) || []).length;
    if (quoteCount % 2 !== 0) {
      throw new Error(
        'The search term contains an uneven number of quote characters.',
      );
    }

    try {
      const formattedIndexes = this.config.index.join(',');
      const baseUrl = `${this.config.endpointURL}/index/${formattedIndexes}/search`;
      const requestBody: {
        query: {
          [key: string]: { ctx: string };
        };
        limit: number;
        order_by?: string;
        sort?: 'asc' | 'desc';
      } = {
        query: {
          [searchParams.mode]: { ctx: searchParams.query },
        },
        limit: 20,
      };

      // Handles dynamic sorting and order_by logic
      if (searchParams.order_by) {
        requestBody.order_by = searchParams.order_by;

        // Ensure sort defaults to 'asc' if not provided or given an invalid
        requestBody.sort =
          searchParams.sort === 'desc' || searchParams.sort === 'asc'
            ? searchParams.sort
            : 'asc';
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: this.config.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };

      const response = await fetch(baseUrl, requestOptions);
      console.log('REQUEST RESPONSE', response);

      if (!response.ok) {
        throw new Error(
          `Error: ${response.statusText} (Status: ${response.status})`,
        );
      }
      return await response.json();
    } catch (error) {
      console.error('Error parsing response:', error);
      throw error;
    }
  };
}
