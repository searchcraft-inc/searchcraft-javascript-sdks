[@searchcraft/core](README.md) / Exports

# @searchcraft/core

## Table of contents

### Enumerations

- [LogLevel](enums/LogLevel.md)

### Classes

- [SDKDebugger](classes/SDKDebugger.md)
- [SearchcraftCore](classes/SearchcraftCore.md)

### Interfaces

- [BatchMeasureRequest](interfaces/BatchMeasureRequest.md)
- [FacetChild](interfaces/FacetChild.md)
- [FacetChildObject](interfaces/FacetChildObject.md)
- [MeasureRequest](interfaces/MeasureRequest.md)
- [MeasureRequestProperties](interfaces/MeasureRequestProperties.md)
- [MeasureRequestUser](interfaces/MeasureRequestUser.md)
- [QueryItem](interfaces/QueryItem.md)
- [SDKDebuggerOptions](interfaces/SDKDebuggerOptions.md)
- [SearchDocument](interfaces/SearchDocument.md)
- [SearchIndexEntry](interfaces/SearchIndexEntry.md)
- [SearchResult](interfaces/SearchResult.md)
- [SearchcraftConfig](interfaces/SearchcraftConfig.md)
- [SearchcraftInstance](interfaces/SearchcraftInstance.md)
- [SearchcraftResponse](interfaces/SearchcraftResponse.md)
- [SearchcraftSDKInfo](interfaces/SearchcraftSDKInfo.md)

### Type Aliases

- [ComplexQuery](modules.md#complexquery)
- [FacetPathsForIndexField](modules.md#facetpathsforindexfield)
- [FacetPrime](modules.md#facetprime)
- [FacetRoot](modules.md#facetroot)
- [MeasureEventName](modules.md#measureeventname)
- [QueryObject](modules.md#queryobject)
- [RangeValueForIndexField](modules.md#rangevalueforindexfield)
- [SearchError](modules.md#searcherror)
- [SearchParams](modules.md#searchparams)
- [SimpleQuery](modules.md#simplequery)

## Type Aliases

### ComplexQuery

Ƭ **ComplexQuery**: [`QueryItem`](interfaces/QueryItem.md)[]

Represents a complex query structure supporting multiple conditions.

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:188](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-188)

___

### FacetPathsForIndexField

Ƭ **FacetPathsForIndexField**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `value` | `string` |

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:117](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-117)

___

### FacetPrime

Ƭ **FacetPrime**: [`FacetRoot`](modules.md#facetroot)[]

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:72](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-72)

___

### FacetRoot

Ƭ **FacetRoot**: `Object`

A Facet object returned in a search response.

#### Index signature

▪ [key: `string`]: [`FacetChild`](interfaces/FacetChild.md)[]

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:77](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-77)

___

### MeasureEventName

Ƭ **MeasureEventName**: ``"sdk_initialized"`` \| ``"search_requested"`` \| ``"search_response_received"`` \| ``"document_clicked"``

Types of measure requests that can be sent to the /measure/event endpoint.

#### Defined in

[CoreSDKTypes/MeasureTypes.ts:4](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/MeasureTypes.ts#lines-4)

___

### QueryObject

Ƭ **QueryObject**: [`SimpleQuery`](modules.md#simplequery) \| [`ComplexQuery`](modules.md#complexquery)

QueryObject type can be either a simple or complex query.

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:193](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-193)

___

### RangeValueForIndexField

Ƭ **RangeValueForIndexField**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `value` | `string` |

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:122](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-122)

___

### SearchError

Ƭ **SearchError**: `Object`

* Error returned when a search is unsuccessful.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `count?` | `number` |
| `facets?` | ``null`` |
| `hits?` | [] |
| `message?` | `string` |
| `status` | `number` |
| `time_taken?` | `number` |

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:52](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-52)

___

### SearchParams

Ƭ **SearchParams**: `Object`

* Parameters required to make a successful Search request.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `facetPathsForIndexFields?` | `Record`\<`string`, [`FacetPathsForIndexField`](modules.md#facetpathsforindexfield)\> | - |
| `limit?` | `number` | * The maximum number of results to return per page. Optional parameter. Defaults to 20 if not provided. |
| `mode` | ``"fuzzy"`` \| ``"exact"`` | * The search mode, which can be either 'fuzzy' or 'exact'. |
| `offset?` | `number` | * The starting point for the results, used for pagination. Optional parameter. |
| `order_by?` | `string` | * The field to order the results by (e.g., 'date_published', 'title', etc.). Optional parameter. |
| `query` | `string` | * The search query provided by the user. |
| `rangeValueForIndexFields?` | `Record`\<`string`, [`RangeValueForIndexField`](modules.md#rangevalueforindexfield)\> | - |
| `sort?` | ``"asc"`` \| ``"desc"`` | * The sort order, which can be either 'asc' or 'desc'. Optional parameter. |

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:130](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-130)

___

### SimpleQuery

Ƭ **SimpleQuery**: `Object`

Represents a simple query structure with a mode and context string.

#### Index signature

▪ [mode: `string`]: \{ `ctx`: `string`  }

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:181](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-181)
