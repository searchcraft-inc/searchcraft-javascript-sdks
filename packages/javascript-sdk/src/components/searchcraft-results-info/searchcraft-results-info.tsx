import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { Component, Prop, State, h } from '@stencil/core';

import type { ResultsInfoTemplate } from '@types';

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
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;

  // store vars
  @State() searchTerm;
  @State() searchResultsPage;
  @State() searchResultsPerPage;
  @State() searchResultsCount;
  @State() searchClientRequestProperties;

  // local vars
  @State() count = 0;
  @State() range: number[] = [0, 0];
  @State() responseTime = '0';

  unsubscribe: () => void = () => {};
  private cleanupCore?: () => void;

  onCoreAvailable(core: SearchcraftCore) {
    this.unsubscribe = core.store.subscribe((state) => {
      // store vars
      this.searchTerm = state.searchTerm;
      this.searchResultsPage = state.searchResultsPage;
      this.searchResultsPerPage = state.searchResultsPerPage;
      this.searchResultsCount = state.searchResultsCount;
      this.searchClientRequestProperties = state.searchClientRequestProperties;

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

  connectedCallback() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  disconnectedCallback() {
    this.unsubscribe?.();
    this.cleanupCore?.();
  }

  render() {
    // Check if this is an initialQuery case (string requestProperties with empty searchTerm)
    const isInitialQuery =
      typeof this.searchClientRequestProperties === 'string' &&
      this.searchTerm.trim() === '';

    // Only hide if there's no search term AND no initialQuery AND no results
    if (
      (!this.searchTerm && !isInitialQuery) ||
      this.searchResultsCount === 0
    ) {
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
