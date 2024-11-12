import {
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { SearchError, SearchResult } from '@searchcraft/core';
import {
  CoreSDK as SearchcraftCore,
  SDKDebugger,
  LogLevel,
} from '@searchcraft/core';

import {
  SearchcraftContext,
  ThemeContext,
} from '@/components/providers/Context';
import type {
  ProviderContextTypes as SearchcraftContextType,
  ThemeOptionType,
} from '@/components/providers/ProviderContextTypes';

interface SearchcraftProviderProps extends PropsWithChildren {
  searchcraft: SearchcraftCore;
  debug?: boolean;
}

const Provider = ({
  children,
  searchcraft,
  debug = false,
}: SearchcraftProviderProps) => {
  const [query, setQuery] = useState<string>('');
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<
    SearchResult | SearchError | null
  >(null);
  const [theme, setTheme] = useState<ThemeOptionType>('light');

  const debuggerInstance = useMemo(() => {
    return debug ? new SDKDebugger({ logLevel: LogLevel.DEBUG }) : null;
  }, [debug]);

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
        default:
          break;
      }
    }
  };

  const search = async () => {
    log(LogLevel.INFO, `Starting search with query: "${query}"`);
    setIsRequesting(true);
    try {
      const results = await searchcraft.search({ query, mode: 'fuzzy' });
      setSearchResults(results);
      log(LogLevel.DEBUG, `Search results: ${JSON.stringify(results)}`);
    } catch (error) {
      // setSearchResults({ error: (error as Error).message });
      log(
        LogLevel.ERROR,
        `Search failed with error: ${(error as Error).message}`,
      );
    } finally {
      setIsRequesting(false);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    log(LogLevel.INFO, 'SearchcraftProvider mounted.');
    return () => {
      log(LogLevel.INFO, 'SearchcraftProvider unmounted.');
    };
  }, [debuggerInstance]);

  const providerContext: SearchcraftContextType = {
    error: null,
    index: searchcraft.config.index,
    isRequesting,
    mode: 'fuzzy',
    query,
    search,
    searchResults,
    setQuery,
  };

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <SearchcraftContext.Provider value={providerContext}>
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>
    </SearchcraftContext.Provider>
  );
};

const useSearchcraft = () => {
  const context = useContext<SearchcraftContextType>(SearchcraftContext);
  if (!context) {
    throw new Error(
      'Searchcraft compound components must be used within Searchcraft.Provider',
    );
  }
  return context;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { Provider, SearchcraftCore, useSearchcraft, useTheme };
