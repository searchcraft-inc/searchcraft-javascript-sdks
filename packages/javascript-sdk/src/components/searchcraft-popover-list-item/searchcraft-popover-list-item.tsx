import { searchcraftStore } from '@store';
import type {
  SearchDocument,
  SearchClientResponseItem,
  PopoverResultMappings,
} from '@searchcraft/core';
import { Component, h, Prop, State } from '@stencil/core';
import { getDocumentValueFromSearchResultMapping } from '@utils';

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

  @State() title?: string;
  @State() subtitle?: string;
  @State() href?: string;
  @State() imageSource?: string;
  @State() imageAlt?: string;

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

  connectedCallback() {
    if (this.item) {
      this.mapValuesFromDocument(this.item.document);
    }
  }

  disconnectedCallback() {}

  handleLinkClick = () => {
    const state = searchcraftStore.getState();
    const core = state.getSearchcraftCore();

    if (core) {
      const document_position = this.documentPosition;
      const search_term = state.searchTerm;
      const number_of_documents = state.searchClientResponseItems.length || 0;

      core.measureClient?.sendMeasureEvent('document_clicked', {
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
