# searchcraft-popover-results



<!-- Auto Generated Below -->


## Overview

This web component is designed to display a list of results within a popover interface.
It is consumed within the `searchcraft-popover-form` component.

## Usage
```html
<!-- index.html -->
<searchcraft-popover-list-view />
```

## Properties

| Property                | Attribute | Description                                                                                       | Type                                                                                                                                                                                                                                            | Default     |
| ----------------------- | --------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `documents`             | --        | The documents to render in the list view.                                                         | `Record<string, unknown>[] \| undefined`                                                                                                                                                                                                        | `undefined` |
| `popoverResultMappings` | --        | The mappings that define how the data in the documents are mapped to the list-view-item elements. | `undefined \| { title?: SearchResultMapping \| undefined; subtitle?: SearchResultMapping \| undefined; imageSource?: SearchResultMapping \| undefined; imageAlt?: SearchResultMapping \| undefined; href?: SearchResultMapping \| undefined; }` | `undefined` |


## Dependencies

### Used by

 - [searchcraft-popover-form](../searchcraft-popover-form)

### Depends on

- [searchcraft-popover-list-item](../searchcraft-popover-list-item)

### Graph
```mermaid
graph TD;
  searchcraft-popover-list-view --> searchcraft-popover-list-item
  searchcraft-popover-form --> searchcraft-popover-list-view
  style searchcraft-popover-list-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
