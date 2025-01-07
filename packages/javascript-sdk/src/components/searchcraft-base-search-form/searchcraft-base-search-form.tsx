import { Component, h, Event, Prop, State } from '@stencil/core';

import { type SearchcraftConfig, SearchcraftCore } from '@searchcraft/core';

import { useSearchcraftStore, useThemeStore } from '@provider/store';

import type { ScInputCustomEvent } from '@components/searchcraft-input/searchcraft-input';

import packageJson from '../../../package.json';

@Component({
  tag: 'searchcraft-base-search-form',
  styleUrl: 'searchcraft-base-search-form.module.scss',
  shadow: false,
})
export class SearchcraftBaseSearchForm {
  @Prop() config: SearchcraftConfig = {
    readKey: '',
    endpointURL: '',
    index: [],
  };
  @Prop() errorMessage = 'Search was unsuccessful';
  @Prop() inputLabel = 'Search';
  @Prop() buttonLabel = 'Find';
  @Prop() buttonPlacement: 'right' | 'left' = 'right';

  @Event() clearInput = () => {};

  @State() error = false;
  @State() query = '';
  @State() searchResults: string | null = null;

  private searchStore = useSearchcraftStore.getState();
  private themeStore = useThemeStore.getState();

  componentDidLoad = () => {
    const searchcraft = new SearchcraftCore(this.config, {
      sdkName: packageJson.name,
      sdkVersion: packageJson.version,
    });
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
        class='searchcraft-base-search-form'
        onSubmit={this.handleFormSubmit}
      >
        <searchcraft-input-label label={this.inputLabel} />
        <div class='searchcraft-base-search-form-input-container'>
          {this.buttonPlacement === 'left' && (
            <searchcraft-button
              onButtonClick={this.handleFormSubmit}
              label={this.buttonLabel}
            />
          )}
          <searchcraft-input
            onClearInput={this.handleClearInput}
            onSearchInputChange={this.handleSearchInputChange}
            query={this.query}
          />
          {this.buttonPlacement === 'right' && (
            <searchcraft-button
              onButtonClick={this.handleFormSubmit}
              label={this.buttonLabel}
            />
          )}
        </div>
        {this.error && (
          <searchcraft-error-message errorMessage={this.errorMessage} />
        )}
      </form>
    );
  }
}
