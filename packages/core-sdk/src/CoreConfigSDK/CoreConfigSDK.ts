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
   * * Name of search database configured using Vektron
   */
  index: string;
  /**
   * * Callback invoked when a search request is resolved
   */
  setIsRequestingFalse: () => void;
  /**
   * * Callback invoked when a search request is initialized
   */
  setIsRequestingTrue: () => void;
}

/**
 * * Individual object returned within a SearchResult
 */
export interface SearchcraftDocument {
  doc: Type;
  document_id: string;
  score: number;
}

/**
 * * Top-level result returned when a search is successful
 */
export interface SearchResult {
  count: number;
  hits: SearchcraftDocument[];
  time_taken: number;
}
