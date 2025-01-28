[**@searchcraft/javascript-sdk**](https://docs.searchcraft.io/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](https://docs.searchcraft.io/reference/sdk/js-vanilla/globals.md) / [JSX](https://docs.searchcraft.io/reference/sdk/js-vanilla/namespaces/JSX/README.md) / SearchcraftFacetList

# Interface: SearchcraftFacetList

This web component is designed to display facets in a search interface, allowing users to refine their search results by applying filters based on various attributes.
It is consumed within the `searchcraft-filter-panel`.
## Usage
```html
<!-- index.html -->
<searchcraft-facet-list field-name="title" />
```
```js
// index.js
const facetList = document.querySelector('searchcraft-facet-list');
facetList.addEventListener('facetSelectionUpdated', () => {
  console.log('Facet selection updated');
});
```

## Properties

### fieldName?

> `optional` **fieldName**: `string`

The name of the field where facets are applied.

***

### onFacetSelectionUpdated()?

> `optional` **onFacetSelectionUpdated**: (`event`) => `void`

When the facets are updated.

#### Parameters

##### event

[`SearchcraftFacetListCustomEvent`](https://docs.searchcraft.io/reference/sdk/js-vanilla/interfaces/SearchcraftFacetListCustomEvent.md)\<\{ `paths`: `string`[]; \}\>

#### Returns

`void`
