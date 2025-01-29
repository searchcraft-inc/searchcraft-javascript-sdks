[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftBaseSearchResultsProps

# Interface: SearchcraftBaseSearchResultsProps

The Props Used by the `SearchcraftBaseSearchResults` Component.

## Extends

- `SearchcraftBaseSearchResults`

## Properties

### adInterval

> **adInterval**: `number`

How often ads are injected.

#### Inherited from

`Components.SearchcraftBaseSearchResults.adInterval`

***

### buttonLabel

> **buttonLabel**: `string`

The label for the button rendered when containerHref is not present for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.buttonLabel`

***

### buttonRel

> **buttonRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

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

### containerRel

> **containerRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

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

### customStylesForResults

> **customStylesForResults**: `string` \| `Record`\<`string`, `Record`\<`string`, `string`\>\>

A custom styles object.

#### Inherited from

`Components.SearchcraftBaseSearchResults.customStylesForResults`

***

### placeAdAtEnd

> **placeAdAtEnd**: `boolean`

Should an ad be placed at the end of the results.

#### Inherited from

`Components.SearchcraftBaseSearchResults.placeAdAtEnd`

***

### placeAdAtStart

> **placeAdAtStart**: `boolean`

Should an ad be placed at the start of the results.

#### Inherited from

`Components.SearchcraftBaseSearchResults.placeAdAtStart`

***

### resultImagePlacement

> **resultImagePlacement**: `"left"` \| `"right"`

The placement of the image for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.resultImagePlacement`

***

### searchResultMappings

> **searchResultMappings**: `SearchResultMappings`

Formats the content rendered for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.searchResultMappings`
