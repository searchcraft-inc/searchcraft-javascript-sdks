import type { CoreConfigSDK, SearchResult } from '../CoreConfigSDK';

/**
 * * Javascript Class providing the functionality to talk to the Searchcraft BE
 */
export class CoreSDK {
  config: CoreConfigSDK;
  searchResult: SearchResult | null;

  constructor(config: CoreConfigSDK) {
    if (!config.apiKey || !config.endpointPath || !config.index) {
      throw new Error(
        'API key, endpoint path, and index value(s) must be provided',
      );
    }
    this.config = config;
    this.searchResult = null;
  }

  /**
   * @param {string} query - User provided value Searchcraft will use to search against
   * @param {string} mode - Can be either 'fuzzy' or 'normal'
   * @returns {SearchResults} - Returns a `SearchResponse` object with the results from the search or throws an error
   */
  search = async <T>(
    query: string,
    mode: 'fuzzy' | 'normal',
  ): Promise<T | null> => {
    try {
      this.config.setIsRequestingTrue();
      const baseUrl = `http://localhost:3000${this.config.endpointPath}`;
      const requestBody = {
        query: query,
        mode,
        app: this.config.index,
      };
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${this.config.apiKey}`,
        },
        body: JSON.stringify(requestBody),
      };

      const request = await fetch(baseUrl, requestOptions);
      const responseValues = await request.json();

      this.searchResult = responseValues.data;
      return responseValues;
    } catch (error) {
      return error as T;
    } finally {
      this.config.setIsRequestingFalse();
    }
  };
}
