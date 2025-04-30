import { Component, h, Prop, State } from '@stencil/core';
import type {
  FilterItem,
  DateRangeFilterItem,
  NumericFilterItem,
  ExactMatchToggleFilterItem,
  FacetsFilterItem,
  MostRecentToggleFilterItem,
} from '@searchcraft/core';
import { searchcraftStore } from '@store';

/**
 * This web component represents a series of filters that allows users to refine and control their search queries by applying various filter criteria.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftFilterPanel } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftFilterPanel } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <!-- index.html -->
 * <searchcraft-filter-panel />
 * ```
 *
 * ```js
 * // index.js
 * const filterPanel = document.querySelector('searchcraft-filter-panel');
 *
 * if (filterPanel) {
 *   filterPanel.items = [];
 * }
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftFilterPanel items={[]} />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftFilterPanel :items="[]" />
 * ```
 */
@Component({
  tag: 'searchcraft-filter-panel',
  shadow: false,
})
export class SearchcraftFilterPanel {
  /**
   * The items to filter.
   */
  @Prop() items: FilterItem[] = [];

  @State() unsubscribe: (() => void) | undefined;
  @State() lastSearchTerm: string | undefined;

  private searchStore = searchcraftStore.getState();

  componentDidLoad() {
    this.unsubscribe = searchcraftStore.subscribe((state) => {
      if (this.lastSearchTerm !== state.searchTerm) {
        // A place to put actions to do when the query changes
      }
      this.lastSearchTerm = state.searchTerm || '';
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  handleDateRangeChanged(item: DateRangeFilterItem, min: number, max: number) {
    const start = new Date(min);
    const end = new Date(max);
    this.searchStore.addRangeValueForIndexField({
      fieldName: item.fieldName,
      value: `${item.fieldName}:[${start.toISOString()} TO ${end.toISOString()}]`,
    });

    this.searchStore.search();
  }

  handleNumericRangeChanged(fieldName: string, min: number, max: number) {
    this.searchStore.addRangeValueForIndexField({
      fieldName,
      value: `${fieldName}:[${min} TO ${max}]`,
    });
    this.searchStore.search();
  }

  handleFacetSelectionUpdated(fieldName: string, paths: string[]) {
    if (paths.length > 0) {
      this.searchStore.addFacetPathsForIndexField({
        fieldName,
        value: `${fieldName}: IN [${paths.join(' ')}]`,
      });
    } else {
      this.searchStore.removeFacetPathsForIndexField(fieldName);
    }
    this.searchStore.search();
  }

  handleExactMatchToggleUpdated(isActive: boolean) {
    this.searchStore.setSearchMode(isActive ? 'exact' : 'fuzzy');
    this.searchStore.search();
  }

  handleMostRecentToggleUpdated(fieldName: string, isActive: boolean) {
    if (isActive) {
      this.searchStore.setSortOrder({
        orderByField: fieldName,
        sortType: 'desc',
      });
    } else {
      this.searchStore.setSortOrder({
        orderByField: null,
        sortType: null,
      });
    }
    this.searchStore.search();
  }

  /**
   * Iterate through `items` and render them based on `type`
   */
  render() {
    return (
      <div class='searchcraft-filter-panel'>
        {this.items.map((filterItem) => {
          switch (filterItem.type) {
            case 'dateRange': {
              const item = filterItem as DateRangeFilterItem;
              // return date range slider
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-slider
                    min={item.options.minDate.getTime()}
                    max={item.options.maxDate.getTime()}
                    dataType='date'
                    step={1}
                    dateGranularity={item.options.granularity}
                    onRangeChanged={(event) => {
                      this.handleDateRangeChanged(
                        item,
                        event.detail.startValue,
                        event.detail.endValue,
                      );
                    }}
                  />
                </div>
              );
            }
            case 'numericRange': {
              const item = filterItem as NumericFilterItem;
              // return date range slider
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-slider
                    min={item.options.min}
                    max={item.options.max}
                    step={item.options.granularity}
                    onRangeChanged={(event) => {
                      this.handleNumericRangeChanged(
                        item.fieldName,
                        event.detail.startValue,
                        event.detail.endValue,
                      );
                    }}
                  />
                </div>
              );
            }
            case 'facets': {
              const item = filterItem as FacetsFilterItem;
              // return "filters-list"
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-facet-list
                    fieldName={item.fieldName}
                    onFacetSelectionUpdated={(event) => {
                      this.handleFacetSelectionUpdated(
                        item.fieldName,
                        event.detail.paths,
                      );
                    }}
                  />
                </div>
              );
            }
            case 'exactMatchToggle': {
              const item = filterItem as ExactMatchToggleFilterItem;
              return (
                <searchcraft-toggle-button
                  label={item.label}
                  subLabel={item.options.subLabel}
                  onToggleUpdated={(event) => {
                    this.handleExactMatchToggleUpdated(event.detail);
                  }}
                />
              );
            }
            case 'mostRecentToggle': {
              const item = filterItem as MostRecentToggleFilterItem;
              return (
                <searchcraft-toggle-button
                  label={item.label}
                  subLabel={item.options.subLabel}
                  onToggleUpdated={(event) => {
                    this.handleMostRecentToggleUpdated(
                      item.fieldName,
                      event.detail,
                    );
                  }}
                />
              );
            }
          }
        })}
      </div>
    );
  }
}
