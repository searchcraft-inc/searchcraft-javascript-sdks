import { createStore } from 'zustand';

import {
  Logger,
  LogLevel,
  type FacetPathsForIndexField,
  type RangeValueForIndexField,
  type AdClientResponseItem,
} from '@searchcraft/core';
import type {
  SearchcraftState,
  SearchcraftStateFunctions,
  SearchcraftStateValues,
} from './SearchcraftStore.types';

const initialSearchcraftStateValues: SearchcraftStateValues = {
  adClientResponseItems: [],
  core: undefined,
  hotkey: 'k',
  hotkeyModifier: 'meta',
  logger: undefined,
  facetPathsForIndexFields: {},
  initialQuery: '',
  initialSearchClientResponseItems: [],
  isPopoverVisible: false,
  isSearchInProgress: false,
  rangeValueForIndexFields: {},
  searchTerm: '',
  searchMode: 'fuzzy',
  searchClientResponseItems: [],
  searchResponseTimeTaken: undefined,
  searchResponseFacetPrime: undefined,
  searchResultsCount: 0,
  searchResultsPerPage: 20,
  searchResultsPage: 1,
  sortType: undefined,
  orderByField: undefined,
  // Callbacks
  afterInit: () => {},
};

const searchcraftStore = createStore<SearchcraftState>((_set, get) => {
  const functions: SearchcraftStateFunctions = {
    set: (state) => {
      _set(state);
      return get();
    },
    addFacetPathsForIndexField: (facetPaths: FacetPathsForIndexField) =>
      functions.set((state) => ({
        facetPathsForIndexFields: {
          ...state.facetPathsForIndexFields,
          [facetPaths.fieldName]: facetPaths,
        },
      })),
    addRangeValueForIndexField: (rangeValue: RangeValueForIndexField) =>
      functions.set((state) => ({
        rangeValueForIndexFields: {
          ...state.rangeValueForIndexFields,
          [rangeValue.fieldName]: rangeValue,
        },
      })),
    getSearchcraftCore: () => {
      const { core } = get();
      return core;
    },
    init: (core, debug = false) => {
      const logger = debug
        ? new Logger({ logLevel: LogLevel.DEBUG })
        : undefined;
      const state = functions.set({
        core,
        logger,
        searchResultsPerPage: core?.config.searchResultsPerPage || 20,
      });
      core?.subscribe('initialized', () => {
        if (state.afterInit) {
          state.afterInit(state);
        }
      });
    },
    removeFacetPathsForIndexField: (fieldName: string) =>
      functions.set((state) => {
        const currentPaths = state.facetPathsForIndexFields;
        delete currentPaths[fieldName];
        return {
          facetPathsForIndexFields: {
            ...currentPaths,
          },
        };
      }),
    removeRangeValueForIndexField: (fieldName: string) =>
      functions.set((state) => {
        const currentValues = state.rangeValueForIndexFields;
        delete currentValues[fieldName];
        return {
          rangeValueForIndexFields: {
            ...currentValues,
          },
        };
      }),
    resetFacetPaths: () => {
      functions.set({
        facetPathsForIndexFields: {},
      });
    },
    search: async () => {
      const state = get();
      state.logger?.log(
        LogLevel.INFO,
        `Starting search with search term: "${state.searchTerm}"`,
      );

      if (!state.core) {
        throw new Error('Searchcraft instance is not initialized.');
      }

      if (!state.searchTerm.trim()) {
        state.logger?.log(
          LogLevel.INFO,
          'No search request was made: search term was empty.',
        );
        functions.set({
          searchClientResponseItems: [],
          searchResultsCount: 0,
          searchResultsPage: 1,
          searchTerm: '',
        });
        return;
      }

      functions.set({ isSearchInProgress: true });
      state.core.getResponseItems(
        {
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
        },
        functions.setSearchClientResponseItemsFromResponse,
        functions.setAdClientResponseItems,
      );
    },
    setAdClientResponseItems: (items: AdClientResponseItem[]) =>
      functions.set({ adClientResponseItems: items }),
    setSearchClientResponseItemsFromResponse: (response, items) => {
      const { facets, count = 0, time_taken = 0 } = response.data;
      const state = functions.set((state) => {
        return {
          isSearchInProgress: false,
          searchClientResponseItems: items,
          searchResponseTimeTaken: time_taken,
          searchResultsPage:
            // Reset to first page when response count changes
            count === state.searchResultsCount ? state.searchResultsPage : 1,
          searchResultsCount: count,
          ...(facets && { searchResponseFacetPrime: facets }),
        };
      });

      state.logger?.log(
        LogLevel.DEBUG,
        `Search results: ${JSON.stringify(items)}`,
      );
      state.logger?.log(
        LogLevel.DEBUG,
        `Facets from response: ${JSON.stringify(facets)}`,
      );
    },
    setInitialSearchClientResponseItemsFromResponse: (response, items) => {
      const state = get();
      const { count = 0, time_taken = 0 } = response.data;
      functions.set((state) => {
        return {
          isSearchInProgress: false,
          initialSearchClientResponseItems: items,
          searchResponseTimeTaken: time_taken,
          searchResultsPage:
            // Reset to first page when response count changes
            count === state.searchResultsCount ? state.searchResultsPage : 1,
          searchResultsCount: count,
        };
      });

      state.logger?.log(
        LogLevel.DEBUG,
        `Search results: ${JSON.stringify(items)}`,
      );
    },
    setInitialQuery: async (query: string) => {
      const state = functions.set({ initialQuery: query });

      state.logger?.log(
        LogLevel.INFO,
        `Starting search with query: "${state.initialQuery}"`,
      );

      if (!state.core) {
        throw new Error('Searchcraft instance is not initialized.');
      }

      await state.core.getResponseItems(
        query,
        functions.setInitialSearchClientResponseItemsFromResponse,
        functions.setAdClientResponseItems,
      );
    },
    setPopoverVisibility: (isVisible) =>
      functions.set({
        isPopoverVisible: isVisible,
      }),
    setSearchMode: (mode) => functions.set({ searchMode: mode }),
    setSortOrder: ({ orderByField, sortType }) =>
      functions.set({ sortType, orderByField }),
    setSearchTerm: (searchTerm) => {
      const { core } = get();

      if (searchTerm.length === 0) {
        core?.handleInputCleared();
      }
      /**
       * When a new searchTerm is set, also reset the sort type, search mode, and facet paths.
       */
      functions.set({
        searchTerm,
        facetPathsForIndexFields: {},
        ...(searchTerm.trim().length === 0 && {
          searchMode: 'fuzzy',
          sortType: null,
          orderByField: null,
        }),
      });
    },
    setSearchClientResponseItems: (items) =>
      functions.set({ searchClientResponseItems: items }),
    setSearchResultsCount: (count) =>
      functions.set({ searchResultsCount: count }),
    setSearchResultsPage: async (page) => {
      functions.set({ searchResultsPage: page });
      await functions.search();
    },
    setSearchResultsPerPage: async (perPage) => {
      functions.set({ searchResultsPerPage: perPage });
      await functions.search();
    },
    setHotKeyAndHotKeyModifier: (hotkey, hotkeyModifier) => {
      const { hotkey: initialHotkey, hotkeyModifier: initialHotkeyModifier } =
        initialSearchcraftStateValues;
      functions.set({
        hotkey: hotkey || initialHotkey,
        hotkeyModifier: hotkeyModifier || initialHotkeyModifier,
      });
    },
  };

  const stateObject: SearchcraftState = {
    ...initialSearchcraftStateValues,
    ...functions,
  };

  return stateObject;
});

export { searchcraftStore };
