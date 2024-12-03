import { createContext } from 'react';

import type {
  ProviderContextTypes as SearchcraftContextType,
  ThemeContextType,
} from './ProviderContextTypes';

const defaultContext: SearchcraftContextType = {
  error: null,
  index: [''],
  isRequesting: false,
  mode: 'fuzzy',
  order_by: '',
  query: '',
  search: async () => null,
  setMode: (mode) => mode,
  setOrderResultsBy: (order) => order,
  setQuery: (query) => query,
  setSortResultsBy: (sort) => sort,
  sort: 'desc',
};

export const SearchcraftContext =
  createContext<SearchcraftContextType>(defaultContext);

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
