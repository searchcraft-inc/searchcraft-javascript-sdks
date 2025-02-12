import type { SearchcraftAdSource } from './SearchcraftConfig.types';

export interface ADMResponse {
  partial_qt: string;
  text_ads: ADMAd[];
  product_ads: ADMAd[];
}
export interface AdClientResponseItem {
  id: string;
  adSource: SearchcraftAdSource;
}

export interface ADMClientResponseItem extends AdClientResponseItem {
  admAdType: 'adm-text-ad' | 'adm-product-ad';
  admAd?: ADMAd;
}
export interface ADMAd {
  term?: string;
  click_url?: string;
  image_url?: string;
  impression_url?: string;
  adv_id?: number;
  price?: number;
  price_currency?: string;
  adv_name?: string;
  sale_price?: number;
}
