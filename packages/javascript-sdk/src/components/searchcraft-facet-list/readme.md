# searchcraft-filters-list



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `fieldName` | `field-name` |             | `string` | `undefined` |


## Events

| Event                   | Description | Type                                |
| ----------------------- | ----------- | ----------------------------------- |
| `facetSelectionUpdated` |             | `CustomEvent<{ paths: string[]; }>` |


## Dependencies

### Used by

 - [searchcraft-filter-panel](../searchcraft-filter-panel)

### Depends on

- [searchcraft-dash-icon](../../assets)
- [searchcraft-check-icon](../../assets)

### Graph
```mermaid
graph TD;
  searchcraft-facet-list --> searchcraft-dash-icon
  searchcraft-facet-list --> searchcraft-check-icon
  searchcraft-filter-panel --> searchcraft-facet-list
  style searchcraft-facet-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
