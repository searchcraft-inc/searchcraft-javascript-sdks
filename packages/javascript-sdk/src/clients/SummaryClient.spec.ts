import type { SearchcraftStore } from '@store';

import { SummaryClient } from './SummaryClient';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void | Promise<void>) => void;
declare const beforeEach: (fn: () => void | Promise<void>) => void;
declare const afterEach: (fn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => {
  toBe(expected: unknown): void;
  toHaveBeenCalledTimes(expected: number): void;
};
declare const jest: {
  useFakeTimers(): void;
  useRealTimers(): void;
  restoreAllMocks(): void;
  runAllTimersAsync(): Promise<void>;
  spyOn<T extends object, K extends keyof T>(
    object: T,
    method: K,
  ): {
    mockImplementation(impl: (...args: never[]) => unknown): void;
  };
  fn(): {
    mockResolvedValue(value: unknown): unknown;
  };
};

type SummaryClientTestState = {
  hasSummaryBox: boolean;
  isSummaryLoading: boolean;
  isSummaryNotEnabled: boolean;
  searchClientResponseItems: { id: string }[];
  summary: string;
  summaryErrorMessage: string;
  core: {
    config: {
      endpointURL: string;
      indexName: string;
      readKey: string;
      searchResultsPerPage: number;
      summaryDebounceDelay: number;
      cortexURL?: string;
    };
    measureClient: { sessionId: string };
    userId: string;
    userType: string;
  };
};

describe('SummaryClient', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it('gracefully handles 401 summary responses without disrupting search results', async () => {
    const existingSearchResults = [{ id: 'result-1' }];
    let state: SummaryClientTestState = {
      hasSummaryBox: true,
      isSummaryLoading: false,
      isSummaryNotEnabled: false,
      searchClientResponseItems: existingSearchResults,
      summary: 'Existing summary',
      summaryErrorMessage: '',
      core: {
        config: {
          endpointURL: 'https://example.com',
          indexName: 'docs',
          readKey: 'read-key',
          searchResultsPerPage: 10,
          summaryDebounceDelay: 1,
        },
        measureClient: { sessionId: 'session-id' },
        userId: 'user-id',
        userType: 'authenticated',
      },
    };

    const get = (() => state) as SearchcraftStore['getState'];
    const set = ((
      update:
        | Partial<SummaryClientTestState>
        | ((
            current: SummaryClientTestState,
          ) => Partial<SummaryClientTestState>),
    ) => {
      const nextState = typeof update === 'function' ? update(state) : update;
      state = { ...state, ...nextState };
    }) as unknown as SearchcraftStore['setState'];

    const fetchMock = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
    } as Response);
    global.fetch = fetchMock as typeof fetch;

    const client = new SummaryClient(get, set);

    client.streamSummaryData({
      searchTerm: 'chalk',
      mode: 'fuzzy',
      facetPathsForIndexFields: {},
      rangeValueForIndexFields: {},
    });

    await jest.runAllTimersAsync();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(state.isSummaryLoading).toBe(false);
    expect(state.isSummaryNotEnabled).toBe(true);
    expect(state.summary).toBe('');
    expect(state.summaryErrorMessage).toBe(
      'Your read key does not have permission to generate AI summaries.',
    );
    expect(state.searchClientResponseItems).toBe(existingSearchResults);
  });

  it('warns once when deprecated cortexURL is provided', async () => {
    const warnSpy = jest.spyOn(console, 'warn');
    warnSpy.mockImplementation(() => undefined);

    let state: SummaryClientTestState = {
      hasSummaryBox: false,
      isSummaryLoading: false,
      isSummaryNotEnabled: false,
      searchClientResponseItems: [],
      summary: '',
      summaryErrorMessage: '',
      core: {
        config: {
          endpointURL: 'https://example.com',
          indexName: 'docs',
          readKey: 'read-key',
          searchResultsPerPage: 10,
          summaryDebounceDelay: 1,
          cortexURL: 'https://deprecated.example.com',
        },
        measureClient: { sessionId: 'session-id' },
        userId: 'user-id',
        userType: 'authenticated',
      },
    };

    const get = (() => state) as SearchcraftStore['getState'];
    const set = ((
      update:
        | Partial<SummaryClientTestState>
        | ((
            current: SummaryClientTestState,
          ) => Partial<SummaryClientTestState>),
    ) => {
      const nextState = typeof update === 'function' ? update(state) : update;
      state = { ...state, ...nextState };
    }) as unknown as SearchcraftStore['setState'];

    const client = new SummaryClient(get, set);

    client.streamSummaryData({
      searchTerm: 'chalk',
      mode: 'fuzzy',
      facetPathsForIndexFields: {},
      rangeValueForIndexFields: {},
    });

    await jest.runAllTimersAsync();

    client.streamSummaryData({
      searchTerm: 'chalk',
      mode: 'fuzzy',
      facetPathsForIndexFields: {},
      rangeValueForIndexFields: {},
    });

    await jest.runAllTimersAsync();

    expect(warnSpy).toHaveBeenCalledTimes(1);
  });
});
