[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [Components](/reference/sdk/js-vue/namespaces/Components/README.md) / SearchcraftFilterPanel

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

## Extended by

- [`SearchcraftFilterPanelProps`](/reference/sdk/js-vue/interfaces/SearchcraftFilterPanelProps.md)

## Properties

### items

> **items**: [`FilterItem`](/reference/sdk/js-vue/interfaces/FilterItem.md)[]

The items to filter.
