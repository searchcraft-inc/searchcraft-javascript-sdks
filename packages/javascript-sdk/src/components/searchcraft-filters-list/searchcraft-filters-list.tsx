import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
} from '@stencil/core';
import { useSearchcraftStore } from '@provider/store';

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
    // Subscribe to search results from the store
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

  populateFiltersFromFacets(
    facets: Record<string, { counts: Record<string, number> }>,
  ) {
    const newFilters = Object.entries(facets).flatMap(([facetKey, facetData]) =>
      Object.entries(facetData.counts).map(([value, count]) => ({
        label: `${facetKey}: ${value} (${count})`,
        value,
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

    // Transform the selected filters into the expected facets structure
    const transformedFacets: Record<
      string,
      { counts: Record<string, number> }
    > = selectedFiltersArray.reduce((acc, filter) => {
      const [facetKey, facetValue] = filter.split(':');
      if (!acc[facetKey]) {
        acc[facetKey] = { counts: {} };
      }
      acc[facetKey].counts[facetValue] = 1; // Assign a count of 1 for simplicity
      return acc;
    }, {});

    this.filtersUpdated.emit(selectedFiltersArray);

    // Update the search store with the transformed facets
    this.searchStore.setFacets(transformedFacets);
    this.searchStore.search();
  };

  render() {
    const filtersToRender =
      this.dynamicFilters.length > 0 ? this.dynamicFilters : this.filters;

    return (
      <div class='filters-list'>
        {filtersToRender.map((filter) => (
          <label key={filter.label}>
            <input
              type='checkbox'
              value={filter.value}
              onChange={(event: Event) =>
                this.handleFilterChange(
                  filter.value,
                  (event.target as HTMLInputElement).checked,
                )
              }
            />
            {filter.label}
          </label>
        ))}
      </div>
    );
  }
}
