import {
  Component,
  Prop,
  State,
  Event,
  type EventEmitter,
  h,
} from '@stencil/core';
import type { ScInputCustomEvent } from '../sc-input/sc-input';

@Component({
  tag: 'sc-auto-search-form',
  styleUrl: 'sc-auto-search-form.module.scss',
  shadow: true,
})
export class AutoSearchForm {
  @Prop() autoSearchFormClass = '';
  @Prop() inputCaptionValue = '';
  @Prop() labelForInput = 'Search';
  @Prop() placeholderValue = 'Search here';
  @Prop() rightToLeftOrientation = false;
  @Prop() searchContainerClass = '';
  @Prop() clearInput: () => void = () => {}; // Default assignment ensures no undefined error

  /**
   * Event emitted when the search query is submitted
   */
  @Event() querySubmit: EventEmitter<string>;

  @State() query = '';

  /**
   * Handles the input change event from sc-input
   */
  handleInputChange = (event: ScInputCustomEvent<string>) => {
    this.query = event.detail; // Get the query string from the event detail
    this.querySubmit.emit(this.query);
  };

  /**
   * Handles the clear input event from sc-input
   */
  handleClearInput = () => {
    this.query = '';
    if (typeof this.clearInput === 'function') {
      this.clearInput();
    }
  };

  render() {
    const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';

    return (
      <form class={`${formClass}`} onSubmit={(event) => event.preventDefault()}>
        <label>{this.labelForInput}</label>
        <div class='searchContainer'>
          <sc-input
            placeholder-value={this.placeholderValue}
            query={this.query}
            input-caption-value={this.inputCaptionValue}
            right-to-left-orientation={this.rightToLeftOrientation}
            onSearchInputChange={this.handleInputChange}
            onClearInput={this.handleClearInput}
          />
        </div>
      </form>
    );
  }
}
