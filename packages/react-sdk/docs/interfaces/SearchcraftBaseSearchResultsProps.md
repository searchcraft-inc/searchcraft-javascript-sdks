[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftBaseSearchResultsProps

# Interface: SearchcraftBaseSearchResultsProps

The props for the SearchcraftBaseSearchResults component.

## Extends

- `SearchcraftBaseSearchResults`

## Properties

### buttonLabel?

> `optional` **buttonLabel**: `string`

The label for the button rendered when containerHref is not present for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.buttonLabel`

***

### buttonRel?

> `optional` **buttonRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the button rendered when containerHref is not present for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.buttonRel`

***

### buttonTarget

> **buttonTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the button rendered when containerHref is not present for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.buttonTarget`

***

### containerRel?

> `optional` **containerRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the containing element for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.containerRel`

***

### containerTarget

> **containerTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the containing element for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.containerTarget`

***

### customStylesForResults?

> `optional` **customStylesForResults**: `string` \| `Record`\<`string`, `Record`\<`string`, `string`\>\>

A custom styles object.

#### Inherited from

`Components.SearchcraftBaseSearchResults.customStylesForResults`

***

### resultImagePlacement

> **resultImagePlacement**: `"left"` \| `"right"`

The placement of the image for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.resultImagePlacement`

***

### searchResultMappings?

> `optional` **searchResultMappings**: [`SearchResultMappings`](/reference/sdk/js-react/type-aliases/SearchResultMappings.md)

Formats the content rendered for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.searchResultMappings`
