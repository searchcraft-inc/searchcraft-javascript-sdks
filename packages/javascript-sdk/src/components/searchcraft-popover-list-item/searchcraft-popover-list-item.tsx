import type {
  SearchDocument,
  SearchClientResponseItem,
  PopoverResultMappings,
} from '@types';
import { Component, h, Prop, State } from '@stencil/core';
import { getDocumentValueFromSearchResultMapping } from '@utils';
import type { SearchcraftCore } from '@classes';
import { registry } from '@classes/CoreInstanceRegistry';

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

  onCoreAvailable(core: SearchcraftCore) {
    this.core = core;
  }

  connectedCallback() {
    if (this.item) {
      this.mapValuesFromDocument(this.item.document);
    }
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  disconnectedCallback() {
    this.cleanupCore?.();
  }

  handleLinkClick = () => {
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
  };

  render() {
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
