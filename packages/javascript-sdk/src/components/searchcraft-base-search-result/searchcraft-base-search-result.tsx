import { useSearchcraftStore } from '@provider/store';
import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'searchcraft-base-search-result',
  styleUrl: 'searchcraft-base-search-result.module.scss',
  shadow: false,
})
export class SearchcraftBaseSearchResult {
  @Prop() titleContent: string | undefined;
  @Prop() subtitleContent: string | undefined;
  @Prop() bodyContent: string | undefined;
  @Prop() footerContent: string | undefined;
  @Prop() buttonLabel: string | undefined;
  @Prop() buttonHref: string | undefined;
  @Prop() buttonTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  @Prop() buttonRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  @Prop() containerHref: string | undefined;
  @Prop() containerTarget: '_blank' | '_self' | '_top' | '_parent' = '_blank';
  @Prop() containerRel: 'noreferrer' | 'noopener' | 'nofollow' | undefined;
  @Prop() imageSrc: string | undefined;
  @Prop() imageAlt: string | undefined;
  @Prop() imagePlacement: 'left' | 'right';
  @Prop() customStyles: string | undefined;
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
