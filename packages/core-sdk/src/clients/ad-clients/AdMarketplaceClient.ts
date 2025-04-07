import { nanoid } from 'nanoid';
import type {
  AdClientResponseItem,
  ADMClientResponseItem,
  ADMResponse,
  SearchcraftAdSource,
  SearchClientRequestProperties,
} from '../../types';
import { AdClient } from './AdClient';

export class AdMarketplaceClient extends AdClient {
  /**
   * Gets ads from the adMarketplace API based on the search term.
   */
  async getAdsForSearchParams(
    params: SearchClientRequestProperties,
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

    const productAds: ADMClientResponseItem[] = admResponse.product_ads.map(
      (ad) => ({
        id: nanoid(),
        adSource: 'adMarketplace',
        admAdType: 'adm-product-ad',
        admAd: ad,
      }),
    );

    const textAds: ADMClientResponseItem[] = admResponse.text_ads.map((ad) => ({
      id: nanoid(),
      adSource: 'adMarketplace',
      admAdType: 'adm-text-ad',
      admAd: ad,
    }));

    const allAds = productAds.concat(textAds);

    return allAds;
  }

  async onAdContainerViewed(data: {
    adClientResponseItem?: AdClientResponseItem;
    adContainerId: string;
    adSource: SearchcraftAdSource;
    searchTerm: string;
  }): Promise<void> {
    // Calls fetch on the impression url, to record an impression for adMarketplace
    const item = data.adClientResponseItem as ADMClientResponseItem;
    if (item.admAd?.impression_url) {
      fetch(item.admAd.impression_url);
    }
  }
}
