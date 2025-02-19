[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [Components](/reference/sdk/js-vanilla/namespaces/Components/README.md) / SearchcraftBaseSearchResults

# Interface: SearchcraftBaseSearchResults

This web component is responsible for displaying the results of a search query.
Once a query is submitted, the component formats and presents an ordered list of the results.
## Usage
```html
<!-- index.html -->
<searchcraft-base-search-results
  ad-interval="4"
  place-ad-at-start="false"
  result-image-placement="right"
/>
```
```js
// index.js
const baseSearchResults = document.querySelector('searchcraft-base-search-results');
baseSearchResults.searchResultMappings = containerHref: {
  fieldNames: [
   {
     fieldName: 'canonical_link',
     dataType: 'text',
   },
 ],
};
baseSearchResults.addEventListener('noResults', () => {
  console.log('No search results found');
});
```

## Properties

### buttonLabel?

> `optional` **buttonLabel**: `string`

The label for the button rendered when containerHref is not present for each result.

***

### buttonRel?

> `optional` **buttonRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the button rendered when containerHref is not present for each result.

***

### buttonTarget

> **buttonTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the button rendered when containerHref is not present for each result.

***

### containerRel?

> `optional` **containerRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the containing element for each result.

***

### containerTarget

> **containerTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the containing element for each result.

***

### customStylesForResults?

> `optional` **customStylesForResults**: `string` \| `Record`\<`string`, `Record`\<`string`, `string`\>\>

A custom styles object.

***

### resultImagePlacement

> **resultImagePlacement**: `"left"` \| `"right"`

The placement of the image for each result.

***

### searchResultMappings?

> `optional` **searchResultMappings**: [`SearchResultMappings`](/reference/sdk/js-vanilla/type-aliases/SearchResultMappings.md)

Formats the content rendered for each result.
