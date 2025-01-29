import { create } from 'zustand';

import {
  SDKDebugger,
  LogLevel,
  type FacetPathsForIndexField,
  type RangeValueForIndexField,
  type SearchcraftResponse,
  type SearchcraftListViewItem,
  type SearchIndexEntry,
} from '@searchcraft/core';
import type {
  SearchcraftState,
  SearchcraftStateFunctions,
  SearchcraftStateValues,
} from './SearchcraftStore.types';

const initialSearchcraftStateValues: SearchcraftStateValues = {
  core: undefined,
  logger: undefined,
  facetPathsForIndexFields: {},
  isPopoverVisible: false,
  searchTerm: '',
  rangeValueForIndexFields: {},
  searchMode: 'fuzzy',
  searchResponseListViewItems: [],
  searchResponseTimeTaken: undefined,
  searchResponseFacetPrime: undefined,
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
        set({ searchResponseListViewItems: [] });
        return;
      }

      state.core.search(
        {
          query: state.searchTerm,
          mode: state.searchMode,
          sort: state.sortType,
          facetPathsForIndexFields: state.facetPathsForIndexFields,
          rangeValueForIndexFields: state.rangeValueForIndexFields,
        },
        (response: SearchcraftResponse) => {
          // Extracts the documents from the response and maps them to  list view items
          const listViewItems: SearchcraftListViewItem[] = (
            response.data.hits || []
          )
            ?.map((entry: SearchIndexEntry) => entry.doc) // SearchcraftResponse -> (SearchDocument || undefined)[]
            .filter((item) => !!item) // (SearchDocument || undefined)[] -> SearchDocument[]
            .map((document) => ({ type: 'SearchDocument', document })); // SearchDocument[] -> SearchcraftListViewItem

          const updatedFacets = response.data.facets;

          set({
            searchResponseListViewItems: listViewItems,
            searchResponseTimeTaken: response.data.time_taken || 0,
          });

          if (updatedFacets) {
            set({ searchResponseFacetPrime: updatedFacets });
          }

          state.logger?.log(
            LogLevel.DEBUG,
            `Search results: ${JSON.stringify(listViewItems)}`,
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
    setSearchTerm: (searchTerm) => {
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
    setSearchResponseListViewItems: (items) =>
      set({ searchResponseListViewItems: items }),
  };

  const stateObject: SearchcraftState = {
    ...initialSearchcraftStateValues,
    ...functions,
  };

  return stateObject;
});

export { useSearchcraftStore };
