import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { Component, Prop, State, h } from '@stencil/core';

/**
 * This web component is designed to choose the number of search results displayed.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftSearchResultsPerPage } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftSearchResultsPerPage } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <!-- index.html -->
 * <searchcraft-search-results-per-page increment="20" />
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftSearchResultsPerPage increment={20} />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftSearchResultsPerPage increment="20" />
 * ```
 */
@Component({
  tag: 'searchcraft-search-results-per-page',
  shadow: false,
})
export class SearchcraftSearchResultsPerPage {
  /**
   * The amount the options will increase (e.g. 20 = [20, 40, 60, 80, 100]).
   * The base value is defined by the `searchResultsPerPage` option in the configuration.
   */
  @Prop() increment: string | number = 20;
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;

  // store vars
  @State() searchTerm;
  @State() searchResultsPage;
  @State() searchResultsPerPage;
  @State() searchResultsCount;
  @State() searchResultsPagesCount;
  @State() searchClientRequestProperties;

  // local vars
  @State() initialSearchResultsPerPage;

  // store functions
  @State() setSearchResultsPerPage: (perPage: number) => void = () => {};
  @State() setSearchResultsPage: (page: number) => void = () => {};

  private unsubscribe: () => void = () => {};
  private cleanupCore?: () => void;

  onCoreAvailable(core: SearchcraftCore) {
    this.unsubscribe = core.store.subscribe((state) => {
      // store vars
      this.searchTerm = state.searchTerm;
      this.searchResultsPerPage = state.searchResultsPerPage;
      this.searchResultsPage = state.searchResultsPage;
      this.searchResultsCount = state.searchResultsCount;
      this.searchClientRequestProperties = state.searchClientRequestProperties;

      // local vars
      this.searchResultsPagesCount = Math.ceil(
        this.searchResultsCount / this.searchResultsPerPage,
      );

      // store functions
      this.setSearchResultsPage = state.setSearchResultsPage;
      this.setSearchResultsPerPage = state.setSearchResultsPerPage;
    });

    this.initialSearchResultsPerPage =
      core.store.getState().searchResultsPerPage;
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

    // early return if there isn't a searchTerm (unless it's initialQuery) or there is 1 or fewer pages of results
    if ((!this.searchTerm && !isInitialQuery) || this.searchResultsPagesCount <= 1) {
      return;
    }

    return (
      <div class='searchcraft-search-results-per-page'>
        <div class='searchcraft-search-results-per-page-select'>
          <label
            class='searchcraft-search-results-per-page-select-label'
            htmlFor='searchcraft-search-results-per-page-select-input'
          >
            Results Per Page
          </label>
          <div class='searchcraft-search-results-per-page-select-input'>
            <searchcraft-select
              inputId='searchcraft-search-results-per-page-select-input'
              name='results-per-page'
              options={[...Array(5)].map((_, index) => {
                const value =
                  this.initialSearchResultsPerPage +
                  Number(this.increment) * index;
                return {
                  label: `${value}`,
                  value,
                };
              })}
              onSelectChange={(event) => {
                this.setSearchResultsPerPage(Number(event.detail));
                this.setSearchResultsPage(1);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
