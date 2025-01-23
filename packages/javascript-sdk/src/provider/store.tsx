import { create } from 'zustand';

import {
  type SearchcraftCore,
  SDKDebugger,
  LogLevel,
  type SearchcraftResponse,
  type FacetPrime,
  type FacetPathsForIndexField,
  type RangeValueForIndexField,
} from '@searchcraft/core';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface SearchcraftState {
  resetFacetPaths: () => void;
  addFacetPathsForIndexField: (data: FacetPathsForIndexField) => void;
  removeFacetPathsForIndexField: (fieldName: string) => void;
  addRangeValueForIndexField: (data: RangeValueForIndexField) => void;
  removeRangeValueForIndexField: (fieldName: string) => void;
  setSearchMode: (mode: 'fuzzy' | 'exact') => void;
  setSortType: (type: 'asc' | 'desc') => void;
  facetPathsForIndexFields: Record<string, FacetPathsForIndexField>;
  rangeValueForIndexFields: Record<string, RangeValueForIndexField>;
  searchMode: 'fuzzy' | 'exact';
  sortType: 'asc' | 'desc';
  facets: FacetPrime | null;
  getSearchcraftInstance: () => SearchcraftCore | null;
  initialize: (searchcraft: SearchcraftCore, debug?: boolean) => void;
  isRequesting: boolean;
  query: string;
  search: () => Promise<void>;
  searchResults: SearchcraftResponse | null;
  setFacets: (facets: FacetPrime) => void;
  setIsRequesting: (isRequesting: boolean) => void;
  setQuery: (query: string) => void;
  setSearchResults: (results: SearchcraftResponse | null) => void;
  setPopoverVisibility: (isVisible: boolean) => void;
  isPopoverVisible: boolean;
}

// Zustand store for Searchcraft state
const useSearchcraftStore = create<SearchcraftState>((set, get) => {
  let searchcraft: SearchcraftCore | null = null;
  let debuggerInstance: SDKDebugger | null = null;

  const log = (level: LogLevel, message: string) => {
    if (debuggerInstance) {
      switch (level) {
        case LogLevel.DEBUG:
          debuggerInstance.debug(message);
          break;
        case LogLevel.INFO:
          debuggerInstance.info(message);
          break;
        case LogLevel.WARN:
          debuggerInstance.warn(message);
          break;
        case LogLevel.ERROR:
          debuggerInstance.error(message);
          break;
      }
    }
  };

  return {
    setPopoverVisibility: (isVisible: boolean) => {
      set({
        isPopoverVisible: isVisible,
      });
    },
    isPopoverVisible: false,
    resetFacetPaths: () => {
      set({
        facetPathsForIndexFields: {},
      });
    },
    addFacetPathsForIndexField: (data: FacetPathsForIndexField) =>
      set((state) => ({
        facetPathsForIndexFields: {
          ...state.facetPathsForIndexFields,
          [data.fieldName]: data,
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
    addRangeValueForIndexField: (data: RangeValueForIndexField) =>
      set((state) => ({
        rangeValueForIndexFields: {
          ...state.rangeValueForIndexFields,
          [data.fieldName]: data,
        },
      })),
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
    setSearchMode: (mode) => set({ searchMode: mode }),
    setSortType: (type) => set({ sortType: type }),
    searchMode: 'fuzzy',
    sortType: 'asc',
    facetPathsForIndexFields: {},
    rangeValueForIndexFields: {},
    query: '',
    isRequesting: false,
    searchResults: null,
    facets: null,
    getSearchcraftInstance: () => searchcraft,
    setQuery: (query) => {
      /**
       * When a new query is set, also reset the sort type, search mode, and facet paths.
       */
      set({
        query,
        facetPathsForIndexFields: {},
        ...(query.trim().length === 0 && {
          searchMode: 'fuzzy',
          sortType: 'asc',
        }),
      });
    },
    setSearchResults: (results) => set({ searchResults: results }),
    setFacets: (facets) => set({ facets }),
    setIsRequesting: (isRequesting) => set({ isRequesting }),
    search: async () => {
      const state = get();
      log(LogLevel.INFO, `Starting search with search term: "${state.query}"`);

      if (!searchcraft) {
        throw new Error('Searchcraft instance is not initialized.');
      }

      if (!state.query.trim()) {
        log(
          LogLevel.INFO,
          'No search request was made: search term was empty.',
        );
        state.setSearchResults(null);
        return;
      }

      state.setIsRequesting(true);
      try {
        const results = await searchcraft.search({
          query: state.query,
          mode: state.searchMode,
          sort: state.sortType,
          facetPathsForIndexFields: state.facetPathsForIndexFields,
          rangeValueForIndexFields: state.rangeValueForIndexFields,
        });
        const updatedFacets = results.data.facets || null;

        state.setSearchResults(results);
        state.setFacets(updatedFacets);

        log(LogLevel.DEBUG, `Search results: ${JSON.stringify(results)}`);
        log(LogLevel.DEBUG, `Updated facets: ${JSON.stringify(updatedFacets)}`);
      } catch (error) {
        console.error(`Search failed: ${(error as Error).message}`);
        log(
          LogLevel.ERROR,
          `Search failed with error: ${(error as Error).message}`,
        );
      } finally {
        state.setIsRequesting(false);
      }
    },
    initialize: (searchcraftInstance, debug = false) => {
      searchcraft = searchcraftInstance;
      debuggerInstance = debug
        ? new SDKDebugger({ logLevel: LogLevel.DEBUG })
        : null;

      log(LogLevel.INFO, 'Searchcraft store initialized.');
    },
  };
});

const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

export { useSearchcraftStore, useThemeStore };
