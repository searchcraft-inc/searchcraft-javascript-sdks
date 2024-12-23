import {
  Component,
  h,
  Event,
  Prop,
  State,
  type EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';

import type { SearchcraftResponse } from '@searchcraft/core';

import { useSearchcraftStore } from '@provider/store';

import {
  extractDynamicProperties,
  getFormattedTimeFromNow,
  parseSearchKeys,
  serializeStyles,
} from '@utils/utils';

@Component({
  tag: 'searchcraft-base-search-results',
  styleUrl: 'searchcraft-base-search-results.module.scss',
  shadow: false,
})
export class SearchcraftBaseSearchResults {
  @Prop() adInterval = 4;
  @Prop() customStylesForResults:
    | string
    | Record<string, Record<string, string>> = {};
  @Prop() documentAttributesForDisplay = '';
  @Prop() fallbackElement: HTMLElement | null = null;
  @Prop() formatTime = true;
  @Prop() placeAdAtEnd = false;
  @Prop() placeAdAtStart = true;
  @Prop() placeResultImageRight = false;
  @Prop() isInteractive = false;

  @Event() noResults: EventEmitter<void>;

  @State() hasSearched = false;
  @State() query = '';
  @State() searchResults: SearchcraftResponse | null = null;

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
      } else {
        this.hasSearched = false;
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

  render() {
    if (!this.hasSearched) {
      return (
        <div
          class={classNames(
            'emptyState',
            'searchcraft-search-results-empty-state-container',
          )}
        >
          <slot name='empty-search' />
        </div>
      );
    }

    if (!this.searchResults?.data) {
      this.noResults.emit();
      return;
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

        if (this.formatTime) {
          for (const key of parsedSearchKeys) {
            if (dynamicProperties[key]) {
              const value = dynamicProperties[key];
              if (
                typeof value === 'string' &&
                !Number.isNaN(Date.parse(value))
              ) {
                dynamicProperties[key] = getFormattedTimeFromNow(value);
              }
            }
          }
        }

        return (
          <searchcraft-base-search-result
            button-callback={() => console.log('button callback')}
            custom-styles={serializedStyles}
            image-source={dynamicProperties[parsedSearchKeys[5]]}
            is-interactive={this.isInteractive}
            key={`${document.document_id}-${index}`}
            keydown-callback={() => console.log('keydown')}
            linkHref={dynamicProperties[parsedSearchKeys[6]] as string}
            place-image-right={this.placeResultImageRight}
            primary-content={dynamicProperties[parsedSearchKeys[2]]}
            result-callback={() => console.log('interactive element')}
            secondary-content={dynamicProperties[parsedSearchKeys[3]]}
            subtitle-content={dynamicProperties[parsedSearchKeys[1]]}
            tertiary-content={dynamicProperties[parsedSearchKeys[4]]}
            title-content={dynamicProperties[parsedSearchKeys[0]]}
          />
        );
      },
    );

    const finalComponents: JSX.Element[] = [];

    if (this.placeAdAtStart) {
      finalComponents.push(
        <div
          key='ad-section-start'
          class={classNames(
            'adSection',
            'searchcraft-beginning-injected-ad-section',
          )}
        >
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
            <div
              key={`ad-section-${index + 1}`}
              class={classNames(
                'adSection',
                'searchcraft-dynamic-injected-ad-section',
              )}
            >
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
        <div
          key='ad-section-end'
          class={classNames('adSection', 'searchcraft-end-injected-ad-section')}
        >
          <span>##</span>
          <p> Ad Impressions</p>
        </div>,
      );
    }

    return (
      <div
        class={classNames(
          'resultsContainer',
          'searchcraft-search-results-container',
        )}
      >
        {finalComponents}
        {this.query.length > 0 &&
          this.searchResults?.data?.hits?.length === 0 && (
            <div
              class={classNames(
                'errorMessageContainer',
                'searchcraft-search-results-error-message-container',
              )}
            >
              <searchcraft-error-message
                error-message={`No search results found for "${this.query}" query`}
              />
            </div>
          )}
      </div>
    );
  }
}
