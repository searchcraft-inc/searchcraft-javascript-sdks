import React from 'react';

import type { ProviderContextTypes as SearchcraftContextType } from './ProviderContextTypes';

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
