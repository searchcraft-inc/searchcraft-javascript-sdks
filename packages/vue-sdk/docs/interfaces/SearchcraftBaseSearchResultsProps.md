[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftBaseSearchResultsProps

# Interface: SearchcraftBaseSearchResultsProps

The Props Used by the `SearchcraftBaseSearchResults` Component.

## Extends

- [`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md)

## Properties

### buttonLabel?

> `optional` **buttonLabel**: `string`

The label for the button rendered when containerHref is not present for each result.

#### Inherited from

[`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md).[`buttonLabel`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md#buttonlabel)

***

### buttonRel?

> `optional` **buttonRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the button rendered when containerHref is not present for each result.

#### Inherited from

[`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md).[`buttonRel`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md#buttonrel)

***

### buttonTarget

> **buttonTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the button rendered when containerHref is not present for each result.

#### Inherited from

[`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md).[`buttonTarget`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md#buttontarget)

***

### containerRel?

> `optional` **containerRel**: `"noreferrer"` \| `"noopener"` \| `"nofollow"`

The relationship between the current document and the link for the containing element for each result.

#### Inherited from

[`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md).[`containerRel`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md#containerrel)

***

### containerTarget

> **containerTarget**: `"_blank"` \| `"_self"` \| `"_top"` \| `"_parent"`

Where to open the link for the containing element for each result.

#### Inherited from

[`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md).[`containerTarget`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md#containertarget)

***

### customStylesForResults?

> `optional` **customStylesForResults**: `string` \| `Record`\<`string`, `Record`\<`string`, `string`\>\>

A custom styles object.

#### Inherited from

[`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md).[`customStylesForResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md#customstylesforresults)

***

### resultImagePlacement

> **resultImagePlacement**: `"left"` \| `"right"`

The placement of the image for each result.

#### Inherited from

[`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md).[`resultImagePlacement`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md#resultimageplacement)

***

### searchResultMappings?

> `optional` **searchResultMappings**: [`SearchResultMappings`](/reference/sdk/js-vue/type-aliases/SearchResultMappings.md)

Formats the content rendered for each result.

#### Inherited from

[`SearchcraftBaseSearchResults`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md).[`searchResultMappings`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftBaseSearchResults.md#searchresultmappings)
