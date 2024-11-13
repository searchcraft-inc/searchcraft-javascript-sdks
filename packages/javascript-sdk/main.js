import './style.css';

import { CoreSDK as SearchcraftCore } from '@searchcraft/core';
import { SearchcraftProvider } from './searchcraft-provider';
import { AutoSearchForm } from './auto-search-form';

const searchcraft = new SearchcraftCore({
  index: ['scraftdemo_movies'],
  apiKey: '1234.909.jmk',
  endpointURL: 'http://localhost:3000',
});

// Assuming you have the `SearchcraftProvider` and `AutoSearchForm` definitions
// customElements.define('searchcraft-provider', SearchcraftProvider);
// customElements.define('auto-search-form', AutoSearchForm);

// Render HTML content with the provider and search form
document.querySelector('#app').innerHTML = `
  <div>
    <!-- Searchcraft Provider Component -->
    <searchcraft-provider id="provider" debug="true"></searchcraft-provider>
    <auto-search-form id="auto-search"></auto-search-form>
  </div>
`;

// Pass the searchcraft instance to the provider
const provider = document.getElementById('provider');
provider.searchcraft = searchcraft;

// Listen for the submit event from the auto-search form
const searchForm = document.getElementById('auto-search');
searchForm.addEventListener('submit', (event) => {
  const query = event.detail;
  provider.setQuery(query);
  provider.search();
});

// Optional: listen for search results updates and handle as needed
provider.addEventListener('search-results', (event) => {
  console.log('Search results:', event.detail);
});
