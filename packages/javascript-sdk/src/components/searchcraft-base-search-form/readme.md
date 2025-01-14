# sc-base-search-form



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type                | Default                     |
| ------------------ | ------------------- | ----------- | ------------------- | --------------------------- |
| `buttonLabel`      | `button-label`      |             | `string`            | `'Find'`                    |
| `buttonPlacement`  | `button-placement`  |             | `"left" \| "right"` | `'right'`                   |
| `config`           | --                  |             | `SearchcraftConfig` | `undefined`                 |
| `errorMessage`     | `error-message`     |             | `string`            | `'Search was unsuccessful'` |
| `inputLabel`       | `input-label`       |             | `string`            | `'Search'`                  |
| `placeholderValue` | `placeholder-value` |             | `string`            | `'Search here'`             |


## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `inputCleared` |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [searchcraft-input](../searchcraft-input)

### Graph
```mermaid
graph TD;
  searchcraft-base-search-form --> searchcraft-input
  searchcraft-input --> searchcraft-button
  searchcraft-input --> searchcraft-input-label
  searchcraft-input --> searchcraft-error-message
  searchcraft-button --> searchcraft-spinner-dark
  style searchcraft-base-search-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
