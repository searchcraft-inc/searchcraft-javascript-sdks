import type {
  AdClientResponseItem,
  SearchClientResponseItem,
} from '@searchcraft/core';
import { Component, h, Prop } from '@stencil/core';

import type { PopoverResultMappings } from '@searchcraft/core';

/**
 * This web component is designed to display a list of results within a popover interface.
 * It is consumed within the `searchcraft-popover-form` component.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-list-view />
 * ```
 */
@Component({
  tag: 'searchcraft-popover-list-view',
  shadow: false,
})
export class SearchcraftPopoverListView {
  /**
   * The mappings that define how the data in the documents are mapped to the
   * list-view-item elements.
   */
  @Prop() popoverResultMappings: PopoverResultMappings | undefined;
  /**
   * The items to render in the list view.
   */
  @Prop() searchClientResponseItems: SearchClientResponseItem[] | undefined;
  @Prop() adClientResponseItems: AdClientResponseItem[] | undefined;
  @Prop() searchResultsPage!: number;
  @Prop() searchResultsPerPage!: number;

  render() {
    return (
      <div class='searchcraft-popover-list-view'>
        {this.adClientResponseItems?.map((item) => (
          <searchcraft-popover-list-item-ad
            adClientResponseItem={item}
            key={item.adId}
          />
        ))}
        {this.searchClientResponseItems?.map((item, index) => (
          <searchcraft-popover-list-item
            item={item}
            key={item.id}
            popoverResultMappings={this.popoverResultMappings}
            documentPosition={
              this.searchResultsPerPage * (this.searchResultsPage - 1) + index
            }
          />
        ))}
      </div>
    );
  }
}
