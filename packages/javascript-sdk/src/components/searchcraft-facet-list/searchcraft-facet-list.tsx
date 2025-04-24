import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
} from '@stencil/core';

import type { FacetChild, FacetRoot } from '@searchcraft/core';

import { searchcraftStore, type SearchcraftState } from '@store';
import { mergeFacetRoots, removeSubstringMatches } from '@utils';

/**
 * This web component is designed to display facets in a search interface, allowing users to refine their search results by applying filters based on various attributes.
 * It is consumed within the `searchcraft-filter-panel`.
 *
 * @js-example
 * ```html
 * <!-- index.html -->
 * <searchcraft-facet-list field-name="title" />
 * ```
 *
 * ```js
 * // index.js
 * const facetList = document.querySelector('searchcraft-facet-list');
 *
 * facetList.addEventListener('facetSelectionUpdated', () => {
 *   console.log('Facet selection updated');
 * });
 * ```
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-facet-list',
  shadow: false,
})
export class SearchcraftFacetList {
  /**
   * The name of the field where facets are applied.
   */
  @Prop() fieldName = '';

  /**
   * When the facets are updated.
   */
  @Event() facetSelectionUpdated?: EventEmitter<{ paths: string[] }>;

  @State() baseFacetRoot: FacetRoot | undefined;
  @State() facetRoot: FacetRoot | undefined;
  @State() selectedPaths: Record<string, boolean> = {};
  @State() lastTimeTaken: number | undefined;
  hasNewSearchTerm = false;
  lastSearchTerm: string | undefined;
  lastSearchMode: string | undefined;
  lastSortType: string | undefined | null;
  unsubscribe: (() => void) | undefined;

  private searchStore = searchcraftStore.getState();

  handleStateUpdate(state: SearchcraftState) {
    const facetPrime = state.searchResponseFacetPrime;
    const timeTaken = state.searchResponseTimeTaken;

    if (!this.fieldName) {
      return;
    }

    /** When the search term is empty, clear all facets from facetRoot */
    if (!state.searchTerm) {
      this.facetRoot = undefined;
    }

    /** Things to do when the state's search term has changed, but before the response received */
    if (
      state.searchTerm !== this.lastSearchTerm ||
      state.searchMode !== this.lastSearchMode
    ) {
      this.selectedPaths = {};
      this.hasNewSearchTerm = true;
    }

    /** Things to do when a new response with a new facet prime has been received */
    if (timeTaken !== this.lastTimeTaken && facetPrime) {
      this.facetRoot = undefined;

      const incomingFacetRoot: FacetRoot | undefined = facetPrime.find(
        (facet) => this.fieldName === Object.keys(facet)[0],
      );

      /** Data is from a new search term: completely override our facets */
      if (this.hasNewSearchTerm) {
        this.baseFacetRoot = incomingFacetRoot;
        this.facetRoot = incomingFacetRoot;
        this.hasNewSearchTerm = false;
      } else if (this.baseFacetRoot && incomingFacetRoot) {
        /** Data is from an existing search term, merge the facets together */
        this.facetRoot = mergeFacetRoots(
          this.fieldName,
          this.baseFacetRoot,
          incomingFacetRoot,
        );
      }
    } else if (!facetPrime && Object.keys(this.selectedPaths).length === 0) {
      /**
       * If there's not facetPrime returned from the search response,
       * and no facets are currently selected.
       * Clear all the displayed facets
       */
      this.facetRoot = undefined;
    }

    this.lastSearchTerm = state.searchTerm;
    this.lastSearchMode = state.searchMode;
    this.lastSortType = state.sortType;
    this.lastTimeTaken = timeTaken;
  }

  connectedCallback() {
    this.handleStateUpdate(this.searchStore);

    this.unsubscribe = searchcraftStore.subscribe((state) => {
      this.handleStateUpdate(state);
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  handleCheckboxChange(path: string) {
    const isCheckboxChecked = !this.selectedPaths[path];

    if (isCheckboxChecked) {
      /**
       * Checkbox Checked: Add to the selectedPaths record
       * Uses spread operator here so UI updates.
       */
      this.selectedPaths = {
        ...this.selectedPaths,
        [path]: true,
      };
    } else {
      /**
       * Checkbox Uncheck: Remove any paths and sub-paths
       */
      const updatedPaths = Object.keys(this.selectedPaths).filter(
        (testPath) => !testPath.includes(path),
      );

      this.selectedPaths = updatedPaths.reduce(
        (acc, str) => {
          acc[str] = true;
          return acc;
        },
        {} as Record<string, boolean>,
      );
    }

    /**
     * Emit the paths array, with parent paths removed.
     */
    const paths = Object.keys(this.selectedPaths).filter(
      (path) => this.selectedPaths[path],
    );
    const pathsWithParentPathsRemoved = removeSubstringMatches(paths);

    this.facetSelectionUpdated?.emit({ paths: pathsWithParentPathsRemoved });
  }

  formatLabel = (facetChild: FacetChild): string => {
    const label = facetChild.path.replace(/^\//, '');
    const count = facetChild.count;
    return `${label.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())} (${count})`;
  };

  formatSubLabel = (
    facetChild: FacetChild,
    facetChildAncestor: FacetChild,
  ): string => {
    const facetChildPath = facetChild.path.substring(
      facetChildAncestor.path.length,
    );
    const label = facetChildPath.replace(/^\//, '');
    const count = facetChild.count;
    return `${label.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())} (${count})`;
  };

  render() {
    if (!this.fieldName) {
      return;
    }

    const firstFacet = this.facetRoot?.[this.fieldName];

    return (
      <div class='searchcraft-facet-list'>
        {!firstFacet && (
          <p class='searchcraft-facet-list-message'>
            Enter a search to view facets.
          </p>
        )}
        {firstFacet?.map((facetChild: FacetChild) => {
          const isChildSelected = facetChild.children
            ? facetChild.children?.some(
                (child) => this.selectedPaths[child.path],
              )
            : false;

          return (
            <div key={facetChild.path} class='searchcraft-facet-list-item'>
              <label class='searchcraft-facet-list-checkbox-label'>
                <div class='searchcraft-facet-list-checkbox-input-wrapper'>
                  <input
                    class='searchcraft-facet-list-checkbox-input'
                    checked={this.selectedPaths[facetChild.path]}
                    onChange={(_event: Event) =>
                      this.handleCheckboxChange(facetChild.path)
                    }
                    type='checkbox'
                  />
                  {isChildSelected ? (
                    <div class='searchcraft-facet-list-checkbox-input-dash-icon'>
                      <svg width='14' height='3' viewBox='0 0 14 3' fill='none'>
                        <title>Checkbox dash</title>
                        <line
                          x1='1.5'
                          y1='1.5'
                          x2='12.5'
                          y2='1.5'
                          stroke='white'
                          stroke-width='3'
                          stroke-linecap='round'
                        />
                      </svg>
                    </div>
                  ) : (
                    <div class='searchcraft-facet-list-checkbox-input-check-icon'>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <title>Checkbox check</title>
                        <path
                          d='M13.9999 2L5.74988 10L1.99988 6.36364'
                          stroke='white'
                          stroke-width='3'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {this.formatLabel(facetChild)}
              </label>
              {facetChild.children && facetChild.children.length > 0 && (
                <div class='searchcraft-facet-child-list'>
                  {facetChild.children.map((grandchild) => (
                    <label
                      key={grandchild.path}
                      class='searchcraft-facet-list-checkbox-label searchcraft-facet-child-list-checkbox-label'
                      style={{
                        display: this.selectedPaths[facetChild.path]
                          ? 'flex'
                          : 'none',
                      }}
                    >
                      <div class='searchcraft-facet-list-checkbox-input-wrapper searchcraft-facet-child-list-checkbox-input-wrapper'>
                        <input
                          class='searchcraft-facet-list-checkbox-input searchcraft-facet-child-list-checkbox-input'
                          checked={this.selectedPaths[grandchild.path]}
                          onChange={(_event: Event) => {
                            this.handleCheckboxChange(grandchild.path);
                          }}
                          type='checkbox'
                        />
                        <div class='searchcraft-facet-list-checkbox-input-check-icon searchcraft-facet-child-list-checkbox-input-check-icon'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                          >
                            <title>Checkbox check</title>
                            <path
                              d='M13.9999 2L5.74988 10L1.99988 6.36364'
                              stroke='white'
                              stroke-width='3'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                      {this.formatSubLabel(grandchild, facetChild)}
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
