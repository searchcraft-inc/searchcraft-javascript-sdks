import { createStore } from 'zustand';

import {
  Logger,
  LogLevel,
  type FacetPathsForIndexField,
  type RangeValueForIndexField,
  type SearchcraftResponse,
  type SearchClientResponseItem,
  type AdClientResponseItem,
  type SearchcraftCore,
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
  isPopoverVisible: false,
  isSearchInProgress: false,
  searchTerm: '',
  rangeValueForIndexFields: {},
  searchMode: 'fuzzy',
  searchClientResponseItems: [],
  searchResponseTimeTaken: undefined,
  searchResponseFacetPrime: undefined,
  searchResultsCount: 0,
  searchResultsPerPage: 20,
  searchResultsPage: 1,
  sortType: 'asc',
};

const searchcraftStore = createStore<SearchcraftState>((set, get) => {
  const functions: SearchcraftStateFunctions = {
    addFacetPathsForIndexField: (data: FacetPathsForIndexField) =>
      set((state) => ({
        facetPathsForIndexFields: {
          ...state.facetPathsForIndexFields,
          [data.fieldName]: data,
        },
      })),
    addRangeValueForIndexField: (data: RangeValueForIndexField) =>
      set((state) => ({
        rangeValueForIndexFields: {
          ...state.rangeValueForIndexFields,
          [data.fieldName]: data,
        },
      })),
    getSearchcraftInstance: () => {
      const { core } = get();
      return core;
    },
    initialize: (searchcraftInstance, debug = false) => {
      const core = searchcraftInstance as SearchcraftCore;
      const logger = debug
        ? new Logger({ logLevel: LogLevel.DEBUG })
        : undefined;

      set({
        core,
        logger,
        searchResultsPerPage: core.config.searchResultsPerPage || 20,
      });
    },
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
    resetFacetPaths: () => {
      set({
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
        set({
          searchClientResponseItems: [],
          searchResultsCount: 0,
          searchResultsPage: 1,
          searchTerm: '',
        });
        return;
      }

      set({ isSearchInProgress: true });

      const handleSearchcraftResponse = (
        response: SearchcraftResponse,
        items: SearchClientResponseItem[],
      ) => {
        const facetsFromResponse = response.data.facets;

        set((state) => {
          return {
            isSearchInProgress: false,
            searchClientResponseItems: items,
            searchResponseTimeTaken: response.data.time_taken || 0,
            searchResultsPage:
              // reset to first page when response count changes
              response.data.count === state.searchResultsCount
                ? state.searchResultsPage
                : 1,
            searchResultsCount: response.data.count || 0,
          };
        });

        if (facetsFromResponse) {
          set({ searchResponseFacetPrime: facetsFromResponse });
        }

        state.logger?.log(
          LogLevel.DEBUG,
          `Search results: ${JSON.stringify(items)}`,
        );
        state.logger?.log(
          LogLevel.DEBUG,
          `Facets from response: ${JSON.stringify(facetsFromResponse)}`,
        );
      };

      const handleAdResponse = (
        adClientResponseItems: AdClientResponseItem[],
      ) => {
        set({ adClientResponseItems });
      };

      state.core.getItems(
        {
          searchTerm: state.searchTerm,
          mode: state.searchMode,
          sort: state.sortType,
          facetPathsForIndexFields: state.facetPathsForIndexFields,
          rangeValueForIndexFields: state.rangeValueForIndexFields,
          offset: state.searchResultsPerPage
            ? state.searchResultsPerPage * (state.searchResultsPage - 1)
            : 0,
          limit: state.searchResultsPerPage,
        },
        handleSearchcraftResponse,
        handleAdResponse,
      );
    },
    setPopoverVisibility: (isVisible) => {
      set({
        isPopoverVisible: isVisible,
      });
    },
    setSearchMode: (mode) => set({ searchMode: mode }),
    setSortType: (type) => set({ sortType: type }),
    setSearchTerm: (searchTerm) => {
      const { core } = get();

      if (searchTerm.length === 0) {
        core?.handleInputCleared();
      }
      /**
       * When a new searchTerm is set, also reset the sort type, search mode, and facet paths.
       */
      set({
        searchTerm,
        facetPathsForIndexFields: {},
        ...(searchTerm.trim().length === 0 && {
          searchMode: 'fuzzy',
          sortType: 'asc',
        }),
      });
    },
    setSearchClientResponseItems: (items) =>
      set({ searchClientResponseItems: items }),
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
    ...functions,
  };

  return stateObject;
});

export { searchcraftStore };
