import { create } from 'zustand';
import {
  type CoreSDK as SearchcraftCore,
  SDKDebugger,
  LogLevel,
  type SearchcraftResponse,
} from '@searchcraft/core';

interface SearchcraftState {
  query: string;
  isRequesting: boolean;
  searchResults: SearchcraftResponse | null;
  setQuery: (query: string) => void;
  setSearchResults: (results: SearchcraftResponse | null) => void;
  setIsRequesting: (isRequesting: boolean) => void;
  search: () => Promise<void>;
  initialize: (searchcraft: SearchcraftCore, debug?: boolean) => void;
}

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
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
    setQuery: (query) => set({ query }),
    setSearchResults: (results) => set({ searchResults: results }),
    setIsRequesting: (isRequesting) => set({ isRequesting }),
    search: async () => {
      const { query, setIsRequesting, setSearchResults } = get();
      if (!searchcraft) {
        throw new Error('Searchcraft instance is not initialized.');
      }

      log(LogLevel.INFO, `Starting search with query: "${query}"`);
      setIsRequesting(true);
      try {
        const results = await searchcraft.search({ query, mode: 'fuzzy' });
        setSearchResults(results);
        log(LogLevel.DEBUG, `Search results: ${JSON.stringify(results)}`);
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
