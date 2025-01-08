import {
  Component,
  Prop,
  State,
  Event,
  type EventEmitter,
  h,
} from '@stencil/core';

import {
  type SearchcraftConfig,
  SearchcraftCore,
  type SearchcraftResponse,
} from '@searchcraft/core';

import { useSearchcraftStore } from '@provider/store';
import { parseCustomStyles } from '@utils/utils';
import type { ScInputCustomEvent } from '@components/searchcraft-input/searchcraft-input';

import packageJson from '../../../package.json';

@Component({
  tag: 'searchcraft-auto-search-form',
  styleUrl: 'searchcraft-auto-search-form.module.scss',
  shadow: false,
})
export class SearchcraftAutoSearchForm {
  @Prop() autoSearchFormClass = '';
  @Prop() clearInput: () => void = () => {};
  @Prop() config: SearchcraftConfig = {
    readKey: '',
    endpointURL: '',
    index: [],
  };
  @Prop() customStylesForInput: string | Record<string, string> = {};
  @Prop() inputCaptionValue = '';
  @Prop() labelForInput = '';
  @Prop() placeholderValue = 'Search here';
  @Prop() searchContainerClass = '';

  @Event() inputClearedOrNoResults: EventEmitter<void>;
  @Event() querySubmit: EventEmitter<string>;

  @State() error = false;
  @State() isRequesting = false;
  @State() query = '';
  @State() searchResults: SearchcraftResponse | null = null;

  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private debounceDelay = 0;
  private searchStore = useSearchcraftStore.getState();
  unsubscribe: () => void;

  componentDidLoad() {
    const searchcraft = new SearchcraftCore(this.config, {
      sdkName: packageJson.name,
      sdkVersion: packageJson.version,
    });
    this.searchStore.initialize(searchcraft, true);

    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.isRequesting = state.isRequesting;
      this.searchResults = { ...state.searchResults };
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleInputChange = (event: ScInputCustomEvent<string>) => {
    this.query = event.detail;
    this.searchStore.setQuery(this.query);
    if (this.query.trim() === '') {
      this.searchStore.setQuery('');
      this.searchResults = null;
      this.inputClearedOrNoResults.emit();
      this.searchStore.setSearchResults(null);
    }
  };

  handleInputKeyUp = (event: ScInputCustomEvent<string>) => {
    const target = event.detail;
    if (target === this.query) {
      return;
    }
    this.query = target;

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      if (this.query.trim() === '') {
        this.searchStore.setQuery('');
        this.searchResults = null;
        this.searchStore.setSearchResults(null);
        this.inputClearedOrNoResults.emit();
      } else {
        this.searchStore.setQuery(this.query);
        this.querySubmit.emit(this.query);
        this.runSearch();
      }
    }, this.debounceDelay);
  };

  handleClearInput = () => {
    if (this.query === '' && !this.searchResults) {
      return;
    }
    this.query = '';
    this.searchResults = null;
    this.searchStore.setQuery('');
    this.searchStore.setSearchResults(null);

    if (typeof this.clearInput === 'function') {
      this.clearInput();
    }

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.error = false;
    this.inputClearedOrNoResults.emit();
  };

  private runSearch = async () => {
    if (this.query.trim() === '') {
      this.error = true;
      this.inputClearedOrNoResults.emit();
    } else {
      this.error = false;
      this.searchStore.setQuery(this.query);
      this.searchStore.setSelectedFilters([]);

      try {
        await this.searchStore.search();
      } catch (error) {
        this.error = true;
        this.inputClearedOrNoResults.emit();
      }
    }
  };

  handleFormSubmit = async (event: Event) => {
    event.preventDefault();
    await this.runSearch();
  };

  render() {
    const parsedCustomStyles = parseCustomStyles(this.customStylesForInput);
    return (
      <form
        class='searchcraft-auto-search-form'
        onSubmit={this.handleFormSubmit}
      >
        <searchcraft-input-label label={this.labelForInput} />
        <searchcraft-input
          customStyles={parsedCustomStyles}
          input-caption-value={this.inputCaptionValue}
          is-requesting={this.isRequesting}
          onClearInput={this.handleClearInput}
          onInputKeyUp={this.handleInputKeyUp}
          onSearchInputChange={this.handleInputChange}
          placeholder-value={this.placeholderValue}
          query={this.query}
        />
        {this.error && (
          <searchcraft-error-message errorMessage='Please enter a search query.' />
        )}
      </form>
    );
  }
}
