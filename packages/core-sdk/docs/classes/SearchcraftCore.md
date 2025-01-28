[**@searchcraft/core**](/reference/sdk/core/README.md)

***

[@searchcraft/core](/reference/sdk/core/globals.md) / SearchcraftCore

# Class: SearchcraftCore

Javascript Class providing the functionality to interact with the Searchcraft BE

## Constructors

### new SearchcraftCore()

> **new SearchcraftCore**(`config`, `sdkInfo`): [`SearchcraftCore`](/reference/sdk/core/classes/SearchcraftCore.md)

#### Parameters

##### config

[`SearchcraftConfig`](/reference/sdk/core/interfaces/SearchcraftConfig.md)

##### sdkInfo

[`SearchcraftSDKInfo`](/reference/sdk/core/interfaces/SearchcraftSDKInfo.md)

#### Returns

[`SearchcraftCore`](/reference/sdk/core/classes/SearchcraftCore.md)

## Properties

### config

> **config**: [`SearchcraftConfig`](/reference/sdk/core/interfaces/SearchcraftConfig.md)

***

### sdkInfo

> **sdkInfo**: [`SearchcraftSDKInfo`](/reference/sdk/core/interfaces/SearchcraftSDKInfo.md)

***

### sessionId

> **sessionId**: `string`

***

### userId

> **userId**: `string`

## Methods

### initMeasure()

> **initMeasure**(): `Promise`\<`void`\>

Initializes this.userId based on config & sends the `sdk_innitialized` event.

#### Returns

`Promise`\<`void`\>

***

### search()

> **search**(`searchParams`, `callback`): `void`

Performs a search operation.

#### Parameters

##### searchParams

[`SearchParams`](/reference/sdk/core/type-aliases/SearchParams.md)

The parameters for the search.

##### callback

(`response`) => `void`

#### Returns

`void`

- Returns the search response or throws an error.

***

### sendMeasureEvent()

> **sendMeasureEvent**(`eventName`, `properties`, `user`): `void`

Sends a measure event to the `/measure/event` endpoint for analytics purposes.

#### Parameters

##### eventName

[`MeasureEventName`](/reference/sdk/core/type-aliases/MeasureEventName.md)

Name of the event.

##### properties

`Partial`\<[`MeasureRequestProperties`](/reference/sdk/core/interfaces/MeasureRequestProperties.md)\> = `{}`

Additional properties to send with the event.

##### user

`Partial`\<[`MeasureRequestUser`](/reference/sdk/core/interfaces/MeasureRequestUser.md)\> = `{}`

Additional user properites to send with the event.

#### Returns

`void`
