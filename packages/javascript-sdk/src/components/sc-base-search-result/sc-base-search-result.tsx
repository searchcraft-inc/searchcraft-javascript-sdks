import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sc-base-search-result',
  styleUrl: 'sc-base-search-result.module.scss',
  shadow: true,
})
export class ScBaseSearchResult {
  @Prop() buttonCallbackFn: () => void = () => {};
  @Prop() buttonLabel = '';
  @Prop() callbackFn: () => void = () => {};
  @Prop() imageAltText = '';
  @Prop() imageSrc = '';
  @Prop() interactiveResult = false;
  @Prop() keyDownCallbackFn: () => void = () => {};
  @Prop() resultBodyContent = '';
  @Prop() resultHeading = '';
  @Prop() resultSubheading = '';
  @Prop() theme: 'light' | 'dark' = 'light'; // Simulating theme context.

  private handleButtonClick = () => {
    this.buttonCallbackFn();
  };

  private handleContainerClick = () => {
    if (this.interactiveResult) {
      this.callbackFn();
    }
  };

  render() {
    const isLightTheme = this.theme === 'light';

    return (
      <div
        class={
          this.interactiveResult
            ? isLightTheme
              ? 'interactiveResultContainerLight'
              : 'interactiveResultContainerDark'
            : 'resultContainer'
        }
        id='searchcraft-item'
        onClick={this.handleContainerClick}
        onKeyDown={this.keyDownCallbackFn}
        tabindex='0'
      >
        {this.interactiveResult && (
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
            alt={this.imageAltText}
            class={isLightTheme ? 'imageLight' : 'imageDark'}
            src={this.imageSrc}
          />
        </div>
        <div class='contentContainer'>
          <h2 class={isLightTheme ? 'headingLight' : 'headingDark'}>
            {this.resultHeading}
            {this.interactiveResult && (
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
            {this.resultSubheading}
          </h3>
          <p class={isLightTheme ? 'bodyContentLight' : 'bodyContentDark'}>
            {this.resultBodyContent}
          </p>
          <button onClick={this.handleButtonClick} type='button'>
            {this.buttonLabel}
          </button>
        </div>
      </div>
    );
  }
}
