import type { SearchResultTemplate } from '@searchcraft/javascript-sdk';

import './search-result-template.scss';

type SearchResultDataEchostream = {
  canonical_link: string;
  section_name: string;
  headline: string;
  body: string;
  date_published: string;
  author_name: string;
  medium_image: string;
};

export const searchResultTemplateEchostream: SearchResultTemplate<
  SearchResultDataEchostream
> = (data, _index, { html }) => html`
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

type SearchResultDataBazaario = {
  link: string;
  title: string;
  price: string;
  image: string;
};

export const searchResultTemplateBazaario: SearchResultTemplate<
  SearchResultDataBazaario
> = (data, _index, { html }) => html`
  <div>
    <h2>${data.title}</h2>
    <p>${data.link}
  </div>
`;


type SearchResultDataFoodAndWine = {
  link: string;
  category: string;
  title: string;
  description: string;
  pub_date: string;
  dc_creator: string;
  enclosure_url: string;
};

export const searchResultTemplateFoodAndWine: SearchResultTemplate<
  SearchResultDataFoodAndWine
> = (data, _index, { html }) => html`
  <a href="${data.link}" target="_blank" rel="noreferrer">
    <div class="search-result-content">
      <h3 class="search-result-content-subtitle">${data.category?.[0]}</h3>
      <h2 class="search-result-content-title">${data.title}</h2>
      <p class="search-result-content-body">${data.description}</p>
      <footer class="search-result-content-footer">
        <span class='result-date'>
          ${new Date(
            data.pub_date,
          ).toLocaleDateString()}
        </span>
        •
        <p>${data.dc_creator}</p>
      </footer>
    </div>
    <div class="search-result-image">
      <img src="${data.enclosure_url}" alt="${data.title}" />
    </div>
  </a>
`;

type SearchResultDataGalaxyNews = {
  media_thumbnail_url?: string;
  title?: string;
  description: string;
  dc_creator: string;
  pub_date: string;
  link: string;
};


export const searchResultTemplateGalaxyNews: SearchResultTemplate<
  SearchResultDataGalaxyNews
> = (data, _index, { html, source_index }) => html`
  <a href="${data.link}" target="_blank" rel="noreferrer">
    <div class="search-result-content">
      <h2 class="search-result-content-title">${data.title}</h2>
      <p class="search-result-content-body">${data.description}</p>
      <footer class="search-result-content-footer">
        <span class='result-date'>
          ${new Date(
            data.pub_date,
          ).toLocaleDateString()}
        </span>
        •
        <p>${data.dc_creator}</p>
        ${source_index ? html`• <span class="source-index-badge">Source: ${source_index}</span>` : ''}
      </footer>
    </div>
    ${data.media_thumbnail_url ? html`
      <div class="search-result-image">
        <img src="${data.media_thumbnail_url}" alt="${data.title}" />
      </div>
    ` : ''}
  </a>
`;