# Searchcraft JavaScript SDK

The Searchcraft JavaScript SDK provides tools for integrating the Searchcraft API into your JavaScript applications. It supports core functionalities like searching, managing state, and working with search results.

---

## Installation
Install with Yarn:

```bash
$ yarn add @searchcraft/javascript-sdk
```

Install with NPM:

```bash
$ npm install @searchcraft/javascript-sdk
```
## Initialization and Basic Usage

Import and Initialize the SDK

Create an instance of SearchcraftCore with your configuration values (available via the Searchcraft Customer Portal - Vektron):

```jsx

// main.js

import { SearchcraftCore } from '@searchcraft/javascript-sdk';

import { defineCustomElements } from '@searchcraft/javascript-sdk/components';
import { filterPanelItems, searchResultsMappings } from './configs';

defineCustomElements();

const config = {
  index: ['your_index'],
  apiKey: 'your_api_key',
  endpointURL: 'https://api.searchcraft.io',
};

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('searchcraft-auto-search-form');
  const searchResults = document.querySelector(
    'searchcraft-base-search-results',
  );

  searchForm.config = config;

  filterPanel.setAttribute('items', JSON.stringify(filterPanelItems));

  searchResults.setAttribute(
    'search-result-mappings',
    JSON.stringify(searchResultsMappings),
  );
});

// index.html
<div>
  <searchcraft-auto-search-form
    input-icon-height="27"
    input-icon-width="27"
    placeholder-value="Search"
  />
  <searchcraft-filter-panel />
  <searchcraft-results-info />
  <searchcraft-base-search-results
    ad-interval="3"
    place-ad-at-start="false"
    result-image-placement="right"
    container-target="_blank"
  />
</div>

```

### Filter Configuration
Update filterPanelItems in configs.js to add or modify filters.

```jsx

const today = new Date();
const pastDate = new Date(today);
pastDate.setFullYear(today.getFullYear() - 10);

export const filterPanelItems = [
  {
    type: 'mostRecentToggle',
    label: 'Most Recent',
    options: {
      subLabel: 'Show the most recently published articles first.',
    },
  },
  {
    type: 'exactMatchToggle',
    label: 'Exact Match',
    options: {
      subLabel: 'Only show results that precisely match your search.',
    },
  },
  {
    type: 'dateRange',
    fieldName: 'date_published',
    label: 'Filter by Year',
    options: {
      minDate: pastDate,
      maxDate: today,
      granularity: 'year',
    },
  },
  {
    type: 'facets',
    fieldName: 'section',
    label: 'Filter by Section',
  },
];
```

### Result Mappings
Modify searchResultsMappings in configs.js to customize the appearance and behavior of search results. The `fieldNames` from your index can be mapped to the content of the results using this config.

```jsx
export const searchResultsMappings = {
  containerHref: {
    fieldNames: [
      {
        fieldName: 'canonical_link',
        dataType: 'text',
      },
    ],
  },
  footer: {
    fieldNames: [
      {
        fieldName: 'date_published',
        dataType: 'date',
      },
      {
        fieldName: 'author_name',
        dataType: 'text',
      },
    ],
    delimeter: ' • ',
  },
  imageSource: {
    fieldNames: [
      {
        fieldName: 'medium_image',
        dataType: 'text',
      },
    ],
  },
  body: {
    fieldNames: [{ fieldName: 'sub_headline', dataType: 'text' }],
  },
  title: {
    fieldNames: [{ fieldName: 'section_name', dataType: 'text' }],
  },
  subtitle: {
    fieldNames: [{ fieldName: 'headline', dataType: 'text' }],
  }
};
```

### Event Handling
Add or update event listeners in Main.js to handle additional interactions. The purpose of these events is to allow for updating your consuming applications layout based on events coming from Searchcraft.

```jsx
  const searchContent = document.querySelector('#search-content');
  function setSearchContentVisibility(isVisible) {
    if (searchContent) {
      searchContent.style.display = isVisible ? 'flex' : 'none';
    }
    if (pageContentPlaceholder) {
      pageContentPlaceholder.style.display = isVisible ? 'none' : 'block';
    }
  }

  setSearchContentVisibility(false);

    searchForm.addEventListener('querySubmit', (event) => {
    console.log('Query submitted:', event.detail);

    setSearchContentVisibility(true);
  });

  searchForm.addEventListener('inputClearedOrNoResults', () => {
    console.log('Input cleared or no search results found.');

    setSearchContentVisibility(false);
  });

  searchResults.addEventListener('noResults', () => {
    console.log('no search results found.');

    setSearchContentVisibility(true);
  });
  ```