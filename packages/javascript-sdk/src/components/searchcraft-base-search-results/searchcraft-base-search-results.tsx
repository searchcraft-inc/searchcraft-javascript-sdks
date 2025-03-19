import { Component, h, Prop, State, type JSX } from '@stencil/core';

import type {
  AdClientResponseItem,
  SearchClientResponseItem,
  SearchcraftConfig,
} from '@searchcraft/core';

import { type SearchcraftState, searchcraftStore } from '@store';

import { serializeStyles } from '@utils';
import type { SearchResultMappings } from '@searchcraft/core';

/**
 * This web component is responsible for displaying the results of a search query.
 * Once a query is submitted, the component formats and presents an ordered list of the results.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-base-search-results
 *   ad-interval="4"
 *   place-ad-at-start="false"
 *   result-image-placement="right"
 * />
 * ```
 *
 * ```js
 * // index.js
 * const baseSearchResults = document.querySelector('searchcraft-base-search-results');
 *
 * baseSearchResults.searchResultMappings = containerHref: {
 *   fieldNames: [
 *    {
 *      fieldName: 'canonical_link',
 *      dataType: 'text',
 *    },
 *  ],
 * };
 *
 * baseSearchResults.addEventListener('noResults', () => {
 *   console.log('No search results found');
 * });
 * ```
 */
@Component({
  tag: 'searchcraft-base-search-results',
  shadow: false,
})
export class SearchcraftBaseSearchResults {
  /**
   * A custom styles object.
   */
  @Prop() customStylesForResults?:
    | string
    | Record<string, Record<string, string>>;
  /**
   * Formats the content rendered for each result.
   */
  @Prop() searchResultMappings?: SearchResultMappings;
  /**
   * The placement of the image for each result.
   */
  @Prop() resultImagePlacement: 'left' | 'right' = 'right';
  /**
   * The label for the button rendered when containerHref is not present for each result.
   */
  @Prop() buttonLabel?: string;
  /**
   * Where to open the link for the button rendered when containerHref is not present for each result.
   */
  @Prop() buttonTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  /**
   * The relationship between the current document and the link for the button rendered when containerHref is not present for each result.
   */
  @Prop() buttonRel?: 'noreferrer' | 'noopener' | 'nofollow';
  /**
   * Where to open the link for the containing element for each result.
   */
  @Prop() containerTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  /**
   * The relationship between the current document and the link for the containing element for each result.
   */
  @Prop() containerRel?: 'noreferrer' | 'noopener' | 'nofollow';

  @State() searchTerm = '';
  @State() searchClientResponseItems?: SearchClientResponseItem[];
  @State() adClientResponseItems: AdClientResponseItem[] = [];
  @State() searchResultsPerPage;
  @State() searchResultsPage;
  @State() isSearchInProgress = true;
  @State() config?: SearchcraftConfig;

  private unsubscribe: () => void = () => {};

  get serializedStyles(): string {
    let serializedStyles = '';
    if (this.customStylesForResults) {
      serializedStyles =
        typeof this.customStylesForResults === 'string'
          ? this.customStylesForResults
          : serializeStyles(this.customStylesForResults);
    }
    return serializedStyles;
  }

  componentDidLoad() {
    this.unsubscribe = searchcraftStore.subscribe((state) =>
      this.handleStateChange(state),
    );
    const currentState = searchcraftStore.getState();
    this.handleStateChange(currentState);
    this.searchClientResponseItems = currentState.searchClientResponseItems;
    this.searchTerm = currentState.searchTerm;
    this.config = currentState.core?.config;
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  handleStateChange(state: SearchcraftState) {
    this.searchClientResponseItems = [...state.searchClientResponseItems];
    this.adClientResponseItems = [...state.adClientResponseItems];
    this.searchTerm = state.searchTerm;
    this.searchResultsPage = state.searchResultsPage;
    this.searchResultsPerPage = state.searchResultsPerPage;
    this.config = state.core?.config;
    this.isSearchInProgress = state.isSearchInProgress;
  }

  renderEmptyState() {
    return (
      <div class='searchcraft-search-results-empty-state-container'>
        <slot name='empty-search' />
      </div>
    );
  }

  renderNoResultsFoundState() {
    return (
      <div class='searchcraft-search-results-container'>
        <div class='searchcraft-search-results-error-message-container'>
          <searchcraft-error-message
            error-message={`No search results found for "${this.searchTerm}" query`}
          />
        </div>
      </div>
    );
  }

  renderWithADMAds() {
    return (
      <div class='searchcraft-search-results-container'>
        {this.adClientResponseItems?.map((item) => (
          <searchcraft-ad
            adSource='adMarketplace'
            adClientResponseItem={item}
            key={item.id}
          />
        ))}
        {this.searchClientResponseItems?.map((item, index) => (
          <searchcraft-base-search-result
            key={item.id}
            custom-styles={this.serializedStyles}
            image-placement={this.resultImagePlacement}
            container-rel={this.containerRel}
            container-target={this.containerTarget}
            button-label={this.buttonLabel || 'View more'}
            button-rel={this.buttonRel}
            button-target={this.buttonTarget}
            document-position={
              this.searchResultsPerPage * (this.searchResultsPage - 1) + index
            }
            searchResultMappings={this.searchResultMappings}
            item={item}
          />
        ))}
      </div>
    );
  }

  renderWithCustomAds() {
    const itemsToRender: JSX.Element[] = [];
    const interstitialInterval = this.config?.customAdInterstitialInterval || 0;
    const interstitialQuantity = this.config?.customAdInterstitialQuantity || 1;
    const adStartQuantity = this.config?.customAdStartQuantity || 0;
    const adEndQuantity = this.config?.customAdEndQuantity || 0;
    const searchItems = this.searchClientResponseItems || [];

    // Renders ads at beginning
    for (let n = 0; n < adStartQuantity; n++) {
      itemsToRender.push(<searchcraft-ad adSource='Custom' key={`${n}-ad`} />);
    }

    // Renders search results + interstitial ads
    searchItems.forEach((item, index) => {
      if (
        interstitialInterval &&
        index % interstitialInterval === 0 &&
        index + interstitialInterval < searchItems.length &&
        index >= interstitialInterval
      ) {
        for (let n = 0; n < interstitialQuantity; n++) {
          itemsToRender.push(
            <searchcraft-ad adSource='Custom' key={`${item.id}-ad-${n}`} />,
          );
        }
      }
      itemsToRender.push(
        <searchcraft-base-search-result
          key={item.id}
          custom-styles={this.serializedStyles}
          image-placement={this.resultImagePlacement}
          container-rel={this.containerRel}
          container-target={this.containerTarget}
          button-label={this.buttonLabel || 'View more'}
          button-rel={this.buttonRel}
          button-target={this.buttonTarget}
          document-position={
            this.searchResultsPerPage * (this.searchResultsPage - 1) + index
          }
          searchResultMappings={this.searchResultMappings}
          item={item}
        />,
      );
    });

    // Renders ads at end
    for (let n = 0; n < adEndQuantity; n++) {
      itemsToRender.push(<searchcraft-ad adSource='Custom' key={`${n}-ad`} />);
    }

    return (
      <div class='searchcraft-search-results-container'>{itemsToRender}</div>
    );
  }

  renderWithNativoAds() {
    const itemsToRender: JSX.Element[] = [];
    const interstitialStartIndex =
      this.config?.nativoAdInterstialStartIndex || 0;
    const interstitialInterval = this.config?.nativoAdInterstitialInterval || 0;
    const interstitialQuantity = this.config?.nativoAdInterstitialQuantity || 1;
    const adStartQuantity = this.config?.nativoAdStartQuantity || 0;
    const adEndQuantity = this.config?.nativoAdEndQuantity || 0;
    const searchItems = this.searchClientResponseItems || [];

    // Renders ads at beginning
    for (let n = 0; n < adStartQuantity; n++) {
      itemsToRender.push(<searchcraft-ad adSource='Nativo' key={`${n}-ad`} />);
    }

    // Renders search results + interstitial ads
    searchItems.forEach((item, index) => {
      if (
        interstitialInterval &&
        (index + interstitialStartIndex) % interstitialInterval === 0 &&
        index + interstitialInterval < searchItems.length &&
        index >= interstitialInterval
      ) {
        for (let n = 0; n < interstitialQuantity; n++) {
          itemsToRender.push(
            <searchcraft-ad adSource='Nativo' key={`${item.id}-ad-${n}`} />,
          );
        }
      }
      itemsToRender.push(
        <searchcraft-base-search-result
          key={item.id}
          custom-styles={this.serializedStyles}
          image-placement={this.resultImagePlacement}
          container-rel={this.containerRel}
          container-target={this.containerTarget}
          button-label={this.buttonLabel || 'View more'}
          button-rel={this.buttonRel}
          button-target={this.buttonTarget}
          document-position={
            this.searchResultsPerPage * (this.searchResultsPage - 1) + index
          }
          searchResultMappings={this.searchResultMappings}
          item={item}
        />,
      );
    });

    // Renders ads at end
    for (let n = 0; n < adEndQuantity; n++) {
      itemsToRender.push(<searchcraft-ad adSource='Nativo' key={`${n}-ad`} />);
    }

    return (
      <div class='searchcraft-search-results-container'>{itemsToRender}</div>
    );
  }

  renderWithNoAds() {
    return (
      <div class='searchcraft-search-results-container'>
        {this.searchClientResponseItems?.map((item, index) => (
          <searchcraft-base-search-result
            key={item.id}
            custom-styles={this.serializedStyles}
            image-placement={this.resultImagePlacement}
            container-rel={this.containerRel}
            container-target={this.containerTarget}
            button-label={this.buttonLabel || 'View more'}
            button-rel={this.buttonRel}
            button-target={this.buttonTarget}
            document-position={
              this.searchResultsPerPage * (this.searchResultsPage - 1) + index
            }
            searchResultMappings={this.searchResultMappings}
            item={item}
          />
        ))}
      </div>
    );
  }

  render() {
    if (this.searchTerm.trim() === '') {
      return this.renderEmptyState();
    }

    if (
      this.searchTerm.length > 0 &&
      (this.searchClientResponseItems || []).length === 0 &&
      !this.isSearchInProgress
    ) {
      return this.renderNoResultsFoundState();
    }

    switch (this.config?.adSource || 'None') {
      case 'adMarketplace':
        return this.renderWithADMAds();
      case 'Custom':
        return this.renderWithCustomAds();
      case 'Nativo':
        return this.renderWithNativoAds();
      default:
        return this.renderWithNoAds();
    }
  }
}
