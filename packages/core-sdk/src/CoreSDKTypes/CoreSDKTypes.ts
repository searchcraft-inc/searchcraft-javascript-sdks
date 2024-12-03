import type { CoreSDK } from '../CoreSDK';

/**
 * * All fields must be provided to the framework SDKs to use Searchcraft
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

export interface SearchcraftInstance {
  searchcraft: CoreSDK;
}

/**
 * * Individual object returned within a SearchResult
 */
export interface SearchDocument {
  doc?: SearchDoc;
  document_id?: string;
  score?: number;
}

/**
 * * Top-level result returned when a search is successful
 */
export interface SearchResult {
  data: {
    count?: number;
    hits?: SearchDocument[];
    time_taken?: number;
  };
}

/**
 * * Individual data document returned within a SearchResult
 */
export interface SearchDoc {
  id: number;
  poster?: string;
  overview?: string;
  title?: string;
  release_date?: string;
}

/**
 * * Parameters required for the Search request
 */
export type SearchParams = {
  /**
   * The search mode, which can be either 'fuzzy' or 'normal'.
   */
  mode: 'fuzzy' | 'normal';

  /**
   * The field to order the results by (e.g., 'date_published', 'title', etc.).
   * Optional parameter.
   */
  order_by?: string;

  /**
   * The search query provided by the user.
   */
  query: string;

  /**
   * The sort order, which can be either 'asc' or 'desc'.
   * Optional parameter.
   */
  sort?: 'asc' | 'desc';
};

/**
 * * Error returned when a search is unsuccessful
 */
export type SearchError = {
  data: {
    message?: string;
    code?: number;
    hits?: [];
  };
};
