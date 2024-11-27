import { Component, h, State } from '@stencil/core';
import type { SearchResult } from '@searchcraft/core';
import { useSearchcraftStore } from '../../providers/Provider';

@Component({
  tag: 'sc-base-search-results',
  styleUrl: 'sc-base-search-results.module.scss',
  shadow: true,
})
export class ScBaseSearchResults {
  @State() searchResults: SearchResult | null = null;
  @State() query = '';
  private unsubscribe: () => void;

  componentDidLoad() {
    // Subscribe to state changes
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      console.log('Store updated:', state);
      this.searchResults = { ...state.searchResults };
      this.query = state.query;
    });

    // Fetch initial state
    const { searchResults, query } = useSearchcraftStore.getState();
    console.log('Initial state:', searchResults, query);
    this.searchResults = searchResults;
    this.query = query;
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <div class='resultsContainer'>
        {this.searchResults?.data?.hits?.map((document, index) => {
          const { doc: result } = document;
          console.log(document);
          return (
            <sc-base-search-result
              key={`${result?.id}-${index}`}
              button-label='View More'
              callback-fn={() => console.log('interactive element')}
              button-callback-fn={() => console.log('button callback')}
              interactive-result={true}
              image-src={result?.poster}
              result-body-content={result?.overview}
              result-heading={result?.title}
              result-subheading={result?.release_date}
            />
          );
        })}
        {this.query.length > 0 &&
          this.searchResults?.data?.hits?.length === 0 && (
            <sc-error-message
              error-message={`No search results found for "${this.query}" query`}
            />
          )}
      </div>
    );
  }
}
