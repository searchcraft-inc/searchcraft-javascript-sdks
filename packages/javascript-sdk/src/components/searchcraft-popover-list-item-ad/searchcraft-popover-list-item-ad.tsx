import type {
  AdClientResponseItemType,
  AdClientResponseItem,
  ADMClientResponseItem,
} from '@searchcraft/core';
import { Component, h, Prop } from '@stencil/core';

/**
 * A single list item rendered in a searchcraft-popover-list-view.
 */
@Component({
  tag: 'searchcraft-popover-list-item-ad',
  shadow: false,
})
export class SearchcraftPopoverListItemAd {
  @Prop() type: AdClientResponseItemType = 'custom';
  @Prop() adClientResponseItem?: AdClientResponseItem;

  connectedCallback() {
    // Send impression urls for adm ads
    if (this.adClientResponseItem?.type === 'adm') {
      const item = this.adClientResponseItem as ADMClientResponseItem;
      if (item.admAd?.impression_url) {
        fetch(item.admAd.impression_url);
      }
    }
  }

  renderADMAd() {
    const item = this.adClientResponseItem as ADMClientResponseItem;

    if (!item.admAd) {
      return;
    }

    return (
      <a class='searchcraft-popover-list-item-ad' href={item.admAd.click_url}>
        {item.admAd.image_url && (
          <div class='searchcraft-popover-list-item-ad-image-wrapper'>
            <img
              alt={item.admAd.term || 'image'}
              src={item.admAd.image_url}
              class='searchcraft-popover-list-item-ad-image'
            />
          </div>
        )}
        <div class='searchcraft-popover-list-item-ad-info-wrapper'>
          <p class='searchcraft-popover-list-item-ad-title'>
            {item.admAd.term}
          </p>
          {item.admAd.price && (
            <p class='searchcraft-popover-list-item-ad-subtitle'>
              {item.admAd.price}
            </p>
          )}
        </div>
      </a>
    );
  }

  renderCustomAd() {}

  renderNativoAd() {
    return <div class='searchcraftp-popover-list-item-ad' />;
  }

  renderAdPlaceholder() {
    return <p>Ad placeholder</p>;
    // return;
  }

  render() {
    switch (this.type) {
      case 'adm':
        return this.renderADMAd();
      case 'custom':
        return this.renderCustomAd();
      case 'nativo':
        return this.renderNativoAd();
    }
  }
}
