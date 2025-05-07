import type { CustomAdTemplate } from '@searchcraft/javascript-sdk';

import './custom-ad-template.scss';

export const customAdTemplate: CustomAdTemplate = (data, { html }) => html`
  <div class="custom-ad" id="${data.adContainerId}">
    <p>Custom ad for <strong>${data.searchTerm}</strong></p>
    <p><small>adContainerId: ${data.adContainerId}</small></p>
  </div>
`;
