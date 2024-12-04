import {
  Component,
  Event,
  type EventEmitter,
  Prop,
  h,
  State,
} from '@stencil/core';
import classNames from 'classnames';

import { ScSpinnerDark } from '@components/sc-spinner-dark/sc-spinner-dark';
import { ScSpinnerLight } from '@components/sc-spinner-light/sc-spinner-light';

@Component({
  tag: 'sc-clear-input-button',
  styleUrl: 'sc-clear-input-button.module.scss',
  shadow: true,
})
export class ScClearInputButton {
  @Prop() isRequesting? = false;
  @Prop() rightToLeftOrientation = false;

  // Updated `clearInput` to an EventEmitter
  @Event() clearInput: EventEmitter<void>;

  @State() theme = 'light';

  private isLightTheme() {
    return this.theme === 'light';
  }

  // Added a click handler to emit the event
  private handleClearClick = (event: MouseEvent) => {
    event.preventDefault(); // Prevent default if necessary
    this.clearInput.emit(); // Emit the event
  };

  render() {
    return this.rightToLeftOrientation ? (
      <button
        class={classNames('inputClearButtonRTL', '.sc-clear-input-button-rtl')}
        onClick={this.handleClearClick}
        type='button'
      >
        {this.isRequesting ? (
          this.isLightTheme ? (
            <ScSpinnerLight />
          ) : (
            <ScSpinnerDark />
          )
        ) : this.isLightTheme ? (
          <searchcraft-clear-icon-set type='clear-light' />
        ) : (
          <searchcraft-clear-icon-set type='clear-dark' />
        )}
      </button>
    ) : (
      <button
        class={classNames('inputClearButtonLTR', '.sc-clear-input-button-ltr')}
        onClick={this.handleClearClick}
        type='button'
      >
        {this.isRequesting ? (
          this.isLightTheme ? (
            <ScSpinnerLight />
          ) : (
            <ScSpinnerDark />
          )
        ) : this.isLightTheme ? (
          <searchcraft-clear-icon-set type='clear-light' />
        ) : (
          <searchcraft-clear-icon-set type='clear-dark' />
        )}
      </button>
    );
  }
}
