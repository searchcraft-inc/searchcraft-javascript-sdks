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

export interface ScInputCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLScInputElement;
}

@Component({
  tag: 'sc-input',
  styleUrl: 'sc-input.module.scss',
  shadow: true,
})
export class ScInput {
  @Prop() error = false;
  @Prop() formClassName = '';
  @Prop() inputCaptionClassName = '';
  @Prop() inputCaptionValue = '';
  @Prop() inputClassName = '';
  @Prop() placeholderValue = 'Enter Search';
  @Prop() rightToLeftOrientation = false;
  @Prop() query = '';
  @Event() searchInputChange: EventEmitter<string>;
  @Event() clearInput: EventEmitter<void>;

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
              class={classNames(
                this.error
                  ? this.isLightTheme
                    ? 'inputErrorLightRTL'
                    : 'inputErrorDarkRTL'
                  : this.isLightTheme
                    ? 'inputLightRTL'
                    : 'inputDarkRTL',
                inputClassName,
                'searchcraft-input',
              )}
              id='searchcraft-input-id'
              onChange={this.handleInputChange.bind(this)}
              placeholder={this.placeholderValue}
              type='text'
              value={this.query}
            />
            {this.inputCaptionValue && (
              <sc-input-caption
                inputCaptionClassName={this.inputCaptionClassName}
                inputCaptionValue={this.inputCaptionValue}
                rightToLeftOrientation={this.rightToLeftOrientation}
              />
            )}
            {this.query.length > 0 && (
              <sc-clear-input-button
                onClearInput={this.handleClearInput}
                rightToLeftOrientation={this.rightToLeftOrientation}
              />
            )}
            <sc-input-icon
              error={this.error}
              rightToLeftOrientation={this.rightToLeftOrientation}
            />
          </Fragment>
        ) : (
          <Fragment>
            <input
              class={classNames(
                this.error
                  ? this.isLightTheme
                    ? 'inputErrorLightLTR'
                    : 'inputErrorDarkLTR'
                  : this.isLightTheme
                    ? 'inputLightLTR'
                    : 'inputDarkLTR',
                inputClassName,
                'searchcraft-input',
              )}
              id='searchcraft-input-id'
              onChange={this.handleInputChange.bind(this)}
              placeholder={this.placeholderValue}
              type='text'
              value={this.query}
            />
            {this.inputCaptionValue && (
              <sc-input-caption
                inputCaptionClassName={this.inputCaptionClassName}
                inputCaptionValue={this.inputCaptionValue}
                rightToLeftOrientation={this.rightToLeftOrientation}
              />
            )}
            {this.query.length > 0 && (
              <sc-clear-input-button
                onClearInput={this.handleClearInput}
                rightToLeftOrientation={this.rightToLeftOrientation}
              />
            )}
          </Fragment>
        )}
      </div>
    );
  }
}
