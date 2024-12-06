import {
  Component,
  h,
  Prop,
  State,
  Event,
  Fragment,
  type EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';

import { parseCustomStyles } from '@utils/utils';

export interface ScInputCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLSearchcraftInputElement;
}

@Component({
  tag: 'searchcraft-input',
  styleUrl: 'searchcraft-input.module.scss',
  shadow: true,
})
export class SearchcraftInput {
  @Prop() customStyles: string | Record<string, string> = {};
  @Prop() error = false;
  @Prop() formClassName = '';
  @Prop() inputCaptionClassName = '';
  @Prop() inputCaptionValue = '';
  @Prop() inputClassName = '';
  @Prop() inputIconHeight = 20;
  @Prop() inputIconWidth = 20;
  @Prop() isRequesting = false;
  @Prop() placeholderValue = 'Enter Search';
  @Prop() rightToLeftOrientation = false;
  @Prop() query = '';

  @Event() clearInput: EventEmitter<void>;
  @Event() searchInputChange: EventEmitter<string>;

  @State() theme = 'light';

  private get isLightTheme() {
    return this.theme === 'light';
  }

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchInputChange.emit(input.value);
  }

  handleClearInput() {
    if (this.clearInput) {
      this.clearInput.emit();
    }
  }

  render() {
    const containerClassName = this.rightToLeftOrientation
      ? 'inputContainerRTL'
      : 'inputContainerLTR';

    const inputClassName = classNames(
      this.error
        ? this.isLightTheme
          ? 'inputErrorLightRTL'
          : 'inputErrorDarkRTL'
        : this.isLightTheme
          ? 'inputLightLTR'
          : 'inputDarkLTR',
      'searchcraft-input',
    );

    const validatedCustomStyles = parseCustomStyles(this.customStyles);

    const placeholderStyle = {
      fontSize: validatedCustomStyles.placeholderFontSize || '16px',
    };
    return (
      <div
        class={classNames(
          containerClassName,
          this.formClassName,
          'searchcraft-input-form',
        )}
      >
        {this.rightToLeftOrientation ? (
          <Fragment>
            <input
              class={classNames(inputClassName, 'searchcraft-input')}
              id='searchcraft-input-id'
              onChange={this.handleInputChange.bind(this)}
              placeholder={this.placeholderValue}
              type='text'
              value={this.query}
              style={validatedCustomStyles}
            />
            <style>
              {`
                #searchcraft-input-id::placeholder {
                  font-size: ${placeholderStyle.fontSize};
                }
              `}
            </style>
            {this.inputCaptionValue && (
              <searchcraft-input-caption
                inputCaptionClassName={this.inputCaptionClassName}
                inputCaptionValue={this.inputCaptionValue}
                rightToLeftOrientation={this.rightToLeftOrientation}
              />
            )}
            {this.query.length > 0 && (
              <searchcraft-clear-input-button
                isRequesting={this.isRequesting}
                onClearInput={this.handleClearInput}
                rightToLeftOrientation={this.rightToLeftOrientation}
              />
            )}
            <searchcraft-input-icon
              error={this.error}
              height={this.inputIconHeight}
              rightToLeftOrientation={this.rightToLeftOrientation}
              width={this.inputIconWidth}
            />
          </Fragment>
        ) : (
          <div class='inputWrapper'>
            <searchcraft-input-icon
              error={this.error}
              height={this.inputIconHeight}
              rightToLeftOrientation={this.rightToLeftOrientation}
              width={this.inputIconWidth}
            />
            <input
              class={classNames(inputClassName, 'searchcraft-input')}
              id='searchcraft-input-id'
              onChange={this.handleInputChange.bind(this)}
              placeholder={this.placeholderValue}
              type='text'
              value={this.query}
              style={validatedCustomStyles}
            />
            <style>
              {`
                #searchcraft-input-id::placeholder {
                  font-size: ${placeholderStyle.fontSize};
                }
              `}
            </style>
            {this.inputCaptionValue && (
              <searchcraft-input-caption
                inputCaptionClassName={this.inputCaptionClassName}
                inputCaptionValue={this.inputCaptionValue}
                rightToLeftOrientation={this.rightToLeftOrientation}
              />
            )}
            {this.query.length > 0 && (
              <searchcraft-clear-input-button
                isRequesting={this.isRequesting}
                onClearInput={this.handleClearInput}
                rightToLeftOrientation={this.rightToLeftOrientation}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
