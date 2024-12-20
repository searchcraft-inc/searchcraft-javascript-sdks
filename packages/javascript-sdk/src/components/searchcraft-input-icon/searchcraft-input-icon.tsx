import { Component, Prop, h, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-input-icon',
  styleUrl: 'searchcraft-input-icon.module.scss',
  shadow: false,
})
export class SearchcraftInputIcon {
  @Prop() error?: boolean;
  @Prop() height = 20;
  @Prop() rightToLeftOrientation = false;
  @Prop() width = 20;

  @State() theme = 'light';

  private isLightTheme() {
    return this.theme === 'light';
  }

  render() {
    return this.error ? (
      <div
        class={classNames(
          this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR',
          'searchcraft-input-icon-container',
        )}
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
        class={classNames(
          this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR',
          'searchcraft-input-icon-container',
        )}
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
