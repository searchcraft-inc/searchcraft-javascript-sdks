import type {
  AdClientResponseItem,
  SearchClientResponseItem,
} from '@searchcraft/core';
import { Component, h, Prop, type JSX } from '@stencil/core';

import type { PopoverResultMappings } from '@searchcraft/core';
import { searchcraftStore } from '@store';

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

  private config = searchcraftStore.getState().core?.config;

  renderWithADMAds() {
    return (
      <div class='searchcraft-popover-list-view'>
        {this.adClientResponseItems?.map((item) => (
          <searchcraft-popover-list-item-ad
            adClientResponseItem={item}
            type='adm'
            key={item.id}
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

  renderWithCustomAds() {
    const itemsToRender: JSX.Element[] = [];
    const interstitialInterval = this.config?.customAdInterstialInterval || 0;
    const adStartQuantity = this.config?.customAdStartQuantity || 0;
    const adEndQuantity = this.config?.customAdEndQuantity || 0;
    const searchItems = this.searchClientResponseItems || [];

    // Renders ads at beginning
    for (let n = 0; n < adStartQuantity; n++) {
      itemsToRender.push(
        <searchcraft-popover-list-item-ad type='custom' key={`${n}-ad`} />,
      );
    }

    // Renders search results + interstitial ads
    searchItems.forEach((item, index) => {
      itemsToRender.push(
        <searchcraft-popover-list-item
          item={item}
          key={item.id}
          popoverResultMappings={this.popoverResultMappings}
          documentPosition={
            this.searchResultsPerPage * (this.searchResultsPage - 1) + index
          }
        />,
      );

      if (
        interstitialInterval &&
        index % interstitialInterval === 0 &&
        index + interstitialInterval < searchItems.length
      ) {
        itemsToRender.push(
          <searchcraft-popover-list-item-ad
            type='custom'
            key={`${item.id}-ad`}
          />,
        );
      }
    });

    // Renders ads at end
    for (let n = 0; n < adEndQuantity; n++) {
      itemsToRender.push(
        <searchcraft-popover-list-item-ad type='custom' key={`${n}-ad`} />,
      );
    }

    return <div class='searchcraft-popover-list-view'>{itemsToRender}</div>;
  }

  renderWithNoAds() {
    return (
      <div class='searchcraft-popover-list-view'>
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

  render() {
    switch (this.config?.adProvider || 'None') {
      case 'adMarketplace':
        return this.renderWithADMAds();
      case 'Custom':
        return this.renderWithCustomAds();
      default:
        return this.renderWithNoAds();
    }
  }
}
