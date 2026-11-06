import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';
import { Component, Element, Prop, State, Watch, h } from '@stencil/core';
import type {
  PopoverResultMappings,
  SearchClientResponseItem,
  SearchDocument,
  SearchResultTemplate,
  SearchResultTemplateData,
} from '@types';
import { getDocumentValueFromSearchResultMapping, html, safeUrl } from '@utils';

/**
 * A single list item rendered in a searchcraft-popover-list-view.
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-popover-list-item',
  shadow: false,
})
export class SearchcraftPopoverListItem {
  @Prop() item: SearchClientResponseItem | undefined;
  @Prop() popoverResultMappings: PopoverResultMappings | undefined;
  /**
   * A callback function responsible for rendering the result. When provided, it is used instead of `popoverResultMappings`, which are still used if the template throws.
   */
  @Prop() template?: SearchResultTemplate<SearchResultTemplateData>;
  /**
   * The index of the result in the list view. Passed to the `template` callback.
   */
  @Prop() index = 0;
  /** The document position relative to the search results (For Measure) */
  @Prop() documentPosition = 0;
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;

  @State() title?: string;
  @State() subtitle?: string;
  @State() href?: string;
  @State() imageSource?: string;
  @State() imageAlt?: string;
  @State() templateHtml: string | undefined;
  @Element() hostElement?: HTMLElement;
  core?: SearchcraftCore;
  private cleanupCore?: () => void;

  mapValuesFromDocument(document: SearchDocument) {
    this.title = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings?.title,
    );
    this.subtitle = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings?.subtitle,
    );
    this.href = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings?.href,
    );
    this.imageSource = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings?.imageSource,
    );
    this.imageAlt = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings?.imageAlt,
    );
  }

  /**
   * Maps the document values and renders the template, if there is one. The mapped values are
   * always kept so the result can fall back to them if the template throws or is removed.
   */
  @Watch('item')
  @Watch('popoverResultMappings')
  @Watch('template')
  @Watch('index')
  updateRenderedValues() {
    this.templateHtml = undefined;

    if (!this.item) {
      return;
    }

    this.mapValuesFromDocument(this.item.document);

    if (this.template) {
      try {
        this.templateHtml = this.template(this.item.document, this.index, {
          html,
          safeUrl,
          source_index: this.item.source_index,
        });
      } catch (error) {
        console.error('Invalid popover result template:', error);
      }
    }
  }

  onCoreAvailable(core: SearchcraftCore) {
    this.core = core;
  }

  connectedCallback() {
    this.updateRenderedValues();
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  disconnectedCallback() {
    this.cleanupCore?.();
  }

  sendDocumentClickedEvent() {
    if (this.core) {
      const document_position = this.documentPosition;
      const search_term = this.core.store.getState().searchTerm;
      const number_of_documents =
        this.core.store.getState().searchClientResponseItems.length || 0;

      this.core.measureClient?.sendMeasureEvent('document_clicked', {
        document_position,
        number_of_documents,
        search_term,
      });
    }
  }

  handleLinkClick = () => {
    this.sendDocumentClickedEvent();
  };

  /**
   * Sends the click event when a link inside the rendered template is clicked.
   */
  handleTemplateClick = (event: MouseEvent) => {
    const link = (event.target as HTMLElement | null)?.closest('a');

    if (link && this.hostElement?.contains(link)) {
      this.sendDocumentClickedEvent();
    }
  };

  handleKeyDown = () => {};

  render() {
    if (this.template && typeof this.templateHtml === 'string') {
      return (
        <div
          class='searchcraft-popover-list-item searchcraft-popover-list-item-template'
          innerHTML={this.templateHtml}
          onClick={this.handleTemplateClick}
          onKeyDown={this.handleKeyDown}
        />
      );
    }

    return (
      <div class='searchcraft-popover-list-item'>
        <a
          class='searchcraft-popover-list-item-link'
          href={this.href}
          onClick={this.handleLinkClick.bind(this)}
        >
          {this.imageSource && (
            <div class='searchcraft-popover-list-item-image-wrapper'>
              <img
                alt={this.imageAlt}
                src={this.imageSource}
                class='searchcraft-popover-list-item-image'
              />
            </div>
          )}
          <div class='searchcraft-popover-list-item-content'>
            {this.title && (
              <p class='searchcraft-popover-list-item-content-title'>
                {this.title}
              </p>
            )}
            {this.subtitle && (
              <p class='searchcraft-popover-list-item-content-subtitle'>
                {this.subtitle}
              </p>
            )}
          </div>
        </a>
      </div>
    );
  }
}
