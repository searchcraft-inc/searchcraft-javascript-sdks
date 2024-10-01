import { type PropsWithChildren, useContext, useMemo, useState } from 'react';
import { CoreSDK } from '@searchcraft-sdk/core';

import { SearchcraftContext } from './SearchcraftContext';
import type { SearchcraftProviderConfig } from './SearchcraftProviderConfig';
import type { SearchcraftProviderContext } from './SearchcraftProviderContext';

const SearchcraftProvider = ({
  children,
  config,
}: PropsWithChildren & SearchcraftProviderConfig) => {
  const core: CoreSDK = useMemo<CoreSDK>(
    () =>
      new CoreSDK({
        ...config,
        setIsRequestingFalse: () => setIsRequesting(false),
        setIsRequestingTrue: () => setIsRequesting(true),
      }),
    [config],
  );

  const [query, setQuery] = useState<string>('');
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  const providerContext: SearchcraftProviderContext = {
    error: null,
    index: core.config.index,
    isRequesting,
    mode: 'fuzzy',
    query,
    search: core.search,
    searchResult: core.searchResult,
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

export { SearchcraftProvider, useSearchcraft };
