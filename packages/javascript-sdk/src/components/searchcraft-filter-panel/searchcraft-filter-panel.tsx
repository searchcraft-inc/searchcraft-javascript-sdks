import { Component, h, Prop, State } from '@stencil/core';
import type {
  FilterItem,
  DateRangeFilterItem,
  NumericFilterItem,
  ExactMatchToggleFilterItem,
  FacetsFilterItem,
} from '../../types/searchcraft-filter-panel.types';
import { useSearchcraftStore } from '@provider/store';
import { getMillis } from '@utils/utils';

@Component({
  tag: 'searchcraft-filter-panel',
  styleUrl: 'searchcraft-filter-panel.module.scss',
  shadow: false,
})
export class SearchcraftFilterPanel {
  @Prop() items: FilterItem[] = [];

  @State() unsubscribe: (() => void) | undefined;
  @State() lastQuery: string | undefined;

  private searchStore = useSearchcraftStore.getState();

  componentDidLoad() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (this.lastQuery !== state.query) {
        // A place to put actions to do when the query changes
      }
      this.lastQuery = state.query || '';
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  handleDateRangeChanged(fieldName: string, min: number, max: number) {
    const start = new Date(min);
    const end = new Date(max);
    this.searchStore.addRangeValueForIndexField({
      fieldName,
      value: `${fieldName}:[${start.toISOString()} TO ${end.toISOString()}]`,
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
    this.searchStore.setSearchMode(isActive ? 'normal' : 'fuzzy');
    this.searchStore.search();
  }

  handleMostRecentToggleUpdated(isActive: boolean) {
    this.searchStore.setSortType(isActive ? 'desc' : 'asc');
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
              const min = new Date(item.options.minDate).getTime();
              const max = new Date(item.options.maxDate).getTime();
              const granularityValue = getMillis(item.options.granularity);
              // return date range slider
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-slider
                    min={min}
                    max={max}
                    granularity={granularityValue}
                    dataType='date'
                    onRangeChanged={(event) => {
                      this.handleDateRangeChanged(
                        item.fieldName,
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
                    granularity={item.options.granularity}
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
              const item = filterItem as ExactMatchToggleFilterItem;
              return (
                <searchcraft-toggle-button
                  label={item.label}
                  subLabel={item.options.subLabel}
                  onToggleUpdated={(event) => {
                    this.handleMostRecentToggleUpdated(event.detail);
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
