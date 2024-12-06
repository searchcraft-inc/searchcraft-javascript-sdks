import { Component, h, Prop, State } from '@stencil/core';
import type { SearchcraftResponse } from '@searchcraft/core';

import { useSearchcraftStore } from '@provider/store';
import {
  extractDynamicProperties,
  parseSearchKeys,
  serializeStyles,
} from '@utils/utils';

@Component({
  tag: 'searchcraft-base-search-results',
  styleUrl: 'searchcraft-base-search-results.module.scss',
  shadow: true,
})
export class SearchcraftBaseSearchResults {
  @State() query = '';
  @State() searchResults: SearchcraftResponse | null = null;

  /**
   * Array of keys to dynamically extract properties from each document.
   * Must be explicitly set by the parent component.
   */
  @Prop() searchKeys = '';
  /**
   * Custom styles to apply to search results.
   * Expected format: JSON string, e.g., '{"borderRadius": "10px", "padding": "16px"}'
   */
  @Prop() customStylesForResults:
    | string
    | Record<string, Record<string, string>> = {};

  /**
   * Place ad at the end of the results.
   */
  @Prop() placeAdAtEnd = false;

  /**
   * Place ad every N results (e.g., every 4 results).
   * Default value: 4
   */
  @Prop() adInterval = 4;

  private unsubscribe: () => void;

  componentDidLoad() {
    if (!this.searchKeys || this.searchKeys.length === 0) {
      console.warn('No searchKeys provided; using empty keys array.');
      this.searchKeys = '';
    }

    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.searchResults = { ...state.searchResults };
      this.query = state.query;
    });

    const { searchResults, query } = useSearchcraftStore.getState();
    this.searchResults = searchResults;
    this.query = query;
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    if (!this.searchResults?.data) {
      console.warn('No search results data available');
      return <div>No results to display.</div>;
    }

    const parsedSearchKeys = parseSearchKeys(this.searchKeys);
    const serializedStyles =
      typeof this.customStylesForResults === 'string'
        ? this.customStylesForResults
        : serializeStyles(this.customStylesForResults);

    const resultsComponents = this.searchResults?.data?.hits?.map(
      (document, index) => {
        const { doc: result } = document;
        const dynamicProperties = extractDynamicProperties(
          result,
          parsedSearchKeys,
        );

        return (
          <searchcraft-base-search-result
            key={`${document.document_id}-${index}`}
            button-callback={() => console.log('button callback')}
            result-callback={() => console.log('interactive element')}
            keydown-callback={() => console.log('keydown')}
            is-interactive={true}
            heading-text={dynamicProperties[parsedSearchKeys[0]]}
            subheading-text={dynamicProperties[parsedSearchKeys[1]]}
            primary-content={dynamicProperties[parsedSearchKeys[2]]}
            secondary-content={dynamicProperties[parsedSearchKeys[3]]}
            tertiary-content={dynamicProperties[parsedSearchKeys[4]]}
            image-source={
              dynamicProperties[parsedSearchKeys[parsedSearchKeys.length - 1]]
            }
            custom-styles={serializedStyles}
          />
        );
      },
    );

    const finalComponents: JSX.Element[] = [];

    // Add ads at specified intervals
    if (this.adInterval > 0) {
      resultsComponents.forEach((component, index) => {
        finalComponents.push(component);
        if ((index + 1) % this.adInterval === 0) {
          finalComponents.push(
            <div key={`ad-section-${index + 1}`} class='adSection'>
              <span>##</span>
              <p> Ad Impressions</p>
            </div>,
          );
        }
      });
    } else {
      finalComponents.push(...resultsComponents);
    }

    // Add ad at the end if specified
    if (this.placeAdAtEnd) {
      finalComponents.push(
        <div key='ad-section-end' class='adSection'>
          <span>##</span>
          <p> Ad Impressions</p>
        </div>,
      );
    }

    return (
      <div class='resultsContainer'>
        {finalComponents}
        {this.query.length > 0 &&
          this.searchResults?.data?.hits?.length === 0 && (
            <searchcraft-error-message
              error-message={`No search results found for "${this.query}" query`}
            />
          )}
      </div>
    );
  }
}
