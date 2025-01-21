# searchcraft-filter-panel



<!-- Auto Generated Below -->


## Overview

This web component represents a series of filters that allows users to refine and control their search queries by applying various filter criteria.

## Usage
```html
<!-- index.html -->
<searchcraft-filter-panel />
```

## Properties

| Property | Attribute | Description          | Type           | Default |
| -------- | --------- | -------------------- | -------------- | ------- |
| `items`  | --        | The items to filter. | `FilterItem[]` | `[]`    |


## Dependencies

### Depends on

- [searchcraft-slider](../searchcraft-slider)
- [searchcraft-facet-list](../searchcraft-facet-list)
- [searchcraft-toggle-button](../searchcraft-toggle-button)

### Graph
```mermaid
graph TD;
  searchcraft-filter-panel --> searchcraft-slider
  searchcraft-filter-panel --> searchcraft-facet-list
  searchcraft-filter-panel --> searchcraft-toggle-button
  style searchcraft-filter-panel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
