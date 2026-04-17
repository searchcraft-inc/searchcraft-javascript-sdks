import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { Component, Prop, State, h } from '@stencil/core';
import type { SearchcraftState } from '@store';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

/**
 * This component renders a results summary for RAG search result summaries.
 * When the user makes a search, a network call is made to retrieve the summary content, which is then
 * rendered in this box.
 *
 * NOTE: This component requires the usage of a read key that has "SUMMARY" permissions.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftResultsSummary } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```ts
 * import { SearchcraftResultsSummary } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <searchcraft-results-summary />
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftResultsSummary />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftResultsSummary />
 * ```
 */
@Component({
  tag: 'searchcraft-results-summary',
  shadow: false,
})
export class SearchcraftResultsSummary {
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  @State() summary = '';
  @State() summaryErrorMessage = '';
  @State() isLoading = false;
  @State() isSummaryNotEnabled = false;

  private unsubscribe?: () => void;
  private cleanupCore?: () => void;

  /**
   * Callback invoked when the Searchcraft core instance is available.
   */
  onCoreAvailable(core: SearchcraftCore) {
    core.store.setState({ hasSummaryBox: true });
    this.handleStateChange(core.store.getState());
    this.unsubscribe = core.store.subscribe(this.handleStateChange.bind(this));
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

  /**
   * Handles state changes from the store and updates component state.
   */
  private handleStateChange(state: SearchcraftState) {
    this.isLoading = state.isSummaryLoading;
    this.isSummaryNotEnabled = state.isSummaryNotEnabled;
    this.summaryErrorMessage = state.summaryErrorMessage;
    this.summary = this.sanitizeMarkdown(state.summary);
  }

  /**
   * Sanitizes and converts markdown to HTML.
   */
  private sanitizeMarkdown(markdown: string): string {
    return DOMPurify.sanitize(marked.parse(markdown) as string);
  }

  /**
   * Renders the appropriate content based on current state.
   */
  private renderContent() {
    if (this.isLoading) {
      return <searchcraft-loading label='LOADING' />;
    }

    if (this.isSummaryNotEnabled) {
      return (
        <div class='searchcraft-results-summary-content'>
          {this.summaryErrorMessage || 'AI summaries are not enabled'}
        </div>
      );
    }

    return (
      <div
        class='searchcraft-results-summary-content'
        innerHTML={this.summary}
        aria-live='polite'
      />
    );
  }

  render() {
    return (
      <div class='searchcraft-results-summary'>{this.renderContent()}</div>
    );
  }
}
