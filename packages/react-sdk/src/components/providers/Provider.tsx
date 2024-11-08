import {
  type PropsWithChildren,
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

import { SearchcraftContext } from '@/components/providers/Context';
import type { ProviderContextTypes as SearchcraftContextType } from '@/components/providers/ProviderContextTypes';

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

  return (
    <SearchcraftContext.Provider value={providerContext}>
      {children}
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

export { Provider, useSearchcraft, SearchcraftCore };
