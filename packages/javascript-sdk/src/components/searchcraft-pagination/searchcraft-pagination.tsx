import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { Component, Prop, State, h } from '@stencil/core';
import classNames from 'classnames';

/**
 * This web component is designed to facilitate pagination of search results. Once a query is submitted, calculates the number for pages.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftPagination } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftPagination } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <searchcraft-pagination />
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftPagination />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftPagination />
 * ```
 */
@Component({
  tag: 'searchcraft-pagination',
  shadow: false,
})
export class SearchcraftPagination {
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  /**
   * Whether to scroll to the top of the search results when pagination buttons are clicked.
   * @default true
   */
  @Prop() scrollToTop?: boolean = true;
  // store vars
  @State() searchTerm;
  @State() searchResultsPerPage;
  @State() searchResultsPage;
  @State() searchResultsCount;
  @State() searchClientRequestProperties;

  // local vars
  @State() searchResultsPagesCount = 1;
  @State() searchResultsRangeMin = 1;
  @State() searchResultsRangeMax = 1;

  // store functions
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
      this.searchResultsRangeMin =
        (this.searchResultsPage - 1) * this.searchResultsPerPage + 1;
      this.searchResultsRangeMax =
        (this.searchResultsPerPage - 1) * this.searchResultsPerPage +
        this.searchResultsPerPage;

      // store functions
      this.setSearchResultsPage = state.setSearchResultsPage;
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

  /**
   * Smooth scroll to the top of the search results component
   */
  private scrollAnimationId?: number;
  private smoothScrollToSearchResults() {
    if (!this.scrollToTop) {
      return;
    }

    const searchResultsElement = document.querySelector('searchcraft-search-results .searchcraft-search-results');

    if (!searchResultsElement) {
      return;
    }

    // Cancel any in-flight scroll animation
    if (this.scrollAnimationId) {
      cancelAnimationFrame(this.scrollAnimationId);
    }

    const elementRect = searchResultsElement.getBoundingClientRect();
    const scrollOffset = 200;
    const targetPosition = elementRect.top + window.scrollY - scrollOffset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let startTime: number | null = null;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - 2 ** (-10 * t);
    };

    const animation = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutExpo(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        this.scrollAnimationId = requestAnimationFrame(animation);
      } else {
        this.scrollAnimationId = undefined;
      }
    };

    this.scrollAnimationId = requestAnimationFrame(animation);
  }

  handleGoToPage(page: number) {
    this.setSearchResultsPage(page);
    if (this.scrollToTop) {
      this.smoothScrollToSearchResults();
    }
  }

  renderOddPaginationItem(page: number) {
    return (
      <li>
        <button
          class={classNames('searchcraft-pagination-item', {
            'searchcraft-pagination-item-active':
              this.searchResultsPage === page,
          })}
          onClick={() => this.handleGoToPage(page)}
          type='button'
        >
          {page}
        </button>
      </li>
    );
  }

  renderEvenPaginationItem(page: number) {
    if (this.searchResultsPagesCount <= page) {
      return;
    }

    if (
      this.searchResultsPagesCount <= 5 ||
      page < Math.ceil(this.searchResultsPagesCount / 2) // is the first or second even pagination item
        ? this.searchResultsPage <= page + 1
        : this.searchResultsPage >= page - 1
    ) {
      return (
        <li>
          <button
            class={classNames('searchcraft-pagination-item', {
              'searchcraft-pagination-item-active':
                this.searchResultsPage === page,
            })}
            onClick={() => this.handleGoToPage(page)}
            type='button'
          >
            {page}
          </button>
        </li>
      );
    }

    return (
      <li>
        <span class='searchcraft-pagination-item'>...</span>
      </li>
    );
  }

  renderMiddlePaginationItem() {
    if (this.searchResultsPagesCount <= 3) {
      return;
    }

    if (
      this.searchResultsPagesCount <= 5 ||
      this.searchResultsPage <= 3 ||
      this.searchResultsPage >= this.searchResultsPagesCount - 2
    ) {
      return (
        <li>
          <button
            class={classNames('searchcraft-pagination-item', {
              'searchcraft-pagination-item-active':
                this.searchResultsPage === 3 ||
                this.searchResultsPage === this.searchResultsPagesCount - 2,
            })}
            type='button'
            onClick={() =>
              this.handleGoToPage(
                this.searchResultsPage >= this.searchResultsPagesCount - 2
                  ? this.searchResultsPagesCount - 2
                  : 3,
              )
            }
          >
            {this.searchResultsPage >= this.searchResultsPagesCount - 2
              ? this.searchResultsPagesCount - 2
              : 3}
          </button>
        </li>
      );
    }

    return (
      <li>
        <span class='searchcraft-pagination-item searchcraft-pagination-item-active'>
          {this.searchResultsPage}
        </span>
      </li>
    );
  }

  render() {
    // Check if this is an initialQuery case (string requestProperties with empty searchTerm)
    const isInitialQuery =
      typeof this.searchClientRequestProperties === 'string' &&
      this.searchTerm.trim() === '';

    // early return if there isn't a searchTerm (unless it's initialQuery) or there is 1 or fewer pages of results
    if (
      (!this.searchTerm && !isInitialQuery) ||
      this.searchResultsPagesCount <= 1
    ) {
      return;
    }

    return (
      <div class='searchcraft-pagination'>
        <div class='searchcraft-pagination-control'>
          <searchcraft-button
            disabled={this.searchResultsPage === 1}
            hierarchy='tertiary'
            onButtonClick={() =>
              this.handleGoToPage(Math.max(1, this.searchResultsPage - 1))
            }
            label='Previous'
            iconPosition='left'
            icon={
              <svg
                class='searchcraft-button-icon'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Previous page icon</title>
                <path
                  d='M12.5 15L7.5 10L12.5 5'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            iconOnly
          />
        </div>
        <ul class='searchcraft-pagination-list'>
          {this.renderOddPaginationItem(1)}
          {this.renderEvenPaginationItem(2)}
          {this.renderMiddlePaginationItem()}
          {this.renderEvenPaginationItem(
            this.searchResultsPagesCount > 4
              ? this.searchResultsPagesCount - 1
              : 4,
          )}
          {this.renderOddPaginationItem(this.searchResultsPagesCount)}
        </ul>
        <div class='searchcraft-pagination-control'>
          <searchcraft-button
            disabled={this.searchResultsPage === this.searchResultsPagesCount}
            hierarchy='tertiary'
            onButtonClick={() => {
              this.handleGoToPage(
                Math.min(
                  this.searchResultsPagesCount,
                  this.searchResultsPage + 1,
                ),
              );
            }}
            label='Next'
            iconPosition='right'
            icon={
              <svg
                class='searchcraft-button-icon'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Next page icon</title>
                <path
                  d='M7.5 15L12.5 10L7.5 5'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            iconOnly
          />
        </div>
      </div>
    );
  }
}
