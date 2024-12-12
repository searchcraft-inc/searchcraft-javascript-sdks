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
  @State() hasSearched = false;

  @Prop() documentAttributesForDisplay = '';
  @Prop() customStylesForResults:
    | string
    | Record<string, Record<string, string>> = {};
  @Prop() placeAdAtStart = true;
  @Prop() placeAdAtEnd = false;
  @Prop() adInterval = 4;
  @Prop() formatTime = true;
  @Prop() fallbackElement: HTMLElement | null = null;

  private unsubscribe: () => void;

  componentDidLoad() {
    if (
      !this.documentAttributesForDisplay ||
      this.documentAttributesForDisplay.length === 0
    ) {
      console.warn('No document attributes provided; using empty keys array.');
      this.documentAttributesForDisplay = '';
    }

    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (state.query.length > 0) {
        this.hasSearched = true;
      }
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

  timeAgo(timestamp: string): string {
    const now = new Date();
    const inputTime = new Date(timestamp);
    const diffInSeconds = Math.floor(
      (now.getTime() - inputTime.getTime()) / 1000,
    );

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (minutes < 60) {
      return `${minutes}m ago`;
    }
    if (hours < 24) {
      return `${hours}h ago`;
    }
    if (days < 365) {
      return `${days}d ago`;
    }
    return `${years}y ago`;
  }

  render() {
    if (!this.hasSearched) {
      return (
        <div class='emptyState'>
          <slot />
        </div>
      );
    }

    if (!this.searchResults?.data) {
      console.warn('No search results data available');
      return <div class='emptyState'>No results to display.</div>;
    }

    const parsedSearchKeys = parseSearchKeys(this.documentAttributesForDisplay);
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

        // Apply timeAgo formatting if formatTime is true
        if (this.formatTime) {
          for (const key of parsedSearchKeys) {
            if (dynamicProperties[key]) {
              const value = dynamicProperties[key];
              // Check if the value is a valid ISO timestamp
              if (
                typeof value === 'string' &&
                !Number.isNaN(Date.parse(value))
              ) {
                dynamicProperties[key] = this.timeAgo(value);
              }
            }
          }
        }

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

    if (this.placeAdAtStart) {
      finalComponents.push(
        <div key='ad-section-start' class='adSection'>
          <span>##</span>
          <p> Ad Impressions</p>
        </div>,
      );
    }

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
            <div class='errorMessageContainer'>
              <searchcraft-error-message
                error-message={`No search results found for "${this.query}" query`}
              />
            </div>
          )}
      </div>
    );
  }
}
