import type { SearchcraftStore } from '@store';

const SUMMARY_BASE_URL = 'http://localhost:3200/api/search/summary';
const DEBOUNCE_DELAY = 1000;

export class SummaryClient {
  private set: SearchcraftStore['setState'];
  private get: SearchcraftStore['getState'];
  private abortController: AbortController | undefined;
  private timeout: NodeJS.Timeout | undefined;

  constructor(
    get: SearchcraftStore['getState'],
    set: SearchcraftStore['setState'],
  ) {
    this.get = get;
    this.set = set;
  }

  streamSummaryData() {
    const begin = async () => {
      const state = this.get();
      const indexName = state.core?.config.index.at(0);

      if (!state.hasSummaryBox || !indexName) {
        return;
      }

      this.abortController?.abort('A newer request has replaced this one.');
      this.abortController = new AbortController();

      this.set({
        isSummaryLoading: true,
        summary: '',
      });

      try {
        const fetchResponse = await fetch(SUMMARY_BASE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            searchTerm: state.searchTerm,
            summaryInstructionsPrompt:
              state.core?.config.summaryInstructionsPrompt,
            readKey: state.core?.config.readKey,
            indexName: indexName,
            endpointUrl: state.core?.config.endpointURL,
          }),
          signal: this.abortController.signal,
        });

        if (!fetchResponse) {
          throw new Error('Invalid fetch response');
        }

        if (!fetchResponse.body) {
          throw new Error('Invalid fetch response');
        }

        if (!fetchResponse.ok) {
          throw new Error(`HTTP ${fetchResponse.status}`);
        }

        const reader = fetchResponse.body.getReader();
        const decoder = new TextDecoder();

        let finishedReading = false;
        do {
          const { done, value } = await reader.read();
          finishedReading = done;

          const chunk = decoder.decode(value, { stream: true });
          this.set((state) => ({
            isSummaryLoading: false,
            summary: `${state.summary}${chunk}`,
          }));
        } while (!finishedReading);
      } catch (error) {
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
}
