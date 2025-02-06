import {
  Component,
  h,
  State,
  Prop,
  type EventEmitter,
  Event,
} from '@stencil/core';
import classNames from 'classnames';

import { parseCustomStyles } from '@utils';

export type SearchcraftSelectOption = {
  label: string;
  value: string | number;
  selected?: boolean;
};

/**
 * This web component is designed to allow users to select between a group of options.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-select
 *  inputId="searchcraft-select"
 *  name="searchcraft-select"
 *  options="[{ label: 'label', value: 'value' }]"
 * />
 * ```
 */
@Component({
  tag: 'searchcraft-select',
  shadow: false,
})
export class SearchcraftSelect {
  /**
   * The caption displayed below the select input.
   */
  @Prop() caption?: string;
  /**
   * Whether the select input is disabled.
   */
  @Prop() disabled?: boolean = false;
  /**
   * The ID for the select input.
   */
  @Prop() inputId!: string;
  /**
   * The label of the select input.
   */
  @Prop() label?: string;
  /**
   * The ID for the label of the select input.
   */
  @Prop() labelId?: string;
  /**
   * The name of the select input.
   */
  @Prop() name!: string;
  /**
   * The options for the select input.
   */
  @Prop() options: SearchcraftSelectOption[] | string = [];
  /**
   * A custom styles object.
   */
  @Prop() customStyles?: string;
  /**
   * The event fired when the select is changed.
   */
  @Event() selectChange!: EventEmitter<string>;

  @State() searchResultsPerPage;

  @State() setSearchResultsPage: (page: number) => void = () => {};
  @State() setSearchResultsPerPage: (perPage: number) => void = () => {};

  private handleSelectChange = (event) => {
    this.selectChange.emit(event.target.value);
  };

  handleGoToPage(page: number) {
    this.setSearchResultsPage(page);
  }

  render() {
    return (
      <div
        class={classNames(
          'searchcraft-select',
          parseCustomStyles(this.customStyles || {}),
        )}
      >
        {this.label && (
          <label
            class='searchcraft-select-label'
            id={this.labelId || `${this.inputId}-label`}
            htmlFor={this.inputId}
          >
            {this.label}
          </label>
        )}
        <div class='searchcraft-select-input-wrapper'>
          <select
            aria-labelledby={
              this.label ? this.labelId || `${this.inputId}-label` : undefined
            }
            class='searchcraft-select-input'
            disabled={this.disabled}
            id={this.inputId}
            name={this.name}
            onChange={this.handleSelectChange}
          >
            {(typeof this.options === 'string'
              ? JSON.parse(this.options)
              : this.options
            ).map(({ label, value, selected }) => {
              return (
                <option key={value} value={value} selected={selected}>
                  {label}
                </option>
              );
            })}
          </select>
          <svg
            class='searchcraft-select-input-icon'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Select dropdown icon</title>
            <path
              d='M5 7.5L10 12.5L15 7.5'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
        {this.caption && (
          <p class='searchcraft-select-caption'>{this.caption}</p>
        )}
      </div>
    );
  }
}
