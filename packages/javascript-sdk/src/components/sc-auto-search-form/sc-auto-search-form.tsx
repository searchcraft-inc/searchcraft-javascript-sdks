import {
  Component,
  Prop,
  State,
  Event,
  type EventEmitter,
  h,
} from '@stencil/core';
import {
  type CoreConfigSDK,
  CoreSDK as SearchcraftCore,
} from '@searchcraft/core';

import type { ScInputCustomEvent } from '@components/sc-input/sc-input';
import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'sc-auto-search-form',
  styleUrl: 'sc-auto-search-form.module.scss',
  shadow: true,
})
export class ScAutoSearchForm {
  @Prop() autoSearchFormClass = '';
  @Prop() clearInput: () => void = () => {}; // Default assignment ensures no undefined error
  @Prop() config: CoreConfigSDK = {
    apiKey: '',
    endpointURL: '',
    index: [],
  };
  @Prop() inputCaptionValue = '';
  @Prop() labelForInput = 'Search';
  @Prop() placeholderValue = 'Search here';
  @Prop() rightToLeftOrientation = false;
  @Prop() searchContainerClass = '';

  /**
   * Event emitted when the search query changes
   */
  @Event() querySubmit: EventEmitter<string>;

  @State() error = false;
  @State() query = '';
  @State() searchResults = '';

  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private debounceDelay = 300; // 300ms debounce delay

  componentDidLoad = () => {
    const searchcraft = new SearchcraftCore(this.config);
    this.searchStore.initialize(searchcraft, true);
  };

  // Initialize searchStore as a private field
  private searchStore = useSearchcraftStore.getState();

  /**
   * Handles the input change event from sc-input
   */
  handleInputChange = (event: ScInputCustomEvent<string>) => {
    console.log(event);
    this.query = event.detail; // Update the query state with input value

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout); // Clear any existing timeout
    }

    // Emit querySubmit immediately for real-time updates
    this.querySubmit.emit(this.query);

    // Set a new debounce timeout to execute search after delay
    this.debounceTimeout = setTimeout(() => {
      this.runSearch(); // Execute search logic after typing stops
    }, this.debounceDelay);
  };

  /**
   * Handles the clear input event from sc-input
   */
  handleClearInput = () => {
    this.query = '';
    if (typeof this.clearInput === 'function') {
      this.clearInput();
    }

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout); // Clear the debounce timeout
    }

    // Reset error and search results
    this.error = false;
    this.searchResults = '';
  };

  /**
   * Runs the search logic
   */
  private runSearch = async () => {
    if (this.query.trim() === '') {
      this.error = true;
      this.searchResults = '';
    } else {
      this.error = false;
      this.searchStore.setQuery(this.query); // Set the query in the searchStore
      await this.searchStore.search(); // Perform the search
      this.searchResults = JSON.stringify(this.searchStore.searchResults); // Store search results as JSON
    }
  };

  /**
   * Handles the form submission logic
   */
  handleFormSubmit = async (event: Event) => {
    event.preventDefault();
    await this.runSearch(); // Trigger search logic on form submit
  };

  render() {
    const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';

    return (
      <form class={`${formClass}`} onSubmit={this.handleFormSubmit}>
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
        {this.error && <p class='error'>Please enter a search query.</p>}
        {this.searchResults && <pre class='results'>{this.searchResults}</pre>}
      </form>
    );
  }
}
