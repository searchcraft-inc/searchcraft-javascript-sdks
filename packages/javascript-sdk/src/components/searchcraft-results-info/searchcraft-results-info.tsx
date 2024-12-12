// src/components/search-results-info/search-results-info.tsx
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

  // private searchStore = useSearchcraftStore.getState();
  unsubscribe: () => void;

  connectedCallback() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.isRequesting = state.isRequesting;
      this.resultsCount = state.searchResults?.data?.count;
      this.responseTime = (
        state.searchResults?.data?.time_taken * 1000
      ).toFixed(2);
      console.log(state.searchResults?.data);
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <div class='container'>
        {this.isRequesting ? (
          <p>Loading...</p>
        ) : (
          <p class='resultsInfo'>
            {this.resultsCount} results found in {this.responseTime}ms
          </p>
        )}
      </div>
    );
  }
}
