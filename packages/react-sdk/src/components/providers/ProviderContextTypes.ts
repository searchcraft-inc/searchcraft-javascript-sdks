import type { Dispatch, SetStateAction } from 'react';
import type { SearchError, SearchResult } from '@searchcraft/core';

/** The context provided by the Searchcraft React SDK */
export interface ProviderContextTypes {
  /**
   * Error occurred while making a search query.
   */
  error: Error | null;

  /**
   * The db name(s) created in Vektron to query.
   */
  index: string[];

  /**
   * Value exposed when a search is in progress.
   */
  isRequesting: boolean;

  /**
   * Can be either fuzzy or normal. The default is fuzzy.
   */
  mode: 'fuzzy' | 'normal';

  /**
   * The field to order the results by (e.g., 'date_published', 'title', etc.).
   * Optional parameter.
   */
  order_by?: string;

  /**
   * Input value given by the user to query the DB by.
   */
  query: string;

  /**
   * Setter function to update the search value being sent to the SDK.
   */
  setQuery: Dispatch<SetStateAction<string>>;

  /**
   * Setter function to update the search mode value being sent to the SDK.
   */
  setMode: Dispatch<SetStateAction<'fuzzy' | 'normal'>>;

  /**
   * Setter function to update the search results order value being sent to the SDK.
   */
  setOrderResultsBy: Dispatch<SetStateAction<string>>;

  /**
   * Setter function to update the search results sort value being sent to the SDK.
   */
  setSortResultsBy: Dispatch<SetStateAction<'asc' | 'desc' | undefined>>;

  /**
   * Function for searching that requires search mode and search type.
   */
  search: (
    query: string,
    mode: 'fuzzy' | 'normal',
    order_by?: string,
    sort?: string,
  ) => void;

  /**
   * Object that is returned from the Searchcraft API when a search request has resolved.
   */
  searchResults?: SearchResult | SearchError | null;

  /**
   * String value for how the data should be sorted.
   */
  sort?: string;
}

export type ThemeOptionType = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeOptionType;
  toggleTheme: () => void;
}
