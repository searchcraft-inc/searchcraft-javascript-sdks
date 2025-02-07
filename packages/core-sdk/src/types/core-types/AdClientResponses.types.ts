export interface AdClientResponseItem {
  adId: string;
  type: 'adm-text-ad' | 'adm-product-ad' | 'nativo-ad';
  admAd?: ADMAd;
}

export interface ADMResponse {
  partial_qt: string;
  text_ads: ADMTextAd[];
  product_ads: ADMProductAd[];
}

export interface ADMAd {
  term?: string;
  click_url?: string;
  impression_url?: string;
  adv_id?: number;
  adv_name?: string;
}

export interface ADMTextAd extends ADMAd {
  image_url?: string;
}

export interface ADMProductAd extends ADMAd {
  term?: string;
  click_url?: string;
  image_url?: string;
  impression_url?: string;
  adv_id?: number;
  price?: number;
  price_currency?: string;
  sale_price?: number;
  adv_name?: string;
}
