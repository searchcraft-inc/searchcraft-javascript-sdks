import {
  Component,
  h,
  Prop,
  State,
  Event,
  type EventEmitter,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';

import type { SearchcraftCore } from '@searchcraft/core';

import { searchcraftStore } from '@store';

/**
 * This web component provides a user-friendly interface for querying an indexed dataset, enabling users to easily search large collections of data.
 * It abstracts the complexities of index-based searching, making it accessible to users of all technical levels.
 *
 * @js-example
 * ```html
 * <searchcraft-input-form auto-search />
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftInputForm autoSearch />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftInputForm autoSearch />
 * ```
 */
@Component({
  tag: 'searchcraft-input-form',
  shadow: false,
})
export class SearchcraftInputForm {
  /**
   * Whether or not to automatically submit the search term when the input changes.
   */
  @Prop() autoSearch?: boolean = true;
  /**
   * Where to place the search button.
   */
  @Prop() buttonPlacement?: 'left' | 'right' | 'none' = 'none';
  /**
   * The label for the submit button.
   */
  @Prop() buttonLabel?: string;
  /**
   * The label rendered above the input.
   */
  @Prop() inputLabel?: string;
  /**
   * The input element's placeholder value.
   */
  @Prop() placeholderValue?: string = 'Enter Search';
  /**
   * When the input becomes focused.
   */
  @Event() inputFocus?: EventEmitter<void>;
  /**
   * When the input becomes unfocused.
   */
  @Event() inputBlur?: EventEmitter<void>;
  /**
   * Event emitted when input initializes.
   */
  @Event() inputInit?: EventEmitter<void>;

  @State() inputValue = '';
  @State() searchTerm = '';
  @State() error = false;

  @Prop() core?: SearchcraftCore;

  private searchStore = searchcraftStore.getState();

  init() {
    if (this.core) {
      this.searchStore.initialize(this.core);
      this.inputInit?.emit();
    }
  }

  connectedCallback() {
    this.init();
  }

  @Watch('core')
  onCoreChange() {
    this.init();
  }

  handleOnInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;

    if (!this.autoSearch) {
      return;
    }

    this.performSearch(input.value);
  };

  private performSearch = async (value: string) => {
    if (value === searchcraftStore.getState().searchTerm) {
      return;
    }

    this.searchTerm = value.trim();
    this.error = false;
    this.searchStore.setSearchTerm(this.searchTerm);

    try {
      await this.searchStore.search();
    } catch (error) {
      console.log(error);
      this.error = true;
    }
  };

  handleClearInput = () => {
    this.inputValue = '';
    this.searchTerm = '';
    this.searchStore.setSearchTerm('');
    this.searchStore.setSearchClientResponseItems([]);
    this.error = false;
  };

  handleFormSubmit = async (event: Event) => {
    event.preventDefault();
    await this.performSearch(this.searchTerm);
  };

  render() {
    const isShowingClearButton = this.inputValue.length > 0;
    const inputGridClassNames = classNames('searchcraft-input-form-grid', {
      'searchcraft-input-form-grid-button-left':
        this.buttonPlacement === 'left',
      'searchcraft-input-form-grid-button-right':
        this.buttonPlacement === 'right',
      'searchcraft-input-form-grid-button-none':
        this.buttonPlacement === 'none',
    });
    const shouldHaveVerticalGap = this.inputLabel || this.error;
    const inputGridStyles = {
      gap: shouldHaveVerticalGap ? '4px 8px' : '0px 8px',
    };

    return (
      <form class='searchcraft-input-form' onSubmit={this.handleFormSubmit}>
        <div class={inputGridClassNames} style={inputGridStyles}>
          <div class='searchcraft-input-form-button'>
            <searchcraft-button
              onButtonClick={this.handleFormSubmit}
              label={this.buttonLabel}
            />
          </div>
          {this.inputLabel && (
            <div class='searchcraft-input-form-label'>
              <searchcraft-input-label label={this.inputLabel} />
            </div>
          )}
          {this.error && (
            <div class='searchcraft-input-form-error-message'>
              <searchcraft-error-message>
                Something went wrong.
              </searchcraft-error-message>
            </div>
          )}
          <div class='searchcraft-input-form-input-wrapper'>
            <input
              autoComplete='off'
              class='searchcraft-input-form-input'
              onFocus={() => this.inputFocus?.emit()}
              onBlur={() => this.inputBlur?.emit()}
              onInput={(event) => {
                this.handleOnInput(event);
              }}
              placeholder={this.placeholderValue}
              type='text'
              value={this.inputValue}
            />
            <div class='searchcraft-input-form-input-icon'>
              <svg
                class='searchcraft-input-form-input-search-icon'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-labelledby='searchcraft-title'
              >
                <title>Search icon</title>
                <path
                  d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            {isShowingClearButton && (
              <button
                type='button'
                class='searchcraft-input-form-clear-button'
                onClick={this.handleClearInput}
              >
                <svg
                  class='searchcraft-input-form-clear-button-icon'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-labelledby='icon-title'
                >
                  <title>Clear icon</title>
                  <path
                    d='M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </form>
    );
  }
}
