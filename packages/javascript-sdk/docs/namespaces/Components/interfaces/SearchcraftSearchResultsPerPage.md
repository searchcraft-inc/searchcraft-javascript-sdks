[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [Components](/reference/sdk/js-vanilla/namespaces/Components/README.md) / SearchcraftSearchResultsPerPage

# Interface: SearchcraftSearchResultsPerPage

This web component is designed to choose the number of search results displayed.
## Usage
```html
<!-- index.html -->
<searchcraft-search-results-per-page increment="20" />
```

## Properties

### customStyles?

> `optional` **customStyles**: `string`

The custom styles object.

***

### increment

> **increment**: `string` \| `number`

The amount the options will increase (e.g. 20 = [20, 40, 60, 80, 100]). The base value is defined by the `searchResultsPerPage` option in the configuration.
