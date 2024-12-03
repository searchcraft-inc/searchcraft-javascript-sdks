import type {
  CoreConfigSDK,
  SearchError,
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
    console.log('SEARCH PARAMS', searchParams);

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

      console.log('REQUEST BODY', requestBody);

      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: this.config.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };

      const request = await fetch(baseUrl, requestOptions);
      return (await request.json()) as SearchResult;
    } catch (error) {
      return error as SearchError;
    }
  };
}
