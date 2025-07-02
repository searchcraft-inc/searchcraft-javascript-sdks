import { Component, h, Prop, State, type JSX } from '@stencil/core';

import type {
  AdClientResponseItem,
  SearchClientResponseItem,
  SearchcraftConfig,
  SearchResultTemplate,
  SearchResultTemplateData,
} from '@types';

import type { SearchcraftState } from '@store';
import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';

/**
 * This web component is responsible for displaying the results of a search query. Once a query is submitted, the component formats and presents an ordered list of the results.
 *
 *
 * @react-import
 * ```jsx
 * import { SearchcraftSearchResults } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftSearchResults } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <!-- index.html -->
 * <searchcraft-search-results
 *   ad-interval="4"
 *   place-ad-at-start="true"
 * />
 * ```
 *
 * ```js
 * // index.js
 * const searchResults = document.querySelector('searchcraft-search-results');
 *
 * searchResults.template = (item, index, { html }) => html`
 *  <h2>${item.title}</h2>
 * `;
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftSearchResults
 *   adInterval={4}
 *   placeAdAtState={true}
 *   template={(item, index, { html }) => html`
 *     <h2>${item.title}</h2>
 *   `}
 * />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftSearchResults
 *   adInterval={4}
 *   placeAdAtState={true}
 *   :template={(item, index, { html }) => html`
 *     <h2>${item.title}</h2>
 *   `}
 * />
 * ```
 */
@Component({
  tag: 'searchcraft-search-results',
})
export class SearchcraftSearchResults {
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  /**
   * A query that will appears when the component initializes or the search term is ''..
   */
  @Prop() initialQuery?: string;

  /**
   * A callback function responsible for rendering a result. Passed to `searchcraft-search-result`.
   */
  @Prop() template?: SearchResultTemplate<SearchResultTemplateData>;

  @State() adClientResponseItems: AdClientResponseItem[] = [];
  @State() config?: SearchcraftConfig;
  @State() isSearchInProgress = true;
  @State() searchClientResponseItems?: SearchClientResponseItem[];
  @State() searchResultsPage;
  @State() searchResultsPerPage;
  @State() searchTerm = '';

  private unsubscribe?: () => void;
  private cleanupCore?: () => void;

  onCoreAvailable(core: SearchcraftCore) {
    const state = core.store.getState();
    this.handleStateChange(state);
    this.searchClientResponseItems = state.searchClientResponseItems;
    this.searchTerm = state.searchTerm;
    this.config = state.core?.config;

    this.unsubscribe = core.store.subscribe((state) =>
      this.handleStateChange(state),
    );
  }

  connectedCallback() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  disconnectedCallback() {
    this.unsubscribe?.();
    this.cleanupCore?.();
  }

  handleStateChange(state: SearchcraftState) {
    this.adClientResponseItems = [...state.adClientResponseItems];
    this.config = state.core?.config;
    this.isSearchInProgress = state.isSearchInProgress;
    this.searchClientResponseItems = [...state.searchClientResponseItems];
    this.searchResultsPage = state.searchResultsPage;
    this.searchResultsPerPage = state.searchResultsPerPage;
    this.searchTerm = state.searchTerm;
  }

  renderEmptyState() {
    return (
      <div class='searchcraft-search-results-empty-state'>
        <slot name='empty-search' />
      </div>
    );
  }

  renderNoResultsFoundState() {
    return (
      <div class='searchcraft-search-results'>
        <div class='searchcraft-search-results-error-message'>
          <searchcraft-error-message>
            No search results found for "{this.searchTerm}" query.
          </searchcraft-error-message>
        </div>
      </div>
    );
  }

  renderWithADMAds() {
    const items = this.searchClientResponseItems || [];

    return (
      <div class='searchcraft-search-results'>
        {this.adClientResponseItems?.map((item) => (
          <searchcraft-ad
            searchcraft-id={this.searchcraftId}
            adSource='adMarketplace'
            adClientResponseItem={item}
            key={item.id}
            renderPosition='top'
          />
        ))}
        {items.map((item, index) => (
          <searchcraft-search-result
            searchcraft-id={this.searchcraftId}
            key={item.id}
            document-position={
              this.searchResultsPerPage * (this.searchResultsPage - 1) + index
            }
            index={index}
            item={item}
            template={this.template}
          />
        ))}
      </div>
    );
  }

  renderWithCustomAds() {
    const itemsToRender: JSX.Element[] = [];
    const interstitialInterval =
      this.config?.customAdConfig?.adInterstitialInterval || 0;
    const interstitialQuantity =
      this.config?.customAdConfig?.adInterstitialQuantity || 1;
    const adStartQuantity = this.config?.customAdConfig?.adStartQuantity || 0;
    const adEndQuantity = this.config?.customAdConfig?.adEndQuantity || 0;
    const items = this.searchClientResponseItems || [];
    // Renders ads at beginning
    for (let n = 0; n < adStartQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          searchcraft-id={this.searchcraftId}
          adSource='Custom'
          key={`${n}-ad`}
          renderPosition='top'
        />,
      );
    }

    // Renders search results + interstitial ads
    items.forEach((item, index) => {
      if (
        interstitialInterval &&
        index % interstitialInterval === 0 &&
        index + interstitialInterval < items.length &&
        index >= interstitialInterval
      ) {
        for (let n = 0; n < interstitialQuantity; n++) {
          itemsToRender.push(
            <searchcraft-ad
              searchcraft-id={this.searchcraftId}
              adSource='Custom'
              key={`${item.id}-ad-${n}`}
              renderPosition='interstitial'
            />,
          );
        }
      }
      itemsToRender.push(
        <searchcraft-search-result
          searchcraft-id={this.searchcraftId}
          key={item.id}
          document-position={
            this.searchResultsPerPage * (this.searchResultsPage - 1) + index
          }
          index={index}
          item={item}
          template={this.template}
        />,
      );
    });

    // Renders ads at end
    for (let n = 0; n < adEndQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          searchcraft-id={this.searchcraftId}
          adSource='Custom'
          key={`${n}-ad`}
          renderPosition='bottom'
        />,
      );
    }

    return <div class='searchcraft-search-results'>{itemsToRender}</div>;
  }

  renderWithNativoAds() {
    const itemsToRender: JSX.Element[] = [];
    const interstitialStartIndex =
      this.config?.nativoConfig?.adInterstialStartIndex || 0;
    const interstitialInterval =
      this.config?.nativoConfig?.adInterstitialInterval || 0;
    const interstitialQuantity =
      this.config?.nativoConfig?.adInterstitialQuantity || 1;
    const adStartQuantity = this.config?.nativoConfig?.adStartQuantity || 0;
    const adEndQuantity = this.config?.nativoConfig?.adEndQuantity || 0;
    const items = this.searchClientResponseItems || [];
    // Renders ads at beginning
    for (let n = 0; n < adStartQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          searchcraft-id={this.searchcraftId}
          adSource='Nativo'
          key={`${n}-ad`}
          renderPosition='top'
        />,
      );
    }

    // Renders search results + interstitial ads
    items.forEach((item, index) => {
      if (
        interstitialInterval &&
        (index + interstitialStartIndex) % interstitialInterval === 0 &&
        index + interstitialInterval < items.length &&
        index >= interstitialInterval
      ) {
        for (let n = 0; n < interstitialQuantity; n++) {
          itemsToRender.push(
            <searchcraft-ad
              searchcraft-id={this.searchcraftId}
              adSource='Nativo'
              key={`${item.id}-ad-${n}`}
              renderPosition='interstitial'
            />,
          );
        }
      }
      itemsToRender.push(
        <searchcraft-search-result
          searchcraft-id={this.searchcraftId}
          key={item.id}
          document-position={
            this.searchResultsPerPage * (this.searchResultsPage - 1) + index
          }
          index={index}
          item={item}
          template={this.template}
        />,
      );
    });

    // Renders ads at end
    for (let n = 0; n < adEndQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          searchcraft-id={this.searchcraftId}
          adSource='Nativo'
          key={`${n}-ad`}
          renderPosition='bottom'
        />,
      );
    }

    return <div class='searchcraft-search-results'>{itemsToRender}</div>;
  }

  renderWithNoAds() {
    const items = this.searchClientResponseItems || [];

    return (
      <div class='searchcraft-search-results'>
        {items.map((item, index) => (
          <searchcraft-search-result
            searchcraft-id={this.searchcraftId}
            key={item.id}
            document-position={
              this.searchResultsPerPage * (this.searchResultsPage - 1) + index
            }
            index={index}
            item={item}
            template={this.template}
          />
        ))}
      </div>
    );
  }

  render() {
    const searchClientResponseItems = this.searchClientResponseItems || [];

    if (searchClientResponseItems.length === 0 && !this.isSearchInProgress) {
      return this.renderEmptyState();
    }

    if (
      this.searchTerm.length > 0 &&
      searchClientResponseItems.length === 0 &&
      !this.isSearchInProgress
    ) {
      return this.renderNoResultsFoundState();
    }

    if (this.config?.customAdConfig) {
      return this.renderWithCustomAds();
    }
    if (this.config?.admAdConfig) {
      return this.renderWithNativoAds();
    }
    if (this.config?.nativoConfig) {
      return this.renderWithNativoAds();
    }
    return this.renderWithNoAds();
  }
}
