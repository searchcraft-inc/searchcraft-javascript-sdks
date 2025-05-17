import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
} from '@stencil/core';

import type {
  FacetRoot,
  FacetWithChildrenArray,
  FacetWithChildrenObject,
} from '@types';

import type { SearchcraftState } from '@store';
import {
  deepMergeWithSpread,
  facetWithChildrenArrayToCompleteFacetTree,
  getFacetTreeNodeAtPath,
  mergeFacetTrees,
  removeSubstringMatches,
} from '@utils';
import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';

type HandlerActionType =
  | 'SEARCH_TERM_EMPTY'
  | 'NEW_SEARCH_TERM'
  | 'NEW_SEARCH_TERM_WHILE_FACETS_ACTIVE'
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
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  /**
   * The name of the field where facets are applied.
   */
  @Prop() fieldName = '';

  /**
   * Emitted when the facets are updated.
   */
  @Event() facetSelectionUpdated?: EventEmitter<{ paths: string[] }>;

  /**
   * The currently selected facet paths.
   */
  @State() selectedPaths: Record<string, boolean> = {};

  /**
   * A Tree representing all of the facets collected from search responses.
   */
  @State() facetTreeCollectedFromSearchResponse: FacetWithChildrenObject = {
    path: '/',
    count: 0,
    children: {},
  };

  /**
   * A Tree representing the facet paths that are selected, but were not included
   * in any search response.
   */
  facetTreeFromFacetPathsNotInSearchResponse: FacetWithChildrenObject = {
    path: '/',
    count: 0,
    children: {},
  };

  /**
   * The facet tree that ultimately gets rendered.
   * This is a mergin of the facetTreeCollectedFromSearchResponse and the facetTreeFromFacetPathsNotInSearchResponse tree
   */
  @State() renderedFacetTree: FacetWithChildrenObject = {
    path: '/',
    count: 0,
    children: {},
  };

  // Internal vars used to track when to perform various facet actions.
  private lastTimeTaken?: number;
  private lastSearchTerm?: string;
  private lastSearchMode?: string;
  private lastSortType?: string | null;
  private lastRangeValues?: string;
  private lastFacetValues?: string;

  private unsubscribe?: () => void;
  private cleanupCore?: () => void;

  get areAnyFacetPathsSelected(): boolean {
    return Object.keys(this.selectedPaths).some(
      (key) => this.selectedPaths[key],
    );
  }

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

    // Determine what action to take to accumulate items into the `facetTreeCollectedFromSearchResponse`.
    // This facet tree gets accumulated in different ways depending on what action type occured.
    switch (actionType) {
      case 'SEARCH_TERM_EMPTY':
        this.facetTreeCollectedFromSearchResponse = {
          path: '/',
          count: 0,
          children: {},
        };
        break;
      case 'NEW_SEARCH_TERM':
        this.facetTreeCollectedFromSearchResponse = incomingFacetTree;
        break;
      case 'NEW_SEARCH_TERM_WHILE_FACETS_ACTIVE':
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

          this.facetTreeCollectedFromSearchResponse = mergeFacetTrees(
            supplementalFacetTree,
            incomingFacetTree,
          );
        } else {
          this.facetTreeCollectedFromSearchResponse = incomingFacetTree;
        }
        break;
      }
      case 'FACET_UPDATE':
      case 'SORT_ORDER_UPDATE':
        this.facetTreeCollectedFromSearchResponse = mergeFacetTrees(
          this.facetTreeCollectedFromSearchResponse,
          incomingFacetTree,
        );
        break;
      default:
        return;
    }

    // Determine if there are any selected facet paths not in the current tree.
    // If there are, we add them to "facetTreeFromFacetPathsNotInSearchResponse"
    this.facetTreeFromFacetPathsNotInSearchResponse = {
      path: '/',
      count: 0,
      children: {},
    };
    const collectedFacetArray: FacetWithChildrenArray = {
      path: '/',
      count: 0,
      children: [],
    };
    for (const pathName of Object.keys(this.selectedPaths).filter(
      (path) => this.selectedPaths[path],
    )) {
      const nodePaths = pathName.startsWith('/')
        ? pathName.substring(1).split('/')
        : pathName.split('/');

      const wasFoundInFacetTree = !!getFacetTreeNodeAtPath(
        this.facetTreeCollectedFromSearchResponse,
        nodePaths,
      );

      const pathKeyName = nodePaths.at(-1);
      if (!wasFoundInFacetTree && pathKeyName) {
        collectedFacetArray.children?.push({
          children: [],
          count: 0,
          path: pathName,
        });
      }
    }
    this.facetTreeFromFacetPathsNotInSearchResponse =
      facetWithChildrenArrayToCompleteFacetTree(collectedFacetArray);

    // Merges facetTreeCollectedFromSearchResponse with selectedFacetPathsNotInCurrentFacetTree.
    // This results in a single, final facet tree that gets rendered in as Checkboxes
    this.renderedFacetTree = deepMergeWithSpread(
      this.facetTreeFromFacetPathsNotInSearchResponse,
      this.facetTreeCollectedFromSearchResponse,
    );
  }

  handleStateUpdate(_state: SearchcraftState) {
    const state = { ..._state };
    // Determine what action to take based on the current State
    if (state.searchTerm.trim() === '') {
      this.handleIncomingSearchResponse(state, 'SEARCH_TERM_EMPTY');
      this.lastSearchTerm = '';
    } else if (
      this.lastTimeTaken !== state.searchResponseTimeTaken &&
      state.searchClientRequest &&
      typeof state.searchClientRequest === 'object'
    ) {
      const request = state.searchClientRequest;
      let actionType: HandlerActionType = 'UNKNOWN';

      if (this.lastSearchTerm !== request.searchTerm) {
        if (this.areAnyFacetPathsSelected) {
          actionType = 'NEW_SEARCH_TERM_WHILE_FACETS_ACTIVE';
        } else {
          actionType = 'NEW_SEARCH_TERM';
        }
      } else if (
        this.lastRangeValues !==
        JSON.stringify(request.rangeValueForIndexFields)
      ) {
        actionType = 'RANGE_VALUE_UPDATE';
      } else if (
        this.lastFacetValues !==
        JSON.stringify(request.facetPathsForIndexFields)
      ) {
        actionType = 'FACET_UPDATE';
      } else if (this.lastSortType !== request.order_by) {
        actionType = 'SORT_ORDER_UPDATE';
      } else if (this.lastSearchMode !== request.mode) {
        actionType = 'EXACT_MATCH_UPDATE';
      }

      this.lastRangeValues = JSON.stringify(request.rangeValueForIndexFields);
      this.lastFacetValues = JSON.stringify(request.facetPathsForIndexFields);
      this.lastSortType = request.order_by;
      this.lastSearchMode = request.mode;
      this.lastSearchTerm = request.searchTerm;
      this.lastTimeTaken = state.searchResponseTimeTaken;
      // Handle the incoming response, using the action we have determined.
      this.handleIncomingSearchResponse(state, actionType);
    }
  }

  onCoreAvailable(core: SearchcraftCore) {
    this.handleStateUpdate(core.store.getState());

    this.unsubscribe = core.store.subscribe((state) => {
      this.handleStateUpdate(state);
    });
  }

  connectedCallback() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  disconnectedCallback() {
    this.unsubscribe?.();
    this.cleanupCore?.();
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
              paddingTop: keyName !== '@@root' ? '6px' : '0px',
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
      Object.keys(this.facetTreeCollectedFromSearchResponse.children).length ===
        0 &&
      (this.lastSearchTerm || '').trim().length === 0
    ) {
      return;
    }

    if (
      Object.keys(this.facetTreeCollectedFromSearchResponse.children).length ===
        0 &&
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
        {this.renderFacet('@@root', this.renderedFacetTree)}
      </div>
    );
  }
}
