import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { Component, Prop, State, h } from '@stencil/core';

import { formatNumberWithCommas } from '@utils';
import { version as sdkVersion } from '../../../package.json';

/**
 * Renders the footer for the searchcraft-popover-form.
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-popover-footer',
  shadow: false,
})
export class SearchcraftPopoverFooter {
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  /**
   * The SDK variant used to render this component. Used for UTM attribution. This isn't exposed for developer consumption, it's set automatically.
   *
   * @internal
   */
  @Prop() sdkVariant?: 'js' | 'react' | 'vue' = 'js';
  /**
   * Optional href for the "View all" button.
   */
  @Prop() viewAllResultsHref?: string;
  /**
   * Optional label for the "View all" button.
   */
  @Prop() viewAllResultsLabel?: string;
  @State() searchResultsCount;

  private unsubscribe: () => void = () => {};
  private cleanupCore?: () => void;

  onCoreAvailable(core: SearchcraftCore) {
    this.searchResultsCount = core.store.getState().searchResultsCount;

    this.unsubscribe = core.store.subscribe((state) => {
      this.searchResultsCount = state.searchResultsCount;
    });
  }

  connectedCallback() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  disconnectedCallback() {
    this.unsubscribe?.();
    this.cleanupCore?.();
  }

  private get safeViewAllHref(): string | undefined {
    const href = this.viewAllResultsHref;
    if (!href) return undefined;
    try {
      const url = new URL(href, window.location.href);
      return url.protocol === 'https:' || url.protocol === 'http:'
        ? href
        : undefined;
    } catch {
      return undefined;
    }
  }

  render() {
    const hostname =
      typeof window !== 'undefined' ? window.location.hostname : '';
    const utmParams = new URLSearchParams({
      utm_source: hostname,
      utm_medium: this.sdkVariant ?? 'js',
      utm_campaign: 'powered-by',
      utm_content: 'popover-footer',
      sc_sdk_version: sdkVersion,
    });
    const href = `https://searchcraft.io/?${utmParams.toString()}`;
    const hasResults =
      typeof this.searchResultsCount === 'number' &&
      this.searchResultsCount > 0;
    const showViewAll = !!this.safeViewAllHref && hasResults;

    return (
      <footer class='searchcraft-popover-footer'>
        <a
          class='searchcraft-popover-footer-link'
          href={href}
          target='_blank'
          rel='noreferrer'
        >
          <span class='searchcraft-popover-footer-link-prefix'>
            Powered by&nbsp;
          </span>{' '}
          Searchcraft
        </a>
        <div class='searchcraft-popover-footer-results'>
          <p class='searchcraft-popover-footer-results-info'>
            {hasResults ? (
              <span>
                {formatNumberWithCommas(this.searchResultsCount)} Results
                <span class='searchcraft-popover-footer-results-found'>
                  {' Found'}
                </span>
              </span>
            ) : (
              ' '
            )}
          </p>
          {showViewAll && (
            <a
              class='searchcraft-popover-footer-view-all'
              href={this.safeViewAllHref}
            >
              <span class='searchcraft-popover-footer-view-all-label'>
                {this.viewAllResultsLabel}
              </span>
              <span
                class='searchcraft-popover-footer-view-all-shortcut'
                aria-hidden='true'
              >
                <kbd>⌘</kbd>
                <kbd>↵</kbd>
              </span>
            </a>
          )}
        </div>
      </footer>
    );
  }
}
