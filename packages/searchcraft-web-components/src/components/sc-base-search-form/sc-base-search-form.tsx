import { Component, h, State } from '@stencil/core';
import { CoreSDK as SearchcraftCore } from '@searchcraft/core';

import { useSearchcraftStore, useThemeStore } from '../../providers/Provider';

@Component({
  tag: 'sc-base-search-form',
  styleUrl: 'sc-base-search-form.module.scss',
  shadow: true,
})
export class ScBaseSearchForm {
  @State() query = '';
  @State() searchResults: string | null = null;

  private searchStore = useSearchcraftStore.getState();
  private themeStore = useThemeStore.getState();

  componentWillLoad() {
    const searchcraft = new SearchcraftCore({
      index: ['scraftdemo_movies'],
      apiKey: '1234.909.jmk',
      endpointURL: 'http://localhost:3000',
    });
    this.searchStore.initialize(searchcraft, true);
  }

  handleSearch = async () => {
    this.searchStore.setQuery(this.query);
    await this.searchStore.search();
    console.log(this.searchStore);
    this.searchResults = JSON.stringify(this.searchStore.searchResults);
  };

  toggleTheme = () => {
    this.themeStore.toggleTheme();
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleTheme} type='button'>
          Toggle Theme
        </button>
        <input
          type='text'
          value={this.query}
          onInput={(event: InputEvent) => {
            const input = event.target as HTMLInputElement;
            this.query = input.value;
          }}
        />
        <button onClick={this.handleSearch} type='button'>
          Search
        </button>
        <pre>{this.searchResults}</pre>
      </div>
    );
  }
}
