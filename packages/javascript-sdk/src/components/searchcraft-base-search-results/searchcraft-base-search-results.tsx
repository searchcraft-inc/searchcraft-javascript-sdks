import {
  Component,
  h,
  Event,
  Prop,
  State,
  type EventEmitter,
} from '@stencil/core';

import type {
  SearchClientResponseItem,
  SearchDocument,
} from '@searchcraft/core';

import { useSearchcraftStore } from '@provider/store';

import {
  getDocumentValueFromSearchResultMapping,
  serializeStyles,
} from '@utils';
import type { SearchResultMappings } from 'types';
import type { JSX } from '@stencil/core/internal';

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
   * How often ads are injected.
   */
  @Prop() adInterval = 4;
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
   * Should an ad be placed at the end of the results.
   */
  @Prop() placeAdAtEnd = false;
  /**
   * Should an ad be placed at the start of the results.
   */
  @Prop() placeAdAtStart = true;
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

  @State() hasSearched = false;
  @State() searchTerm = '';
  @State() searchClientResponseItems: SearchClientResponseItem[] = [];

  private unsubscribe: () => void = () => {};

  componentDidLoad() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (state.searchTerm.length > 0) {
        this.hasSearched = true;
      } else {
        this.hasSearched = false;
      }
      this.searchClientResponseItems = [
        ...state.searchClientResponseItems,
      ] as SearchClientResponseItem[];
      this.searchTerm = state.searchTerm;
    });

    const { searchClientResponseItems, searchTerm } =
      useSearchcraftStore.getState();
    this.searchClientResponseItems = searchClientResponseItems;
    this.searchTerm = searchTerm;
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  renderDocument(document: Record<string, unknown>, index: number) {
    /**
     * Index field values -> Result container props mappings.
     */
    const titleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.title,
    );
    const subtitleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.subtitle,
    );
    const bodyContent = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.body,
    );
    const containerHref = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.containerHref,
    );
    const buttonHref = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.buttonHref,
    );
    const imageSource = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.imageSource,
    );
    const footerContent = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.footer,
    );

    let serializedStyles = '';
    if (this.customStylesForResults) {
      serializedStyles =
        typeof this.customStylesForResults === 'string'
          ? this.customStylesForResults
          : serializeStyles(this.customStylesForResults);
    }

    return (
      <searchcraft-base-search-result
        key={`${document.document_id}-${index}`}
        custom-styles={serializedStyles}
        image-placement={this.resultImagePlacement}
        container-rel={this.containerRel}
        container-target={this.containerTarget}
        button-label={this.buttonLabel || 'View more'}
        button-rel={this.buttonRel}
        button-target={this.buttonTarget}
        document-position={index}
        title-content={titleContent}
        subtitle-content={subtitleContent}
        body-content={bodyContent}
        footer-content={footerContent}
        container-href={containerHref}
        button-href={buttonHref}
        image-src={imageSource}
      />
    );
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

    const documents: SearchDocument[] = this.searchClientResponseItems.map(
      (item) => item.document,
    );

    const finalComponents: JSX.Element[] = [];

    if (this.placeAdAtStart) {
      finalComponents.push(
        <div key='ad-section-start' class='searchcraft-ad-section'>
          <p>Ad Section</p>
        </div>,
      );
    }

    if (this.adInterval > 0) {
      documents.forEach((document, index) => {
        finalComponents.push(this.renderDocument(document, index));

        if ((index + 1) % this.adInterval === 0) {
          finalComponents.push(
            <div
              key={`ad-section-${index + 1}`}
              class='searchcraft-ad-section '
            >
              <p>Ad Section</p>
            </div>,
          );
        }
      });
    } else {
      const documentElements = documents.map((document, index) =>
        this.renderDocument(document, index),
      );
      finalComponents.push(...documentElements);
    }

    if (this.placeAdAtEnd) {
      finalComponents.push(
        <div key='ad-section-end' class='searchcraft-ad-section'>
          <p>Ad Section</p>
        </div>,
      );
    }

    if (
      this.searchTerm.length > 0 &&
      this.searchClientResponseItems.length === 0
    ) {
      this.noResults?.emit();
    }

    return (
      <div class='searchcraft-search-results-container'>
        {finalComponents}
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
