import type {
  ADMAdConfig,
  CustomAdConfig,
  NativoAdConfig,
} from './SearchcraftAdConfig.types';

/**
 * The SearchcraftConfig object is used to initialize the Searchcraft JavaScript SDK in your front-end application. See the [getting started page](https://docs.searchcraft.io/sdks/javascript/getting-started/) for a guide on how and where to use this configuration object.
 */
export interface SearchcraftConfig {
  /**
   * The read key value to use when sending Searchcraft search requests. This value needs read key-specific permissions. If you are using Searchcraft Cloud, this value can be configured in Vektron.
   */
  readKey: string;

  /**
   * The endpoint url of your Searchcraft cluster where your specified search index exists. If you are using Searchcraft Cloud, this value can be found within the Vektron dashboard in the Code Snippets section when configuring a search index.
   */
  endpointURL: string;

  /**
   * Name of the Searchcraft search index to search for results within. If you are using Searchcraft Cloud, this value can be found within the Vektron dashboard in the Code Snippets section when configuring a search index.
   */
  indexName: string;

  /**
   * The initial search query to call when Searchcraft is first initialized in your front-end application. This parameter can be used when you want to populate a page with an initial set of search results based on a query.
   *
   * This value is a stringified Search query object. For a more in-depth reference on search queries, see the [search endpoint documentation](https://docs.searchcraft.io/api/search/).
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
  measureUserIdentifier?: string;

  /**
   * This object allows you to configure the quantity, number, template, and positioning of custom ad containers within your search results.
   *
   * To see more information on how to configure custom ads, see [the custom ads guide](https://docs.searchcraft.io/sdks/javascript/custom-ads/)
   */
  customAdConfig?: CustomAdConfig;

  nativoConfig?: NativoAdConfig;

  admAdConfig?: ADMAdConfig;
}

/**
 * Used internally by consuming packages as part of the core sdk constructor.
 */
export interface SearchcraftSDKInfo {
  sdkName: string;
  sdkVersion: string;
}
