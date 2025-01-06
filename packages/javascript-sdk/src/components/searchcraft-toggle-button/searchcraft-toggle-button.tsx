import { Component, h, Prop, State } from '@stencil/core';
import classNames from 'classnames';

import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'searchcraft-toggle-button',
  styleUrl: 'searchcraft-toggle-button.module.scss',
  shadow: false,
})
export class SearchcraftToggleButton {
  /**
   * Type of the toggle - determines what it controls
   * 'mode': toggles between 'fuzzy' and 'normal'
   * 'sort': toggles between 'asc' and 'desc'
   */
  @Prop() type: 'mode' | 'sort' = 'mode';

  @State() isActive = false;
  @State() query = '';
  @State() resultsCount = 0;
  private autoSearchFormElement: HTMLElement | null = null;
  private searchStore = useSearchcraftStore.getState();
  private unsubscribe: () => void;

  componentDidLoad() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.query = state.query || '';
      this.resultsCount = state.searchResults?.data?.hits?.length || 0;
    });

    this.autoSearchFormElement = document.querySelector(
      'searchcraft-auto-search-form',
    );
    if (this.autoSearchFormElement) {
      this.autoSearchFormElement.addEventListener(
        'inputClearedOrNoResults',
        this.handleSearchRequest,
      );
    }
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    if (this.autoSearchFormElement) {
      this.autoSearchFormElement.addEventListener(
        'inputClearedOrNoResults',
        this.handleSearchRequest,
      );
    }
  }

  handleSearchRequest = () => {
    this.isActive = false;
    this.searchStore.setSearchParams({
      mode: 'fuzzy',
      sort: 'asc',
    });
  };

  private handleToggle = async () => {
    this.isActive = !this.isActive;

    if (this.type === 'mode') {
      const mode = this.isActive ? 'normal' : 'fuzzy';
      this.searchStore.setSearchParams({
        mode,
      });
    } else if (this.type === 'sort') {
      const sort = this.isActive ? 'desc' : 'asc';
      this.searchStore.setSearchParams({
        sort,
      });
    }

    try {
      await this.searchStore.search();
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  render() {
    if (!this.query || this.resultsCount === 0) {
      return null;
    }
    const toggleContainerStyle = `toggleWrapper ${this.isActive ? 'active' : ''}`;
    const toggleSwitchStyle = `toggleSwitch ${this.isActive ? 'active' : ''}`;

    return (
      <button
        class={classNames(
          toggleContainerStyle,
          'searchcraft-toggle-button-container',
        )}
        onClick={this.handleToggle}
        type='button'
      >
        <div
          class={classNames(toggleSwitchStyle, 'searchcraft-toggle-switch')}
        />
      </button>
    );
  }
}
