import type {
  ADMAdConfig,
  CustomAdConfig,
  NativoAdConfig,
} from './SearchcraftAdConfig.types';

/**
 * The SearchcraftConfig object is used to initialize Searchcraft in your application.
 */
export interface SearchcraftConfig {
  /**
   * The Searchcraft access key to use in authorization. Sent as an authorization header with Searchcraft network requests.
   */
  readKey: string;

  /**
   * The endpoint url of your Searchcraft cluster.
   */
  endpointURL: string;

  /**
   * Name or names of search indices configured using Vektron. Given as an array of strings.
   */
  index: string;

  /**
   * Specifies an initial search query to search with. This should be a stringified search query object.
   */
  initialQuery?: string;

  /**
   * The maximum number of documents to return per page of results.
   */
  searchResultsPerPage?: number;

  /**
   * The duration, in millis, to debounce search request queries by.
   */
  searchDebounceDelay?: number;

  /**
   * A unique user identifier for end users of your product. This would typically correspond to a user id
   * in your consuming application's database. Used for data analysis and visualizations on Vektron.
   */
  userId?: string;

  /**
   * Configuration object for specifying behavior of how custom ad containers render alongside search results.
   */
  customAdConfig?: CustomAdConfig;

  /**
   * Configuration object for specifying behavior of nativo ads.
   */
  nativoConfig?: NativoAdConfig;

  /**
   * Configuration object for specifying behavior of adMarketplace ads.
   */
  admAdConfig?: ADMAdConfig;
}

/**
 * Used internally by consuming packages as part of the core sdk constructor.
 */
export interface SearchcraftSDKInfo {
  sdkName: string;
  sdkVersion: string;
}
