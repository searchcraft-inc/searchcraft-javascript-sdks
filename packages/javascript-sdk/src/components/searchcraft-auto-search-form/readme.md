# sc-auto-search-form



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description | Type                                 | Default         |
| ---------------------- | ------------------------- | ----------- | ------------------------------------ | --------------- |
| `autoSearchFormClass`  | `auto-search-form-class`  |             | `string`                             | `''`            |
| `clearInput`           | --                        |             | `() => void`                         | `() => {}`      |
| `config`               | --                        |             | `SearchcraftConfig`                  | `undefined`     |
| `customStylesForInput` | `custom-styles-for-input` |             | `string \| { [x: string]: string; }` | `{}`            |
| `inputCaptionValue`    | `input-caption-value`     |             | `string`                             | `''`            |
| `labelForInput`        | `label-for-input`         |             | `string`                             | `''`            |
| `placeholderValue`     | `placeholder-value`       |             | `string`                             | `'Search here'` |
| `searchContainerClass` | `search-container-class`  |             | `string`                             | `''`            |


## Events

| Event                     | Description | Type                  |
| ------------------------- | ----------- | --------------------- |
| `inputClearedOrNoResults` |             | `CustomEvent<void>`   |
| `querySubmit`             |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [searchcraft-input-label](../searchcraft-input-label)
- [searchcraft-input](../searchcraft-input)
- [searchcraft-error-message](../searchcraft-error-message)

### Graph
```mermaid
graph TD;
  searchcraft-auto-search-form --> searchcraft-input-label
  searchcraft-auto-search-form --> searchcraft-input
  searchcraft-auto-search-form --> searchcraft-error-message
  style searchcraft-auto-search-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
