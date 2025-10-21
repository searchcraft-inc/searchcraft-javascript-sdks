import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { Component, Element, h, Prop, State } from '@stencil/core';
import type { SearchcraftState } from '@store';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

/**
 * This component renders a summary box for RAG search result summaries.
 * When the user makes a search, a network call is made to retrieve the summary content, which is then
 * rendered in this box.
 *
 * NOTE: This component requires the usage of a read key that has "SUMMARY" permissions.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftSummaryBox } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftSummaryBox } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <searchcraft-summary-box />
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftSummaryBox />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftSummaryBox />
 * ```
 */
@Component({
  tag: 'searchcraft-summary-box',
  shadow: false,
})
export class SearchcraftSummaryBox {
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;
  @State() summary = '';
  @State() isLoading = false;
  @State() isSummaryNotEnabled = false;
  @Element() hostElement?: HTMLElement;

  private unsubscribe?: () => void;
  private cleanupCore?: () => void;

  onCoreAvailable(core: SearchcraftCore) {
    core.store.setState({ hasSummaryBox: true });
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
    this.summary = this.sanitizeMarkdown(state.summary);

    // Update DOM directly for performance (avoids re-render)
    this.updateContentElement(state.summary);
  }

  /**
   * Sanitizes and converts markdown to HTML.
   */
  private sanitizeMarkdown(markdown: string): string {
    return DOMPurify.sanitize(marked.parse(markdown) as string);
  }

  /**
   * Updates the content element directly without triggering a re-render.
   */
  private updateContentElement(markdown: string) {
    const contentElement = this.hostElement?.querySelector(
      '.searchcraft-summary-box-content',
    );

    if (contentElement) {
      contentElement.innerHTML = this.sanitizeMarkdown(markdown);
    }
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
        <div class='searchcraft-summary-box-content'>
          AI summaries are not enabled
        </div>
      );
    }

    return <div class='searchcraft-summary-box-content'>{this.summary}</div>;
  }

  render() {
    return <div class='searchcraft-summary-box'>{this.renderContent()}</div>;
  }
}
