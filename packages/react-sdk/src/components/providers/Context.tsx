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
  query: '',
  setQuery: (query) => query,
  search: async () => null,
};

export const SearchcraftContext =
  createContext<SearchcraftContextType>(defaultContext);

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
