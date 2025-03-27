[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [JSX](/reference/sdk/js-vue/namespaces/JSX/README.md) / SearchcraftPopoverListView

# Interface: SearchcraftPopoverListView

This web component is designed to display a list of results within a popover interface.
It is consumed within the `searchcraft-popover-form` component.
@js-example ```html
<searchcraft-popover-list-view />
```

## Properties

### adClientResponseItems?

> `optional` **adClientResponseItems**: [`AdClientResponseItem`](/reference/sdk/js-vue/interfaces/AdClientResponseItem.md)[]

***

### popoverResultMappings?

> `optional` **popoverResultMappings**: [`PopoverResultMappings`](/reference/sdk/js-vue/type-aliases/PopoverResultMappings.md)

The mappings that define how the data in the documents are mapped to the list-view-item elements.

***

### searchClientResponseItems?

> `optional` **searchClientResponseItems**: [`SearchClientResponseItem`](/reference/sdk/js-vue/interfaces/SearchClientResponseItem.md)[]

The items to render in the list view.

***

### searchResultsPage

> **searchResultsPage**: `number`

***

### searchResultsPerPage

> **searchResultsPerPage**: `number`
