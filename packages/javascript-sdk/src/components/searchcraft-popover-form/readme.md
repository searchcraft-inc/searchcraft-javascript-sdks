# searchcraft-popover-form



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute | Description | Type                                                                                                                              | Default     |
| ----------------------- | --------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `config`                | --        |             | `SearchcraftConfig`                                                                                                               | `undefined` |
| `popoverResultMappings` | --        |             | `{ title?: SearchResultMapping; subtitle?: SearchResultMapping; imageSource?: SearchResultMapping; href?: SearchResultMapping; }` | `undefined` |
| `type`                  | `type`    |             | `"fullscreen" \| "inline" \| "modal"`                                                                                             | `'inline'`  |


## Dependencies

### Depends on

- [searchcraft-input](../searchcraft-input)
- [searchcraft-popover-list-view](../searchcraft-popover-list-view)

### Graph
```mermaid
graph TD;
  searchcraft-popover-form --> searchcraft-input
  searchcraft-popover-form --> searchcraft-popover-list-view
  searchcraft-input --> searchcraft-button
  searchcraft-input --> searchcraft-input-label
  searchcraft-input --> searchcraft-error-message
  searchcraft-button --> searchcraft-spinner-dark
  style searchcraft-popover-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
