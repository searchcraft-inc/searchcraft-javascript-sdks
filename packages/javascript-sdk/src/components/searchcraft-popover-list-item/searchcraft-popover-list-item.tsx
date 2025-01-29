import { useSearchcraftStore } from '@provider/store';
import { Component, h, Prop } from '@stencil/core';

/**
 * A single list item rendered in a searchcraft-popover-list-view.
 */
@Component({
  tag: 'searchcraft-popover-list-item',
  shadow: false,
})
export class SearchcraftPopoverListItem {
  /** The result title */
  @Prop() titleContent: string | undefined;
  /** The result subtitle */
  @Prop() subtitleContent: string | undefined;
  /** The source of the image. If not included, no item will be rendered. */
  @Prop() imageSrc: string | undefined;
  /** The image alt tag. */
  @Prop() imageAlt: string | undefined;
  /** The link href */
  @Prop() href: string | undefined;
  /** The document position relative to the search results (For Measure) */
  @Prop() documentPosition = 0;

  componentDidLoad() {}

  connectedCallback() {}

  disconnectedCallback() {}

  handleButtonClick() {}

  handleLinkClick = () => {
    const state = useSearchcraftStore.getState();
    const searchcraft = state.getSearchcraftInstance();

    if (searchcraft) {
      const document_position = this.documentPosition;
      const search_term = state.searchTerm;
      const number_of_documents = state.searchResponseListViewItems.length || 0;

      searchcraft.sendMeasureEvent('document_clicked', {
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
