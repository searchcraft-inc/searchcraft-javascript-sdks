import { searchcraftStore } from '@store';
import { Component, h, State } from '@stencil/core';
import classNames from 'classnames';

/**
 * This web component is designed to facilitate pagination of search results.
 * Once a query is submitted, calculates the number for pages.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-pagination />
 * ```
 */
@Component({
  tag: 'searchcraft-pagination',
  shadow: false,
})
export class SearchcraftPagination {
  // store vars
  @State() searchTerm;
  @State() searchResultsPerPage;
  @State() searchResultsPage;
  @State() searchResultsCount;

  // local vars
  @State() searchResultsPagesCount = 1;
  @State() searchResultsRangeMin = 1;
  @State() searchResultsRangeMax = 1;

  // store functions
  @State() setSearchResultsPage: (page: number) => void = () => {};

  private unsubscribe: () => void = () => {};

  componentDidLoad() {
    this.unsubscribe = searchcraftStore.subscribe((state) => {
      // store vars
      this.searchTerm = state.searchTerm;
      this.searchResultsPerPage = state.searchResultsPerPage;
      this.searchResultsPage = state.searchResultsPage;
      this.searchResultsCount = state.searchResultsCount;

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

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  handleGoToPage(page: number) {
    this.setSearchResultsPage(page);
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
    // early return if there isn't a searchTerm or there is 1 or fewer pages of results
    if (!this.searchTerm || this.searchResultsPagesCount <= 1) {
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
