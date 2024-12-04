# sc-auto-search-form



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description | Type            | Default                                                     |
| ------------------------ | --------------------------- | ----------- | --------------- | ----------------------------------------------------------- |
| `autoSearchFormClass`    | `auto-search-form-class`    |             | `string`        | `''`                                                        |
| `clearInput`             | --                          |             | `() => void`    | `() => {}`                                                  |
| `config`                 | --                          |             | `CoreConfigSDK` | `{     apiKey: '',     endpointURL: '',     index: [],   }` |
| `inputCaptionValue`      | `input-caption-value`       |             | `string`        | `''`                                                        |
| `labelForInput`          | `label-for-input`           |             | `string`        | `'Search'`                                                  |
| `placeholderValue`       | `placeholder-value`         |             | `string`        | `'Search here'`                                             |
| `rightToLeftOrientation` | `right-to-left-orientation` |             | `boolean`       | `false`                                                     |
| `searchContainerClass`   | `search-container-class`    |             | `string`        | `''`                                                        |


## Events

| Event         | Description                                 | Type                  |
| ------------- | ------------------------------------------- | --------------------- |
| `querySubmit` | Event emitted when the search query changes | `CustomEvent<string>` |


## Dependencies

### Depends on

- [searchcraft-input](../searchcraft-input)

### Graph
```mermaid
graph TD;
  searchcraft-auto-search-form --> searchcraft-input
  searchcraft-input --> searchcraft-input-caption
  searchcraft-input --> searchcraft-clear-input-button
  searchcraft-input --> searchcraft-input-icon
  searchcraft-clear-input-button --> searchcraft-spinner-light
  searchcraft-clear-input-button --> searchcraft-spinner-dark
  searchcraft-clear-input-button --> searchcraft-clear-icon-set
  searchcraft-input-icon --> searchcraft-search-icon-set
  style searchcraft-auto-search-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
