import {
  Component,
  h,
  Prop,
  State,
  Event,
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
  shadow: false,
})
export class SearchcraftInput {
  @Prop() customStyles: string | Record<string, string> = {};
  @Prop() error = false;
  @Prop() inputCaptionClassName = '';
  @Prop() inputCaptionValue = '';
  @Prop() inputClassName = '';
  @Prop() isRequesting = false;
  @Prop() placeholderValue = 'Enter Search';
  @Prop() query = '';
  @Prop() flex = true;

  @Event() clearInput: EventEmitter<void>;
  @Event() inputChange: EventEmitter<string>;

  @State() inputValue = this.query;

  handleOnInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;
    this.inputChange.emit(input.value);
  };

  handleClearInput = () => {
    this.inputValue = '';
    if (this.inputValue === '') {
      return;
    }
    if (this.clearInput) {
      this.clearInput.emit();
    }
  };

  render() {
    const validatedCustomStyles = parseCustomStyles(this.customStyles);

    const inputWrapperClassNames = classNames('searchcraft-input-wrapper', {
      'searchcraft-input-wrapper-flex': this.flex,
    });

    const inputClassNames = classNames('searchcraft-input', {
      'searchcraft-input-flex': this.flex,
      error: this.error,
    });

    const isShowingClearButton = this.inputValue.length > 0;

    return (
      <div class={inputWrapperClassNames}>
        <input
          autoComplete='off'
          class={inputClassNames}
          onInput={(event) => {
            this.handleOnInput(event);
          }}
          placeholder={this.placeholderValue}
          style={validatedCustomStyles}
          type='text'
          value={this.inputValue}
        />
        <div class='searchcraft-input-search-icon-wrapper'>
          <svg
            class='searchcraft-input-search-icon'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='searchcraft-title'
          >
            <title id='searchcraft-title'>Searchcraft Search Icon Light</title>
            <path
              d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
              stroke='#404040'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
        {isShowingClearButton && (
          <button
            type='button'
            class='searchcraft-input-clear-button'
            onClick={this.handleClearInput}
          >
            <svg
              class='searchcraft-input-clear-icon'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-labelledby='icon-title'
            >
              <title id='icon-title'>Searchcraft Clear Input Icon Light</title>
              <path
                d='M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
                stroke='black'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
}
