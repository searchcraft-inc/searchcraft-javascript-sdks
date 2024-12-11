import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
} from '@stencil/core';
import { useSearchcraftStore } from '@provider/store';
import type { Facets } from '@searchcraft/core';

@Component({
  tag: 'searchcraft-filters-list',
  styleUrl: 'searchcraft-filters-list.module.scss',
  shadow: true,
})
export class SearchcraftFiltersList {
  @Prop() filters: Array<{ label: string; value: string }> = [];
  @Event() filtersUpdated: EventEmitter<string[]>;

  @State() dynamicFilters: Array<{ label: string; value: string }> = [];
  @State() isRequesting = false;
  @State() selectedFilters: Set<string> = new Set();
  @State() originalFilterCounts: Record<string, string> = {};

  private searchStore = useSearchcraftStore.getState();
  unsubscribe: () => void;

  connectedCallback() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.isRequesting = state.isRequesting;
      const facets = state.searchResults?.data.facets;
      if (facets) {
        this.populateFiltersFromFacets(facets);
      }
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  populateFiltersFromFacets(facets: Facets) {
    const newFilters = Object.entries(facets).flatMap(([facetKey, facetData]) =>
      Object.entries(facetData.counts).map(([value, count]) => {
        const filterValue = `${facetKey}:${value}`;
        this.originalFilterCounts[filterValue] = `${count}`; // Store the original count
        return {
          label: `${facetKey}: ${value.replace(/^\//, '')} (${count})`,
          value: filterValue,
        };
      }),
    );
    this.dynamicFilters = newFilters;
  }

  handleFilterChange = (value: string, checked: boolean) => {
    if (checked) {
      this.selectedFilters.add(value);
    } else {
      this.selectedFilters.delete(value);
    }

    const selectedFiltersArray = Array.from(this.selectedFilters);
    this.filtersUpdated.emit(selectedFiltersArray);
    this.searchStore.setSelectedFilters(selectedFiltersArray);
    this.searchStore.search();
  };

  render() {
    const checkedFilters = Array.from(this.selectedFilters).map((value) => {
      const count = this.originalFilterCounts[value] || '0';
      return {
        label: `${value.split(':')[1]} (${count})`,
        value,
      };
    });

    const remainingDynamicFilters = this.dynamicFilters.filter(
      (filter) => !this.selectedFilters.has(filter.value),
    );

    if (this.isRequesting) {
      return <div>Loading facets</div>;
    }

    return (
      <div class='filtersList'>
        {checkedFilters.map((filter) => (
          <label class='checkboxLabel' key={filter.value}>
            <input
              class='filterListCheckbox'
              checked
              onChange={(event: Event) =>
                this.handleFilterChange(
                  filter.value,
                  (event.target as HTMLInputElement).checked,
                )
              }
              type='checkbox'
              value={filter.value}
            />
            {filter.label}
          </label>
        ))}
        {remainingDynamicFilters.map((filter) => {
          const filterLabel = filter.label.split(':')[1] || filter.label;
          return (
            <label class='checkboxLabel' key={filter.value}>
              <input
                class='filterListCheckbox'
                checked={this.selectedFilters.has(filter.value)}
                onChange={(event: Event) =>
                  this.handleFilterChange(
                    filter.value,
                    (event.target as HTMLInputElement).checked,
                  )
                }
                type='checkbox'
                value={filter.value}
              />
              {filterLabel}
            </label>
          );
        })}
      </div>
    );
  }
}
