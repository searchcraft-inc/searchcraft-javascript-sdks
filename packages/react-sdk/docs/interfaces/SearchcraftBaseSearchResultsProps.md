[**@searchcraft/react-sdk**](../README.md)

***

[@searchcraft/react-sdk](../globals.md) / SearchcraftBaseSearchResultsProps

# Interface: SearchcraftBaseSearchResultsProps

Defined in: [packages/react-sdk/src/components/SearchcraftBaseSearchResults.tsx:6](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/13d0fd25669057ec4d2ef62d1e5c7048e667a0f0/packages/react-sdk/src/components/SearchcraftBaseSearchResults.tsx#lines-6)

## Extends

- `SearchcraftBaseSearchResults`

## Properties

### adInterval

> **adInterval**: `number`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:118

How often ads are injected.

#### Inherited from

`Components.SearchcraftBaseSearchResults.adInterval`

***

### buttonLabel

> **buttonLabel**: `undefined` \| `string`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:122

The label for the button rendered when containerHref is not present for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.buttonLabel`

***

### buttonRel

> **buttonRel**: `undefined` \| `"noreferrer"` \| `"noopener"` \| `"nofollow"`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:126

The relationship between the current document and the link for the button rendered when containerHref is not present for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.buttonRel`

***

### buttonTarget

> **buttonTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:130

Where to open the link for the button rendered when containerHref is not present for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.buttonTarget`

***

### containerRel

> **containerRel**: `undefined` \| `"noreferrer"` \| `"noopener"` \| `"nofollow"`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:134

The relationship between the current document and the link for the containing element for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.containerRel`

***

### containerTarget

> **containerTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:138

Where to open the link for the containing element for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.containerTarget`

***

### customStylesForResults

> **customStylesForResults**: `undefined` \| `string` \| `Record`\<`string`, `Record`\<`string`, `string`\>\>

Defined in: packages/javascript-sdk/dist/types/components.d.ts:142

A custom styles object.

#### Inherited from

`Components.SearchcraftBaseSearchResults.customStylesForResults`

***

### placeAdAtEnd

> **placeAdAtEnd**: `boolean`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:148

Should an ad be placed at the end of the results.

#### Inherited from

`Components.SearchcraftBaseSearchResults.placeAdAtEnd`

***

### placeAdAtStart

> **placeAdAtStart**: `boolean`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:152

Should an ad be placed at the start of the results.

#### Inherited from

`Components.SearchcraftBaseSearchResults.placeAdAtStart`

***

### resultImagePlacement

> **resultImagePlacement**: `"left"` \| `"right"`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:156

The placement of the image for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.resultImagePlacement`

***

### searchResultMappings

> **searchResultMappings**: `undefined` \| `SearchResultMappings`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:160

Formats the content rendered for each result.

#### Inherited from

`Components.SearchcraftBaseSearchResults.searchResultMappings`
