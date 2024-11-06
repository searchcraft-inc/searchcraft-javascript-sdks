import type {
  CoreConfigSDK,
  SearchError,
  SearchParams,
  SearchResult,
} from '../CoreConfigSDK';

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
   * @param {string} query - User provided value Searchcraft will use to search against
   * @param {string} mode - Can be either 'fuzzy' or 'normal'
   * @returns {SearchResult} - Returns a `SearchResponse` object with the results from the search or throws an error
   */
  search = async (searchParams: SearchParams): Promise<SearchResult> => {
    try {
      const formattedIndexes = this.config.index.join(',');
      const baseUrl = `${this.config.endpointURL}/search`;
      const requestBody = {
        query: searchParams.query,
        mode: searchParams.mode,
        app: formattedIndexes,
      };
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: this.config.apiKey ? `${this.config.apiKey}` : '',
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
