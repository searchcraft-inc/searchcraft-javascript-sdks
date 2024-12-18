import { Component, Event, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'searchcraft-base-search-result',
  styleUrl: 'searchcraft-base-search-result.module.scss',
  shadow: true,
})
export class SearchcraftBaseSearchResult {
  @Prop() buttonText = ''; // Label for the button
  @Prop() customStyles = '{}'; // New string prop for serialized styles.
  @Prop() headingText = ''; // Text for the heading
  @Prop() imageDescription = ''; // Alternative text for the image
  @Prop() imageSource = ''; // Source URL for the image
  @Prop() isInteractive = false; // Determines if the result is interactive
  @Prop() primaryContent = ''; // Primary body content
  @Prop() secondaryContent = ''; // Secondary body content
  @Prop() subheadingText = ''; // Text for the subheading
  @Prop() tertiaryContent = ''; // Tertiary body content
  @Prop() themeMode: 'light' | 'dark' = 'light'; // Light or dark theme context
  @Prop() placeImageRight = false; // Determines the placement of the image container

  @Event() buttonCallback: () => void = () => {}; // Callback for button click
  @Event() keyDownCallback: () => void = () => {}; // Callback for key down event
  @Event() resultCallback: () => void = () => {}; // Callback for result container click

  private handleButtonClick = () => {
    this.buttonCallback();
  };

  private handleContainerClick = () => {
    if (this.isInteractive) {
      this.resultCallback();
    }
  };

  private parseStyles(): Record<string, { [key: string]: string }> {
    try {
      return JSON.parse(this.customStyles);
    } catch (error) {
      console.error('Error parsing custom styles:', error);
      return {};
    }
  }

  render() {
    const isLightTheme = this.themeMode === 'light';
    const styles = this.parseStyles();

    const imageContainer = (
      <div class='imageContainer'>
        <img
          alt={this.imageDescription}
          class={isLightTheme ? 'imageLight' : 'imageDark'}
          src={this.imageSource}
          style={styles.image || {}}
        />
      </div>
    );

    const contentContainer = (
      <div class='contentContainer'>
        <h2
          class={isLightTheme ? 'headingLight' : 'headingDark'}
          style={styles.heading || {}}
        >
          {this.headingText}
        </h2>
        <h3
          class={isLightTheme ? 'subheadingLight' : 'subheadingDark'}
          style={styles.subheading || {}}
        >
          {this.subheadingText}
        </h3>
        <p
          class={isLightTheme ? 'primaryContentLight' : 'primaryContentDark'}
          style={styles.primaryContent || {}}
        >
          {this.primaryContent}
        </p>
        <div class='secondaryContentContainer'>
          <p
            class={
              isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark'
            }
            style={styles.secondaryContent || {}}
          >
            {this.secondaryContent}
          </p>
          <p
            class={
              isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark'
            }
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
      <div
        class={
          this.isInteractive
            ? isLightTheme
              ? 'interactiveResultContainerLight'
              : 'interactiveResultContainerDark'
            : 'resultContainer'
        }
        onKeyDown={this.keyDownCallback}
        onClick={this.handleContainerClick}
        style={styles.container || {}}
        tabindex='0'
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
      </div>
    );
  }
}
