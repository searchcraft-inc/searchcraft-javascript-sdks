import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
} from '@stencil/core';

import type { Facets } from '@searchcraft/core';

import { useSearchcraftStore } from '@provider/store';

import { flattenFacets } from '@utils/utils';

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
  @State() query = '';
  @State() resultsCount = 0;
  @State() selectedFilters: Set<string> = new Set();

  private searchStore = useSearchcraftStore.getState();
  unsubscribe: () => void;

  connectedCallback() {
    const state = this.searchStore; // Fetch the initial state

    // Initial population of facets if available
    if (state.searchResults?.data.facets) {
      this.populateFiltersFromFacets(state.searchResults.data.facets);
    }

    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (!state.query || state.query.trim().length === 0) {
        if (this.selectedFilters.size > 0) {
          this.selectedFilters.clear();
          this.filtersUpdated.emit([]);
          if (this.searchStore.selectedFilters.length > 0) {
            this.searchStore.setSelectedFilters([]);
          }
        }
      }
      this.query = state.query || '';
      this.isRequesting = state.isRequesting;
      this.resultsCount = state.searchResults?.data?.hits?.length || 0;

      // Populate filters when facets are updated
      if (state.searchResults?.data.facets) {
        this.populateFiltersFromFacets(state.searchResults.data.facets);
      }
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  populateFiltersFromFacets(facets: Facets) {
    const newFilters = flattenFacets(facets[0]?.section || []);
    const filtersMap = new Map<string, { label: string; value: string }>();

    newFilters.forEach((filter) => {
      const key = filter.value.split('/').pop() || '';
      const existingFilter = filtersMap.get(key);
      if (
        !existingFilter ||
        filter.value.length < existingFilter.value.length
      ) {
        filtersMap.set(key, filter);
      }
    });

    this.dynamicFilters = Array.from(filtersMap.values());
  }

  handleFilterChange = (value: string, checked: boolean) => {
    if (checked) {
      this.selectedFilters.add(value);
    } else {
      this.selectedFilters.delete(value);
    }
    const deduplicatedFilters = this.deduplicatePaths(
      Array.from(this.selectedFilters),
    );

    this.filtersUpdated.emit(deduplicatedFilters);
    this.searchStore.setSelectedFilters(deduplicatedFilters);
    this.searchStore.search();
  };

  deduplicatePaths(filters: string[]): string[] {
    const pathMap = new Map<string, string>();

    filters.forEach((path) => {
      const key = path.split('/').pop() || '';
      const existingPath = pathMap.get(key);

      if (!existingPath || path.length < existingPath.length) {
        pathMap.set(key, path);
      }
    });

    return Array.from(pathMap.values());
  }

  formatLabel(label: string): string {
    return label
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  render() {
    if (!this.query || this.resultsCount === 0) {
      return null;
    }

    const filtersToRender = this.dynamicFilters.filter(
      (filter) => !filter.value.includes('/', filter.value.indexOf('/') + 1),
    );

    return (
      <div class='filtersList'>
        {filtersToRender.map((filter) => {
          const isChecked = this.selectedFilters.has(filter.value);
          const children = this.dynamicFilters.filter(
            (child) =>
              child.value.startsWith(`${filter.value}/`) &&
              child.value !== filter.value,
          );

          return (
            <div key={filter.value}>
              <label class='checkboxLabel'>
                <input
                  class='filterCheckbox'
                  checked={isChecked}
                  onChange={(event: Event) =>
                    this.handleFilterChange(
                      filter.value,
                      (event.target as HTMLInputElement).checked,
                    )
                  }
                  type='checkbox'
                />
                <div class='checkContainer'>
                  <searchcraft-check-icon />
                </div>
                {this.formatLabel(filter.label)}
              </label>
              {children.map((child) => {
                const isChildChecked = this.selectedFilters.has(child.value);
                return (
                  <label
                    class='childCheckboxLabel'
                    key={child.value}
                    style={{ marginLeft: '20px' }}
                  >
                    <input
                      class='childFilterCheckbox'
                      checked={isChildChecked}
                      onChange={(event: Event) =>
                        this.handleFilterChange(
                          child.value,
                          (event.target as HTMLInputElement).checked,
                        )
                      }
                      type='checkbox'
                    />
                    <div class='checkContainer'>
                      <searchcraft-check-icon />
                    </div>
                    {this.formatLabel(child.label.split('/').pop() || '')}
                  </label>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
