import { create } from 'zustand';
import {
  type CoreSDK as SearchcraftCore,
  SDKDebugger,
  LogLevel,
  type SearchcraftResponse,
  type Facets,
} from '@searchcraft/core';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface SearchParams {
  mode: 'fuzzy' | 'normal';
  sort: 'asc' | 'desc';
  yearsRange?: [number, number];
}

interface SearchcraftState {
  query: string;
  isRequesting: boolean;
  searchResults: SearchcraftResponse | null;
  facets: Facets | null;
  selectedFilters: string[]; // Add this to store selected filters
  searchParams: SearchParams;
  setQuery: (query: string) => void;
  setSearchResults: (results: SearchcraftResponse | null) => void;
  setFacets: (facets: Facets) => void;
  setSelectedFilters: (filters: string[]) => void; // Update selected filters
  setIsRequesting: (isRequesting: boolean) => void;
  setSearchParams: (params: Partial<SearchParams>) => void;
  setYearsRange: (yearsRange: [number, number]) => void;
  search: () => Promise<void>;
  initialize: (searchcraft: SearchcraftCore, debug?: boolean) => void;
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
    query: '',
    isRequesting: false,
    searchResults: null,
    facets: null,
    selectedFilters: [], // Initialize selected filters as an empty array
    searchParams: {
      mode: 'fuzzy',
      sort: 'desc',
    },
    setQuery: (query) => set({ query }),
    setSearchResults: (results) => set({ searchResults: results }),
    setFacets: (facets) => set({ facets }),
    setSelectedFilters: (filters) => set({ selectedFilters: filters }), // Update the selected filters
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

      try {
        const counts: Record<string, number> = selectedFilters.reduce(
          (acc, filter) => {
            const cleanedFilter = filter.replace(/^section:/, ''); // Remove 'section:' prefix
            acc[cleanedFilter] = 1; // Assign a dummy count of 1 (or use actual values if available)
            return acc;
          },
          {} as Record<string, number>,
        );

        const searchRequest = {
          query,
          mode: searchParams.mode,
          sort: searchParams.sort,
          facets: selectedFilters.length > 0 ? { section: { counts } } : null,
          yearsRange: searchParams.yearsRange,
        };

        const results = await searchcraft.search(searchRequest);
        setSearchResults(results);

        // Extract facets from the results and update the state
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

// Zustand store for Theme state
const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

// Export the Zustand stores for use in Stencil components
export { useSearchcraftStore, useThemeStore };
