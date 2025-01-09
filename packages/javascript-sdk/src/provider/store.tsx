import { create } from 'zustand';

import {
  type SearchcraftCore,
  SDKDebugger,
  LogLevel,
  type SearchcraftResponse,
  type SearchFilter,
  type FacetPrime,
} from '@searchcraft/core';

import { filterPaths } from '@utils/utils';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface SearchParams {
  mode: 'fuzzy' | 'normal';
  sort: 'asc' | 'desc';
  yearsRange?: [number, number];
}

export interface SearchcraftState {
  addActiveFilter: (filter: SearchFilter) => void;
  removeActiveFilter: (filter: SearchFilter) => void;
  activeFilters: Record<string, SearchFilter>;
  facets: FacetPrime | null;
  getSearchcraftInstance: () => SearchcraftCore | null;
  initialize: (searchcraft: SearchcraftCore, debug?: boolean) => void;
  isRequesting: boolean;
  query: string;
  search: () => Promise<void>;
  searchParams: SearchParams;
  searchResults: SearchcraftResponse | null;
  selectedFilters: string[]; // Add this to store selected filters
  setFacets: (facets: FacetPrime) => void;
  setIsRequesting: (isRequesting: boolean) => void;
  setQuery: (query: string) => void;
  setSearchParams: (params: Partial<SearchParams>) => void;
  setSearchResults: (results: SearchcraftResponse | null) => void;
  setSelectedFilters: (filters: string[]) => void; // Update selected filters
  setYearsRange: (yearsRange: [number, number]) => void;
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
    activeFilters: {},
    addActiveFilter: (_filter: SearchFilter) => {},
    removeActiveFilter: (_filter: SearchFilter) => {},
    query: '',
    isRequesting: false,
    searchResults: null,
    facets: null,
    getSearchcraftInstance: () => searchcraft,
    selectedFilters: [],
    searchParams: {
      mode: 'fuzzy',
      sort: 'asc',
    },
    setQuery: (query) => set({ query }),
    setSearchResults: (results) => set({ searchResults: results }),
    setFacets: (facets) => set({ facets }),
    setSelectedFilters: (filters) => set({ selectedFilters: filters }),
    setIsRequesting: (isRequesting) => set({ isRequesting }),
    setSearchParams: (params) =>
      set((state) => ({
        searchParams: {
          ...state.searchParams,
          ...params,
        },
      })),
    setYearsRange: (yearsRange) =>
      set((state) => ({
        searchParams: {
          ...state.searchParams,
          yearsRange,
        },
      })),
    search: async () => {
      const {
        query,
        selectedFilters,
        setIsRequesting,
        setSearchResults,
        setFacets,
        searchParams,
      } = get();
      if (!searchcraft) {
        throw new Error('Searchcraft instance is not initialized.');
      }
      setIsRequesting(true);
      log(LogLevel.INFO, `Starting search with query: "${query}"`);
      const filters = filterPaths(selectedFilters);
      try {
        const searchRequest = {
          query,
          mode: searchParams.mode,
          sort: searchParams.sort,
          facets:
            selectedFilters.length > 0
              ? {
                  section: {
                    counts: Object.fromEntries(
                      filters.map((path) => [path, 1]),
                    ),
                  },
                }
              : null,
          yearsRange: searchParams.yearsRange,
        };

        const results = await searchcraft.search(searchRequest);
        setSearchResults(results);
        const updatedFacets = results.data.facets || null;
        setFacets(updatedFacets);

        log(LogLevel.DEBUG, `Search results: ${JSON.stringify(results)}`);
        log(LogLevel.DEBUG, `Updated facets: ${JSON.stringify(updatedFacets)}`);
      } catch (error) {
        console.error(`Search failed: ${(error as Error).message}`);
        log(
          LogLevel.ERROR,
          `Search failed with error: ${(error as Error).message}`,
        );
      } finally {
        setIsRequesting(false);
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
