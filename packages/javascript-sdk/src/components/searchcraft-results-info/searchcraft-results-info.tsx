import { Component, h, State } from '@stencil/core';
import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'searchcraft-results-info',
  styleUrl: 'searchcraft-results-info.module.scss',
  shadow: true,
})
export class SearchcraftResultsInfo {
  @State() isRequesting = false;
  @State() resultsCount = 0;
  @State() responseTime = '';
  @State() query = ''; // Track the query

  unsubscribe: () => void;

  connectedCallback() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.isRequesting = state.isRequesting;
      this.resultsCount = state.searchResults?.data?.count || 0;
      this.responseTime = (
        (state.searchResults?.data?.time_taken || 0) * 1000
      ).toFixed(2);
      this.query = state.query || ''; // Update query from store
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    if (!this.query || this.resultsCount === 0) {
      return null;
    }

    return (
      <div class='container'>
        <p class='resultsInfo'>
          {this.resultsCount} results found in {this.responseTime}ms
        </p>
      </div>
    );
  }
}
