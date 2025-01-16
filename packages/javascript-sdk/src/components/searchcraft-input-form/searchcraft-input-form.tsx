import {
  Component,
  h,
  Prop,
  State,
  Event,
  type EventEmitter,
  Watch,
} from '@stencil/core';

import { type SearchcraftConfig, SearchcraftCore } from '@searchcraft/core';
import packageJson from '../../../package.json';

import { parseCustomStyles } from '@utils/utils';
import { useSearchcraftStore } from '@provider/store';
import classNames from 'classnames';

export interface ScInputCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLSearchcraftInputFormElement;
}

@Component({
  tag: 'searchcraft-input-form',
  styleUrl: 'searchcraft-input-form.module.scss',
  shadow: false,
})
export class SearchcraftInput {
  /**
   * The Searchcraft config object.
   */
  @Prop() config: SearchcraftConfig | undefined;
  /**
   * Whether or not to automatically submit the search term when the input changes.
   */
  @Prop() autoSearch = true;
  /**
   * Where to place the search button.
   */
  @Prop() buttonPlacement: 'left' | 'right' | 'none' = 'none';
  /**
   * The label for the submit button.
   */
  @Prop() buttonLabel: string | undefined;
  /**
   * The label rendered above the input.
   */
  @Prop() inputLabel: string | undefined;
  /**
   * A custom styles object to be applied to the input element.
   */
  @Prop() customStyles: string | Record<string, string> = {};
  /**
   * The input element's placeholder value.
   */
  @Prop() placeholderValue = 'Enter Search';
  /**
   * The starting value of the input element.
   */
  @Prop() searchTerm = '';
  /**
   * The duration to debounce the input's `inputChange` event.
   */
  @Prop() debounceDelay = 0;
  /**
   * Event emitted when the input element has been cleared.
   */
  @Event() inputCleared: EventEmitter<void>;
  /**
   * Event emitted when a query returns with no results received.
   */
  @Event() noResultsReceived: EventEmitter<void>;
  /**
   * Event emitted when a new search request has been submitted.
   */
  @Event() querySubmit: EventEmitter<string>;
  /**
   * Event emitted when the input has gained focus.
   */
  @Event() inputFocus: EventEmitter<void>;
  /**
   * Event emitted when the input has lost focus.
   */
  @Event() inputBlur: EventEmitter<void>;

  @State() inputValue = this.searchTerm;
  @State() error = false;
  @State() isSearchcraftInitialized = false;

  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private searchStore = useSearchcraftStore.getState();

  init() {
    if (this.config && !this.isSearchcraftInitialized) {
      const searchcraft = new SearchcraftCore(this.config, {
        sdkName: packageJson.name,
        sdkVersion: packageJson.version,
      });
      this.searchStore.initialize(searchcraft, true);
      this.isSearchcraftInitialized = true;
    }
  }

  componentDidLoad() {
    this.init();
  }

  @Watch('config')
  onConfigChange() {
    this.init();
  }

  handleOnInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;

    if (input.value.trim() === '') {
      this.inputCleared.emit();
      return;
    }

    if (!this.autoSearch) {
      return;
    }

    if (this.debounceDelay > 0) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(
        () => this.performSearch(input.value),
        this.debounceDelay,
      );
    } else {
      this.performSearch(input.value);
    }
  };

  private performSearch = async (value: string) => {
    if (value === useSearchcraftStore.getState().query) {
      return;
    }
    this.querySubmit.emit(value);
    this.searchTerm = value.trim();
    this.error = false;
    this.searchStore.setQuery(this.searchTerm);

    try {
      await this.searchStore.search();
    } catch (error) {
      this.error = true;
      this.inputCleared.emit();
    }
  };

  handleClearInput = () => {
    this.inputValue = '';

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.searchTerm = '';
    this.searchStore.setQuery('');
    this.searchStore.setSearchResults(null);
    this.error = false;

    if (this.inputCleared) {
      this.inputCleared.emit();
    }
  };

  handleFormSubmit = async (event: Event) => {
    event.preventDefault();
    await this.performSearch(this.searchTerm);
  };

  render() {
    const validatedCustomStyles = parseCustomStyles(this.customStyles);

    const isShowingClearButton = this.inputValue.length > 0;

    const inputGridClassNames = classNames('searchcraft-input-grid', {
      'searchcraft-input-grid-buttonLeft': this.buttonPlacement === 'left',
      'searchcraft-input-grid-buttonRight': this.buttonPlacement === 'right',
      'searchcraft-input-grid-buttonNone': this.buttonPlacement === 'none',
    });

    return (
      <form class='searchcraft-input-form' onSubmit={this.handleFormSubmit}>
        <div class={inputGridClassNames}>
          <div class='searchcraft-input-button-wrapper'>
            <searchcraft-button
              onButtonClick={this.handleFormSubmit}
              label={this.buttonLabel}
            />
          </div>
          <div class='searchcraft-input-label-wrapper'>
            <searchcraft-input-label label={this.inputLabel} />
          </div>
          {this.error && (
            <div class='searchcraft-input-error-wrapper'>
              <searchcraft-error-message errorMessage='Please enter a search query.' />
            </div>
          )}
          <div class='searchcraft-input-wrapper'>
            <input
              autoComplete='off'
              class='searchcraft-input'
              onFocus={() => this.inputFocus.emit()}
              onBlur={() => this.inputBlur.emit()}
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
                <title id='searchcraft-title'>
                  Searchcraft Search Icon Light
                </title>
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
                  <title id='icon-title'>
                    Searchcraft Clear Input Icon Light
                  </title>
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
        </div>
      </form>
    );
  }
}
