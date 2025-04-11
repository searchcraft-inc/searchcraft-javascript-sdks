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
   * A query that will appears when the component initializes or the search term is ''..
   */
  @Prop() initialQuery?: string;

  /**
   * A callback function responsible for rendering a result. Passed to `searchcraft-search-result`.
   */
  @Prop() template?: SearchResultTemplate<SearchResultTemplateData>;

  @State() adClientResponseItems: AdClientResponseItem[] = [];
  @State() config?: SearchcraftConfig;
  @State() initialSearchClientResponseItems?: SearchClientResponseItem[];
  @State() isSearchInProgress = true;
  @State() searchClientResponseItems?: SearchClientResponseItem[];
  @State() searchResultsPage;
  @State() searchResultsPerPage;
  @State() searchTerm = '';

  private unsubscribe: () => void = () => {};

  componentDidLoad() {
    const state = searchcraftStore.getState();
    this.handleStateChange(state);
    this.searchClientResponseItems = state.searchClientResponseItems;
    this.searchTerm = state.searchTerm;
    this.config = state.core?.config;

    state.afterInit = (state) => {
      if (this.initialQuery) {
        state.setInitialQuery(this.initialQuery);
      }
    };

    this.unsubscribe = searchcraftStore.subscribe((state) =>
      this.handleStateChange(state),
    );
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  handleStateChange(state: SearchcraftState) {
    this.adClientResponseItems = [...state.adClientResponseItems];
    this.config = state.core?.config;
    this.initialSearchClientResponseItems = [
      ...state.initialSearchClientResponseItems,
    ];
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
    const items = this.searchClientResponseItems?.length
      ? this.searchClientResponseItems
      : this.initialSearchClientResponseItems?.length
        ? this.initialSearchClientResponseItems
        : [];

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
        {items.map((item, index) => (
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
    const items = this.searchClientResponseItems?.length
      ? this.searchClientResponseItems
      : this.initialSearchClientResponseItems?.length
        ? this.initialSearchClientResponseItems
        : [];

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
    const items = this.searchClientResponseItems?.length
      ? this.searchClientResponseItems
      : this.initialSearchClientResponseItems?.length
        ? this.initialSearchClientResponseItems
        : [];

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
    const items = this.searchClientResponseItems?.length
      ? this.searchClientResponseItems
      : this.initialSearchClientResponseItems?.length
        ? this.initialSearchClientResponseItems
        : [];

    return (
      <div class='searchcraft-search-results'>
        {items.map((item, index) => (
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
    const searchClientResponseItems = this.searchClientResponseItems || [];
    const initialSearchClientResponseItems =
      this.initialSearchClientResponseItems || [];

    if (
      this.searchTerm === '' &&
      initialSearchClientResponseItems.length === 0 &&
      !this.isSearchInProgress
    ) {
      return this.renderEmptyState();
    }

    if (
      this.searchTerm.length > 0 &&
      searchClientResponseItems.length === 0 &&
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
