import type { SearchcraftStore } from '@store';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { SummaryClient } from './SummaryClient';

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
    vi.useFakeTimers();
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
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

    const fetchMock = vi.fn().mockResolvedValue({
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

    await vi.runAllTimersAsync();

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
    const warnSpy = vi.spyOn(console, 'warn');
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

    await vi.runAllTimersAsync();

    client.streamSummaryData({
      searchTerm: 'chalk',
      mode: 'fuzzy',
      facetPathsForIndexFields: {},
      rangeValueForIndexFields: {},
    });

    await vi.runAllTimersAsync();

    expect(warnSpy).toHaveBeenCalledTimes(1);
  });

  it('gracefully handles malformed summary request payloads', async () => {
    const errorSpy = vi.spyOn(console, 'error');
    errorSpy.mockImplementation(() => undefined);

    let state: SummaryClientTestState = {
      hasSummaryBox: true,
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

    const fetchMock = vi.fn();
    global.fetch = fetchMock as unknown as typeof fetch;

    const client = new SummaryClient(get, set);

    client.streamSummaryData('{bad json');

    await vi.runAllTimersAsync();

    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(0);
    expect(state.isSummaryLoading).toBe(false);
  });

  it('logs a specific error for malformed SSE payloads', async () => {
    const errorSpy = vi.spyOn(console, 'error');
    errorSpy.mockImplementation(() => undefined);

    let state: SummaryClientTestState = {
      hasSummaryBox: true,
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

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      body: {
        getReader: () => {
          let hasRead = false;

          return {
            read: async () => {
              if (hasRead) {
                return { done: true, value: undefined };
              }

              hasRead = true;
              return {
                done: false,
                value: new TextEncoder().encode(
                  'event: delta\ndata: {bad json\n\n',
                ),
              };
            },
          };
        },
      },
    } as Response);
    global.fetch = fetchMock as typeof fetch;

    const client = new SummaryClient(get, set);

    client.streamSummaryData({
      searchTerm: 'chalk',
      mode: 'fuzzy',
      facetPathsForIndexFields: {},
      rangeValueForIndexFields: {},
    });

    await vi.runAllTimersAsync();
    await Promise.resolve();
    await Promise.resolve();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith(
      'Invalid summary SSE payload for "delta" event.',
    );
    expect(state.isSummaryLoading).toBe(false);
    expect(state.summary).toBe('');
  });
});
