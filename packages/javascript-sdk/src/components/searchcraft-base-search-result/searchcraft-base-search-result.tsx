import { Component, Event, Fragment, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-base-search-result',
  styleUrl: 'searchcraft-base-search-result.module.scss',
  shadow: false,
})
export class SearchcraftBaseSearchResult {
  @Prop() buttonText = '';
  @Prop() customStyles = '{}';
  @Prop() titleContent = '';
  @Prop() imageDescription = '';
  @Prop() imageSource = '';
  @Prop() isInteractive = false;
  @Prop() linkHref = '';
  @Prop() primaryContent = '';
  @Prop() secondaryContent = '';
  @Prop() subtitleContent = '';
  @Prop() tertiaryContent = '';
  @Prop() themeMode: 'light' | 'dark' = 'light';
  @Prop() placeImageRight = false;

  @Event() buttonCallback: () => void = () => {};
  @Event() keyDownCallback: () => void = () => {};
  @Event() resultCallback: () => void = () => {};

  private handleButtonClick = () => {
    this.buttonCallback();
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
    const isLightTheme = this.themeMode === 'light';
    const styles = this.parseStyles();
    const imageStyle = isLightTheme ? 'imageLight' : 'imageDark';
    const imageContainer = this.imageSource && (
      <div
        class={classNames(
          'imageContainer',
          'searchcraft-base-search-result-image-container',
        )}
      >
        <img
          alt={this.imageDescription}
          class={classNames(imageStyle, 'searchcraft-search-result-image')}
          src={this.imageSource}
          style={styles.image || {}}
        />
      </div>
    );

    const contentContainer = (
      <div
        class={classNames(
          'contentContainer',
          'searchcraft-base-search-result-content-container',
        )}
      >
        <h2
          class={classNames(
            isLightTheme ? 'titleLight' : 'titleDark',
            'searchcraft-base-search-result-title',
          )}
          style={styles.title || {}}
        >
          {this.titleContent}
        </h2>
        <h3
          class={classNames(
            isLightTheme ? 'subtitleContentLight' : 'subtitleContentDark',
            'searchcraft-base-search-result-subtitle',
          )}
          style={styles.subtitle || {}}
        >
          {this.subtitleContent}
        </h3>
        <p
          class={classNames(
            isLightTheme ? 'primaryContentLight' : 'primaryContentDark',
            'searchcraft-base-search-result-primary-content',
          )}
          style={styles.primaryContent || {}}
        >
          {this.primaryContent}
        </p>
        <div
          class={classNames(
            'secondaryContentContainer',
            'searchcraft-base-search-result-secondary-content-container',
          )}
        >
          <p
            class={classNames(
              isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark',
              'searchcraft-base-search-result-secondary-content',
            )}
            style={styles.secondaryContent || {}}
          >
            {this.secondaryContent}
          </p>
          <p
            class={classNames(
              `${isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark'}${this.tertiaryContent ? ' hasContent' : ''}`,
              'searchcraft-base-search-result-tertiary-content',
            )}
            style={styles.tertiaryContent || {}}
          >
            {this.tertiaryContent}
          </p>
        </div>
        {this.buttonText && (
          <button
            onClick={this.handleButtonClick}
            style={styles.button || {}}
            type='button'
          >
            {this.buttonText}
          </button>
        )}
      </div>
    );

    return (
      <a
        class={classNames(
          this.isInteractive
            ? isLightTheme
              ? 'interactiveResultContainerLight'
              : 'interactiveResultContainerDark'
            : 'resultContainer',
          'searchcraft-search-result-container',
        )}
        onKeyDown={this.keyDownCallback}
        href={this.linkHref}
        rel='noreferrer'
        style={styles.container || {}}
        tabindex='0'
        target='_blank'
      >
        {this.placeImageRight ? (
          <Fragment>
            {contentContainer}
            {imageContainer}
          </Fragment>
        ) : (
          <Fragment>
            {imageContainer}
            {contentContainer}
          </Fragment>
        )}
      </a>
    );
  }
}
