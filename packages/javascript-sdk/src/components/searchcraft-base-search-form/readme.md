# sc-base-search-form



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description | Type                | Default                                                                              |
| ------------------------ | --------------------------- | ----------- | ------------------- | ------------------------------------------------------------------------------------ |
| `config`                 | --                          |             | `SearchcraftConfig` | `{     readKey: '',     endpointURL: '',     index: [],     organizationId: '',   }` |
| `errorMessage`           | `error-message`             |             | `string`            | `'Search was unsuccessful'`                                                          |
| `labelForInput`          | `label-for-input`           |             | `string`            | `'Search'`                                                                           |
| `rightToLeftOrientation` | `right-to-left-orientation` |             | `boolean`           | `false`                                                                              |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `clearInput` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [searchcraft-input-label](../searchcraft-input-label)
- [searchcraft-button](../searchcraft-button)
- [searchcraft-input](../searchcraft-input)
- [searchcraft-error-message](../searchcraft-error-message)

### Graph
```mermaid
graph TD;
  searchcraft-base-search-form --> searchcraft-input-label
  searchcraft-base-search-form --> searchcraft-button
  searchcraft-base-search-form --> searchcraft-input
  searchcraft-base-search-form --> searchcraft-error-message
  searchcraft-button --> searchcraft-spinner-dark
  searchcraft-input --> searchcraft-input-caption
  searchcraft-input --> searchcraft-clear-input-button
  searchcraft-input --> searchcraft-input-icon
  searchcraft-clear-input-button --> searchcraft-clear-icon-set
  searchcraft-input-icon --> searchcraft-search-icon-set
  style searchcraft-base-search-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
