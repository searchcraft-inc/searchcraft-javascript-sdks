import type { SearchcraftStore } from './SearchcraftStore.types';

import { createSearchcraftStore } from './SearchcraftStoreFactory';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const beforeEach: (fn: () => void | Promise<void>) => void;
declare const afterEach: (fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
  toHaveBeenCalledTimes(expected: number): void;
};
declare const jest: {
  restoreAllMocks(): void;
  spyOn<T extends object, K extends keyof T>(
    object: T,
    method: K,
  ): {
    mockImplementation(impl: (...args: never[]) => unknown): void;
  };
  fn(): unknown;
};

describe('createSearchcraftStore', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('gracefully handles malformed cached initial query payloads', async () => {
    const getResponseItems = jest.fn();
    const streamSummaryData = jest.fn();
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
