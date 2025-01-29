import { create } from 'zustand';

import {
  SDKDebugger,
  LogLevel,
  type SearchcraftResponse,
  type FacetPathsForIndexField,
  type RangeValueForIndexField,
} from '@searchcraft/core';
import type {
  SearchcraftState,
  SearchcraftStateFunctions,
  SearchcraftStateValues,
} from './SearchcraftStore.types';

const initialSearchcraftStateValues: SearchcraftStateValues = {
  core: undefined,
  logger: undefined,
  facets: undefined,
  facetPathsForIndexFields: {},
  isPopoverVisible: false,
  query: '',
  rangeValueForIndexFields: {},
  searchMode: 'fuzzy',
  searchResults: null,
  sortType: 'asc',
};

const useSearchcraftStore = create<SearchcraftState>((set, get) => {
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
      const core = searchcraftInstance;
      const logger = debug
        ? new SDKDebugger({ logLevel: LogLevel.DEBUG })
        : undefined;

      set({
        core,
        logger,
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
        `Starting search with search term: "${state.query}"`,
      );

      if (!state.core) {
        throw new Error('Searchcraft instance is not initialized.');
      }

      if (!state.query.trim()) {
        state.logger?.log(
          LogLevel.INFO,
          'No search request was made: search term was empty.',
        );
        state.setSearchResults(null);
        return;
      }

      state.core.search(
        {
          query: state.query,
          mode: state.searchMode,
          sort: state.sortType,
          facetPathsForIndexFields: state.facetPathsForIndexFields,
          rangeValueForIndexFields: state.rangeValueForIndexFields,
        },
        (results: SearchcraftResponse) => {
          const updatedFacets = results.data.facets || null;

          state.setSearchResults(results);
          if (updatedFacets) {
            state.setFacets(updatedFacets);
          }

          state.logger?.log(
            LogLevel.DEBUG,
            `Search results: ${JSON.stringify(results)}`,
          );
          state.logger?.log(
            LogLevel.DEBUG,
            `Updated facets: ${JSON.stringify(updatedFacets)}`,
          );
        },
      );
    },
    setPopoverVisibility: (isVisible: boolean) => {
      set({
        isPopoverVisible: isVisible,
      });
    },
    setSearchMode: (mode) => set({ searchMode: mode }),
    setSortType: (type) => set({ sortType: type }),
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
  };

  const stateObject: SearchcraftState = {
    ...initialSearchcraftStateValues,
    ...functions,
  };

  return stateObject;
});

export { useSearchcraftStore };
