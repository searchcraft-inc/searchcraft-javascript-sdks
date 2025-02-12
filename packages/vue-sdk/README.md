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

```jsx

<SearchInputForm />
<SearchPopoverForm />
<FilterPanel />
<ResultsInfo />
<BaseSearchResults />

```

These components can be added to your Vue app and customized with configurations as needed.

Example Setup

#### Example Setup

As early as possible in the app lifecycle, initialize the Searchcraft object:
```jsx
import { Searchcraft } from '@searchcraft/react-sdk';

const searchcraft = new Searchcraft({
  index: ['your_index_from_vektron'],
  readKey: 'your_read_key_from_vektron',
  endpointURL: 'your_searchcraft_endpoint_url',
  searchDebounceDelay: 50, // Optional debounce delay in milliseconds
})

```

Add components to your application:

```jsx

<template>
  <SearchInputForm />
  <FilterPanel :items="filterPanelItems" />
  <BaseSearchResults />
</template>

<script>
import {
  SearchcraftProvider,
  SearchInputForm,
  FilterPanel,
  BaseSearchResults,
} from '@searchcraft/vue-sdk';

export default {
  components: {
    SearchcraftProvider,
    SearchInputForm,
    FilterPanel,
    BaseSearchResults,
  },
  data() {
    return {
      filterPanelItems: [
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
      ],
    };
  },
};
</script>

```

Example Filter Configuration

Below is an example of a filter panel configuration object. It specifies the filters to be displayed in the filter panel and maps them to the corresponding index fields.

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

Example Result Mappings

Customize the appearance and behavior of search results by modifying the searchResultMappings configuration. Use field names from your index to map the content.

```jsx

export const searchResultMappings = {
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
  },
};

```

#### Event Handling
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

For a complete listing of event subscriptions, refer to the api reference.

Additional Information

For more advanced use cases and component-specific documentation, refer to the official [Searchcraft Vue SDK documentation](https://docs.searchcraft.io/).