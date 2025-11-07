import { type StoreApi, createStore } from 'zustand';

import type {
    FacetPathsForIndexField,
    RangeValueForIndexField,
    SearchClientRequestProperties,
} from '@types';

// import { Logger, LogLevel } from '@classes';

import { DEFAULT_CORE_INSTANCE_ID } from '@classes/CoreInstanceRegistry';
import { SummaryClient } from '@clients/SummaryClient';
import type {
    SearchcraftState,
    SearchcraftStateFunctions,
    SearchcraftStateValues,
} from './SearchcraftStore.types';

const initialSearchcraftStateValues: SearchcraftStateValues = {
  adClientResponseItems: [],
  cachedAdClientResponseItems: [],
  core: undefined,
  hotkey: 'k',
  hotkeyModifier: 'meta',
  facetPathsForIndexFields: {},
  isPopoverVisible: false,
  isSearchInProgress: false,
  rangeValueForIndexFields: {},
  searchTerm: '',
  searchMode: 'fuzzy',
  searchClientRequest: undefined,
  searchClientRequestProperties: undefined,
  searchClientResponseItems: [],
  cachedSearchClientResponseItems: [],
  cachedSearchResponseFacetPrime: undefined,
  cachedSupplementalFacetPrime: undefined,
  cachedSearchResponseTimeTaken: undefined,
  cachedSearchResultsCount: undefined,
  cachedSearchClientRequestProperties: undefined,
  searchResponseTimeTaken: undefined,
  searchResponseFacetPrime: undefined,
  supplementalFacetPrime: undefined,
  searchResultsCount: 0,
  searchResultsPerPage: 20,
  searchResultsPage: 1,
  sortType: undefined,
  orderByField: undefined,
  summary: '',
  hasSummaryBox: false,
  summaryClient: undefined,
  isSummaryLoading: false,
  isSummaryNotEnabled: false,
};

// const logger = new Logger({ logLevel: LogLevel.NONE });
const existingStores: Record<string, StoreApi<SearchcraftState>> = {};

/**
 * This is a factory function for creating new searchcraft stores.
 *
 * Searchcraft Stores contain the state information used by a SearchcraftCore instance.
 *
 * This factory function only needs to be called when a new SearchcraftCore is instantiated.
 * @returns
 */
const createSearchcraftStore = (
  searchcraftId: string | undefined,
  initialState: Partial<SearchcraftStateValues> = {},
): StoreApi<SearchcraftState> => {
  const id = searchcraftId || DEFAULT_CORE_INSTANCE_ID;
  if (existingStores[id]) {
    existingStores[id].setState(initialState);
    return existingStores[id];
  }

  const newStore = createStore<SearchcraftState>((set, get) => {
    const functions: SearchcraftStateFunctions = {
      addFacetPathsForIndexField: (facetPaths: FacetPathsForIndexField) => {
        set((state) => ({
          facetPathsForIndexFields: {
            ...state.facetPathsForIndexFields,
            [facetPaths.fieldName]: facetPaths,
          },
          searchResultsPage: 1, // Reset to page 1 when filters change
        }));
      },
      addRangeValueForIndexField: (rangeValue: RangeValueForIndexField) =>
        set((state) => ({
          rangeValueForIndexFields: {
            ...state.rangeValueForIndexFields,
            [rangeValue.fieldName]: rangeValue,
          },
        })),
      removeFacetPathsForIndexField: (fieldName: string) => {
        console.log('[FACET] removeFacetPathsForIndexField', {
          fieldName,
          currentPage: get().searchResultsPage,
          stackTrace: new Error().stack,
        });
        set((state) => {
          const currentPaths = state.facetPathsForIndexFields;
          delete currentPaths[fieldName];
          return {
            facetPathsForIndexFields: {
              ...currentPaths,
            },
            searchResultsPage: 1, // Reset to page 1 when filters change
          };
        });
      },
      removeRangeValueForIndexField: (fieldName: string) =>
        set((state) => {
          const currentValues = state.rangeValueForIndexFields;
          delete currentValues[fieldName];
          return {
            rangeValueForIndexFields: {
              ...currentValues,
            },
          };
        }),
      resetSearchValues: () => {
        const state = get();
        state.core?.searchClient?.abortRequests();
        set({
          searchTerm: '',
          searchResultsPage: 1,
          searchClientResponseItems: [...state.cachedSearchClientResponseItems],
          adClientResponseItems: [...state.cachedAdClientResponseItems],
        });
      },
      search: async (options?: { skipSummary?: boolean }) => {
        const state = get();

        if (!state.core) {
          throw new Error('Searchcraft instance is not initialized.');
        }

        if (state.core.config.cortexURL && !options?.skipSummary) {
          state.summaryClient?.streamSummaryData();
        }

        // Check if this is an initialQuery case (string requestProperties with empty searchTerm)
        const isInitialQuery =
          typeof state.cachedSearchClientRequestProperties === 'string' &&
          state.searchTerm.trim() === '';

        // Check if there are any active filters or pagination changes
        const hasActiveFilters =
          Object.keys(state.facetPathsForIndexFields).length > 0 ||
          Object.keys(state.rangeValueForIndexFields).length > 0;
        const hasNonDefaultPagination = state.searchResultsPage !== 1;
        const hasNonDefaultSearchMode = state.searchMode !== 'fuzzy';

        if (!state.searchTerm.trim()) {
          // If it's initialQuery and there are filters, pagination, or mode changes, perform a search
          if (
            isInitialQuery &&
            (hasActiveFilters ||
              hasNonDefaultPagination ||
              hasNonDefaultSearchMode)
          ) {
            // Parse the initialQuery
            const initialQueryObj = JSON.parse(
              state.cachedSearchClientRequestProperties as string,
            );

            set({ isSearchInProgress: true });

            // Build the modified query array starting with the base query
            const baseQuery = Array.isArray(initialQueryObj.query)
              ? initialQueryObj.query.filter((q: any) => !q.occur)
              : [initialQueryObj.query];

            const queries = [...baseQuery];

            // Add facet filters
            if (state.facetPathsForIndexFields) {
              Object.keys(state.facetPathsForIndexFields).forEach(
                (fieldName) => {
                  const item = state.facetPathsForIndexFields?.[fieldName];
                  if (item) {
                    queries.push({
                      occur: 'must',
                      exact: {
                        ctx: item.value,
                      },
                    });
                  }
                },
              );
            }

            // Add range filters
            if (state.rangeValueForIndexFields) {
              Object.keys(state.rangeValueForIndexFields).forEach(
                (fieldName) => {
                  const item = state.rangeValueForIndexFields?.[fieldName];
                  if (item) {
                    queries.push({
                      occur: 'must',
                      exact: {
                        ctx: item.value,
                      },
                    });
                  }
                },
              );
            }

            // Build the modified request with filters and pagination
            const modifiedRequest = {
              ...initialQueryObj,
              query: queries,
              offset: state.searchResultsPerPage
                ? state.searchResultsPerPage * (state.searchResultsPage - 1)
                : 0,
              limit: state.searchResultsPerPage,
            };

            state.core.getResponseItems({
              requestProperties: JSON.stringify(modifiedRequest),
              shouldCacheResultsForEmptyState: false,
            });
            return;
          }

          // Otherwise, restore cached results
          state.core?.searchClient?.abortRequests();
          set({
            searchClientResponseItems: [
              ...state.cachedSearchClientResponseItems,
            ],
            adClientResponseItems: [...state.cachedAdClientResponseItems],
            searchResponseFacetPrime: state.cachedSearchResponseFacetPrime,
            supplementalFacetPrime: state.cachedSupplementalFacetPrime,
            searchResponseTimeTaken: state.cachedSearchResponseTimeTaken,
            searchResultsCount: state.cachedSearchResultsCount || 0,
            searchClientRequestProperties:
              state.cachedSearchClientRequestProperties,
            searchResultsPage: 1,
            searchTerm: '',
          });
          return;
        }

        set({ isSearchInProgress: true });

        const searchClientRequestProperites: SearchClientRequestProperties = {
          searchTerm: state.searchTerm,
          mode: state.searchMode,
          sort: state.sortType,
          order_by: state.orderByField,
          facetPathsForIndexFields: state.facetPathsForIndexFields,
          rangeValueForIndexFields: state.rangeValueForIndexFields,
          offset: state.searchResultsPerPage
            ? state.searchResultsPerPage * (state.searchResultsPage - 1)
            : 0,
          limit: state.searchResultsPerPage,
        };

        state.core.getResponseItems({
          requestProperties: searchClientRequestProperites,
          shouldCacheResultsForEmptyState: false,
        });
      },
      setPopoverVisibility: (isVisible) =>
        set({
          isPopoverVisible: isVisible,
        }),
      setSearchMode: (mode) => set({ searchMode: mode }),
      setSortOrder: ({ orderByField, sortType }) =>
        set({ sortType, orderByField }),
      setSearchTerm: (searchTerm) => {
        const state = get();

        if (searchTerm.length === 0) {
          state.core?.handleInputCleared();
        }
        /**
         * When a new searchTerm is set, also reset the sort type, search mode
         */
        set({
          searchTerm,
          searchResultsPage: 1,
          ...(searchTerm.trim().length === 0 && {
            searchMode: 'fuzzy',
            sortType: null,
            orderByField: null,
            searchClientResponseItems: [
              ...state.cachedSearchClientResponseItems,
            ],
            adClientResponseItems: [...state.cachedAdClientResponseItems],
            searchResponseFacetPrime: state.cachedSearchResponseFacetPrime,
            supplementalFacetPrime: state.cachedSupplementalFacetPrime,
            searchResponseTimeTaken: state.cachedSearchResponseTimeTaken,
            searchResultsCount: state.cachedSearchResultsCount || 0,
            searchClientRequestProperties:
              state.cachedSearchClientRequestProperties,
          }),
        });
      },
      setSearchResultsCount: (count) => set({ searchResultsCount: count }),
      setSearchResultsPage: async (page) => {
        set({ searchResultsPage: page });
        await functions.search({ skipSummary: true });
      },
      setSearchResultsPerPage: async (perPage) => {
        set({ searchResultsPerPage: perPage });
        await functions.search({ skipSummary: true });
      },
      setHotKeyAndHotKeyModifier: (hotkey, hotkeyModifier) => {
        const { hotkey: initialHotkey, hotkeyModifier: initialHotkeyModifier } =
          initialSearchcraftStateValues;
        set({
          hotkey: hotkey || initialHotkey,
          hotkeyModifier: hotkeyModifier || initialHotkeyModifier,
        });
      },
    };

    const stateObject: SearchcraftState = {
      ...initialSearchcraftStateValues,
      ...initialState,
      ...functions,
      ...{
        summaryClient: new SummaryClient(get, set),
      },
    };

    return stateObject;
  });

  existingStores[id] = newStore;

  return newStore;
};

export { createSearchcraftStore };
