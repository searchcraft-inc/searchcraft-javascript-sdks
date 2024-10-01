import type { SearchcraftProviderContext } from '@components/providers/SearchcraftProviderContext';
import { vi } from 'vitest';

export const createMockContext = (
  context: Partial<SearchcraftProviderContext>,
): SearchcraftProviderContext => ({
  error: context.error ?? null,
  isRequesting: context.isRequesting ?? false,
  index: context.index ?? '',
  mode: context.mode ?? 'fuzzy',
  query: context.query ?? '',
  setQuery: context.setQuery ?? vi.fn(),
  search: context.search ?? vi.fn(),
  searchResult: context.searchResult ?? null,
});
