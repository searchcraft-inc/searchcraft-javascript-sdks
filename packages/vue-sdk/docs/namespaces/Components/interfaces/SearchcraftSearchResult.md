[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [Components](/reference/sdk/js-vue/namespaces/Components/README.md) / SearchcraftSearchResult

# Interface: SearchcraftSearchResult

This web component is designed to display detailed information for a single search result. Once a query is submitted, the component formats and presents the result.

## Properties

### documentPosition

> **documentPosition**: `number`

The position in the document. Used with the "document_clicked" measure event.

***

### index

> **index**: `number`

The index.

***

### item?

> `optional` **item**: [`SearchClientResponseItem`](/reference/sdk/js-vue/interfaces/SearchClientResponseItem.md)

***

### template?

> `optional` **template**: [`SearchResultTemplate`](/reference/sdk/js-vue/type-aliases/SearchResultTemplate.md)\<`any`\>

A callback function responsible for rendering a result.
