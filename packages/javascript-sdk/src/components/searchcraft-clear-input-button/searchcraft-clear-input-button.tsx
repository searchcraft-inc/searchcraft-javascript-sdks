import {
  Component,
  Event,
  type EventEmitter,
  Prop,
  h,
  State,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-clear-input-button',
  styleUrl: 'searchcraft-clear-input-button.module.scss',
  shadow: false,
})
export class SearchcraftClearInputButton {
  @Prop() isRequesting? = false;
  @Prop() rightToLeftOrientation = false;

  @Event() clearInput: EventEmitter<void>;

  @State() theme = 'light';

  private isLightTheme = () => {
    return this.theme === 'light';
  };

  private handleClearClick = (event: MouseEvent) => {
    event.preventDefault();
    this.clearInput.emit();
  };

  render() {
    return this.rightToLeftOrientation ? (
      <button
        class={classNames(
          'inputClearButtonRTL',
          'searchcraft-clear-input-button-rtl',
        )}
        onClick={this.handleClearClick}
        type='button'
      >
        {this.isLightTheme ? (
          <searchcraft-clear-icon-set type='clear-light' />
        ) : (
          <searchcraft-clear-icon-set type='clear-dark' />
        )}
      </button>
    ) : (
      <button
        class={classNames(
          'inputClearButtonLTR',
          'searchcraft-clear-input-button-ltr',
        )}
        onClick={this.handleClearClick}
        type='button'
      >
        {this.isLightTheme ? (
          <searchcraft-clear-icon-set type='clear-light' />
        ) : (
          <searchcraft-clear-icon-set type='clear-dark' />
        )}
      </button>
    );
  }
}
