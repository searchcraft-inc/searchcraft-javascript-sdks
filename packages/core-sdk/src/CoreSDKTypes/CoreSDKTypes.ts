import type { CoreSDK } from '../CoreSDK';

/**
 * * All fields must be provided to the SDKs to use Searchcraft
 */
export interface CoreConfigSDK {
  /**
   * * Customer identifier for the consuming application
   */
  apiKey: string;
  /**
   * * Host IP Address and port number configured and created using Vektron
   */
  endpointURL: string;
  /**
   * * Name of search database(s) configured using Vektron. Given as an array of strings
   */
  index: string[];
}
/**
 * * Represents an instance of Searchcraft containing the core SDK.
 */
export interface SearchcraftInstance {
  searchcraft: CoreSDK; // The core SDK instance used for search operations
}

/**
 * * The structure of a response returned from a Searchcraft operation.
 */
export interface SearchcraftResponse {
  status: number; // HTTP status code of the response
  data: SearchResult | SearchError; // The main search result data
}

/**
 * * Error returned when a search is unsuccessful.
 */
export type SearchError = {
  status: number; // HTTP status code of the response
  message?: string; // Error message (optional).
  code?: number; // Error code (optional).
  hits?: []; // Always an empty array when an error occurs (optional).
  facets?: null;
};

/**
 * * Top-level result returned when a search is successful.
 */
export interface SearchResult {
  count?: number; // Total number of results found (optional)
  facets?: Facets; // Facet data, useful for filtering results (optional)
  hits?: SearchIndexEntry[]; // Array of individual search entries (optional)
  time_taken?: number; // Time taken to execute the search in milliseconds (optional)
}

/**
 * * Represents the structure of facets, which group search results into categories.
 */
export interface Facets {
  [facetName: string]: {
    counts: Record<string, number>; // Dynamic keys with counts of matching documents
  };
}

/**
 * * Represents an entry in the search index returned as part of a search result.
 */
export interface SearchIndexEntry {
  doc?: SearchDocument; // The actual document data (optional)
  document_id?: string; // Unique identifier for the document in the index (optional)
  score?: number; // Relevance score of the document in the search (optional)
}

/**
 * * Generic data document returned within a SearchResult.
 * * Allows for extensibility with custom fields using a generic type parameter.
 * @template T - An optional type that defines additional properties on the document.
 */
export interface SearchDocument<
  T extends Record<string, string | number> = Record<string, string | number>,
> {
  id: number; // Unique identifier for the document
  [key: string]: string | number | T[keyof T]; // Supports dynamic properties with string or number values
}

/**
 * * Parameters required to make a successful Search request.
 */
export type SearchParams = {
  /**
   * * The maximum number of results to return per page.
   * Optional parameter. Defaults to 20 if not provided.
   */
  limit?: number;

  /**
   * * The search mode, which can be either 'fuzzy' or 'normal'.
   */
  mode: 'fuzzy' | 'normal';

  /**
   * * The starting point for the results, used for pagination.
   * Optional parameter.
   */
  offset?: number;

  /**
   * * The field to order the results by (e.g., 'date_published', 'title', etc.).
   * Optional parameter.
   */
  order_by?: string;

  /**
   * * The search query provided by the user.
   */
  query: string;

  /**
   * * The sort order, which can be either 'asc' or 'desc'.
   * Optional parameter.
   */
  sort?: 'asc' | 'desc';
};

type SimpleQuery = {
  [mode: string]: { ctx: string };
};

type ComplexQuery = Array<{
  occur: 'must' | 'should';
  queryType: { [key: string]: { ctx: string } }; // Correctly structured query type
}>;

export type QueryObject = SimpleQuery | ComplexQuery;
