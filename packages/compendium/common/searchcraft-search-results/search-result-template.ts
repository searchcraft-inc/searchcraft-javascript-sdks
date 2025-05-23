import type { SearchResultTemplate } from '@searchcraft/javascript-sdk';

import './search-result-template.scss';

type SearchResultTemplateDataEchostream = {
  canonical_link: string;
  section_name: string;
  headline: string;
  body: string;
  date_published: string;
  author_name: string;
  medium_image: string;
};

export const searchResultTemplateEchostream: SearchResultTemplate<
  SearchResultTemplateDataEchostream
> = (data, index, { html }) => html`
  <a href="${data.canonical_link}" target="_blank" rel="noreferrer">
    <div class="search-result-content">
      <h3 class="search-result-content-subtitle">${data.section_name}</h3>
      <h2 class="search-result-content-title">${data.headline}</h2>
      <p class="search-result-content-body">${data.body}</p>
      <footer class="search-result-content-footer">
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
    <div class="search-result-image">
      <img src="${data.medium_image}" alt="${data.headline}" />
    </div>
  </a>
`;

type SearchResultTemplateDataBazaario = {
  link: string;
  title: string;
  price: string;
  image: string;
};

export const searchResultTemplateBazaario: SearchResultTemplate<
  SearchResultTemplateDataBazaario
> = (data, index, { html }) => html`
  <div>
    <h2>${data.title}</h2>
    <p>${data.link}
  </div>
`;
