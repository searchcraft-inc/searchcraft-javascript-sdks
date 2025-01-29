import type {
  AdClientResponseItem,
  ADMProductAd,
  ADMTextAd,
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
  @Prop() adClientResponseItem?: AdClientResponseItem;

  connectedCallback() {
    if (this.adClientResponseItem?.admAd?.impression_url) {
      fetch(this.adClientResponseItem?.admAd?.impression_url);
    }
  }

  renderADMProductAd() {
    const ad = this.adClientResponseItem?.admAd as ADMProductAd;
    if (!ad) {
      return;
    }

    return (
      <a class='searchcraft-popover-list-item-ad' href={ad.click_url}>
        {ad.image_url && (
          <div class='searchcraft-popover-list-item-ad-image-wrapper'>
            <img
              alt={ad.term}
              src={ad.image_url}
              class='searchcraft-popover-list-item-ad-image'
            />
          </div>
        )}
        <div class='searchcraft-popover-list-item-ad-info-wrapper'>
          <p class='searchcraft-popover-list-item-ad-title'>{ad.term}</p>
          <p class='searchcraft-popover-list-item-ad-subtitle'>{ad.price}</p>
        </div>
      </a>
    );
  }

  renderADMTextAd() {
    const ad = this.adClientResponseItem?.admAd as ADMTextAd;
    if (!ad) {
      return;
    }

    return (
      <a class='searchcraft-popover-list-item-ad' href={ad.click_url}>
        {ad.image_url && (
          <div class='searchcraft-popover-list-item-ad-image-wrapper'>
            <img
              alt={ad.term}
              src={ad.image_url}
              class='searchcraft-popover-list-item-ad-image'
            />
          </div>
        )}
        <div class='searchcraft-popover-list-item-ad-info-wrapper'>
          <p class='searchcraft-popover-list-item-ad-title'>{ad.term}</p>
        </div>
      </a>
    );
  }

  renderNativoAd() {}

  renderAdPlaceholder() {
    return <p>Ad placeholder</p>;
    // return;
  }

  render() {
    if (!this.adClientResponseItem) {
      return this.renderAdPlaceholder();
    }

    switch (this.adClientResponseItem.type) {
      case 'adm-product-ad':
        return this.renderADMProductAd();
      case 'adm-text-ad':
        return this.renderADMTextAd();
      case 'nativo-ad':
        return this.renderNativoAd();
    }
  }
}
