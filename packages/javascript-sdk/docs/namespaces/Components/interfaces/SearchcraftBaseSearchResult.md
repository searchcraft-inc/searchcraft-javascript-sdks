[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [Components](/reference/sdk/js-vanilla/namespaces/Components/README.md) / SearchcraftBaseSearchResult

# Interface: SearchcraftBaseSearchResult

This web component is designed to display detailed information for a single search result.
Once a query is submitted, the component formats and presents the result.
It is consumed within the `searchcraft-base-search-results` component.

## Properties

### buttonRel?

> `optional` **buttonRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the button rendered when containerHref is not present.

***

### buttonTarget

> **buttonTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the button rendered when containerHref is not present.

***

### containerRel?

> `optional` **containerRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the containing element.

***

### containerTarget

> **containerTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the containing element.

***

### customStyles?

> `optional` **customStyles**: `string`

A custom styles object.

***

### documentPosition

> **documentPosition**: `number`

The position in the document. Used with the "document_clicked" measure event.

***

### imagePlacement

> **imagePlacement**: `"left"` \| `"right"`

The placement of the image.

***

### item?

> `optional` **item**: [`SearchClientResponseItem`](/reference/sdk/js-vanilla/interfaces/SearchClientResponseItem.md)

***

### searchResultMappings?

> `optional` **searchResultMappings**: [`SearchResultMappings`](/reference/sdk/js-vanilla/type-aliases/SearchResultMappings.md)
