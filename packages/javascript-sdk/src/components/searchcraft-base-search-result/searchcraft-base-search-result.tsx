import { Component, Event, h, Prop } from '@stencil/core';

@Component({
  tag: 'searchcraft-base-search-result',
  styleUrl: 'searchcraft-base-search-result.module.scss',
  shadow: true,
})
export class SearchcraftBaseSearchResult {
  @Prop() buttonText = ''; // Label for the button
  @Prop() imageDescription = ''; // Alternative text for the image
  @Prop() imageSource = ''; // Source URL for the image
  @Prop() isInteractive = false; // Determines if the result is interactive
  @Prop() primaryContent = ''; // Primary body content
  @Prop() secondaryContent = ''; // Secondary body content
  @Prop() tertiaryContent = ''; // Tertiary body content
  @Prop() headingText = ''; // Text for the heading
  @Prop() subheadingText = ''; // Text for the subheading
  @Prop() themeMode: 'light' | 'dark' = 'light'; // Light or dark theme context
  @Prop() customStyles = '{}'; // New string prop for serialized styles.

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

    return (
      <div
        class={
          this.isInteractive
            ? isLightTheme
              ? 'interactiveResultContainerLight'
              : 'interactiveResultContainerDark'
            : 'resultContainer'
        }
        style={styles.container || {}}
        tabindex='0'
        onClick={this.handleContainerClick}
        onKeyDown={this.keyDownCallback}
      >
        <div class='imageContainer'>
          <img
            alt={this.imageDescription}
            src={this.imageSource}
            style={styles.image || {}}
            class={isLightTheme ? 'imageLight' : 'imageDark'}
          />
        </div>
        <div class='contentContainer'>
          <h2
            style={styles.heading || {}}
            class={isLightTheme ? 'headingLight' : 'headingDark'}
          >
            {this.headingText}
          </h2>
          <h3
            style={styles.subheading || {}}
            class={isLightTheme ? 'subheadingLight' : 'subheadingDark'}
          >
            {this.subheadingText}
          </h3>
          <p
            style={styles.primaryContent || {}}
            class={isLightTheme ? 'primaryContentLight' : 'primaryContentDark'}
          >
            {this.primaryContent}
          </p>
          <div>
            <p
              style={styles.secondaryContent || {}}
              class={
                isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark'
              }
            >
              {this.secondaryContent}
            </p>
            <p
              style={styles.tertiaryContent || {}}
              class={
                isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark'
              }
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
      </div>
    );
  }
}
