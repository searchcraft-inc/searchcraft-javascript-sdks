# searchcraft-filter-panel



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description | Type           | Default |
| ------------- | --------- | ----------- | -------------- | ------- |
| `filterItems` | --        |             | `FilterItem[]` | `[]`    |


## Events

| Event    | Description                                      | Type                    |
| -------- | ------------------------------------------------ | ----------------------- |
| `update` | Emits an event with an array of query ctx values | `CustomEvent<string[]>` |


## Dependencies

### Depends on

- [searchcraft-slider](../searchcraft-slider)
- [searchcraft-facet-list](../searchcraft-facet-list)

### Graph
```mermaid
graph TD;
  searchcraft-filter-panel --> searchcraft-slider
  searchcraft-filter-panel --> searchcraft-facet-list
  searchcraft-facet-list --> searchcraft-dash-icon
  searchcraft-facet-list --> searchcraft-check-icon
  style searchcraft-filter-panel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
