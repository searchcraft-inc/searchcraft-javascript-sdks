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
  @Prop() inputIconHeight = 20;
  @Prop() inputIconWidth = 20;
  @Prop() labelForInput = '';
  @Prop() placeholderValue = 'Search here';
  @Prop() rightToLeftOrientation = false;
  @Prop() searchContainerClass = '';

  @Event() querySubmit: EventEmitter<string>;

  @State() error = false;
  @State() isRequesting = false;
  @State() query = '';
  @State() searchResults = '';

  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private debounceDelay = 0;
  private searchStore = useSearchcraftStore.getState();
  unsubscribe: () => void;

  componentDidLoad() {
    const searchcraft = new SearchcraftCore(this.config);
    this.searchStore.initialize(searchcraft, true);

    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.isRequesting = state.isRequesting;
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleInputChange = (event: ScInputCustomEvent<string>) => {
    this.query = event.detail;
    this.searchStore.setQuery(this.query); // Update query in the store
    this.querySubmit.emit(this.query);
  };

  handleInputKeyUp = (event: ScInputCustomEvent<string>) => {
    const target = event.detail;
    this.query = target;
    this.searchStore.setQuery(this.query); // Update query in the store
    this.querySubmit.emit(this.query);

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      this.query.trim() !== '' && this.runSearch();
    }, this.debounceDelay);
  };

  handleClearInput = () => {
    this.query = '';
    this.searchStore.setQuery(''); // Clear query in the store

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
    if (this.query.trim() === '') {
      this.error = true;
      this.searchResults = '';
    } else {
      this.error = false;
      this.searchStore.setQuery(this.query);

      try {
        await this.searchStore.search();
        this.searchResults = JSON.stringify(this.searchStore.searchResults);
      } catch (error) {
        this.error = true;
      }
    }
  };

  handleFormSubmit = async (event: Event) => {
    event.preventDefault();
    await this.runSearch();
  };

  render() {
    const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';
    const parsedCustomStyles = parseCustomStyles(this.customStylesForInput);
    return (
      <form class={`${formClass}`} onSubmit={this.handleFormSubmit}>
        <searchcraft-input-label label={this.labelForInput} />
        <searchcraft-input
          customStyles={parsedCustomStyles}
          input-caption-value={this.inputCaptionValue}
          is-requesting={this.isRequesting}
          input-icon-height={this.inputIconHeight}
          input-icon-width={this.inputIconWidth}
          onClearInput={this.handleClearInput}
          onInputKeyUp={this.handleInputKeyUp}
          onSearchInputChange={this.handleInputChange}
          placeholder-value={this.placeholderValue}
          query={this.query}
          right-to-left-orientation={this.rightToLeftOrientation}
        />
        {this.error && (
          <searchcraft-error-message errorMessage='Please enter a search query.' />
        )}
      </form>
    );
  }
}
