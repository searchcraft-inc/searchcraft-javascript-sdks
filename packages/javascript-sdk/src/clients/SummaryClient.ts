import type { SearchcraftStore } from '@store';
import type {
  SearchClientQuery,
  SearchClientRequest,
  SearchClientRequestProperties,
} from '@types';
import { sanitize } from '@utils/core-utils';

const DEBOUNCE_DELAY = 1000;

type SummaryStreamEvent = {
  event?: string;
  data?: string;
};

const SUMMARY_PERMISSION_MESSAGE =
  'Your read key does not have permission to generate AI summaries.';
const SUMMARY_NOT_ENABLED_MESSAGE =
  'AI summaries are not enabled for this account. Please contact Searchcraft to enable them.';

export class SummaryClient {
  private set: SearchcraftStore['setState'];
  private get: SearchcraftStore['getState'];
  private abortController: AbortController | undefined;
  private timeout: NodeJS.Timeout | undefined;
  private hasWarnedAboutDeprecatedCortexURL = false;

  constructor(
    get: SearchcraftStore['getState'],
    set: SearchcraftStore['setState'],
  ) {
    this.get = get;
    this.set = set;
  }

  streamSummaryData(requestProperties: SearchClientRequestProperties | string) {
    const begin = async () => {
      const state = this.get();
      const config = state.core?.config;

      if (!config) {
        console.error('Could not stream summary data, no config found.');
        return;
      }

      const deprecatedCortexURL = (config as { cortexURL?: string }).cortexURL;
      this.warnIfUsingDeprecatedCortexURL(deprecatedCortexURL);

      const indexName = state.core?.config.indexName;

      if (!state.hasSummaryBox || !indexName) {
        return;
      }

      let searchClientRequest: SearchClientRequest;
      try {
        searchClientRequest = this.buildSearchClientRequest(
          requestProperties,
          config.searchResultsPerPage,
        );
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
        this.set({
          isSummaryLoading: false,
        });
        return;
      }

      this.abortController?.abort('A newer request has replaced this one.');
      this.abortController = new AbortController();

      this.set({
        isSummaryLoading: true,
        isSummaryNotEnabled: false,
        summary: '',
        summaryErrorMessage: '',
      });

      const endpointUrl = `${config.endpointURL}/index/${indexName}/search/summary`;

      try {
        const fetchResponse = await fetch(endpointUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: state.core?.config.readKey || '',
            'X-Sc-User-Id': state.core?.userId || '',
            'X-Sc-Session-Id': state.core?.measureClient?.sessionId || '',
            'X-Sc-User-Type': state.core?.userType || 'anonymous',
          },
          body: JSON.stringify(searchClientRequest),
          signal: this.abortController.signal,
        });

        if (!fetchResponse) {
          throw new Error('Invalid fetch response');
        }

        if (!fetchResponse.ok) {
          if (fetchResponse.status === 401) {
            console.warn(SUMMARY_PERMISSION_MESSAGE);
            this.setSummaryUnavailable(SUMMARY_PERMISSION_MESSAGE);
            return;
          }

          if (fetchResponse.status === 403) {
            console.warn(SUMMARY_NOT_ENABLED_MESSAGE);
            this.setSummaryUnavailable(SUMMARY_NOT_ENABLED_MESSAGE);
            return;
          }

          throw new Error(`HTTP ${fetchResponse.status}`);
        }

        if (!fetchResponse.body) {
          throw new Error('Invalid fetch response');
        }

        const reader = fetchResponse.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          buffer += decoder.decode(value || new Uint8Array(), {
            stream: !done,
          });
          buffer = this.processSseBuffer(buffer);

          if (done) {
            break;
          }
        }

        if (buffer.trim()) {
          this.handleSseFrame(buffer);
        }
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }

        if (error instanceof Error) {
          console.error(error.message);
        }
        this.set({
          isSummaryLoading: false,
        });
      }
    };

    const delay =
      this.get().core?.config.summaryDebounceDelay || DEBOUNCE_DELAY;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => begin(), delay);
  }

  private setSummaryUnavailable(message: string) {
    this.set({
      isSummaryLoading: false,
      isSummaryNotEnabled: true,
      summary: '',
      summaryErrorMessage: message,
    });
  }

  private warnIfUsingDeprecatedCortexURL(cortexURL?: string) {
    if (!cortexURL || this.hasWarnedAboutDeprecatedCortexURL) {
      return;
    }

    this.hasWarnedAboutDeprecatedCortexURL = true;
    console.warn(
      'The Searchcraft config field `cortexURL` is deprecated and ignored. Summary requests now use `endpointURL` and `indexName`.',
    );
  }

  private buildSearchClientRequest(
    requestProperties: SearchClientRequestProperties | string,
    defaultLimit?: number,
  ): SearchClientRequest {
    if (typeof requestProperties === 'string') {
      const parsedRequest = JSON.parse(
        requestProperties,
      ) as SearchClientRequest;
      return {
        limit: defaultLimit,
        ...parsedRequest,
      };
    }

    return {
      query: this.formatParamsForRequest(requestProperties),
      offset: requestProperties.offset || 0,
      limit: requestProperties.limit || defaultLimit || 20,
      ...(requestProperties.order_by && {
        order_by: requestProperties.order_by,
      }),
      ...(requestProperties.sort && {
        sort: requestProperties.sort,
      }),
    } satisfies SearchClientRequest;
  }

  private formatParamsForRequest(
    properties: SearchClientRequestProperties,
  ): SearchClientQuery[] {
    const queries: SearchClientQuery[] = [];
    let occur: 'must' | 'should' = 'should';

    if (properties.facetPathsForIndexFields) {
      Object.keys(properties.facetPathsForIndexFields).forEach((fieldName) => {
        const item = properties.facetPathsForIndexFields?.[fieldName];

        if (item) {
          occur = 'must';
          queries.push({
            occur: 'must',
            exact: {
              ctx: sanitize(item.value),
            },
          });
        }
      });
    }

    if (properties.rangeValueForIndexFields) {
      Object.keys(properties.rangeValueForIndexFields).forEach((fieldName) => {
        const item = properties.rangeValueForIndexFields?.[fieldName];

        if (item) {
          occur = 'must';
          queries.push({
            occur: 'must',
            exact: {
              ctx: sanitize(item.value),
            },
          });
        }
      });
    }

    const searchTerm = sanitize(properties.searchTerm);
    const query =
      properties.mode === 'fuzzy'
        ? { fuzzy: { ctx: searchTerm } }
        : {
            exact: {
              ctx: `${searchTerm.startsWith('"') ? searchTerm : `"${searchTerm}"`}`,
            },
          };

    queries.push({
      occur: properties.mode === 'exact' ? 'must' : occur,
      ...query,
    });

    return queries;
  }

  private processSseBuffer(buffer: string): string {
    const frames = buffer.replace(/\r\n/g, '\n').split('\n\n');
    const remainder = frames.pop() ?? '';

    frames.forEach((frame) => this.handleSseFrame(frame));

    return remainder;
  }

  private handleSseFrame(frame: string) {
    const parsedEvent = this.parseSseFrame(frame);

    if (!parsedEvent?.event) {
      return;
    }

    if (parsedEvent.event === 'metadata' || parsedEvent.event === 'done') {
      this.set({
        isSummaryLoading: false,
      });
      return;
    }

    const payload = parsedEvent.data ? JSON.parse(parsedEvent.data) : undefined;

    if (parsedEvent.event === 'delta') {
      const content =
        payload && typeof payload.content === 'string' ? payload.content : '';

      if (!content) {
        return;
      }

      this.set((state) => ({
        isSummaryLoading: false,
        summary: `${state.summary}${content}`,
      }));
      return;
    }

    if (parsedEvent.event === 'error') {
      throw new Error(
        payload && typeof payload.message === 'string'
          ? payload.message
          : 'Summary stream error',
      );
    }
  }

  private parseSseFrame(frame: string): SummaryStreamEvent | undefined {
    const eventData: SummaryStreamEvent = {};
    const dataLines: string[] = [];

    frame.split('\n').forEach((line) => {
      if (!line || line.startsWith(':')) {
        return;
      }

      const separatorIndex = line.indexOf(':');
      const field = separatorIndex >= 0 ? line.slice(0, separatorIndex) : line;
      const value =
        separatorIndex >= 0 ? line.slice(separatorIndex + 1).trimStart() : '';

      if (field === 'event') {
        eventData.event = value;
      }

      if (field === 'data') {
        dataLines.push(value);
      }
    });

    if (dataLines.length > 0) {
      eventData.data = dataLines.join('\n');
    }

    return eventData.event || eventData.data ? eventData : undefined;
  }
}
