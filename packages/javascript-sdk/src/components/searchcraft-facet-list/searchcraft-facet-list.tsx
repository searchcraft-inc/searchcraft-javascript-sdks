import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
  Fragment,
} from '@stencil/core';
import classNames from 'classnames';

import type { FacetChild, FacetRoot } from '@searchcraft/core';

import { useSearchcraftStore, type SearchcraftState } from '@provider/store';
import { mergeFacetRoots, removeSubstringMatches } from '@utils/utils';

@Component({
  tag: 'searchcraft-facet-list',
  styleUrl: 'searchcraft-facet-list.module.scss',
  shadow: false,
})
export class SearchcraftFacetList {
  @Prop() fieldName: string;

  @Event() facetSelectionUpdated: EventEmitter<{ paths: string[] }>;

  @State() baseFacetRoot: FacetRoot | undefined;
  @State() facetRoot: FacetRoot | undefined;
  @State() selectedPaths: Record<string, boolean> = {};
  @State() lastTimeTaken: number | undefined;
  @State() hasNewSearchTerm = false;

  @State() lastQuery: string | undefined;
  @State() lastSearchMode: string | undefined;
  @State() lastSortType: string | undefined;

  @State() unsubscribe: (() => void) | undefined;

  private searchStore = useSearchcraftStore.getState();

  handleStateUpdate(state: SearchcraftState) {
    const facetPrime = state.searchResults?.data.facets;
    const timeTaken = state.searchResults?.data.time_taken;

    /** Things to do when the state's search term has changed, but before the response received */
    if (
      state.query !== this.lastQuery ||
      state.searchMode !== this.lastSearchMode ||
      state.sortType !== this.lastSortType
    ) {
      this.selectedPaths = {};
      this.hasNewSearchTerm = true;
    }

    /** Things to do when a new response with a new facet prime has been received */
    if (timeTaken !== this.lastTimeTaken && facetPrime) {
      this.facetRoot = undefined;
      const incomingFacetRoot: FacetRoot = facetPrime.find(
        (facet) => this.fieldName === Object.keys(facet)[0],
      );

      /** Data is from a new search term: completely override our facets */
      if (this.hasNewSearchTerm) {
        this.baseFacetRoot = incomingFacetRoot;
        this.facetRoot = incomingFacetRoot;
        this.hasNewSearchTerm = false;
      } else if (this.baseFacetRoot) {
        /** Data is from an existing search term, merge the facets together */
        this.facetRoot = mergeFacetRoots(
          this.fieldName,
          this.baseFacetRoot,
          incomingFacetRoot,
        );
      }
    }

    this.lastQuery = state.query;
    this.lastSearchMode = state.searchMode;
    this.lastSortType = state.sortType;
    this.lastTimeTaken = timeTaken;
  }

  connectedCallback() {
    this.handleStateUpdate(this.searchStore);

    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
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

    this.facetSelectionUpdated.emit({ paths: pathsWithParentPathsRemoved });
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
    const firstFacet = this.facetRoot?.[this.fieldName];

    return (
      <div
        class={classNames(
          'filtersListContainer',
          'searchcraft-filters-list-container',
        )}
      >
        {!firstFacet && (
          <p class='searchcraft-facet-message'>
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
            <div
              key={facetChild.path}
              class={classNames('searchcraft-filters-list-item')}
            >
              <label
                class={classNames(
                  'filterCheckboxLabel',
                  'searchcraft-filters-list-checkbox-label',
                )}
              >
                <input
                  checked={this.selectedPaths[facetChild.path]}
                  onChange={(_event: Event) =>
                    this.handleCheckboxChange(facetChild.path)
                  }
                  type='checkbox'
                />
                {isChildSelected ? (
                  <div
                    class={classNames(
                      'dashContainer',
                      'searchcraft-filter-list-dash-container',
                    )}
                  >
                    <searchcraft-dash-icon />
                  </div>
                ) : (
                  <div
                    class={classNames(
                      'checkContainer',
                      'searchcraft-filter-list-check-container',
                    )}
                  >
                    <searchcraft-check-icon />
                  </div>
                )}
                {this.formatLabel(facetChild)}
              </label>
              {facetChild.children && facetChild.children.length > 0 && (
                <Fragment>
                  {facetChild.children.map((grandchild) => (
                    <label
                      key={grandchild.path}
                      class={classNames(
                        'childFilterCheckboxLabel',
                        'searchcraft-child-filter-checkbox-label',
                      )}
                      style={{
                        display: this.selectedPaths[facetChild.path]
                          ? 'flex'
                          : 'none',
                      }}
                    >
                      <input
                        checked={this.selectedPaths[grandchild.path]}
                        onChange={(_event: Event) => {
                          this.handleCheckboxChange(grandchild.path);
                        }}
                        type='checkbox'
                      />
                      <div
                        class={classNames(
                          'checkContainer',
                          'searchcraft-filter-list-check-container',
                        )}
                      >
                        <searchcraft-check-icon />
                      </div>
                      {this.formatSubLabel(grandchild, facetChild)}
                    </label>
                  ))}
                </Fragment>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
