import type { Type } from 'typescript';

/**
 * * All fields must be provided to the framework SDKs to use Searchcraft
 */
export interface CoreConfigSDK {
  /**
   * * Customer identifier for the consuming application
   */
  apiKey: string;
  /**
   * * Indicates what type of search is being made in the request body. Can be either 'search' or 'facet'
   */
  endpointPath: string;
  /**
   * * Host IP Address and port number configured and created using Vektron
   */
  endpointURL: string;
  /**
   * * Name of search database configured using Vektron
   */
  index: string;
}

/**
 * * Individual object returned within a SearchResult
 */
export interface SearchDocument {
  doc: Type;
  document_id: string;
  score: number;
}

/**
 * * Top-level result returned when a search is successful
 */
export interface SearchResult {
  count: number;
  hits: SearchDocument[];
  time_taken: number;
}
