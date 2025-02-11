**@searchcraft/javascript-sdk**

***

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

### HTML
Add the web components to your html. They should be placed with the rest of your page content where you'd like them to render in the layout. These are the web components available to use:
```html
  <searchcraft-input-form></searchcraft-input-form>
  ..
  <searchcraft-popover-form></searchcraft-popover-form>
  ...
  <searchcraft-filter-panel></searchcraft-filter-panel>
  ...
  <searchcraft-results-info /></searchcraft-results-info>
  ...
  <searchcraft-base-search-results></searchcraft-base-search-results>
  ...
  <searchcraft-theme></searchcraft-theme>
  ...
  <searchcraft-pagination></searchcraft-pagination>

```
To see more about the specific attributes required for each component, refer to their individual documentation pages.

### Themes & Styles

**Note** To apply Searchcraft's built-in css theme to the components, which is highly recommended, please make sure that the `<searchcraft-theme>` component is placed somewhere on your HTML page. This component adds a `<style>` tag that applies the searchcraft theme. Without this component, the searchcraft theme will _not_ be applied, and the components will render without styles.

### Javascript
As early as possible in your app's lifecycle, initialize searchcraft, passing in config values that correspond with your Searchcraft environment.

```js
import { Searchcraft } from '@searchcraft/javascript-sdk';

const searchcraft = new Searchcraft({
  index: ['your_index_from_vektron'],
  readKey: 'your_read_key_from_vektron',
  endpointURL: 'your_searchcraft_endpoint_url',
  searchDebounceDelay: 50, // The amount of debounce, in millis, to add to search requests (optional)
})
```

When the DOM content is loaded:
- If you are using a filter panel, provide the filter panel with the filter panel item configuration.
- Provide the search results with the search result mapping configuration.

```js

document.addEventListener('DOMContentLoaded', () => {
  const filterPanel = document.querySelector('searchcraft-filter-panel');
  const searchResults = document.querySelector(
    'searchcraft-base-search-results',
  );

  filterPanel.items = filterPanelItems;
  searchResults.searchResultMappings = searchResultsMappings;
});

```

### Example Filter Configuration
This is an example of a filter panel configuration object. This configuration describes what filters are rendered in your filter panel, and what index fields the filter controls correspond with.

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

### Example Result Mappings
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
    delimiter: ' • ',
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

### Event Subscriptions
You can subscribe to various events within Searchcraft:

```jsx

  const searchcraft = new Searchcraft({
    index: ['your_index_from_vektron'],
    readKey: 'your_read_key_from_vektron',
    endpointURL: 'your_searchcraft_endpoint_url',
  });

  const unsubscribeCallback = searchcraft.subscribe('query_submitted', (event) => {
    // Do something in your application when a query has been submitted
  });

  const unsubscribeCallback = searchcraft.subscribe('ad_slot_shown', (event) => {
    // Do something when a new ad slot has been shown
  });

  ```

  For a complete listing of subscription events, refer to the api reference.
