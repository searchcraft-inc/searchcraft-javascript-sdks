[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [Components](/reference/sdk/js-vue/namespaces/Components/README.md) / SearchcraftFacetList

# Interface: SearchcraftFacetList

This web component is designed to display facets in a search interface, allowing users to refine their search results by applying filters based on various attributes.
It is consumed within the `searchcraft-filter-panel`.
@js-example ```html
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

### fieldName

> **fieldName**: `string`

The name of the field where facets are applied.
