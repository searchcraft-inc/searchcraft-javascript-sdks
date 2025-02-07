import { useSearchcraftStore } from '@provider/store';
import type {
  SearchDocument,
  SearchClientResponseItem,
  PopoverResultMappings,
} from '@searchcraft/core';
import { Component, h, Prop, State } from '@stencil/core';
import { getDocumentValueFromSearchResultMapping } from '@utils';

/**
 * A single list item rendered in a searchcraft-popover-list-view.
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

  @State() href?: string;
  @State() imageSrc?: string;
  @State() imageAlt?: string;
  @State() titleContent?: string;
  @State() subtitleContent?: string;

  mapValuesFromDocument(document: SearchDocument) {
    this.titleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings?.title,
    );
    this.subtitleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings?.subtitle,
    );
    this.href = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings?.href,
    );
    this.imageSrc = getDocumentValueFromSearchResultMapping(
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
    const state = useSearchcraftStore.getState();
    const searchcraft = state.getSearchcraftInstance();

    if (searchcraft) {
      const document_position = this.documentPosition;
      const search_term = state.searchTerm;
      const number_of_documents = state.searchClientResponseItems.length || 0;

      searchcraft.measureClient?.sendMeasureEvent('document_clicked', {
        document_position,
        number_of_documents,
        search_term,
      });
    }
  };

  render() {
    return (
      <a
        class='searchcraft-popover-list-item'
        href={this.href}
        onClick={this.handleLinkClick.bind(this)}
      >
        {this.imageSrc && (
          <div class='searchcraft-popover-list-item-image-wrapper'>
            <img
              alt={this.imageAlt}
              src={this.imageSrc}
              class='searchcraft-popover-list-item-image'
            />
          </div>
        )}
        <div class='searchcraft-popover-list-item-info-wrapper'>
          <p class='searchcraft-popover-list-item-title'>{this.titleContent}</p>
          <p class='searchcraft-popover-list-item-subtitle'>
            {this.subtitleContent}
          </p>
        </div>
      </a>
    );
  }
}
