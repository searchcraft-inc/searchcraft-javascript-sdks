import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { SearchcraftStore } from './SearchcraftStore.types';

import { createSearchcraftStore } from './SearchcraftStoreFactory';

describe('createSearchcraftStore', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('gracefully handles malformed cached initial query payloads', async () => {
    const getResponseItems = vi.fn();
    const streamSummaryData = vi.fn();
    const store = createSearchcraftStore('malformed-initial-query-spec', {
      cachedSearchClientRequestProperties: '{bad json',
      facetPathsForIndexFields: {
        category: { fieldName: 'category', value: 'news' },
      },
      core: {
        getResponseItems,
      } as unknown as ReturnType<SearchcraftStore['getState']>['core'],
      hasSummaryBox: true,
      searchTerm: '',
      summaryClient: {
        streamSummaryData,
      } as unknown as ReturnType<SearchcraftStore['getState']>['summaryClient'],
    });

    await store.getState().search();

    expect(console.error).toHaveBeenCalledTimes(1);
    expect(getResponseItems).toHaveBeenCalledTimes(0);
    expect(streamSummaryData).toHaveBeenCalledTimes(0);
    expect(store.getState().isSearchInProgress).toBe(false);
  });
});
