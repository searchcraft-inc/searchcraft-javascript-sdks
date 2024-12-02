import {
  Component,
  Event,
  type EventEmitter,
  Prop,
  h,
  State,
} from '@stencil/core';
import classNames from 'classnames';

import {
  ClearInputIconLight,
  ClearInputIconDark,
} from '../../assets/ClearInputIcon';

import { ScSpinnerLight } from '../sc-spinner-light/sc-spinner-light';
import { ScSpinnerDark } from '../sc-spinner-dark/sc-spinner-dark';

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
        onClick={this.handleClearClick} // Use the handler
        type='button'
      >
        {this.isRequesting ? (
          this.isLightTheme ? (
            <ScSpinnerLight />
          ) : (
            <ScSpinnerDark />
          )
        ) : this.isLightTheme ? (
          <ClearInputIconLight />
        ) : (
          <ClearInputIconDark />
        )}
      </button>
    ) : (
      <button
        class={classNames('inputClearButtonLTR', '.sc-clear-input-button-ltr')}
        onClick={this.handleClearClick} // Use the handler
        type='button'
      >
        {this.isRequesting ? (
          this.isLightTheme ? (
            <ScSpinnerLight />
          ) : (
            <ScSpinnerDark />
          )
        ) : this.isLightTheme ? (
          <ClearInputIconLight />
        ) : (
          <ClearInputIconDark />
        )}
      </button>
    );
  }
}
