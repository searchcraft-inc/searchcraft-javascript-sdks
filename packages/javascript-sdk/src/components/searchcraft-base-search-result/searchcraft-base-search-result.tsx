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

  render() {
    const isLightTheme = this.themeMode === 'light';

    return (
      <div
        class={
          this.isInteractive
            ? isLightTheme
              ? 'interactiveResultContainerLight'
              : 'interactiveResultContainerDark'
            : 'resultContainer'
        }
        id='searchcraft-item'
        onClick={this.handleContainerClick}
        onKeyDown={this.keyDownCallback}
        tabindex='0'
      >
        {this.isInteractive && (
          <div class='interactiveIconLarge'>
            {isLightTheme ? (
              <searchcraft-clear-icon-set type='arrow-light' />
            ) : (
              <searchcraft-clear-icon-set type='arrow-dark' />
            )}
          </div>
        )}
        <div class='imageContainer'>
          <img
            alt={this.imageDescription}
            class={isLightTheme ? 'imageLight' : 'imageDark'}
            src={this.imageSource}
          />
        </div>
        <div class='contentContainer'>
          <h2 class={isLightTheme ? 'headingLight' : 'headingDark'}>
            {this.headingText}
            {this.isInteractive && (
              <div class='interactiveIconSmall'>
                {isLightTheme ? (
                  <searchcraft-clear-icon-set type='arrow-light' />
                ) : (
                  <searchcraft-clear-icon-set type='arrow-dark' />
                )}
              </div>
            )}
          </h2>
          <h3 class={isLightTheme ? 'subheadingLight' : 'subheadingDark'}>
            {this.subheadingText}
          </h3>
          <p
            class={isLightTheme ? 'primaryContentLight' : 'primaryContentDark'}
          >
            {this.primaryContent}
          </p>
          <p
            class={
              isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark'
            }
          >
            {this.secondaryContent}
          </p>
          <p
            class={
              isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark'
            }
          >
            {this.tertiaryContent}
          </p>
          {this.buttonText && (
            <button onClick={this.handleButtonClick} type='button'>
              {this.buttonText}
            </button>
          )}
        </div>
      </div>
    );
  }
}
