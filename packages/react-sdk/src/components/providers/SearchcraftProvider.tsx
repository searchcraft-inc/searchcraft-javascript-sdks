import { type PropsWithChildren, useContext, useState } from 'react';
import type {
  SearchcraftInstance,
  SearchError,
  SearchResult,
} from '@searchcraft/core';
import { CoreSDK as Searchcraft } from '@searchcraft/core';

import { SearchcraftContext } from './SearchcraftContext';
import type { SearchcraftProviderContext } from './SearchcraftProviderContext';

const SearchcraftProvider = ({
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

  const providerContext: SearchcraftProviderContext = {
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

const useSearchcraft = () =>
  useContext<SearchcraftProviderContext>(SearchcraftContext);

export { SearchcraftProvider, useSearchcraft, Searchcraft };
