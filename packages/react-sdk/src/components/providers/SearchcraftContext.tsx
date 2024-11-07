import React from 'react';

import type { SearchcraftProviderContext as SearchcraftContextType } from './SearchcraftProviderContext';

const defaultContext: SearchcraftContextType = {
  error: null,
  index: [''],
  isRequesting: false,
  mode: 'fuzzy',
  query: '',
  setQuery: (query) => query,
  search: async () => null,
};

export const SearchcraftContext =
  React.createContext<SearchcraftContextType>(defaultContext);
