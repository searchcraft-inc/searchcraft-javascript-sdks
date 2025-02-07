import { nanoid } from 'nanoid';
import type {
  AdClientResponseItem,
  ADMResponse,
  SearchParams,
} from '../../types';
import { AdClient } from './AdClient';

export class AdMarketplaceClient extends AdClient {
  /**
   * Gets ads from the adMarketplace API based on the search term.
   */
  async getAdsForSearchParams(
    params: SearchParams,
  ): Promise<AdClientResponseItem[]> {
    if (!this.config.admSub) {
      console.error('No admSub specified in config.');
      return [];
    }

    const paramString = new URLSearchParams({
      partner: 'demofeed',
      sub1: this.config.admSub,
      qt: params.searchTerm,
      v: '2.0',
      rfr: 'searchcraft.io',
      'results-ta': `${this.config.admTextAdQuantity || 0}`,
      'results-pa': `${this.config.admProductAdQuantity || 0}`,
    }).toString();

    const path = `https://demofeed.is.ampfeed.com/is?${paramString}`;

    const response = await fetch(path, { method: 'GET' });
    const admResponse = (await response.json()) as ADMResponse;

    // Map ADM Response -> AdClientResponseItem[]
    const items: AdClientResponseItem[] = new Array()
      .concat(
        admResponse.product_ads.map((ad) => ({
          adId: nanoid(),
          type: 'adm-product-ad',
          admAd: ad,
        })),
      )
      .concat(
        admResponse.text_ads.map((ad) => ({
          adId: nanoid(),
          type: 'adm-text-ad',
          admAd: ad,
        })),
      );

    return items;
  }
}
