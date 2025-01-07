import { useSearchcraftStore } from '@provider/store';
import { Component, Event, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'searchcraft-base-search-result',
  styleUrl: 'searchcraft-base-search-result.module.scss',
  shadow: false,
})
export class SearchcraftBaseSearchResult {
  @Prop() titleContent = '';
  @Prop() subtitleContent = '';
  @Prop() bodyContent = '';
  @Prop() footerContent = '';
  @Prop() buttonLabel = '';
  @Prop() linkHref: string | undefined = '';
  @Prop() customStyles = '{}';
  @Prop() imageDescription = '';
  @Prop() imageSource = '';
  @Prop() imagePlacement: 'left' | 'right';
  @Prop() documentPosition = 0;

  @Event() buttonCallback: () => void = () => {};
  @Event() keyDownCallback: () => void = () => {};
  @Event() resultCallback: () => void = () => {};

  private searchcraftStore = useSearchcraftStore.getState();

  // TODO: Add button support to this component
  // private handleButtonClick = () => {
  //   this.buttonCallback();
  // };

  private handleClick = () => {
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
    try {
      return JSON.parse(this.customStyles);
    } catch (error) {
      console.error('Error parsing custom styles:', error);
      return {};
    }
  };

  render() {
    const styles = this.parseStyles();
    const imageContainer = this.imageSource && (
      <img
        alt={this.imageDescription}
        class='searchcraft-search-result-image'
        src={this.imageSource}
        style={styles.image || {}}
      />
    );

    const contentContainer = (
      <Fragment>
        {this.imagePlacement === 'left' && imageContainer}
        <div class='searchcraft-base-search-result-content-container'>
          <h2
            class='searchcraft-base-search-result-title'
            style={styles.title || {}}
          >
            {this.titleContent}
          </h2>
          <h3
            class='searchcraft-base-search-result-subtitle'
            style={styles.subtitle || {}}
          >
            {this.subtitleContent}
          </h3>
          <p
            class='searchcraft-base-search-result-body-content'
            style={styles.primaryContent || {}}
          >
            {this.bodyContent}
          </p>
          <p
            class='searchcraft-base-search-result-footer-content'
            style={styles.secondaryContent || {}}
          >
            {this.footerContent}
          </p>
          {/* TODO: Add button & button styles here
          {this.buttonLabel && (
            <button
              onClick={this.handleButtonClick}
              style={styles.button || {}}
              type='button'
            >
              {this.buttonLabel}
            </button>
          )} */}
        </div>
        {this.imagePlacement === 'right' && imageContainer}
      </Fragment>
    );

    /** Render as an anchor tag if an href prop is present. */
    if (this.linkHref) {
      return (
        <a
          class='searchcraft-search-result-container'
          onKeyDown={this.keyDownCallback}
          onClick={this.handleClick}
          href={this.linkHref}
          rel='noreferrer'
          style={styles.container || {}}
          tabindex='0'
          target='_blank'
        >
          {contentContainer}
        </a>
      );
    }

    /** Render as a div if no href prop. */
    return (
      <div
        class='searchcraft-search-result-container'
        onKeyDown={this.keyDownCallback}
        onClick={this.handleClick}
        style={styles.container || {}}
      >
        {contentContainer}
      </div>
    );
  }
}
