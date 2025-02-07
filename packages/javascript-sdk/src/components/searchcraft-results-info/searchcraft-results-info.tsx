import { Component, h, State, Prop } from '@stencil/core';
import classNames from 'classnames';

import { useSearchcraftStore } from '@provider/store';

import { formatNumberWithCommas, parseCustomStyles } from '@utils';

/**
 * This web component is designed to display the number of results returned from a search query.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <script>
 *  const resultsInfo = document.querySelector('searchcraft-results-info');
 *  resultsInfo.customFormatter = (range, count, responseTime) =>
 *    `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
 * </script>
 *
 * <searchcraft-results-info />
 * ```
 */
@Component({
  tag: 'searchcraft-results-info',
  shadow: false,
})
export class SearchcraftResultsInfo {
  /**
   * The custom formatter for the resulting string.
   *
   * @example
   * ```ts
   *  resultsInfo.customFormatter = (range, count, responseTime) =>
   *    `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
   * ```
   */
  @Prop() customFormatter?: (
    range: [string, string],
    count: string,
    responseTime: string,
  ) => void;
  /**
   * The custom styles object.
   */
  @Prop() customStyles?: string;

  // store vars
  @State() searchTerm;
  @State() searchResultsPage;
  @State() searchResultsPerPage;
  @State() searchResultsCount;

  // local vars
  @State() count = 0;
  @State() range: number[] = [0, 0];
  @State() responseTime = '0';

  unsubscribe: () => void = () => {};

  connectedCallback() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      // store vars
      this.searchTerm = state.searchTerm;
      this.searchResultsPage = state.searchResultsPage;
      this.searchResultsPerPage = state.searchResultsPerPage;
      this.searchResultsCount = state.searchResultsCount;

      // local vars
      this.count = this.searchResultsCount;
      this.range[0] =
        this.searchResultsPage <= 1
          ? 1
          : this.searchResultsPerPage * (this.searchResultsPage - 1);
      this.range[1] = this.searchResultsPerPage * this.searchResultsPage;
      this.range[1] =
        this.range[1] > this.searchResultsCount
          ? this.searchResultsCount
          : this.range[1];
      this.responseTime = ((state.searchResponseTimeTaken || 0) * 1000).toFixed(
        2,
      );
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    if (!this.searchTerm || this.searchResultsCount === 0) {
      return null;
    }

    return (
      <p
        class={classNames(
          'searchcraft-results-info',
          parseCustomStyles(this.customStyles || {}),
        )}
      >
        {this.customFormatter
          ? this.customFormatter(
              [
                formatNumberWithCommas(this.range[0]),
                formatNumberWithCommas(this.range[1]),
              ],
              formatNumberWithCommas(this.count),
              this.responseTime,
            )
          : `${this.count} results found in ${this.responseTime}ms`}
      </p>
    );
  }
}
