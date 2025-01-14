# sc-input



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                    | Type                                 | Default          |
| ------------------ | ------------------- | ------------------------------------------------------------------------------ | ------------------------------------ | ---------------- |
| `autoSearch`       | `auto-search`       | Whether or not to automatically submit the search term when the input changes. | `boolean`                            | `true`           |
| `buttonLabel`      | `button-label`      | The label for the submit button.                                               | `string`                             | `undefined`      |
| `buttonPlacement`  | `button-placement`  | Where to place the search button.                                              | `"left" \| "none" \| "right"`        | `'none'`         |
| `config`           | --                  |                                                                                | `SearchcraftConfig`                  | `undefined`      |
| `customStyles`     | `custom-styles`     | A custom styles object to be applied to the input element.                     | `string \| { [x: string]: string; }` | `{}`             |
| `debounceDelay`    | `debounce-delay`    | The duration to debounce the input's `inputChange` event.                      | `number`                             | `0`              |
| `inputLabel`       | `input-label`       | The label rendered above the input.                                            | `string`                             | `undefined`      |
| `placeholderValue` | `placeholder-value` | The input element's placeholder value.                                         | `string`                             | `'Enter Search'` |
| `searchTerm`       | `search-term`       | The starting value of the input element.                                       | `string`                             | `''`             |


## Events

| Event               | Description | Type                |
| ------------------- | ----------- | ------------------- |
| `inputBlur`         |             | `CustomEvent<void>` |
| `inputCleared`      |             | `CustomEvent<void>` |
| `inputFocus`        |             | `CustomEvent<void>` |
| `noResultsReceived` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [searchcraft-auto-search-form](../searchcraft-auto-search-form)
 - [searchcraft-base-search-form](../searchcraft-base-search-form)
 - [searchcraft-popover-form](../searchcraft-popover-form)

### Depends on

- [searchcraft-button](../searchcraft-button)
- [searchcraft-input-label](../searchcraft-input-label)
- [searchcraft-error-message](../searchcraft-error-message)

### Graph
```mermaid
graph TD;
  searchcraft-input --> searchcraft-button
  searchcraft-input --> searchcraft-input-label
  searchcraft-input --> searchcraft-error-message
  searchcraft-button --> searchcraft-spinner-dark
  searchcraft-auto-search-form --> searchcraft-input
  searchcraft-base-search-form --> searchcraft-input
  searchcraft-popover-form --> searchcraft-input
  style searchcraft-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
