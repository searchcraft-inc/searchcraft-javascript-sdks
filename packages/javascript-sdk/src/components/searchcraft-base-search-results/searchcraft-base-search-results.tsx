import {
  Component,
  h,
  Event,
  Prop,
  State,
  type EventEmitter,
  Watch,
} from '@stencil/core';

import type { SearchcraftResponse } from '@searchcraft/core';

import { useSearchcraftStore } from '@provider/store';

import {
  getDocumentValueFromSearchResultMapping,
  serializeStyles,
} from '@utils/utils';
import type { SearchResultMappings } from 'types';

@Component({
  tag: 'searchcraft-base-search-results',
  styleUrl: 'searchcraft-base-search-results.module.scss',
  shadow: false,
})
export class SearchcraftBaseSearchResults {
  @Prop() adInterval = 4;
  @Prop() customStylesForResults:
    | string
    | Record<string, Record<string, string>>
    | undefined;
  @Prop() searchResultMappings: string | undefined;
  @Prop() placeAdAtEnd = false;
  @Prop() placeAdAtStart = true;
  @Prop() resultImagePlacement: 'left' | 'right' = 'right';
  @Prop() buttonLabel: string | undefined;
  @Prop() buttonTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  @Prop() buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  @Prop() containerTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  @Prop() containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;

  @Event() noResults: EventEmitter<void>;

  @State() hasSearched = false;
  @State() query = '';
  @State() searchResults: SearchcraftResponse | null = null;
  /** The parsed `searchResultMappings` prop.  */
  @State() parsedMappings: SearchResultMappings | undefined;

  private unsubscribe: () => void;

  private parseSearchResultMappings = (mappingString: string | undefined) => {
    if (mappingString) {
      try {
        this.parsedMappings = JSON.parse(
          this.searchResultMappings,
        ) as SearchResultMappings;
      } catch {
        console.error(
          'Error: Invalid searchResultsMappings passed to searchcraft-base-search-results.',
        );
      }
    }
  };

  @Watch('searchResultMappings')
  onItemsChange(searchResultMappings: string) {
    this.parseSearchResultMappings(searchResultMappings);
  }

  connectedCallback() {
    this.parseSearchResultMappings(this.searchResultMappings);
  }

  componentDidLoad() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (state.query.length > 0) {
        this.hasSearched = true;
      } else {
        this.hasSearched = false;
      }
      this.searchResults = { ...state.searchResults };
      this.query = state.query;
    });

    const { searchResults, query } = useSearchcraftStore.getState();
    this.searchResults = searchResults;
    this.query = query;
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
      this.parsedMappings.title,
    );
    const subtitleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.parsedMappings.subtitle,
    );
    const bodyContent = getDocumentValueFromSearchResultMapping(
      document,
      this.parsedMappings.body,
    );
    const containerHref = getDocumentValueFromSearchResultMapping(
      document,
      this.parsedMappings.containerHref,
    );
    const buttonHref = getDocumentValueFromSearchResultMapping(
      document,
      this.parsedMappings.buttonHref,
    );
    const imageSource = getDocumentValueFromSearchResultMapping(
      document,
      this.parsedMappings.imageSource,
    );
    const footerContent = getDocumentValueFromSearchResultMapping(
      document,
      this.parsedMappings.footer,
    );

    const serializedStyles =
      typeof this.customStylesForResults === 'string'
        ? this.customStylesForResults
        : serializeStyles(this.customStylesForResults);

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
    if (this.query.trim() === '') {
      return (
        <div class='searchcraft-search-results-empty-state-container'>
          <slot name='empty-search' />
        </div>
      );
    }

    if (!this.searchResults?.data) {
      return;
    }

    const documents: Record<string, unknown>[] =
      this.searchResults?.data?.hits?.map((data, _index) => {
        const { doc: result } = data;
        return result;
      });

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

    if (this.query.length > 0 && this.searchResults?.data?.hits?.length === 0) {
      this.noResults.emit();
    }

    return (
      <div class='searchcraft-search-results-container'>
        {finalComponents}
        {this.query.length > 0 &&
          this.searchResults?.data?.hits?.length === 0 && (
            <div class='searchcraft-search-results-error-message-container'>
              <searchcraft-error-message
                error-message={`No search results found for "${this.query}" query`}
              />
            </div>
          )}
      </div>
    );
  }
}
