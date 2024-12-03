import type { ProviderContextTypes } from '@/components/providers/ProviderContextTypes';
import { vi } from 'vitest';

export const createMockContext = (
  context: Partial<ProviderContextTypes>,
): ProviderContextTypes => ({
  error: context.error ?? null,
  isRequesting: context.isRequesting ?? false,
  index: context.index ?? [],
  mode: context.mode ?? 'fuzzy',
  order_by: context.order_by ?? '',
  query: context.query ?? '',
  setMode: context.setMode ?? vi.fn(),
  setOrderResultsBy: context.setOrderResultsBy ?? vi.fn(),
  setQuery: context.setQuery ?? vi.fn(),
  setSortResultsBy: context.setSortResultsBy ?? vi.fn(),
  search: context.search ?? vi.fn(),
  searchResults: context.searchResults ?? null,
  sort: context.sort ?? 'asc',
});
