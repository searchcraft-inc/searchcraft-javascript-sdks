import { Component, h, Event, Prop, State } from '@stencil/core';
import {
  type CoreConfigSDK,
  CoreSDK as SearchcraftCore,
} from '@searchcraft/core';

import { useSearchcraftStore, useThemeStore } from '@provider/store';

import type { ScInputCustomEvent } from '@components/sc-input/sc-input';

@Component({
  tag: 'sc-base-search-form',
  styleUrl: 'sc-base-search-form.module.scss',
  shadow: true,
})
export class ScBaseSearchForm {
  @Prop() config: CoreConfigSDK = {
    apiKey: '',
    endpointURL: '',
    index: [],
  };
  @Prop() errorMessage = 'Search was unsuccessful';
  @Prop() labelForInput = 'Search';
  @Prop() rightToLeftOrientation = false;

  @Event() clearInput = () => {};

  @State() error = false;
  @State() query = '';
  @State() searchResults: string | null = null;

  private searchStore = useSearchcraftStore.getState();
  private themeStore = useThemeStore.getState();

  componentDidLoad = () => {
    const searchcraft = new SearchcraftCore(this.config);
    this.searchStore.initialize(searchcraft, true);
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    if (this.query.trim() === '') {
      this.error = true;
    } else {
      this.error = false;
      this.searchStore.setQuery(this.query);
      await this.searchStore.search();
      this.searchResults = JSON.stringify(this.searchStore.searchResults);
    }
  };

  handleSearchInputChange = (event: ScInputCustomEvent<string>) => {
    this.query = event.detail;
  };

  handleClearInput = () => {
    this.query = '';
    this?.clearInput();
  };

  toggleTheme = () => {
    this.themeStore.toggleTheme();
  };

  render() {
    return (
      <form
        class={this.rightToLeftOrientation ? 'formRTL' : 'formLTR'}
        onSubmit={this.handleFormSubmit}
      >
        <sc-input-label label={this.labelForInput} />
        <div class='searchContainer'>
          {this.rightToLeftOrientation && <sc-button />}
          <sc-input
            onClearInput={this.handleClearInput}
            rightToLeftOrientation={this.rightToLeftOrientation}
            onSearchInputChange={this.handleSearchInputChange}
            query={this.query}
          />
          {!this.rightToLeftOrientation && (
            <sc-button onButtonClick={this.handleFormSubmit} />
          )}
        </div>
        {this.error && <sc-error-message errorMessage={this.errorMessage} />}
      </form>
    );
  }
}
