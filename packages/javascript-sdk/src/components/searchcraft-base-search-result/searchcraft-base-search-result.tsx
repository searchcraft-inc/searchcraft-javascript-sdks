import { useSearchcraftStore } from '@provider/store';
import { Component, Fragment, h, Prop } from '@stencil/core';

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
  /**
   * The title content.
   */
  @Prop() titleContent: string | undefined;
  /**
   * The subtitle content.
   */
  @Prop() subtitleContent: string | undefined;
  /**
   * The body content.
   */
  @Prop() bodyContent: string | undefined;
  /**
   * The footer content.
   */
  @Prop() footerContent: string | undefined;
  /**
   * The label for the button rendered when containerHref is not present.
   */
  @Prop() buttonLabel: string | undefined;
  /**
   * The link for the button rendered when containerHref is not present.
   */
  @Prop() buttonHref: string | undefined;
  /**
   * Where to open the link for the button rendered when containerHref is not present.
   */
  @Prop() buttonTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  /**
   * The relationship between the current document and the link for the button rendered when containerHref is not present.
   */
  @Prop() buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  /**
   * The link for the containing element.
   */
  @Prop() containerHref: string | undefined;
  /**
   * Where to open the link for the containing element.
   */
  @Prop() containerTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  /**
   * The relationship between the current document and the link for the containing element.
   */
  @Prop() containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  /**
   * The image source.
   */
  @Prop() imageSrc: string | undefined;
  /**
   * The image alternative text.
   */
  @Prop() imageAlt: string | undefined;
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

  private searchcraftStore = useSearchcraftStore.getState();

  private recordMeasureEvent = () => {
    const searchcraft = this.searchcraftStore.getSearchcraftInstance();

    if (searchcraft) {
      const document_position = this.documentPosition;
      const search_term = this.searchcraftStore.query;
      const number_of_documents =
        this.searchcraftStore.searchResults?.data?.hits?.length || 0;

      searchcraft.sendMeasureEvent('document_clicked', {
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
          onClick={this.recordMeasureEvent}
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
