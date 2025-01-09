import {
  Component,
  h,
  Prop,
  // State,
  Event,
  type EventEmitter,
} from '@stencil/core';
import type {
  FilterItem,
  FilterItemDateRangeOptions,
  NumericItemOptions,
} from './searchcraft-filter-panel.types';
import { useSearchcraftStore } from '@provider/store';
import { getMillis } from '@utils/utils';

export interface ScInputCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLSearchcraftInputElement;
}

@Component({
  tag: 'searchcraft-filter-panel',
  styleUrl: 'searchcraft-filter-panel.module.scss',
  shadow: false,
})
export class SearchcraftFilterPanel {
  @Prop() filterItems: FilterItem[] = [];

  /**
   * Emits an event with an array of query ctx values
   */
  @Event() update: EventEmitter<string[]>;

  private searchStore = useSearchcraftStore.getState();

  handleDateRangeChanged(fieldName: string, min: number, max: number) {
    console.log(fieldName, min, max);
    const start = new Date(min);
    const end = new Date(max);
    this.searchStore.addActiveFilter({
      fieldName,
      value: `${fieldName}:[${start.toISOString()} TO ${end.toISOString()}]`,
    });

    this.searchStore.search();
  }

  handleNumericRangeChanged(fieldName: string, min: number, max: number) {
    this.searchStore.addActiveFilter({
      fieldName,
      value: `${fieldName}:[${min} TO ${max}]`,
    });

    this.searchStore.search();
  }

  handleFacetSelectionUpdated(fieldName: string, paths: string[]) {
    this.searchStore.addActiveFilter({
      fieldName,
      value: `${fieldName}: IN [${paths.join(' ')}]`,
    });
    this.searchStore.search();
  }

  /**
   * Iterate through filterItems and render them based on `type`
   */
  render() {
    return (
      <div class='searchcraft-filter-panel'>
        {this.filterItems.map((filterItem) => {
          switch (filterItem.type) {
            case 'dateRange': {
              const options = filterItem.options as FilterItemDateRangeOptions;
              const min = new Date(options.minDate).getTime();
              const max = new Date(options.maxDate).getTime();
              const granularityValue = getMillis(options.granularity);
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
                    onRangeChanged={(event) => {
                      this.handleDateRangeChanged(
                        filterItem.fieldName,
                        event.detail.startValue,
                        event.detail.endValue,
                      );
                    }}
                  />
                </div>
              );
            }
            case 'numericRange': {
              const options = filterItem.options as NumericItemOptions;
              // return date range slider
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-slider
                    min={options.min}
                    max={options.max}
                    granularity={options.granularity}
                    onRangeChanged={(event) => {
                      this.handleNumericRangeChanged(
                        filterItem.fieldName,
                        event.detail.startValue,
                        event.detail.endValue,
                      );
                    }}
                  />
                </div>
              );
            }
            case 'facets':
              // return "filters-list"
              return (
                <div class='searchcraft-filter-panel-section'>
                  <p class='searchcraft-filter-panel-label'>
                    {filterItem.label}
                  </p>
                  <searchcraft-facet-list
                    fieldName={filterItem.fieldName}
                    onFacetSelectionUpdated={(event) => {
                      this.handleFacetSelectionUpdated(
                        filterItem.fieldName,
                        event.detail.paths,
                      );
                    }}
                  />
                </div>
              );
          }
        })}
      </div>
    );
  }
}
