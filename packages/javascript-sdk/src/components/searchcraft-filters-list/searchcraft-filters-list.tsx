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

  @State() selectedFilters: Set<string> = new Set();
  @State() dynamicFilters: Array<{ label: string; value: string }> = [];

  private searchStore = useSearchcraftStore.getState();
  unsubscribe: () => void;

  connectedCallback() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
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
      Object.entries(facetData.counts).map(([value, count]) => ({
        label: `${facetKey}: ${value.replace(/^\//, '')} (${count})`,
        value: `${facetKey}:${value}`,
      })),
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

    const filtersToRender =
      this.dynamicFilters.length > 0 ? this.dynamicFilters : this.filters;

    // Construct the original data dynamically from filtersToRender
    const originalData = {
      section: {
        counts: filtersToRender.reduce(
          (countsAcc, filter) => {
            const [, facetValue] = filter.value.split(':');
            countsAcc[`${facetValue}`] = Number.parseInt(
              (filter.label.match(/\((\d+)\)$/) || [])[1] || '0',
              10,
            );
            return countsAcc;
          },
          {} as Record<string, number>,
        ),
      },
    };

    const checkedCategories = selectedFiltersArray.map(
      (filter) => filter.split(':')[1],
    );
    const filteredCounts = Object.keys(originalData.section.counts)
      .filter((key) => checkedCategories.includes(key))
      .reduce(
        (acc, key) => {
          acc[key] = originalData.section.counts[key];
          return acc;
        },
        {} as Record<string, number>,
      );
    const filteredData = {
      section: {
        counts: filteredCounts,
      },
    };

    // Transform the filtered data into the facets structure
    const transformedFacets: Facets = {
      section: {
        counts: filteredData.section.counts,
      },
    };

    // Emit the updated selected filters and update the search store
    this.filtersUpdated.emit(selectedFiltersArray);
    this.searchStore.setFacets(transformedFacets);
    this.searchStore.search();
  };

  render() {
    const filtersToRender =
      this.dynamicFilters.length > 0 ? this.dynamicFilters : this.filters;

    return (
      <div class='filtersList'>
        {filtersToRender.map((filter) => {
          const filterLabel = filter.label.split(':')[1] || filter.label;
          return (
            <label class='checkboxLabel' key={filter.label}>
              <input
                class='filterListCheckbox'
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
