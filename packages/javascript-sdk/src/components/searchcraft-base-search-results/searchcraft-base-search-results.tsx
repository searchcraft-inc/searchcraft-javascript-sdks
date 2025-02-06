import {
  Component,
  h,
  Event,
  Prop,
  State,
  type EventEmitter,
} from '@stencil/core';

import type {
  AdClientResponseItem,
  SearchClientResponseItem,
} from '@searchcraft/core';

import { type SearchcraftState, useSearchcraftStore } from '@provider/store';

import { serializeStyles } from '@utils';
import type { SearchResultMappings } from 'types';

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
  @Prop() customStylesForResults:
    | string
    | Record<string, Record<string, string>>
    | undefined;
  /**
   * Formats the content rendered for each result.
   */
  @Prop() searchResultMappings: SearchResultMappings | undefined;
  /**
   * The placement of the image for each result.
   */
  @Prop() resultImagePlacement: 'left' | 'right' = 'right';
  /**
   * The label for the button rendered when containerHref is not present for each result.
   */
  @Prop() buttonLabel: string | undefined;
  /**
   * Where to open the link for the button rendered when containerHref is not present for each result.
   */
  @Prop() buttonTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  /**
   * The relationship between the current document and the link for the button rendered when containerHref is not present for each result.
   */
  @Prop() buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  /**
   * Where to open the link for the containing element for each result.
   */
  @Prop() containerTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  /**
   * The relationship between the current document and the link for the containing element for each result.
   */
  @Prop() containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;

  /**
   * When no results are returned.
   */
  @Event() noResults?: EventEmitter<void>;

  @State() searchTerm = '';
  @State() searchClientResponseItems: SearchClientResponseItem[] = [];
  @State() adClientResponseItems: AdClientResponseItem[] = [];
  @State() searchResultsPerPage;
  @State() searchResultsPage;

  private unsubscribe: () => void = () => {};

  componentDidLoad() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) =>
      this.handleStateChange(state),
    );
    const currentState = useSearchcraftStore.getState();
    this.searchClientResponseItems = currentState.searchClientResponseItems;
    this.searchTerm = currentState.searchTerm;
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
  }

  render() {
    if (this.searchTerm.trim() === '') {
      return (
        <div class='searchcraft-search-results-empty-state-container'>
          <slot name='empty-search' />
        </div>
      );
    }

    if (this.searchClientResponseItems.length === 0) {
      return;
    }

    if (
      this.searchTerm.length > 0 &&
      this.searchClientResponseItems.length === 0
    ) {
      this.noResults?.emit();
    }

    let serializedStyles = '';
    if (this.customStylesForResults) {
      serializedStyles =
        typeof this.customStylesForResults === 'string'
          ? this.customStylesForResults
          : serializeStyles(this.customStylesForResults);
    }

    return (
      <div class='searchcraft-search-results-container'>
        {this.adClientResponseItems?.map((item) => (
          <searchcraft-base-search-result-ad
            adClientResponseItem={item}
            key={item.adId}
          />
        ))}
        {this.searchClientResponseItems?.map((item, index) => (
          <searchcraft-base-search-result
            key={item.id}
            custom-styles={serializedStyles}
            image-placement={this.resultImagePlacement}
            container-rel={this.containerRel}
            container-target={this.containerTarget}
            button-label={this.buttonLabel || 'View more'}
            button-rel={this.buttonRel}
            button-target={this.buttonTarget}
            document-position={
              this.searchResultsPerPage * this.searchResultsPage + index
            }
            searchResultMappings={this.searchResultMappings}
            item={item}
          />
        ))}
        {this.searchTerm.length > 0 &&
          this.searchClientResponseItems.length === 0 && (
            <div class='searchcraft-search-results-error-message-container'>
              <searchcraft-error-message
                error-message={`No search results found for "${this.searchTerm}" query`}
              />
            </div>
          )}
      </div>
    );
  }
}
