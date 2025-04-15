import type { ADMAdTemplate } from '@searchcraft/javascript-sdk';

import './adm-ad-template.scss';

const getCurrencySymbol = (currency: string) =>
  (0)
    .toLocaleString('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();

export const admAdTemplate: ADMAdTemplate = (data, { html }) => html`
 <a href="${data.click_url}" target="_blank" rel="noreferrer">
    <div class="ad">
      <h2 class="ad-title">${data.term}</h2>
      <footer class="ad-footer">
        <span class="ad-price">${data.price_currency ? getCurrencySymbol(data.price_currency) : ''}${data.price}</span>
        <span class="ad-sale-price">${data.sale_price}</span>
      </footer>
    </div>
    <div class="ad-image">
      <img src="${data.image_url}" alt="${data.term}" />
    </div>
  </a>
`;
