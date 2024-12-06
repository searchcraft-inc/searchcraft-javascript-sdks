import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'searchcraft-input-icon',
  styleUrl: 'searchcraft-input-icon.module.scss',
  shadow: true,
})
export class SearchcraftInputIcon {
  /**
   * Determines if an error icon should be displayed.
   */
  @Prop() error?: boolean;

  /**
   * Determines if the layout should be right-to-left.
   */
  @Prop() rightToLeftOrientation = false;
  @Prop() height = 20;
  @Prop() width = 20;

  @State() theme = 'light';

  private isLightTheme() {
    return this.theme === 'light';
  }

  render() {
    return this.error ? (
      <div
        class={this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR'}
      >
        {this.isLightTheme() ? (
          <searchcraft-search-icon-set
            height={this.height}
            type='error-light'
            width={this.width}
          />
        ) : (
          <searchcraft-search-icon-set
            height={this.height}
            type='error-dark'
            width={this.width}
          />
        )}
      </div>
    ) : (
      <div
        class={this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR'}
      >
        {this.isLightTheme() ? (
          <searchcraft-search-icon-set
            height={this.height}
            type='search-light'
            width={this.width}
          />
        ) : (
          <searchcraft-search-icon-set
            height={this.height}
            type='search-dark'
            width={this.width}
          />
        )}
      </div>
    );
  }
}
