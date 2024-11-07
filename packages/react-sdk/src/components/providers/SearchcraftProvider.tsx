import { type PropsWithChildren, useContext, useState } from 'react';
import type {
  SearchcraftInstance,
  SearchError,
  SearchResult,
} from '@searchcraft/core';
import { CoreSDK as SearchcraftCore } from '@searchcraft/core';

import { SearchcraftContext } from '@components/providers/SearchcraftContext';
import type { SearchcraftProviderContext as SearchcraftContextType } from '@components/providers/SearchcraftProviderContext';

const Provider = ({
  children,
  searchcraft,
}: PropsWithChildren & SearchcraftInstance) => {
  const [query, setQuery] = useState<string>('');
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<
    SearchResult | SearchError | null
  >(null);

  const search = async () => {
    setIsRequesting(true);
    const results = await searchcraft.search({ query, mode: 'fuzzy' });
    setSearchResults(results);
    setIsRequesting(false);
  };

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
      'Searchcraft compound components must be used within a Searchcraft',
    );
  }
  return context;
};

export { Provider, useSearchcraft, SearchcraftCore };
