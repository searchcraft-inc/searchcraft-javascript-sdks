/**
 * The SearchcraftConfig object is used to initialize Searchcraft in your application.
 */
export interface SearchcraftConfig {
  /**
   * Host IP Address and port number configured and created using Vektron
   */
  endpointURL: string;
  /**
   * Name or names of search indices configured using Vektron. Given as an array of strings
   */
  index: string[];
  /**
   * A unique user identifier for the end user.
   */
  userId?: string;
  /**
   * The Index read key provided by Vektron.
   */
  readKey: string;
  /**
   * The amount of delay, in milliseconds, to debounce search requests. Defaults to `0`.
   */
  searchDebounceDelay?: number;
  /**
   * The maximum number of results to return per page.
   */
  searchResultsPerPage?: number;
  /**
   * Name of the ad provider to use.
   */
  adProvider?: 'adMarketplace' | 'Nativo' | 'Custom' | 'None';
  /**
   * The maximum number of product ads to show for a single search term.
   */
  admProductAdQuantity?: number;
  /**
   * The maximum number of text ads to show for a single search term.
   */
  admTextAdQuantity?: number;
  /**
   * The adm sub value.
   */
  admSub: string;
}

/**
 * Used internally by consuming packages as part of the core sdk constructor.
 */
export interface SearchcraftSDKInfo {
  sdkName: string;
  sdkVersion: string;
}
