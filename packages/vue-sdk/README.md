# Searchcraft Vue SDK

The Searchcraft Vue SDK provides tools for integrating the Searchcraft API into your Vue applications. It supports core functionalities like searching, managing state, and working with search results.

## Installation

Install with Yarn:

```bash
$ yarn add @searchcraft/vue-sdk
```

Install with NPM:

```bash
$ npm install @searchcraft/vue-sdk
```

## Initialization and Basic Usage

### Vue Components

The Vue SDK provides the following prebuilt components for use in your application:

```vue
<SearchcraftInputForm />
<SearchcraftPopoverForm />
<SearchcraftPopoverButton />
<SearchcraftFilterPanel />
<SearchcraftResultsInfo />
<SearchcraftSearchResults />
<SearchcraftPagination />
<SearchcraftSearchResultsPerPage />
<SearchcraftSummaryBox />
<SearchcraftTheme />
```

These components can be added to your Vue app and customized with configurations as needed.

### Themes & Styles

**Note** To apply Searchcraft's built-in CSS theme to the components, which is highly recommended, please make sure that the `<SearchcraftTheme>` component is placed somewhere in your Vue template. This component adds the necessary styles for the Searchcraft components. Without this component, the searchcraft theme will _not_ be applied, and the components will render without styles.

#### Example Setup

As early as possible in the app lifecycle, initialize the Searchcraft object:

```js
import { Searchcraft } from '@searchcraft/vue-sdk';

// Index Search Configuration
const searchcraft = new Searchcraft({
  indexName: 'your_index_from_vektron',
  readKey: 'your_read_key_from_vektron',
  endpointURL: 'your_searchcraft_endpoint_url',
  searchDebounceDelay: 50, // Optional debounce delay in milliseconds
})

// Alternatively, you can create a Federation Search Configuration which searches across multiple indices
const federatedSearchcraft = new Searchcraft({
  federationName: 'your_federation_name',
  readKey: 'your_read_key_from_vektron',
  endpointURL: 'your_searchcraft_endpoint_url',
  searchDebounceDelay: 50, // Optional debounce delay in milliseconds
})
```

Add components to your application:

```vue
<template>
  <div>
    <SearchcraftTheme />
    <SearchcraftInputForm />
    <SearchcraftFilterPanel :items="filterPanelItems" />
    <SearchcraftResultsInfo />
    <SearchcraftSearchResults />
    <SearchcraftPagination />
  </div>
</template>

<script setup>
import {
  SearchcraftTheme,
  SearchcraftInputForm,
  SearchcraftFilterPanel,
  SearchcraftResultsInfo,
  SearchcraftSearchResults,
  SearchcraftPagination,
} from '@searchcraft/vue-sdk';

const filterPanelItems = [
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
];
</script>
```

### Example Filter Configuration

Below is an example of a filter panel configuration object. It specifies the filters to be displayed in the filter panel and maps them to the corresponding index fields.

```js
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
    field: 'date_published',
    label: 'Filter by Year',
    options: {
      minDate: pastDate,
      maxDate: today,
      granularity: 'year',
    },
  },
  {
    type: 'facets',
    field: 'section',
    label: 'Filter by Section',
    options: {
      showSublevel: false,
      initialCollapseState: 'open', // 'open' or 'closed' - controls if section starts expanded or collapsed
      viewMoreThreshold: 8, // Number of facets to show before "view more" link appears (0 = show all)
    },
  },
];
```

### Search Result Templates

The Vue SDK supports custom search result templates using template functions. You can customize the appearance and behavior of search results by providing a template function:

```js
export const customSearchResultTemplate = (data, index, { html, safeUrl }) => {
  return html`
    <a href="${safeUrl(data.canonical_link)}" target="_blank" rel="noreferrer">
      <div class="search-result-content">
        <h3 class="search-result-content-subtitle">${data.section_name}</h3>
        <h2 class="search-result-content-title">${data.headline}</h2>
        <p class="search-result-content-body">${data.sub_headline}</p>
        <footer class="search-result-content-footer">
          <time>
            ${new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(data.date_published))}
          </time>
          •
          <p>${data.author_name}</p>
        </footer>
      </div>
      <div class="search-result-image">
        <img src="${safeUrl(data.medium_image)}" alt="${data.headline}" />
      </div>
    </a>
  `;
};
```

The template receives two helpers:

- `html` sanitizes values placed in text, and escapes values placed in an attribute so they stay inside it. Never place result values in event handler attributes such as `onclick`, or in `style`, since they would still run as script or apply as CSS.
- `safeUrl` checks a URL before it is placed in an `href` or `src`. It returns relative, `http:`, `https:`, `mailto:`, `tel:`, `sms:` and `data:image/` URLs unchanged, and returns `#` for anything else, such as a `javascript:` URL. To allow your app's own scheme, pass it in `schemes`: `safeUrl(data.app_link, { schemes: ['myapp'] })`. Write links with such a scheme in the template's own markup. If the link's markup is placed as a value in the text of another `html` call, DOMPurify removes the URL.

Then apply the template to your search results component:

```vue
<template>
  <SearchcraftSearchResults :template="customSearchResultTemplate" />
</template>

<script setup>
import { SearchcraftSearchResults } from '@searchcraft/vue-sdk';
import { customSearchResultTemplate } from './searchResultTemplate';
</script>
```

### Event Handling

You can subscribe to various events within Searchcraft:

```js
const searchcraft = new Searchcraft({
  indexName: 'your_index_from_vektron',
  readKey: 'your_read_key_from_vektron',
  endpointURL: 'your_searchcraft_endpoint_url',
});

const unsubscribeCallback = searchcraft.subscribe('query_submitted', (event) => {
  // Do something in your application when a query has been submitted
});

const unsubscribeCallback2 = searchcraft.subscribe('ad_container_rendered', (event) => {
  // Do something when a new ad container has been rendered
});
```

For a complete listing of event subscriptions, refer to the API reference.

## Additional Information

For more advanced use cases and component-specific documentation, refer to the official [Searchcraft Vue SDK documentation](https://docs.searchcraft.io/).
