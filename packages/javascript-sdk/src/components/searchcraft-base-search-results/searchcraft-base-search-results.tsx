import { Component, h, Prop, State, Element } from '@stencil/core';
import type { SearchcraftResponse } from '@searchcraft/core';

import { useSearchcraftStore } from '@provider/store';
import {
  extractDynamicProperties,
  parseCustomStyles,
  parseSearchKeys,
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
  @Prop() customStylesForResults: string | Record<string, string> = {};

  @Element() hostElement: HTMLElement; // Reference to the host element

  private unsubscribe: () => void;

  componentDidLoad() {
    // Initialize searchKeys if not provided
    if (!this.searchKeys || this.searchKeys.length === 0) {
      console.warn('No searchKeys provided; using empty keys array.');
      this.searchKeys = ''; // Ensure it's explicitly set as an empty array
    }

    // Subscribe to state changes
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.searchResults = { ...state.searchResults };
      this.query = state.query;
    });

    // Fetch initial state
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
    const parsedCustomStyles = parseCustomStyles(this.customStylesForResults);
    return (
      <div class='resultsContainer'>
        {this.searchResults?.data?.hits?.map((document, index) => {
          const { doc: result } = document;
          const dynamicProperties = extractDynamicProperties(
            result,
            parsedSearchKeys,
          );

          // Render the custom element if present, otherwise fallback to default
          const customElement = this.hostElement.querySelector(
            '[slot="result-template"]',
          );
          if (customElement) {
            // Clone the custom element and pass data to it
            const customElementClone = customElement.cloneNode(
              true,
            ) as HTMLElement;
            customElementClone.removeAttribute('slot'); // Remove the slot attribute
            customElementClone.setAttribute(
              'data-result',
              JSON.stringify(result),
            );
            return (
              <div key={`${dynamicProperties.id}-${index}`}>
                {customElementClone.outerHTML}
              </div>
            );
          }
          // Fallback to the default element
          return (
            <searchcraft-base-search-result
              key={`${dynamicProperties.id}-${index}`}
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
              customStyles={parsedCustomStyles}
            />
          );
        })}

        {this.query.length > 0 &&
          this.searchResults?.data?.hits?.length === 0 && (
            <searchcraft-error-message
              error-message={`No search results found for "${this.query}" query`}
            />
          )}

        {/* Slot for custom element */}
        <slot name='result-template' />
      </div>
    );
  }
}
