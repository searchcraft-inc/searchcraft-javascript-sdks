import type { ADMAdTemplate, CustomAdTemplate } from '../sdk-types';

/**
 * The SearchcraftConfig object is used to initialize Searchcraft in your application.
 */
export interface SearchcraftConfig {
  /**
   * Host IP Address and port number configured and created using Vektron.
   */
  endpointURL: string;

  /**
   * Name or names of search indices configured using Vektron. Given as an array of strings.
   */
  index: string[];

  /**
   * Specifies an initial search query to search with. This should be a stringified search query object.
   */
  initialQuery?: string;

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
   * Instructions provided to the LLM when creating search result summaries.
   */
  summaryInstructionsPrompt?: string;

  /**
   * The amount of delay, in milliseconds, to debounce summary requests. Defaults to `1000`
   */
  summaryDebounceDelay?: number;

  /**
   * Name of the ad source to use.
   */
  adSource?: 'adMarketplace' | 'Nativo' | 'Custom' | 'None';

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
  admSub?: string;

  /**
   * The amount of debounce delay to add before calling the ad_container_rendered event
   */
  adContainerRenderedDebounceDelay?: number;

  /**
   * A callback function responsible for rendering the ADM ad containers.
   */
  admAdTemplate?: ADMAdTemplate;

  /**
   * The number of custom ads to render at the start of the search results page.
   */
  customAdStartQuantity?: number;

  /**
   * The number of custom ads to render at the end of the search results page.
   */
  customAdEndQuantity?: number;

  /**
   * Renders a custom ad in between search results, at the specified interval.
   */
  customAdInterstitialInterval?: number;

  /**
   * Specifies the number of ads to be rendered in each interstitial in between search results.
   */
  customAdInterstitialQuantity?: number;

  /**
   * A callback function responsible for rendering the custom ad containers.
   */
  customAdTemplate?: CustomAdTemplate;

  /**
   * The placement id to use for Nativo ads.
   */
  nativoPlacementId?: number;

  /**
   * The class name for nativo ad containers.
   */
  nativoAdClassName?: string;

  /**
   * The number of custom ads to render at the start of the search results page.
   */
  nativoAdStartQuantity?: number;

  /**
   * The number of custom ads to render at the end of the search results page.
   */
  nativoAdEndQuantity?: number;

  /**
   * Renders a custom ad in between search results, at the specified interval.
   */
  nativoAdInterstitialInterval?: number;

  /**
   * Specify how many normal search results to render before rendering the first interstitial ad grouping.
   */
  nativoAdInterstialStartIndex?: number;

  /**
   * Specifies the number of ads to be rendered in each interstitial in between search results.
   */
  nativoAdInterstitialQuantity?: number;
}

export type SearchcraftAdSource =
  | 'adMarketplace'
  | 'Nativo'
  | 'Custom'
  | 'None';

/**
 * Used internally by consuming packages as part of the core sdk constructor.
 */
export interface SearchcraftSDKInfo {
  sdkName: string;
  sdkVersion: string;
}
