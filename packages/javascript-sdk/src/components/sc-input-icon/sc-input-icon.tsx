import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'sc-input-icon',
  styleUrl: 'sc-input-icon.module.scss',
  shadow: true,
})
export class ScInputIcon {
  @Prop() error?: boolean;
  @Prop() rightToLeftOrientation = false;
  @State() theme = 'light';

  private isLightTheme() {
    return this.theme === 'light';
  }

  render() {
    return this.error ? (
      <div
        class={this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR'}
      >
        {this.isLightTheme ? (
          <searchcraft-search-icon-set type='error-light' />
        ) : (
          <searchcraft-search-icon-set type='error-dark' />
        )}
      </div>
    ) : (
      <div
        class={this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR'}
      >
        {this.isLightTheme ? (
          <searchcraft-search-icon-set type='search-light' />
        ) : (
          <searchcraft-search-icon-set type='search-dark' />
        )}
      </div>
    );
  }
}
