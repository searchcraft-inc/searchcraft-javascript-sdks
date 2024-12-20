import { Component, h, State } from '@stencil/core';
import classNames from 'classnames';
import { useSearchcraftStore } from '@provider/store';

import { formatNumberWithCommas } from '@utils/utils';

@Component({
  tag: 'searchcraft-results-info',
  styleUrl: 'searchcraft-results-info.module.scss',
  shadow: false,
})
export class SearchcraftResultsInfo {
  @State() isRequesting = false;
  @State() resultsCount = 0;
  @State() responseTime = '';
  @State() query = '';

  unsubscribe: () => void;

  connectedCallback = () => {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.isRequesting = state.isRequesting;
      this.resultsCount = state.searchResults?.data?.count || 0;
      this.responseTime = (
        (state.searchResults?.data?.time_taken || 0) * 1000
      ).toFixed(2);
      this.query = state.query || '';
    });
  };

  disconnectedCallback = () => {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  };

  render() {
    if (!this.query || this.resultsCount === 0) {
      return null;
    }
    const formattedResults = formatNumberWithCommas(this.resultsCount);
    return (
      <div
        class={classNames(
          'resultsInfoContainer',
          'searchcraft-results-info-container',
        )}
      >
        <p
          class={classNames(
            'resultsInfoContent',
            'searchcraft-results-info-content',
          )}
        >
          {formattedResults} results found in {this.responseTime}ms
        </p>
      </div>
    );
  }
}
