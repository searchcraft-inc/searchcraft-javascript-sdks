import type { ProviderContextTypes } from '@/components/providers/ProviderContextTypes';
import { vi } from 'vitest';

export const createMockContext = (
  context: Partial<ProviderContextTypes>,
): ProviderContextTypes => ({
  error: context.error ?? null,
  isRequesting: context.isRequesting ?? false,
  index: context.index ?? [],
  mode: context.mode ?? 'fuzzy',
  query: context.query ?? '',
  setQuery: context.setQuery ?? vi.fn(),
  search: context.search ?? vi.fn(),
  searchResults: context.searchResults ?? null,
});
