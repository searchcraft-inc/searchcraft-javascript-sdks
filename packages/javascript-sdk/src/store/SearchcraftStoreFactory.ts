import { createStore, type StoreApi } from 'zustand';

import type {
  FacetPathsForIndexField,
  RangeValueForIndexField,
  SearchClientRequestProperties,
} from '@types';

// import { Logger, LogLevel } from '@classes';

import type {
  SearchcraftState,
  SearchcraftStateFunctions,
  SearchcraftStateValues,
} from './SearchcraftStore.types';
import { DEFAULT_CORE_INSTANCE_ID } from '@classes/CoreInstanceRegistry';

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
  searchClientResponseItems: [],
  cachedSearchClientResponseItems: [],
  searchResponseTimeTaken: undefined,
  searchResponseFacetPrime: undefined,
  supplementalFacetPrime: undefined,
  searchResultsCount: 0,
  searchResultsPerPage: 20,
  searchResultsPage: 1,
  sortType: undefined,
  orderByField: undefined,
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
      addFacetPathsForIndexField: (facetPaths: FacetPathsForIndexField) =>
        set((state) => ({
          facetPathsForIndexFields: {
            ...state.facetPathsForIndexFields,
            [facetPaths.fieldName]: facetPaths,
          },
        })),
      addRangeValueForIndexField: (rangeValue: RangeValueForIndexField) =>
        set((state) => ({
          rangeValueForIndexFields: {
            ...state.rangeValueForIndexFields,
            [rangeValue.fieldName]: rangeValue,
          },
        })),
      removeFacetPathsForIndexField: (fieldName: string) =>
        set((state) => {
          const currentPaths = state.facetPathsForIndexFields;
          delete currentPaths[fieldName];
          return {
            facetPathsForIndexFields: {
              ...currentPaths,
            },
          };
        }),
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
      search: async () => {
        const state = get();

        if (!state.core) {
          throw new Error('Searchcraft instance is not initialized.');
        }

        if (!state.searchTerm.trim()) {
          state.core?.searchClient?.abortRequests();
          set({
            searchClientResponseItems: [
              ...state.cachedSearchClientResponseItems,
            ],
            adClientResponseItems: [...state.cachedAdClientResponseItems],
            searchResultsCount: 0,
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
         * When a new searchTerm is set, also reset the sort type, search mode, and facet paths.
         */
        set({
          searchTerm,
          facetPathsForIndexFields: {},
          searchResultsPage: 1,
          ...(searchTerm.trim().length === 0 && {
            searchMode: 'fuzzy',
            sortType: null,
            orderByField: null,
            searchClientResponseItems: [
              ...state.cachedSearchClientResponseItems,
            ],
            adClientResponseItems: [...state.cachedAdClientResponseItems],
          }),
        });
      },
      setSearchResultsCount: (count) => set({ searchResultsCount: count }),
      setSearchResultsPage: async (page) => {
        set({ searchResultsPage: page });
        await functions.search();
      },
      setSearchResultsPerPage: async (perPage) => {
        set({ searchResultsPerPage: perPage });
        await functions.search();
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
    };

    return stateObject;
  });

  existingStores[id] = newStore;

  return newStore;
};

export { createSearchcraftStore };
