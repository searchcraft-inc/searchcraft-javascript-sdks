import type { FacetPrime } from './Facets.types';

/**
 * The structure of a response returned from a Searchcraft operation.
 */
export interface SearchcraftResponse {
  status: number; // HTTP status code of the response
  data: SearchcraftResponseData | SearchcraftResponseError; // The main search result data
}

/**
 * Error returned when a search is unsuccessful.
 */
export type SearchcraftResponseError = {
  status: number; // HTTP status code of the response
  message?: string; // Error message (optional).
  code?: number; // Error code (optional).
  hits?: []; // Always an empty array when an error occurs (optional).
  facets?: null;
  count?: number;
  time_taken?: number;
};

/**
 * Top-level result returned when a search is successful.
 */
export interface SearchcraftResponseData {
  count?: number; // Total number of results found (optional)
  facets?: FacetPrime; // The prime array of Facet root objects.
  hits?: SearchIndexHit[]; // Array of individual search entries (optional)
  time_taken?: number; // Time taken to execute the search in milliseconds (optional)
}

/**
 * Represents an entry in the search index returned as part of a search result.
 */
export interface SearchIndexHit {
  doc?: SearchDocument; // The actual document data (optional)
  document_id?: string; // Unique identifier for the document in the index (optional)
  score?: number; // Relevance score of the document in the search (optional)
  source_index?: string; // The source index, used for federated searches
}

/**
 * Data document returned within a SearchResult.
 */
export interface SearchDocument extends Record<string, string | number> {
  id: number;
  [key: string]: string | number;
}
