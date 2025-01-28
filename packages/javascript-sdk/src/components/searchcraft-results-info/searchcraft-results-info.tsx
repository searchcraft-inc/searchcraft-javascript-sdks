import { Component, h, State } from '@stencil/core';

import { useSearchcraftStore } from '@provider/store';

import { formatNumberWithCommas } from '@utils';

/**
 * This web component is designed to display the number of results returned from a search query.
 * It provides users with real-time feedback on the scale of the results, such as the total number of items found.
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
  @State() isRequesting = false;
  @State() resultsCount = 0;
  @State() responseTime = '';
  @State() query = '';

  unsubscribe: () => void = () => {};

  connectedCallback() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.isRequesting = state.isRequesting;
      this.resultsCount = state.searchResults?.data?.count || 0;
      this.responseTime = (
        (state.searchResults?.data?.time_taken || 0) * 1000
      ).toFixed(2);
      this.query = state.query || '';
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
