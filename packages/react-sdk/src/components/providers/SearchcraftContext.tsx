import React from 'react';

import type { SearchcraftProviderContext } from './SearchcraftProviderContext';

const defaultContext: SearchcraftProviderContext = {
  error: null,
  index: '',
  isRequesting: false,
  mode: 'fuzzy',
  query: '',
  setQuery: (query) => query,
  search: async () => null,
};

export const SearchcraftContext =
  React.createContext<SearchcraftProviderContext>(defaultContext);
