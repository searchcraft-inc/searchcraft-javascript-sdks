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

  @State() dynamicFilters: Array<{
    label: string;
    value: string;
    count: number;
    children?: Array<{
      label: string;
      value: string;
      count: number;
    }>;
  }> = [];
  @State() selectedFilters: string[] = [];
  @State() query = '';
  @State() resultsCount = 0;

  private searchStore = useSearchcraftStore.getState();
  private autoSearchFormElement: HTMLElement | null = null;
  unsubscribe: () => void;

  connectedCallback() {
    const state = this.searchStore;
    const facets = state.searchResults?.data.facets;

    if (facets) {
      this.populateFiltersFromFacets(facets);
    }

    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      const query = state.query?.trim();
      const facets = state.searchResults?.data.facets;
      this.query = query || '';
      this.resultsCount = state.searchResults?.data?.hits?.length || 0;

      if (facets && this.selectedFilters.length === 0) {
        this.populateFiltersFromFacets(facets);
      }
    });

    this.autoSearchFormElement = document.querySelector(
      'searchcraft-auto-search-form',
    );
    if (this.autoSearchFormElement) {
      this.autoSearchFormElement.addEventListener(
        'querySubmit',
        this.handleSearchRequest,
      );
    }
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    if (this.autoSearchFormElement) {
      this.autoSearchFormElement.removeEventListener(
        'querySubmit',
        this.handleSearchRequest,
      );
    }
  }

  handleSearchRequest = () => {
    this.selectedFilters = [];
    this.searchStore.setSelectedFilters([]);
    this.emitFiltersUpdate();
  };

  populateFiltersFromFacets(facets: Facets) {
    const flattened = flattenFacets(facets[0]?.section || []);
    this.dynamicFilters = flattened.map((filter) => ({
      label: filter.label,
      value: filter.value,
      count: filter.count,
      children: filter.children || [],
    }));
  }

  handleCheckboxChange(
    value: string,
    isChecked: boolean,
    isParent = false,
    parentValue?: string,
  ) {
    if (isParent && isChecked && parentValue) {
      const hasChildSelected = this.dynamicFilters
        .find((filter) => filter.value === parentValue)
        ?.children?.some((child) => this.selectedFilters.includes(child.value));
      if (hasChildSelected) return;
    }
    this.selectedFilters = isChecked
      ? [...this.selectedFilters, value]
      : this.selectedFilters.filter((filter) => filter !== value);

    this.emitFiltersUpdate();
  }

  emitFiltersUpdate() {
    this.filtersUpdated.emit(this.selectedFilters);
    this.searchStore.setSelectedFilters(this.selectedFilters);
    this.searchStore.search();
  }

  formatLabel(label: string, count: number): string {
    return `${label.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())} (${count})`;
  }

  render() {
    if (!this.query || this.resultsCount === 0) {
      return null;
    }

    return (
      <div class='filtersList'>
        {this.dynamicFilters.map((filter) => {
          const isChildSelected = filter.children
            ? filter.children.some((child) =>
                this.selectedFilters.includes(child.value),
              )
            : false;

          return (
            <div key={filter.value} class='filterItem'>
              <label class='checkboxLabel'>
                <input
                  type='checkbox'
                  checked={this.selectedFilters.includes(filter.value)}
                  onChange={(event: Event) =>
                    this.handleCheckboxChange(
                      filter.value,
                      (event.target as HTMLInputElement).checked,
                      true,
                      filter.value,
                    )
                  }
                />
                {isChildSelected ? (
                  <div class='dashContainer'>
                    <searchcraft-dash-icon />
                  </div>
                ) : (
                  <div class='checkContainer'>
                    <searchcraft-check-icon />
                  </div>
                )}
                {this.formatLabel(filter.label, filter.count)}
              </label>
              {filter.children && filter.children.length > 0 && (
                <div class='childrenContainer'>
                  {filter.children.map((child) => (
                    <label
                      key={child.value}
                      class='childCheckboxLabel'
                      style={{
                        marginLeft: '20px',
                        display: this.selectedFilters.includes(filter.value)
                          ? 'flex'
                          : 'none',
                      }}
                    >
                      <input
                        type='checkbox'
                        checked={this.selectedFilters.includes(child.value)}
                        onChange={(event: Event) =>
                          this.handleCheckboxChange(
                            child.value,
                            (event.target as HTMLInputElement).checked,
                          )
                        }
                      />
                      <div class='checkContainer'>
                        <searchcraft-check-icon />
                      </div>
                      {this.formatLabel(
                        child.label.includes('/')
                          ? child.label.split('/').pop() || child.label
                          : child.label,
                        child.count,
                      )}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
