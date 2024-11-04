import type { CoreConfigSDK, SearchResult } from '../CoreConfigSDK';

export type SearchParams = {
  query: string;
  mode: 'fuzzy' | 'normal';
};

export type SearchError = {
  message: string;
  code: number;
};

/**
 * * Javascript Class providing the functionality to talk to the Searchcraft BE
 */
export class CoreSDK {
  config: CoreConfigSDK;

  constructor(config: CoreConfigSDK) {
    if (!config.endpointPath || !config.endpointURL || !config.index) {
      throw new Error(
        'Endpoint path, Endpoint URL, and Index value(s) must be provided',
      );
    }
    this.config = config;
  }

  /**
   * @param {string} query - User provided value Searchcraft will use to search against
   * @param {string} mode - Can be either 'fuzzy' or 'normal'
   * @returns {SearchResults} - Returns a `SearchResponse` object with the results from the search or throws an error
   */
  search = async (searchParams: SearchParams) => {
    try {
      const baseUrl = `${this.config.endpointURL}/index/${this.config.endpointPath}/search`;
      const requestBody = {
        query: searchParams.query,
        mode: searchParams.mode,
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
      return (await request.json()) as SearchResult;
    } catch (error) {
      return error as SearchError;
    }
  };
}
