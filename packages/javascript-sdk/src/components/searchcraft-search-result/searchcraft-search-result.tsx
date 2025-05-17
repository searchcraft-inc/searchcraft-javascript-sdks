import type {
  SearchClientResponseItem,
  SearchResultTemplate,
  SearchResultTemplateData,
} from '@types';
import { Component, Element, h, Prop, State } from '@stencil/core';

import { html } from '@utils';
import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';

/**
 * This web component is designed to display detailed information for a single search result. Once a query is submitted, the component formats and presents the result.
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-search-result',
  shadow: false,
})
export class SearchcraftSearchResult {
  @Prop() item?: SearchClientResponseItem;
  /**
   * The index.
   */
  @Prop() index!: number;
  /**
   * The position in the document. Used with the "document_clicked" measure event.
   */
  @Prop() documentPosition = 0;
  /**
   * A callback function responsible for rendering a result.
   */
  @Prop() template?: SearchResultTemplate<SearchResultTemplateData>;
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;

  @State() templateHtml: string | undefined;
  @Element() hostElement?: HTMLElement;
  core?: SearchcraftCore;
  private cleanupCore?: () => void;

  onCoreAvailable(core: SearchcraftCore) {
    this.core = core;
  }

  connectedCallback() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );

    if (this.item) {
      try {
        this.templateHtml = this.template?.(this.item.document, this.index, {
          html,
          source_index: this.item.source_index,
        });
      } catch (error) {
        console.error('Invalid search result template:', error);
      }
    }
  }

  disconnectedCallback() {
    this.cleanupCore?.();
  }

  handleResultContainerClick = (event: MouseEvent) => {
    if (!event.target) {
      return;
    }

    const target = event.target as HTMLElement;
    const link = target.closest('a');

    if (
      !link ||
      !this.hostElement?.contains(link) ||
      !this.core ||
      !this.core.measureClient
    ) {
      return;
    }

    const document_position = this.documentPosition;
    const search_term = this.core.store.getState().searchTerm;
    const number_of_documents =
      this.core.store.getState().searchClientResponseItems.length || 0;

    this.core.measureClient.sendMeasureEvent('document_clicked', {
      document_position,
      number_of_documents,
      search_term,
    });
  };

  handleKeyDown = () => {};

  render() {
    if (!this.item) {
      return;
    }

    if (typeof this.template === 'undefined') {
      return (
        <div
          class='searchcraft-search-result searchcraft-search-result-no-template'
          onClick={this.handleResultContainerClick}
          onKeyDown={this.handleKeyDown}
        >
          {Object.entries(this.item.document).map(([key, value]) => (
            <p key={key}>
              <strong>{key}</strong>: {value}
            </p>
          ))}
        </div>
      );
    }

    return (
      <div
        class='searchcraft-search-result'
        innerHTML={this.templateHtml}
        onClick={this.handleResultContainerClick}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
