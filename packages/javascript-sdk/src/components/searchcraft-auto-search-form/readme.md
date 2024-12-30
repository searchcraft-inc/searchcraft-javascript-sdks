# sc-auto-search-form



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description | Type                                 | Default                                                                              |
| ------------------------ | --------------------------- | ----------- | ------------------------------------ | ------------------------------------------------------------------------------------ |
| `autoSearchFormClass`    | `auto-search-form-class`    |             | `string`                             | `''`                                                                                 |
| `clearInput`             | --                          |             | `() => void`                         | `() => {}`                                                                           |
| `config`                 | --                          |             | `SearchcraftConfig`                  | `{     readKey: '',     endpointURL: '',     index: [],     organizationId: '',   }` |
| `customStylesForInput`   | `custom-styles-for-input`   |             | `string \| { [x: string]: string; }` | `{}`                                                                                 |
| `inputCaptionValue`      | `input-caption-value`       |             | `string`                             | `''`                                                                                 |
| `inputIconHeight`        | `input-icon-height`         |             | `number`                             | `20`                                                                                 |
| `inputIconWidth`         | `input-icon-width`          |             | `number`                             | `20`                                                                                 |
| `labelForInput`          | `label-for-input`           |             | `string`                             | `''`                                                                                 |
| `placeholderValue`       | `placeholder-value`         |             | `string`                             | `'Search here'`                                                                      |
| `rightToLeftOrientation` | `right-to-left-orientation` |             | `boolean`                            | `false`                                                                              |
| `searchContainerClass`   | `search-container-class`    |             | `string`                             | `''`                                                                                 |


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
  searchcraft-input --> searchcraft-input-caption
  searchcraft-input --> searchcraft-clear-input-button
  searchcraft-input --> searchcraft-input-icon
  searchcraft-clear-input-button --> searchcraft-clear-icon-set
  searchcraft-input-icon --> searchcraft-search-icon-set
  style searchcraft-auto-search-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
