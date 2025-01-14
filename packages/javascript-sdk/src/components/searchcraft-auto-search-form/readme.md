# sc-auto-search-form



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description | Type                                 | Default         |
| ---------------------- | ------------------------- | ----------- | ------------------------------------ | --------------- |
| `autoSearchFormClass`  | `auto-search-form-class`  |             | `string`                             | `''`            |
| `config`               | --                        |             | `SearchcraftConfig`                  | `undefined`     |
| `customStylesForInput` | `custom-styles-for-input` |             | `string \| { [x: string]: string; }` | `{}`            |
| `inputCaptionValue`    | `input-caption-value`     |             | `string`                             | `''`            |
| `inputLabel`           | `input-label`             |             | `string`                             | `''`            |
| `placeholderValue`     | `placeholder-value`       |             | `string`                             | `'Search here'` |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `inputCleared` |             | `CustomEvent<void>`   |
| `querySubmit`  |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [searchcraft-input](../searchcraft-input)

### Graph
```mermaid
graph TD;
  searchcraft-auto-search-form --> searchcraft-input
  searchcraft-input --> searchcraft-button
  searchcraft-input --> searchcraft-input-label
  searchcraft-input --> searchcraft-error-message
  searchcraft-button --> searchcraft-spinner-dark
  style searchcraft-auto-search-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
