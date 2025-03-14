import type { CustomAdTemplate } from '@searchcraft/javascript-sdk';

import './custom-ad-template.scss';

export const customAdTemplate: CustomAdTemplate = (data, { html }) => html`
  <div class="searchcarft-custom-ad" id="${data.adContainerId}">
    Custom ad for <strong>${data.searchTerm}</strong>
  </div>
`;
