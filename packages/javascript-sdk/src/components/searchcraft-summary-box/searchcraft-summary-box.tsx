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
  @Element() hostElement?: HTMLElement;

  private unsubscribe?: () => void;
  private cleanupCore?: () => void;

  onCoreAvailable(core: SearchcraftCore) {
    core.store.setState({ hasSummaryBox: true });
    this.unsubscribe = core.store.subscribe((state: SearchcraftState) => {
      this.summary = DOMPurify.sanitize(marked.parse(state.summary) as string);
      this.isLoading = state.isSummaryLoading;

      const div = this.hostElement?.querySelector(
        '.searchcraft-summary-box-content',
      );

      if (div) {
        div.innerHTML = DOMPurify.sanitize(
          marked.parse(state.summary) as string,
        );
      }
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

  render() {
    return (
      <div class='searchcraft-summary-box'>
        {this.isLoading && <searchcraft-loading label='LOADING' />}
        {!this.isLoading && (
          <div class='searchcraft-summary-box-content'>{this.summary}</div>
        )}
      </div>
    );
  }
}
