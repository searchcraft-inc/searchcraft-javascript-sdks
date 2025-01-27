[**@searchcraft/javascript-sdk**](https://docs.searchcraft.io/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](https://docs.searchcraft.io/reference/sdk/js-vanilla/globals.md) / [Components](https://docs.searchcraft.io/reference/sdk/js-vanilla/namespaces/Components/README.md) / SearchcraftPopoverListView

# Interface: SearchcraftPopoverListView

This web component is designed to display a list of results within a popover interface.
It is consumed within the `searchcraft-popover-form` component.
## Usage
```html
<!-- index.html -->
<searchcraft-popover-list-view />
```

## Properties

### documents

> **documents**: `Record`\<`string`, `unknown`\>[]

The documents to render in the list view.

***

### popoverResultMappings

> **popoverResultMappings**: [`PopoverResultMappings`](https://docs.searchcraft.io/reference/sdk/js-vanilla/type-aliases/PopoverResultMappings.md)

The mappings that define how the data in the documents are mapped to the list-view-item elements.
