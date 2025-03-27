[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [JSX](/reference/sdk/js-vue/namespaces/JSX/README.md) / SearchcraftFilterPanel

# Interface: SearchcraftFilterPanel

This web component represents a series of filters that allows users to refine and control their search queries by applying various filter criteria.
@js-example ```html
<!-- index.html -->
<searchcraft-filter-panel />
```
```js
// index.js
const filterPanel = document.querySelector('searchcraft-filter-panel');
if (filterPanel) {
  filterPanel.items = [];
}
```
@react-example ```jsx
<SearchcraftFilterPanel items={[]} />
```
@vue-example ```jsx
<SearchcraftFilterPanel :items="[]" />
```

## Properties

### items?

> `optional` **items**: [`FilterItem`](/reference/sdk/js-vue/interfaces/FilterItem.md)[]

The items to filter.
