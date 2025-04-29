import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
} from '@stencil/core';

import type { FacetRoot, FacetWithChildrenObject } from '@searchcraft/core';

import { searchcraftStore, type SearchcraftState } from '@store';
import {
  facetWithChildrenArrayToCompleteFacetTree,
  mergeFacetTrees,
  removeSubstringMatches,
} from '@utils';

type HandlerActionType =
  | 'SEARCH_TERM_EMPTY'
  | 'NEW_SEARCH_TERM'
  | 'RANGE_VALUE_UPDATE'
  | 'EXACT_MATCH_UPDATE'
  | 'SORT_ORDER_UPDATE'
  | 'FACET_UPDATE'
  | 'UNKNOWN';

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
   * Emitted when the facets are updated.
   */
  @Event() facetSelectionUpdated?: EventEmitter<{ paths: string[] }>;

  /**
   * A Tree Representing all of the facets we know about to be rendered.
   */
  @State() facetTree: FacetWithChildrenObject = {
    path: '/',
    count: 0,
    children: {},
  };

  /**
   * The currently selected facet paths.
   */
  @State() selectedPaths: Record<string, boolean> = {};

  // Internal vars used to track when to perform various facet actions.
  private lastTimeTaken?: number;
  private lastSearchTerm?: string;
  private lastSearchMode?: string;
  private lastSortType?: string | null;
  private lastRangeValues?: string;
  private lastFacetValues?: string;

  private unsubscribe?: () => void;

  handleIncomingSearchResponse(
    state: SearchcraftState,
    actionType: HandlerActionType,
  ) {
    // Look at the incoming facet root from the search response, and convert it to a FacetTree
    const incomingFacetRoot: FacetRoot | undefined =
      state.searchResponseFacetPrime?.find(
        (facet) => this.fieldName === Object.keys(facet)[0],
      );
    const incomingFacetsWithChildrenArray = incomingFacetRoot?.[this.fieldName];
    const incomingFacetTree = facetWithChildrenArrayToCompleteFacetTree({
      path: '/',
      count: 0,
      children: incomingFacetsWithChildrenArray || [],
    });

    // Determine what action to take (merge with existing FacetTree vs overwrite FacetTree)
    switch (actionType) {
      case 'SEARCH_TERM_EMPTY':
        this.facetTree = {
          path: '/',
          count: 0,
          children: {},
        };
        break;
      case 'NEW_SEARCH_TERM':
        this.facetTree = incomingFacetTree;
        break;
      case 'EXACT_MATCH_UPDATE':
      case 'RANGE_VALUE_UPDATE': {
        if (state.supplementalFacetPrime) {
          const supplementalFacetRoot: FacetRoot | undefined =
            state.supplementalFacetPrime?.find(
              (facet) => this.fieldName === Object.keys(facet)[0],
            );
          const supplementalFacetsWithChildrenArray =
            supplementalFacetRoot?.[this.fieldName];
          const supplementalFacetTree =
            facetWithChildrenArrayToCompleteFacetTree({
              path: '/',
              count: 0,
              children: supplementalFacetsWithChildrenArray || [],
            });

          this.facetTree = mergeFacetTrees(
            supplementalFacetTree,
            incomingFacetTree,
          );
        } else {
          this.facetTree = incomingFacetTree;
        }

        break;
      }
      case 'FACET_UPDATE':
      case 'SORT_ORDER_UPDATE':
        this.facetTree = mergeFacetTrees(this.facetTree, incomingFacetTree);
        break;
      default:
        this.facetTree = mergeFacetTrees(this.facetTree, incomingFacetTree);
    }
  }

  handleStateUpdate(state: SearchcraftState) {
    // Determine what action to take based on the current State
    if (
      this.lastSearchTerm !== state.searchTerm &&
      state.searchTerm.trim() === ''
    ) {
      this.handleIncomingSearchResponse(state, 'SEARCH_TERM_EMPTY');
    } else if (this.lastTimeTaken !== state.searchResponseTimeTaken) {
      let actionType: HandlerActionType = 'UNKNOWN';

      if (this.lastSearchTerm !== state.searchTerm) {
        actionType = 'NEW_SEARCH_TERM';
      } else if (
        this.lastRangeValues !== JSON.stringify(state.rangeValueForIndexFields)
      ) {
        actionType = 'RANGE_VALUE_UPDATE';
      } else if (
        this.lastFacetValues !== JSON.stringify(state.facetPathsForIndexFields)
      ) {
        actionType = 'FACET_UPDATE';
      } else if (this.lastSortType !== state.sortType) {
        actionType = 'SORT_ORDER_UPDATE';
      } else if (this.lastSearchMode !== state.searchMode) {
        actionType = 'EXACT_MATCH_UPDATE';
      }

      // Handle the incoming response, using the action we have determined.
      this.handleIncomingSearchResponse(state, actionType);
      this.lastSearchTerm = state.searchTerm;
      this.lastRangeValues = JSON.stringify(state.rangeValueForIndexFields);
      this.lastFacetValues = JSON.stringify(state.facetPathsForIndexFields);
      this.lastSortType = state.sortType;
      this.lastSearchMode = state.searchMode;
    }

    this.lastTimeTaken = state.searchResponseTimeTaken;
  }

  connectedCallback() {
    this.handleStateUpdate(searchcraftStore.getState());

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

  formatFacetName = (name: string): string => {
    const label = name.replace(/^\//, '');
    return `${label.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}`;
  };

  renderFacet(keyName: string, facet: FacetWithChildrenObject) {
    let isChildSelected = false;
    for (const path of Object.keys(this.selectedPaths)) {
      if (
        this.selectedPaths[path] &&
        path.startsWith(facet.path) &&
        path.length > facet.path.length
      ) {
        isChildSelected = true;
      }
    }

    const isSelected = Object.keys(this.selectedPaths).includes(facet.path);

    const shouldRenderChildren =
      (Object.keys(facet.children).length > 0 &&
        (isSelected || isChildSelected)) ||
      keyName === '@@root';

    return (
      <div class='searchcraft-facet-list-item'>
        {keyName !== '@@root' && (
          <label class='searchcraft-facet-list-checkbox-label'>
            <div class='searchcraft-facet-list-checkbox-input-wrapper'>
              <input
                class='searchcraft-facet-list-checkbox-input'
                checked={this.selectedPaths[facet.path]}
                onChange={(_event: Event) => {
                  this.handleCheckboxChange(facet.path);
                }}
                type='checkbox'
              />
              {isChildSelected ? (
                <div class='searchcraft-facet-list-checkbox-input-dash-icon'>
                  <svg viewBox='0 0 14 3' fill='none'>
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
                  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
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
            <span>
              {this.formatFacetName(keyName)} ({facet.count})
            </span>
          </label>
        )}
        {shouldRenderChildren && (
          <div
            class='searchcraft-facet-list'
            style={{
              paddingLeft: keyName !== '@@root' ? '24px' : '0px',
              paddingTop: keyName !== '@@rote' ? '6px' : '0px',
            }}
          >
            {Object.keys(facet.children).map((key) => {
              if (facet.children[key]) {
                return this.renderFacet(key, facet.children[key]);
              }
            })}
          </div>
        )}
      </div>
    );
  }

  render() {
    if (!this.fieldName) {
      return;
    }

    if (
      Object.keys(this.facetTree.children).length === 0 &&
      (this.lastSearchTerm || '').trim().length === 0
    ) {
      return (
        <p class='searchcraft-facet-list-message'>
          Enter a search to view facets.
        </p>
      );
    }

    if (
      Object.keys(this.facetTree.children).length === 0 &&
      (this.lastSearchTerm || '').trim().length > 0
    ) {
      return (
        <p class='searchcraft-facet-list-message'>
          No facets are available for this search query.
        </p>
      );
    }

    return (
      <div class='searchcraft-facet-list'>
        {this.renderFacet('@@root', this.facetTree)}
      </div>
    );
  }
}
