[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [JSX](/reference/sdk/js-vanilla/namespaces/JSX/README.md) / SearchcraftBaseSearchResult

# Interface: SearchcraftBaseSearchResult

This web component is designed to display detailed information for a single search result.
Once a query is submitted, the component formats and presents the result.
It is consumed within the `searchcraft-base-search-results` component.

## Properties

### bodyContent?

> `optional` **bodyContent**: `string`

The body content.

***

### buttonHref?

> `optional` **buttonHref**: `string`

The link for the button rendered when containerHref is not present.

***

### buttonLabel?

> `optional` **buttonLabel**: `string`

The label for the button rendered when containerHref is not present.

***

### buttonRel?

> `optional` **buttonRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the button rendered when containerHref is not present.

***

### buttonTarget?

> `optional` **buttonTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the button rendered when containerHref is not present.

***

### containerHref?

> `optional` **containerHref**: `string`

The link for the containing element.

***

### containerRel?

> `optional` **containerRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the containing element.

***

### containerTarget?

> `optional` **containerTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the containing element.

***

### customStyles?

> `optional` **customStyles**: `string`

A custom styles object.

***

### documentPosition?

> `optional` **documentPosition**: `number`

The position in the document. Used with the "document_clicked" measure event.

***

### footerContent?

> `optional` **footerContent**: `string`

The footer content.

***

### imageAlt?

> `optional` **imageAlt**: `string`

The image alternative text.

***

### imagePlacement?

> `optional` **imagePlacement**: `"left"` \| `"right"`

The placement of the image.

***

### imageSrc?

> `optional` **imageSrc**: `string`

The image source.

***

### subtitleContent?

> `optional` **subtitleContent**: `string`

The subtitle content.

***

### titleContent?

> `optional` **titleContent**: `string`

The title content.
