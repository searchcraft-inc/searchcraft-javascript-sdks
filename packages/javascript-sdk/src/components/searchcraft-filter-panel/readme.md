# searchcraft-filter-panel

## Overview

This web component represents a series of filters that allows users to refine and control their search queries by applying various filter criteria.

## Examples

### JavaScript

```html
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


### React

```jsx
<SearchcraftFilterPanel items={[]} />
```


### Vue

```jsx
<SearchcraftFilterPanel :items="[]" />
```


## Properties

| Property | Attribute | Description | Type | Default |
| -------- | --------- | ----------- | ---- | ------- |
| `items` | -- | `The items to filter.` | `FilterItem[]` | `[]` |

