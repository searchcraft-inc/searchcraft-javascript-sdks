[@searchcraft/core](../README.md) / [Exports](../modules.md) / SearchcraftCore

# Class: SearchcraftCore

Javascript Class providing the functionality to interact with the Searchcraft BE

## Table of contents

### Constructors

- [constructor](SearchcraftCore.md#constructor)

### Properties

- [config](SearchcraftCore.md#config)
- [measureRequestTimeout](SearchcraftCore.md#measurerequesttimeout)
- [measureRequestsBatched](SearchcraftCore.md#measurerequestsbatched)
- [sdkInfo](SearchcraftCore.md#sdkinfo)
- [searchRequestTimeout](SearchcraftCore.md#searchrequesttimeout)
- [sessionId](SearchcraftCore.md#sessionid)
- [userId](SearchcraftCore.md#userid)

### Accessors

- [baseMeasureUrl](SearchcraftCore.md#basemeasureurl)
- [baseSearchUrl](SearchcraftCore.md#basesearchurl)
- [measureRequestUser](SearchcraftCore.md#measurerequestuser)

### Methods

- [buildQueryObject](SearchcraftCore.md#buildqueryobject)
- [initMeasure](SearchcraftCore.md#initmeasure)
- [search](SearchcraftCore.md#search)
- [sendMeasureEvent](SearchcraftCore.md#sendmeasureevent)

## Constructors

### constructor

• **new SearchcraftCore**(`config`, `sdkInfo`): [`SearchcraftCore`](SearchcraftCore.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SearchcraftConfig`](../interfaces/SearchcraftConfig.md) |
| `sdkInfo` | [`SearchcraftSDKInfo`](../interfaces/SearchcraftSDKInfo.md) |

#### Returns

[`SearchcraftCore`](SearchcraftCore.md)

#### Defined in

[CoreSDK/CoreSDK.ts:32](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-32)

## Properties

### config

• **config**: [`SearchcraftConfig`](../interfaces/SearchcraftConfig.md)

#### Defined in

[CoreSDK/CoreSDK.ts:23](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-23)

___

### measureRequestTimeout

• `Private` **measureRequestTimeout**: `undefined` \| `Timeout`

#### Defined in

[CoreSDK/CoreSDK.ts:29](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-29)

___

### measureRequestsBatched

• `Private` **measureRequestsBatched**: [`MeasureRequest`](../interfaces/MeasureRequest.md)[] = `[]`

#### Defined in

[CoreSDK/CoreSDK.ts:30](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-30)

___

### sdkInfo

• **sdkInfo**: [`SearchcraftSDKInfo`](../interfaces/SearchcraftSDKInfo.md)

#### Defined in

[CoreSDK/CoreSDK.ts:24](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-24)

___

### searchRequestTimeout

• `Private` **searchRequestTimeout**: `undefined` \| `Timeout`

#### Defined in

[CoreSDK/CoreSDK.ts:28](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-28)

___

### sessionId

• **sessionId**: `string`

#### Defined in

[CoreSDK/CoreSDK.ts:26](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-26)

___

### userId

• **userId**: `string`

#### Defined in

[CoreSDK/CoreSDK.ts:25](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-25)

## Accessors

### baseMeasureUrl

• `get` **baseMeasureUrl**(): `string`

Getter for the base url used by the /measure endpoints.

#### Returns

`string`

#### Defined in

[CoreSDK/CoreSDK.ts:73](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-73)

___

### baseSearchUrl

• `get` **baseSearchUrl**(): `string`

Getter for the base url used by the /search endpoint.

#### Returns

`string`

#### Defined in

[CoreSDK/CoreSDK.ts:66](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-66)

___

### measureRequestUser

• `get` **measureRequestUser**(): [`MeasureRequestUser`](../interfaces/MeasureRequestUser.md)

Getter for the measure request user. Uses config values + navigator values.

#### Returns

[`MeasureRequestUser`](../interfaces/MeasureRequestUser.md)

#### Defined in

[CoreSDK/CoreSDK.ts:80](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-80)

## Methods

### buildQueryObject

▸ **buildQueryObject**(`searchParams`): [`QueryObject`](../modules.md#queryobject)

Builds a query object for the search request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchParams` | [`SearchParams`](../modules.md#searchparams) | The parameters for the search. |

#### Returns

[`QueryObject`](../modules.md#queryobject)

- A properly formatted query object.

#### Defined in

[CoreSDK/CoreSDK.ts:103](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-103)

___

### initMeasure

▸ **initMeasure**(): `Promise`\<`void`\>

Initializes this.userId based on config & sends the `sdk_innitialized` event.

#### Returns

`Promise`\<`void`\>

#### Defined in

[CoreSDK/CoreSDK.ts:54](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-54)

___

### search

▸ **search**(`searchParams`, `callback`): `void`

Performs a search operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchParams` | [`SearchParams`](../modules.md#searchparams) | The parameters for the search. |
| `callback` | (`response`: [`SearchcraftResponse`](../interfaces/SearchcraftResponse.md)) => `void` | - |

#### Returns

`void`

- Returns the search response or throws an error.

#### Defined in

[CoreSDK/CoreSDK.ts:160](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-160)

___

### sendMeasureEvent

▸ **sendMeasureEvent**(`eventName`, `properties?`, `user?`): `void`

Sends a measure event to the `/measure/event` endpoint for analytics purposes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | [`MeasureEventName`](../modules.md#measureeventname) | Name of the event. |
| `properties` | `Partial`\<[`MeasureRequestProperties`](../interfaces/MeasureRequestProperties.md)\> | Additional properties to send with the event. |
| `user` | `Partial`\<[`MeasureRequestUser`](../interfaces/MeasureRequestUser.md)\> | Additional user properites to send with the event. |

#### Returns

`void`

#### Defined in

[CoreSDK/CoreSDK.ts:257](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDK/CoreSDK.ts#lines-257)
