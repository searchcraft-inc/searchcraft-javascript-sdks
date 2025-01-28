**@searchcraft/react-sdk**

***

# Searchcraft React SDK

The Searchcraft React SDK provides tools for integrating the Searchcraft API into your React applications. It supports core functionalities like searching, managing state, and working with search results.

## Installation

Install with Yarn:

```bash
$ yarn add @searchcraft/react-sdk
```

Install with NPM:

```bash
$ npm install @searchcraft/react-sdk
```

## Initialization and Basic Usage

### React Components

The React SDK provides the following prebuilt components for use in your application:

```jsx

<SearchInputForm />
<SearchPopoverForm />
<FilterPanel />
<ResultsInfo />
<BaseSearchResults />

```

These components can be rendered directly in your app and customized with configurations as needed.

Example Setup

```jsx

import React from 'react';
import { SearchInputForm, FilterPanel, BaseSearchResults } from '@searchcraft/react-sdk/components';

const config = {
  index: ['your_index_from_vektron'],
  readKey: 'your_read_key_from_vektron',
  endpointURL: 'your_searchcraft_endpoint_url',
  searchDebounceDelay: 50, // Optional debounce delay in milliseconds
};

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

const App = () => {
  return (
    <>
      <SearchInputForm config={config} />
      <FilterPanel items={filterPanelItems} />
      <BaseSearchResults />
    </>
  );
};

export default App;

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

Event Handling

The React SDK components support event handling for common actions such as query submission, input focus, or search results.

```jsx

<SearchInputForm
  onQuerySubmit={(event) => {
    console.log('Query submitted:', event.detail);
  }}
  onInputFocus={() => {
    console.log('Input focused');
  }}
  onInputBlur={() => {
    console.log('Input blurred');
  }}
/>

<BaseSearchResults
  onNoResults={() => {
    console.log('No results found');
  }}
/>

```

Additional Information

For more advanced use cases and component-specific documentation, refer to the official [Searchcraft React SDK documentation](https://docs.searchcraft.io/).
