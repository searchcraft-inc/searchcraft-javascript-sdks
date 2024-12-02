import { Component, Prop, h, State } from '@stencil/core';

import {
  SearchIconLight,
  SearchIconDark,
  SearchIconLightError,
  SearchIconDarkError,
} from '../../assets/SearchIcons';

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
        {this.isLightTheme ? <SearchIconLightError /> : <SearchIconDarkError />}
      </div>
    ) : (
      <div
        class={this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR'}
      >
        {this.isLightTheme ? <SearchIconLight /> : <SearchIconDark />}
      </div>
    );
  }
}
