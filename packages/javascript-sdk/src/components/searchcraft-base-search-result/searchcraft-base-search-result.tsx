import { useSearchcraftStore } from '@provider/store';
import type {
  SearchClientResponseItem,
  SearchDocument,
} from '@searchcraft/core';
import { Component, Fragment, h, Prop, State } from '@stencil/core';
import { getDocumentValueFromSearchResultMapping } from '@utils';
import type { SearchResultMappings } from 'types';

/**
 * This web component is designed to display detailed information for a single search result.
 * Once a query is submitted, the component formats and presents the result.
 * It is consumed within the `searchcraft-base-search-results` component.
 */
@Component({
  tag: 'searchcraft-base-search-result',
  shadow: false,
})
export class SearchcraftBaseSearchResult {
  @Prop() item: SearchClientResponseItem | undefined;
  @Prop() searchResultMappings: SearchResultMappings | undefined;
  /**
   * Where to open the link for the containing element.
   */
  @Prop() containerTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  /**
   * The relationship between the current document and the link for the containing element.
   */
  @Prop() containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  /**
   * Where to open the link for the button rendered when containerHref is not present.
   */
  @Prop() buttonTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  /**
   * The relationship between the current document and the link for the button rendered when containerHref is not present.
   */
  @Prop() buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  /**
   * The placement of the image.
   */
  @Prop() imagePlacement: 'left' | 'right' = 'right';
  /**
   * A custom styles object.
   */
  @Prop() customStyles: string | undefined;
  /**
   * The position in the document. Used with the "document_clicked" measure event.
   */
  @Prop() documentPosition = 0;

  @State() titleContent: string | undefined;
  @State() subtitleContent: string | undefined;
  @State() bodyContent: string | undefined;
  @State() footerContent: string | undefined;
  @State() buttonLabel: string | undefined;
  @State() buttonHref: string | undefined;
  @State() containerHref: string | undefined;
  @State() imageSrc: string | undefined;
  @State() imageAlt: string | undefined;

  private searchcraftStore = useSearchcraftStore.getState();

  connectedCallback() {
    if (this.item) {
      this.mapValuesFromDocument(this.item.document);
    }
  }

  mapValuesFromDocument(document: SearchDocument) {
    this.titleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.title,
    );
    this.subtitleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.subtitle,
    );
    this.bodyContent = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.body,
    );
    this.containerHref = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.containerHref,
    );
    this.buttonHref = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.buttonHref,
    );
    this.imageSrc = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.imageSource,
    );
    this.footerContent = getDocumentValueFromSearchResultMapping(
      document,
      this.searchResultMappings?.footer,
    );
  }

  private handleLinkClick = () => {
    const searchcraft = this.searchcraftStore.getSearchcraftInstance();

    if (searchcraft) {
      const document_position = this.documentPosition;
      const search_term = this.searchcraftStore.searchTerm;
      const number_of_documents =
        this.searchcraftStore.searchClientResponseItems.length;

      searchcraft.measureClient?.sendMeasureEvent('document_clicked', {
        document_position,
        number_of_documents,
        search_term,
      });
    }
  };

  private parseStyles = (): Record<string, { [key: string]: string }> => {
    if (this.customStyles) {
      try {
        return JSON.parse(this.customStyles);
      } catch (error) {
        console.error('Error parsing custom styles:', error);
        return {};
      }
    }
    return {};
  };

  render() {
    const styles = this.parseStyles();
    const imageContainer = this.imageSrc && (
      <img
        alt={this.imageAlt}
        class='searchcraft-search-result-image'
        src={this.imageSrc}
        style={styles.image || {}}
      />
    );

    const contentContainer = (
      <Fragment>
        {this.imageSrc && this.imagePlacement === 'left' && imageContainer}
        <div class='searchcraft-base-search-result-content-container'>
          {this.titleContent && (
            <h2
              class='searchcraft-base-search-result-title'
              style={styles.title || {}}
            >
              {this.titleContent}
            </h2>
          )}
          {this.subtitleContent && (
            <h3
              class='searchcraft-base-search-result-subtitle'
              style={styles.subtitle || {}}
            >
              {this.subtitleContent}
            </h3>
          )}
          {this.bodyContent && (
            <p
              class='searchcraft-base-search-result-body-content'
              style={styles.primaryContent || {}}
            >
              {this.bodyContent}
            </p>
          )}

          {this.footerContent && (
            <p
              class='searchcraft-base-search-result-footer-content'
              style={styles.secondaryContent || {}}
            >
              {this.footerContent}
            </p>
          )}
          {this.buttonHref && !this.containerHref && this.buttonLabel && (
            <a
              class='searchcraft-search-result-button'
              href={this.buttonHref}
              style={styles.button || {}}
              target={this.buttonTarget}
              rel={this.buttonRel}
            >
              {this.buttonLabel}
            </a>
          )}
        </div>
        {this.imageSrc && this.imagePlacement === 'right' && imageContainer}
      </Fragment>
    );

    /** Render as an anchor tag if the containerHref prop is present. */
    if (this.containerHref) {
      return (
        <a
          class='searchcraft-search-result-container'
          onClick={this.handleLinkClick}
          href={this.containerHref}
          rel={this.containerRel}
          style={styles.container || {}}
          tabindex='0'
          target={this.containerTarget}
        >
          {contentContainer}
        </a>
      );
    }

    /** Render as a div if no href prop. */
    return (
      <div
        class='searchcraft-search-result-container'
        style={styles.container || {}}
      >
        {contentContainer}
      </div>
    );
  }
}
