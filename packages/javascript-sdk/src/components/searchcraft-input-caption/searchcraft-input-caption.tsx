import { Component, Prop, h, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-input-caption',
  styleUrl: 'searchcraft-input-caption.module.scss',
  shadow: false,
})
export class SearchcraftInputCaption {
  @Prop() error?: boolean;
  @Prop() inputCaptionClassName? = '';
  @Prop() inputCaptionValue = 'Enter Search';
  @Prop() rightToLeftOrientation = false;

  @State() theme = 'light';

  private isLightTheme() {
    return this.theme === 'light';
  }

  render() {
    return this.rightToLeftOrientation ? (
      <p
        class={classNames(
          this.error
            ? this.isLightTheme
              ? 'inputCaptionErrorLightRTL'
              : 'inputCaptionErrorDarkRTL'
            : this.isLightTheme
              ? 'inputCaptionLightRTL'
              : 'inputCaptionDarkRTL',
          this.inputCaptionClassName,
          'searchcraft-input-caption',
        )}
      >
        {this.inputCaptionValue}
      </p>
    ) : (
      <p
        class={classNames(
          this.error
            ? this.isLightTheme
              ? 'inputCaptionErrorLightLTR'
              : 'inputCaptionErrorDarkLTR'
            : this.isLightTheme
              ? 'inputCaptionLightLTR'
              : 'inputCaptionDarkLTR',
          this.inputCaptionClassName,
          'searchcraft-input-caption',
        )}
      >
        {this.inputCaptionValue}
      </p>
    );
  }
}
