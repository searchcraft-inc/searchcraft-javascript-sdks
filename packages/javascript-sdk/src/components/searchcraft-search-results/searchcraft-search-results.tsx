import { Component, h, Prop, State, type JSX } from '@stencil/core';
import { nanoid } from 'nanoid';

import type {
  AdClientResponseItem,
  SearchClientResponseItem,
  SearchcraftConfig,
  SearchResultTemplate,
  SearchResultTemplateData,
} from '@searchcraft/core';

import { type SearchcraftState, searchcraftStore } from '@store';

/**
 * This web component is responsible for displaying the results of a search query. Once a query is submitted, the component formats and presents an ordered list of the results.
 *
 *
 * @import
 * ```jsx
 * // react
 * import { SearchcraftSearchResults } from "@searchcraft/react-sdk";
 *
 * // vue
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
 *  @vue-example
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
   * A callback function responsible for rendering a result. Passed to `searchcraft-search-result`.
   */
  @Prop() template?: SearchResultTemplate<SearchResultTemplateData>;

  @State() searchTerm = '';
  @State() searchClientResponseItems?: SearchClientResponseItem[];
  @State() adClientResponseItems: AdClientResponseItem[] = [];
  @State() searchResultsPerPage;
  @State() searchResultsPage;
  @State() isSearchInProgress = true;
  @State() config?: SearchcraftConfig;

  private unsubscribe: () => void = () => {};

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
    return (
      <div class='searchcraft-search-results'>
        {this.adClientResponseItems?.map((item) => (
          <searchcraft-ad
            adSource='adMarketplace'
            adClientResponseItem={item}
            adContainerId={nanoid()}
            key={item.id}
          />
        ))}
        {this.searchClientResponseItems?.map((item, index) => (
          <searchcraft-search-result
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
    const interstitialInterval = this.config?.customAdInterstitialInterval || 0;
    const interstitialQuantity = this.config?.customAdInterstitialQuantity || 1;
    const adStartQuantity = this.config?.customAdStartQuantity || 0;
    const adEndQuantity = this.config?.customAdEndQuantity || 0;
    const searchItems = this.searchClientResponseItems || [];

    // Renders ads at beginning
    for (let n = 0; n < adStartQuantity; n++) {
      itemsToRender.push(
        <searchcraft-ad
          adSource='Custom'
          adContainerId={nanoid()}
          key={`${n}-ad`}
        />,
      );
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
            <searchcraft-ad
              adSource='Custom'
              adContainerId={nanoid()}
              key={`${item.id}-ad-${n}`}
            />,
          );
        }
      }
      itemsToRender.push(
        <searchcraft-search-result
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
          adSource='Custom'
          adContainerId={nanoid()}
          key={`${n}-ad`}
        />,
      );
    }

    return <div class='searchcraft-search-results'>{itemsToRender}</div>;
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
      itemsToRender.push(
        <searchcraft-ad
          adSource='Nativo'
          adContainerId={nanoid()}
          key={`${n}-ad`}
        />,
      );
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
            <searchcraft-ad
              adSource='Nativo'
              adContainerId={nanoid()}
              key={`${item.id}-ad-${n}`}
            />,
          );
        }
      }
      itemsToRender.push(
        <searchcraft-search-result
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
          adSource='Nativo'
          adContainerId={nanoid()}
          key={`${n}-ad`}
        />,
      );
    }

    return <div class='searchcraft-search-results'>{itemsToRender}</div>;
  }

  renderWithNoAds() {
    return (
      <div class='searchcraft-search-results'>
        {this.searchClientResponseItems?.map((item, index) => (
          <searchcraft-search-result
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
