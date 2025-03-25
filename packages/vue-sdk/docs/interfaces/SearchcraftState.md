[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftState

# Interface: SearchcraftState

Callable functions made available by the SearchcraftStore.

## Extends

- [`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md)

## Properties

### addFacetPathsForIndexField()

> **addFacetPathsForIndexField**: (`data`) => `void`

#### Parameters

##### data

[`FacetPathsForIndexField`](/reference/sdk/js-vue/type-aliases/FacetPathsForIndexField.md)

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`addFacetPathsForIndexField`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#addfacetpathsforindexfield)

***

### addRangeValueForIndexField()

> **addRangeValueForIndexField**: (`data`) => `void`

#### Parameters

##### data

[`RangeValueForIndexField`](/reference/sdk/js-vue/type-aliases/RangeValueForIndexField.md)

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`addRangeValueForIndexField`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#addrangevalueforindexfield)

***

### getSearchcraftInstance()

> **getSearchcraftInstance**: () => [`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

#### Returns

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`getSearchcraftInstance`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#getsearchcraftinstance)

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

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`initialize`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#initialize)

***

### removeFacetPathsForIndexField()

> **removeFacetPathsForIndexField**: (`fieldName`) => `void`

#### Parameters

##### fieldName

`string`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`removeFacetPathsForIndexField`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#removefacetpathsforindexfield)

***

### removeRangeValueForIndexField()

> **removeRangeValueForIndexField**: (`fieldName`) => `void`

#### Parameters

##### fieldName

`string`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`removeRangeValueForIndexField`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#removerangevalueforindexfield)

***

### resetFacetPaths()

> **resetFacetPaths**: () => `void`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`resetFacetPaths`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#resetfacetpaths)

***

### search()

> **search**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`search`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#search)

***

### setPopoverVisibility()

> **setPopoverVisibility**: (`isVisible`) => `void`

#### Parameters

##### isVisible

`boolean`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`setPopoverVisibility`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#setpopovervisibility)

***

### setSearchClientResponseItems()

> **setSearchClientResponseItems**: (`results`) => `void`

#### Parameters

##### results

[`SearchClientResponseItem`](/reference/sdk/js-vue/interfaces/SearchClientResponseItem.md)[]

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`setSearchClientResponseItems`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#setsearchclientresponseitems)

***

### setSearchResultsPage()

> **setSearchResultsPage**: (`page`) => `void`

#### Parameters

##### page

`number`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`setSearchResultsPage`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#setsearchresultspage)

***

### setSearchResultsPerPage()

> **setSearchResultsPerPage**: (`perPage`) => `void`

#### Parameters

##### perPage

`number`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`setSearchResultsPerPage`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#setsearchresultsperpage)

***

### setSearchTerm()

> **setSearchTerm**: (`searchTerm`) => `void`

#### Parameters

##### searchTerm

`string`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`setSearchTerm`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#setsearchterm)

***

### setSearchMode()

> **setSearchMode**: (`mode`) => `void`

#### Parameters

##### mode

`"fuzzy"` | `"exact"`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`setSearchMode`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#setsearchmode)

***

### setSortType()

> **setSortType**: (`type`) => `void`

#### Parameters

##### type

`"asc"` | `"desc"`

#### Returns

`void`

#### Inherited from

[`SearchcraftStateFunctions`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md).[`setSortType`](/reference/sdk/js-vue/interfaces/SearchcraftStateFunctions.md#setsorttype)

***

### adClientResponseItems

> **adClientResponseItems**: [`AdClientResponseItem`](/reference/sdk/js-vue/interfaces/AdClientResponseItem.md)[]

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`adClientResponseItems`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#adclientresponseitems)

***

### core

> **core**: [`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`core`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#core)

***

### logger

> **logger**: `Logger`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`logger`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#logger)

***

### facetPathsForIndexFields

> **facetPathsForIndexFields**: `Record`\<`string`, [`FacetPathsForIndexField`](/reference/sdk/js-vue/type-aliases/FacetPathsForIndexField.md)\>

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`facetPathsForIndexFields`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#facetpathsforindexfields)

***

### isPopoverVisible

> **isPopoverVisible**: `boolean`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`isPopoverVisible`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#ispopovervisible)

***

### isSearchInProgress

> **isSearchInProgress**: `boolean`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`isSearchInProgress`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#issearchinprogress)

***

### rangeValueForIndexFields

> **rangeValueForIndexFields**: `Record`\<`string`, [`RangeValueForIndexField`](/reference/sdk/js-vue/type-aliases/RangeValueForIndexField.md)\>

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`rangeValueForIndexFields`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#rangevalueforindexfields)

***

### searchMode

> **searchMode**: `"fuzzy"` \| `"exact"`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`searchMode`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#searchmode)

***

### searchClientResponseItems

> **searchClientResponseItems**: [`SearchClientResponseItem`](/reference/sdk/js-vue/interfaces/SearchClientResponseItem.md)[]

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`searchClientResponseItems`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#searchclientresponseitems)

***

### searchResponseTimeTaken

> **searchResponseTimeTaken**: `number`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`searchResponseTimeTaken`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#searchresponsetimetaken)

***

### searchResponseFacetPrime

> **searchResponseFacetPrime**: [`FacetPrime`](/reference/sdk/js-vue/type-aliases/FacetPrime.md)

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`searchResponseFacetPrime`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#searchresponsefacetprime)

***

### searchResultsCount

> **searchResultsCount**: `number`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`searchResultsCount`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#searchresultscount)

***

### searchResultsPage

> **searchResultsPage**: `number`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`searchResultsPage`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#searchresultspage)

***

### searchResultsPerPage

> **searchResultsPerPage**: `number`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`searchResultsPerPage`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#searchresultsperpage)

***

### searchTerm

> **searchTerm**: `string`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`searchTerm`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#searchterm)

***

### sortType

> **sortType**: `"asc"` \| `"desc"`

#### Inherited from

[`SearchcraftStateValues`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md).[`sortType`](/reference/sdk/js-vue/interfaces/SearchcraftStateValues.md#sorttype)
