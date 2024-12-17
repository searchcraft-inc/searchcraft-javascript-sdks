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
    const newFilters = flattenFacets(facets[0]?.section || []);
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
                {this.formatLabel(filter.label)}
              </label>

              {isChecked &&
                children.map((child) => (
                  <label
                    class='childCheckboxLabel'
                    key={child.value}
                    style={{ marginLeft: '20px' }}
                  >
                    <input
                      class='childFilterCheckbox'
                      checked={this.selectedFilters.has(child.value)}
                      onChange={(event: Event) =>
                        this.handleFilterChange(
                          child.value,
                          (event.target as HTMLInputElement).checked,
                        )
                      }
                      type='checkbox'
                    />
                    {this.formatLabel(child.label.split('/').pop() || '')}
                  </label>
                ))}
            </div>
          );
        })}
      </div>
    );
  }
}
