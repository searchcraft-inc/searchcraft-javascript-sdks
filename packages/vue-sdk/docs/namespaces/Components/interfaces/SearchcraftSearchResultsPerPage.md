[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [Components](/reference/sdk/js-vue/namespaces/Components/README.md) / SearchcraftSearchResultsPerPage

# Interface: SearchcraftSearchResultsPerPage

This web component is designed to choose the number of search results displayed.
## Usage
```html
<!-- index.html -->
<searchcraft-search-results-per-page increment="20" />
```

## Extended by

- [`SearchcraftSearchResultsPerPageProps`](/reference/sdk/js-vue/interfaces/SearchcraftSearchResultsPerPageProps.md)

## Properties

### customStyles?

> `optional` **customStyles**: `string`

The custom styles object.

***

### increment

> **increment**: `string` \| `number`

The amount the options will increase (e.g. 20 = [20, 40, 60, 80, 100]). The base value is defined by the `searchResultsPerPage` option in the configuration.
