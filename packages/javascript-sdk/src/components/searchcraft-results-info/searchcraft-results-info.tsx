import { Component, h, State, Prop } from '@stencil/core';

import type { ResultsInfoTemplate } from '@searchcraft/core';

import { searchcraftStore } from '@store';

import { formatNumberWithCommas, html } from '@utils';

/**
 * This web component is designed to display the number of results returned from a search query.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftResultsInfo } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftResultsInfo } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <!-- index.html -->
 * <searchcraft-results-info />
 * ```
 *
 * ```js
 * // index.js
 * const resultsInfo = document.querySelector('searchcraft-results-info');
 *
 * resultsInfo.template = (info, { html }) => html`
 *   ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
 * `;
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftResultsInfo
 *   template={(info, { html }) => html`
 *     ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
 *   `}
 * />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftResultsInfo
 *   :template={(info, { html }) => html`
 *     ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
 *   `}
 * />
 * ```
 */
@Component({
  tag: 'searchcraft-results-info',
  shadow: false,
})
export class SearchcraftResultsInfo {
  /**
   * A callback function responsible for rendering the results info.
   */
  @Prop() template?: ResultsInfoTemplate;

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
    this.unsubscribe = searchcraftStore.subscribe((state) => {
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
      <p class='searchcraft-results-info'>
        {typeof this.template !== 'undefined'
          ? this.template(
              {
                range: [Number(this.range[0]), Number(this.range[1])],
                count: this.count,
                responseTime: this.responseTime,
              },
              { html },
            )
          : `${formatNumberWithCommas(this.count)} results found in ${this.responseTime}ms`}
      </p>
    );
  }
}
