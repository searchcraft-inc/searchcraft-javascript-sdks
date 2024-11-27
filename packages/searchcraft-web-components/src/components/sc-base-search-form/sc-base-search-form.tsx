import { Component, h, Prop, State } from '@stencil/core';
import { CoreSDK as SearchcraftCore } from '@searchcraft/core';

import { useSearchcraftStore, useThemeStore } from '../../providers/Provider';
import type { ScInputCustomEvent } from '../sc-input/sc-input';

@Component({
  tag: 'sc-base-search-form',
  styleUrl: 'sc-base-search-form.module.scss',
  shadow: true,
})
export class ScBaseSearchForm {
  @Prop() errorMessage = 'Search was unsuccessful';
  @Prop() labelForInput = 'Search';
  @Prop() rightToLeftOrientation = false;

  @State() error = false;
  @State() query = '';
  @State() searchResults: string | null = null;

  private searchStore = useSearchcraftStore.getState();
  private themeStore = useThemeStore.getState();

  componentDidLoad = () => {
    const searchcraft = new SearchcraftCore({
      index: ['scraftdemo_movies'],
      apiKey: '1234.909.jmk',
      endpointURL: 'http://localhost:3000',
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
