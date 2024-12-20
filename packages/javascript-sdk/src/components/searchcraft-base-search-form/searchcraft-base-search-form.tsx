import { Component, h, Event, Prop, State } from '@stencil/core';
import classNames from 'classnames';

import * as core from '@searchcraft/core';

import { useSearchcraftStore, useThemeStore } from '@provider/store';

import type { ScInputCustomEvent } from '@components/searchcraft-input/searchcraft-input';

import packageJson from '../../../package.json';

@Component({
  tag: 'searchcraft-base-search-form',
  styleUrl: 'searchcraft-base-search-form.module.scss',
  shadow: false,
})
export class SearchcraftBaseSearchForm {
  @Prop() config: core.SearchcraftConfig = {
    readKey: '',
    endpointURL: '',
    index: [],
    organizationId: '',
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
    const searchcraft = new core.SearchcraftCore(this.config, {
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
    const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';
    return (
      <form
        class={classNames(`${formClass}`, 'searchcraft-base-search-form')}
        onSubmit={this.handleFormSubmit}
      >
        <searchcraft-input-label label={this.labelForInput} />
        <div
          class={classNames(
            'searchContainer',
            'searchcraft-base-search-form-input-container',
          )}
        >
          {this.rightToLeftOrientation && <searchcraft-button />}
          <searchcraft-input
            onClearInput={this.handleClearInput}
            onSearchInputChange={this.handleSearchInputChange}
            query={this.query}
            rightToLeftOrientation={this.rightToLeftOrientation}
          />
          {!this.rightToLeftOrientation && (
            <searchcraft-button onButtonClick={this.handleFormSubmit} />
          )}
        </div>
        {this.error && (
          <searchcraft-error-message errorMessage={this.errorMessage} />
        )}
      </form>
    );
  }
}
