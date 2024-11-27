# sc-base-search-form



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description | Type      | Default                     |
| ------------------------ | --------------------------- | ----------- | --------- | --------------------------- |
| `errorMessage`           | `error-message`             |             | `string`  | `'Search was unsuccessful'` |
| `labelForInput`          | `label-for-input`           |             | `string`  | `'Search'`                  |
| `rightToLeftOrientation` | `right-to-left-orientation` |             | `boolean` | `false`                     |


## Dependencies

### Depends on

- [sc-input-label](../sc-input-label)
- [sc-button](../sc-button)
- [sc-input](../sc-input)
- [sc-error-message](../sc-error-message)

### Graph
```mermaid
graph TD;
  sc-base-search-form --> sc-input-label
  sc-base-search-form --> sc-button
  sc-base-search-form --> sc-input
  sc-base-search-form --> sc-error-message
  sc-button --> sc-spinner-dark
  sc-input --> sc-input-caption
  sc-input --> sc-input-icon
  style sc-base-search-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
