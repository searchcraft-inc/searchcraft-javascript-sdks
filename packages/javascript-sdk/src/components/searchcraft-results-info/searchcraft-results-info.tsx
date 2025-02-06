import { Component, h, State } from '@stencil/core';

import { useSearchcraftStore } from '@provider/store';

import { formatNumberWithCommas } from '@utils';

/**
 * This web component is designed to display the number of results returned from a search query.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-results-info />
 * ```
 */
@Component({
  tag: 'searchcraft-results-info',
  shadow: false,
})
export class SearchcraftResultsInfo {
  @State() resultsCount = 0;
  @State() responseTime = '';
  @State() searchTerm = '';

  unsubscribe: () => void = () => {};

  connectedCallback() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.resultsCount = state.searchClientResponseItems.length;
      this.responseTime = ((state.searchResponseTimeTaken || 0) * 1000).toFixed(
        2,
      );
      this.searchTerm = state.searchTerm || '';
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    if (!this.searchTerm || this.resultsCount === 0) {
      return null;
    }
    const formattedResults = formatNumberWithCommas(this.resultsCount);
    return (
      <div class='searchcraft-results-info-container'>
        <p class='searchcraft-results-info-content'>
          {formattedResults} results found in {this.responseTime}ms
        </p>
      </div>
    );
  }
}
