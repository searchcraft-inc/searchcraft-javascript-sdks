import type {
  CoreConfigSDK,
  Facets,
  QueryObject,
  SearchcraftResponse,
  SearchParams,
  QueryItem,
} from '../CoreSDKTypes';

/**
 * Javascript Class providing the functionality to interact with the Searchcraft BE
 */
export class CoreSDK {
  config: CoreConfigSDK;

  constructor(config: CoreConfigSDK) {
    if (!config.endpointURL || !config.index || !config.apiKey) {
      throw new Error(
        'Endpoint URL, Index value(s), and API Key must be provided',
      );
    }
    this.config = config;
  }

  /**
   * Builds a query object for the search request.
   * @param {SearchParams} searchParams - The parameters for the search.
   * @returns {QueryObject} - A properly formatted query object.
   */
  private buildQueryObject(searchParams: SearchParams): QueryObject {
    const queryItems: QueryItem[] = [];
    let occur: 'must' | 'should' = 'should';

    // Handle yearsRange if provided
    if (searchParams.yearsRange) {
      occur = 'must';
      const startDate = new Date(`${searchParams.yearsRange[0]}-01-01`);
      const endDate = new Date(`${searchParams.yearsRange[1]}-12-31`);
      queryItems.push({
        occur,
        normal: {
          ctx: `date_published:[${startDate.toISOString()} TO ${endDate.toISOString()}]`,
        },
      });
    }

    const facetKeys = Object.keys(searchParams?.facets?.section.counts || {});
    // Handle facets if provided
    if (facetKeys && facetKeys.length > 0) {
      occur = 'must';
      queryItems.push({
        occur,
        normal: {
          ctx: `section: IN [${facetKeys.join(' ')}]`,
        },
      });
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
  search = async (searchParams: SearchParams): Promise<SearchcraftResponse> => {
    const quoteCount = (searchParams.query.match(/"/g) || []).length;
    if (quoteCount % 2 !== 0) {
      throw new Error(
        'The search term contains an uneven number of quote characters.',
      );
    }

    try {
      const formattedIndexes = this.config.index.join(',');
      const baseUrl = `${this.config.endpointURL}/index/${formattedIndexes}/search`;

      // Build the request body
      const requestBody: {
        query: QueryObject;
        limit: number;
        offset?: number;
        order_by?: string;
        sort?: 'asc' | 'desc';
        facets?: Facets;
      } = {
        query: this.buildQueryObject(searchParams),
        limit: searchParams.limit ?? 20, // Default to 20 if not provided
      };

      // Add offset if provided
      if (searchParams.offset !== undefined) {
        requestBody.offset = searchParams.offset;
      }

      // Add facets if they exist
      if (searchParams.facets) {
        requestBody.facets = searchParams.facets;
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
          Authorization: this.config.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };

      const response = await fetch(baseUrl, requestOptions);

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
