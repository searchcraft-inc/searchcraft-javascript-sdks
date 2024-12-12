import { Component, h, Prop, State } from '@stencil/core';
import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'searchcraft-toggle-button',
  styleUrl: 'searchcraft-toggle-button.module.scss',
  shadow: true,
})
export class SearchcraftToggleButton {
  /**
   * Type of the toggle - determines what it controls
   * 'mode': toggles between 'fuzzy' and 'normal'
   * 'sort': toggles between 'asc' and 'desc'
   */
  @Prop() type: 'mode' | 'sort' = 'mode';

  @State() isActive = false;
  @State() query = ''; // Track the query
  @State() resultsCount = 0; // Track the count of search results

  private unsubscribe: () => void;
  private searchStore = useSearchcraftStore.getState();

  componentDidLoad() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.query = state.query || '';
      this.resultsCount = state.searchResults?.data?.hits?.length || 0;
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  private handleToggle = async () => {
    this.isActive = !this.isActive;

    if (this.type === 'mode') {
      const mode = this.isActive ? 'normal' : 'fuzzy';
      this.searchStore.setSearchParams({
        mode,
      });
    } else if (this.type === 'sort') {
      const sort = this.isActive ? 'asc' : 'desc';
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
    // Render only if there's a query and results exist
    if (!this.query || this.resultsCount === 0) {
      return null;
    }

    const label =
      this.type === 'mode'
        ? 'Exact Match'
        : this.type === 'sort'
          ? 'Most Recent'
          : '';

    return (
      <div class='toggle-container'>
        <span>{label}</span>
        <button
          class={`toggle-wrapper ${this.isActive ? 'active' : ''}`}
          onClick={this.handleToggle}
          type='button'
        >
          <div class={`toggle-switch ${this.isActive ? 'active' : ''}`} />
        </button>
      </div>
    );
  }
}
