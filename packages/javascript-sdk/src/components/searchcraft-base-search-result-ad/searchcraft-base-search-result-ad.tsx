import type {
  AdClientResponseItem,
  AdClientResponseItemType,
  ADMClientResponseItem,
} from '@searchcraft/core';
import { Component, h, Prop } from '@stencil/core';

/**
 * A single list item rendered in a searchcraft-popover-list-view.
 */
@Component({
  tag: 'searchcraft-base-search-result-ad',
  shadow: false,
})
export class SearchcraftBaseSearchResultAd {
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
      <a class='searchcraft-base-ad' href={item.admAd.click_url}>
        {item.admAd.image_url && (
          <div class='searchcraft-base-ad-image-wrapper'>
            <img
              alt={item.admAd.term || 'image'}
              src={item.admAd.image_url}
              class='searchcraft-base-ad-image'
            />
          </div>
        )}
        <div class='searchcraft-base-ad-info-wrapper'>
          <p class='searchcraft-base-ad-title'>{item.admAd.term}</p>
          {item.admAd.price && (
            <p class='searchcraft-base-ad-subtitle'>{item.admAd.price}</p>
          )}
        </div>
      </a>
    );
  }

  renderNativoAd() {}

  renderCustomAd() {
    return <div />;
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
