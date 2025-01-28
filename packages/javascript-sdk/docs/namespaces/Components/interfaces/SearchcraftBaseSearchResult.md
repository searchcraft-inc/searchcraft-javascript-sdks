[**@searchcraft/javascript-sdk**](https://docs.searchcraft.io/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](https://docs.searchcraft.io/reference/sdk/js-vanilla/globals.md) / [Components](https://docs.searchcraft.io/reference/sdk/js-vanilla/namespaces/Components/README.md) / SearchcraftBaseSearchResult

# Interface: SearchcraftBaseSearchResult

This web component is designed to display detailed information for a single search result.
Once a query is submitted, the component formats and presents the result.
It is consumed within the `searchcraft-base-search-results` component.

## Properties

### bodyContent

> **bodyContent**: `undefined` \| `string`

The body content.

***

### buttonHref

> **buttonHref**: `undefined` \| `string`

The link for the button rendered when containerHref is not present.

***

### buttonLabel

> **buttonLabel**: `undefined` \| `string`

The label for the button rendered when containerHref is not present.

***

### buttonRel

> **buttonRel**: `undefined` \| `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the button rendered when containerHref is not present.

***

### buttonTarget

> **buttonTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the button rendered when containerHref is not present.

***

### containerHref

> **containerHref**: `undefined` \| `string`

The link for the containing element.

***

### containerRel

> **containerRel**: `undefined` \| `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the containing element.

***

### containerTarget

> **containerTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the containing element.

***

### customStyles

> **customStyles**: `undefined` \| `string`

A custom styles object.

***

### documentPosition

> **documentPosition**: `number`

The position in the document. Used with the "document_clicked" measure event.

***

### footerContent

> **footerContent**: `undefined` \| `string`

The footer content.

***

### imageAlt

> **imageAlt**: `undefined` \| `string`

The image alternative text.

***

### imagePlacement

> **imagePlacement**: `"left"` \| `"right"`

The placement of the image.

***

### imageSrc

> **imageSrc**: `undefined` \| `string`

The image source.

***

### subtitleContent

> **subtitleContent**: `undefined` \| `string`

The subtitle content.

***

### titleContent

> **titleContent**: `undefined` \| `string`

The title content.
