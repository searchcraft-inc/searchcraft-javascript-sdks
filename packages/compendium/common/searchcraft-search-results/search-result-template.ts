import type { SearchResultTemplate } from '@searchcraft/javascript-sdk';

import './search-result-template.scss';

type SearchResultTemplateData = {
  canonical_link: string;
  section_name: string;
  headline: string;
  body: string;
  date_published: string;
  author_name: string;
  medium_image: string;
};

export const searchResultTemplate: SearchResultTemplate<
  SearchResultTemplateData
> = (data, index, { html }) => html`
  <a href="${data.canonical_link}" target="_blank" rel="noreferrer">
    <div class="search-result">
      <h3 class="search-result-subtitle">${data.section_name}</h3>
      <h2 class="search-result-title">${data.headline}</h2>
      <p class="search-result-body">${data.body}</p>
      <footer class="search-result-footer">
        <time>
          ${new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }).format(new Date(data.date_published))}
        </time>
        •
        <p>${data.author_name}</p>
      </footer>
    </div>
    <img class="search-result-image" src="${data.medium_image}" alt="${data.headline}" />
  </a>
`;
