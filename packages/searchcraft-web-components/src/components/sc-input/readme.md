# sc-input



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description | Type      | Default          |
| ------------------------ | --------------------------- | ----------- | --------- | ---------------- |
| `error`                  | `error`                     |             | `boolean` | `false`          |
| `formClassName`          | `form-class-name`           |             | `string`  | `''`             |
| `inputCaptionClassName`  | `input-caption-class-name`  |             | `string`  | `''`             |
| `inputCaptionValue`      | `input-caption-value`       |             | `string`  | `''`             |
| `inputClassName`         | `input-class-name`          |             | `string`  | `''`             |
| `placeholderValue`       | `placeholder-value`         |             | `string`  | `'Enter Search'` |
| `query`                  | `query`                     |             | `string`  | `''`             |
| `rightToLeftOrientation` | `right-to-left-orientation` |             | `boolean` | `false`          |


## Events

| Event               | Description | Type                  |
| ------------------- | ----------- | --------------------- |
| `clearInput`        |             | `CustomEvent<void>`   |
| `searchInputChange` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [sc-auto-search-form](../sc-auto-search-form)

### Graph
```mermaid
graph TD;
  sc-auto-search-form --> sc-input
  style sc-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
