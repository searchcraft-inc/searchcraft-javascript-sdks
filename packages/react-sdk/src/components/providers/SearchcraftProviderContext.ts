import type { Dispatch, SetStateAction } from 'react';
import type { SearchcraftDocument } from '@searchcraft-sdk/core';

/** The context provided by the Searchcraft React SDK */
export interface SearchcraftProviderContext {
  /**
   * Error occurred while making a search query.
   */
  error: Error | null;

  /**
   * The db name created in Vektron to query.
   */
  index: string;

  /**
   * Value exposed when a search is in progress.
   */
  isRequesting: boolean;

  /**
   * Can be either fuzzy or normal. The default is fuzzy.
   */
  mode: 'fuzzy' | 'normal';

  /**
   * Input value given by the user to query the DB by.
   */
  query: string;

  /**
   * Setter function to update the value being sent to the SDK.
   */
  setQuery: Dispatch<SetStateAction<string>>;

  /**
   * Function for searching that requires search mode and search type.
   */
  search: <T>(query: string, mode: 'fuzzy' | 'normal') => Promise<T[] | null>;

  searchResult?: {
    count: number;
    hits: SearchcraftDocument[];
    time_taken: number;
  } | null;
}
