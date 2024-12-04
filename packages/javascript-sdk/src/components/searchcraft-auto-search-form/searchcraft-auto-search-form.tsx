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

import type { ScInputCustomEvent } from '@components/searchcraft-input/searchcraft-input';
import { parseCustomStyles } from '@utils/utils';
import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'searchcraft-auto-search-form',
  styleUrl: 'searchcraft-auto-search-form.module.scss',
  shadow: true,
})
export class SearchcraftAutoSearchForm {
  @Prop() autoSearchFormClass = '';
  @Prop() clearInput: () => void = () => {};
  @Prop() config: CoreConfigSDK = {
    apiKey: '',
    endpointURL: '',
    index: [],
  };
  @Prop() customStylesForInput: string | Record<string, string> = {};
  @Prop() inputCaptionValue = '';
  @Prop() labelForInput = '';
  @Prop() placeholderValue = 'Search here';
  @Prop() rightToLeftOrientation = false;
  @Prop() searchContainerClass = '';

  @Event() querySubmit: EventEmitter<string>;

  @State() error = false;
  @State() query = '';
  @State() searchResults = '';

  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private debounceDelay = 300; // 300ms debounce delay
  private searchStore = useSearchcraftStore.getState();

  componentDidLoad() {
    const searchcraft = new SearchcraftCore(this.config);
    this.searchStore.initialize(searchcraft, true);
    console.log('Component initialized');
  }

  handleInputChange = (event: ScInputCustomEvent<string>) => {
    this.query = event.detail;
    console.log('Input changed:', this.query);

    this.querySubmit.emit(this.query);

    // Clear the previous debounce timeout
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    // Set a new debounce timeout
    this.debounceTimeout = setTimeout(() => {
      console.log('Debounced search triggered');
      this.runSearch();
    }, this.debounceDelay);
  };

  handleClearInput = () => {
    this.query = '';
    console.log('Input cleared');

    if (typeof this.clearInput === 'function') {
      this.clearInput();
    }

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.error = false;
    this.searchResults = '';
  };

  private runSearch = async () => {
    console.log('Running search with query:', this.query);

    if (this.query.trim() === '') {
      this.error = true;
      this.searchResults = '';
    } else {
      this.error = false;
      this.searchStore.setQuery(this.query);

      try {
        await this.searchStore.search();
        this.searchResults = JSON.stringify(this.searchStore.searchResults);
        console.log('Search results:', this.searchResults);
      } catch (error) {
        console.error('Search error:', error);
        this.error = true;
      }
    }
  };

  handleFormSubmit = async (event: Event) => {
    console.log('Form submitted');
    event.preventDefault();
    await this.runSearch();
  };

  render() {
    const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';
    const parsedCustomStyles = parseCustomStyles(this.customStylesForInput);
    return (
      <form class={`${formClass}`} onSubmit={this.handleFormSubmit}>
        <searchcraft-input-label label={this.labelForInput} />
        <div class='searchContainer'>
          <searchcraft-input
            customStyles={parsedCustomStyles}
            input-caption-value={this.inputCaptionValue}
            onClearInput={this.handleClearInput}
            onSearchInputChange={this.handleInputChange}
            placeholder-value={this.placeholderValue}
            query={this.query}
            right-to-left-orientation={this.rightToLeftOrientation}
          />
        </div>
        {this.error && (
          <searchcraft-error-message errorMessage='Please enter a search query.' />
        )}
      </form>
    );
  }
}
