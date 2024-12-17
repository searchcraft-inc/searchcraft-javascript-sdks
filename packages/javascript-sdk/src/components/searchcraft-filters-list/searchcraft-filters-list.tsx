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

@Component({
  tag: 'searchcraft-filters-list',
  styleUrl: 'searchcraft-filters-list.module.scss',
  shadow: true,
})
export class SearchcraftFiltersList {
  @Prop() filters: Array<{ label: string; value: string }> = [];

  @Event() filtersUpdated: EventEmitter<string[]>;

  @State() dynamicFilters: Array<{ label: string; value: string }> = [];
  @State() initialFilters: Array<{ label: string; value: string }> = [];
  @State() isRequesting = false;
  @State() originalFilterCounts: Record<string, string> = {};
  @State() query = '';
  @State() resultsCount = 0;
  @State() selectedFilters: Set<string> = new Set();

  private searchStore = useSearchcraftStore.getState();
  unsubscribe: () => void;

  connectedCallback() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.isRequesting = state.isRequesting;
      this.query = state.query || '';
      this.resultsCount = state.searchResults?.data?.hits?.length || 0;

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
    const newFilters = Object.entries(facets.section?.counts || {}).map(
      ([key, count]) => {
        const filterValue = key;
        this.originalFilterCounts[filterValue] = `${count}`;
        return {
          label: `${key.replace(/^\//, '')} (${count})`,
          value: filterValue,
        };
      },
    );

    // Update dynamic filters while preserving the initial filters
    const updatedFilters = [
      ...this.initialFilters,
      ...newFilters.filter(
        (filter) =>
          !this.initialFilters.some(
            (initial) => initial.value === filter.value,
          ),
      ),
    ];

    this.dynamicFilters = updatedFilters;

    // Store the initial filters only once
    if (this.initialFilters.length === 0) {
      this.initialFilters = [...updatedFilters];
    }
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

    const filtersToRender = this.initialFilters.map((initialFilter) => {
      const isChecked = this.selectedFilters.has(initialFilter.value);
      const dynamicChildren = this.dynamicFilters.filter(
        (dynamicFilter) =>
          dynamicFilter.value.startsWith(initialFilter.value) &&
          dynamicFilter.value !== initialFilter.value, // Exclude parent itself
      );
      return {
        ...initialFilter,
        isChecked,
        children: dynamicChildren,
      };
    });

    return (
      <div class='filtersList'>
        {filtersToRender.map((filter) => (
          <div key={filter.value}>
            {/* Render the parent filter */}
            <label class='checkboxLabel'>
              <input
                class='filterCheckbox'
                checked={filter.isChecked}
                onChange={(event: Event) =>
                  this.handleFilterChange(
                    filter.value,
                    (event.target as HTMLInputElement).checked,
                  )
                }
                type='checkbox'
                value={filter.value}
              />
              {this.formatLabel(filter.label)}
            </label>
            {filter.isChecked &&
              filter.children.map((childFilter) => {
                const childLabel = childFilter.label.split('/').pop();
                return (
                  <label
                    class='childCheckboxLabel'
                    key={childFilter.value}
                    style={{ marginLeft: '20px' }}
                  >
                    <input
                      class='childFilterCheckbox'
                      checked={this.selectedFilters.has(childFilter.value)}
                      onChange={(event: Event) =>
                        this.handleFilterChange(
                          childFilter.value,
                          (event.target as HTMLInputElement).checked,
                        )
                      }
                      type='checkbox'
                      value={childFilter.value}
                    />
                    {this.formatLabel(childLabel || '')}
                  </label>
                );
              })}
          </div>
        ))}
      </div>
    );
  }
}
