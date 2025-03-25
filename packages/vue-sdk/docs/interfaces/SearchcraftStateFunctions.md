[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftStateFunctions

# Interface: SearchcraftStateFunctions

Callable functions made available by the SearchcraftStore.

## Extended by

- [`SearchcraftState`](/reference/sdk/js-vue/interfaces/SearchcraftState.md)

## Properties

### addFacetPathsForIndexField()

> **addFacetPathsForIndexField**: (`data`) => `void`

#### Parameters

##### data

[`FacetPathsForIndexField`](/reference/sdk/js-vue/type-aliases/FacetPathsForIndexField.md)

#### Returns

`void`

***

### addRangeValueForIndexField()

> **addRangeValueForIndexField**: (`data`) => `void`

#### Parameters

##### data

[`RangeValueForIndexField`](/reference/sdk/js-vue/type-aliases/RangeValueForIndexField.md)

#### Returns

`void`

***

### getSearchcraftInstance()

> **getSearchcraftInstance**: () => [`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

#### Returns

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

***

### initialize()

> **initialize**: (`searchcraft`, `debug`?) => `void`

#### Parameters

##### searchcraft

`unknown`

##### debug?

`boolean`

#### Returns

`void`

***

### removeFacetPathsForIndexField()

> **removeFacetPathsForIndexField**: (`fieldName`) => `void`

#### Parameters

##### fieldName

`string`

#### Returns

`void`

***

### removeRangeValueForIndexField()

> **removeRangeValueForIndexField**: (`fieldName`) => `void`

#### Parameters

##### fieldName

`string`

#### Returns

`void`

***

### resetFacetPaths()

> **resetFacetPaths**: () => `void`

#### Returns

`void`

***

### search()

> **search**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### setPopoverVisibility()

> **setPopoverVisibility**: (`isVisible`) => `void`

#### Parameters

##### isVisible

`boolean`

#### Returns

`void`

***

### setSearchClientResponseItems()

> **setSearchClientResponseItems**: (`results`) => `void`

#### Parameters

##### results

[`SearchClientResponseItem`](/reference/sdk/js-vue/interfaces/SearchClientResponseItem.md)[]

#### Returns

`void`

***

### setSearchResultsPage()

> **setSearchResultsPage**: (`page`) => `void`

#### Parameters

##### page

`number`

#### Returns

`void`

***

### setSearchResultsPerPage()

> **setSearchResultsPerPage**: (`perPage`) => `void`

#### Parameters

##### perPage

`number`

#### Returns

`void`

***

### setSearchTerm()

> **setSearchTerm**: (`searchTerm`) => `void`

#### Parameters

##### searchTerm

`string`

#### Returns

`void`

***

### setSearchMode()

> **setSearchMode**: (`mode`) => `void`

#### Parameters

##### mode

`"fuzzy"` | `"exact"`

#### Returns

`void`

***

### setSortType()

> **setSortType**: (`type`) => `void`

#### Parameters

##### type

`"asc"` | `"desc"`

#### Returns

`void`
