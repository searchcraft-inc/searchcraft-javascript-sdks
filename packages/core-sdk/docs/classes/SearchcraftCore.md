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

### adClient

> **adClient**: `undefined` \| `AdClient`

***

### config

> **config**: [`SearchcraftConfig`](/reference/sdk/core/interfaces/SearchcraftConfig.md)

***

### measureClient

> **measureClient**: `undefined` \| `MeasureClient`

***

### searchClient

> **searchClient**: `undefined` \| `SearchClient`

***

### userId

> **userId**: `string`

## Methods

### emitEvent()

> **emitEvent**\<`T`\>(`eventName`, `event`): `void`

#### Type Parameters

• **T** *extends* keyof [`SubscriptionEventMap`](/reference/sdk/core/interfaces/SubscriptionEventMap.md)

#### Parameters

##### eventName

`T`

##### event

[`SubscriptionEventMap`](/reference/sdk/core/interfaces/SubscriptionEventMap.md)\[`T`\]

#### Returns

`void`

***

### getItems()

> **getItems**(`searchParams`, `itemsCallback`, `adCallback`): `void`

Gets items from the SearchClient and the AdClient.

#### Parameters

##### searchParams

[`SearchParams`](/reference/sdk/core/type-aliases/SearchParams.md)

##### itemsCallback

(`response`, `items`) => `void`

##### adCallback

(`adClientResponseItems`) => `void`

#### Returns

`void`

***

### handleAdContainerRendered()

> **handleAdContainerRendered**(`data`): `void`

Called when a `<searchcraft-ad>` component is rendered

#### Parameters

##### data

###### adClientResponseItem

[`AdClientResponseItem`](/reference/sdk/core/interfaces/AdClientResponseItem.md)

###### adContainerId

`string`

###### adSource

[`SearchcraftAdSource`](/reference/sdk/core/type-aliases/SearchcraftAdSource.md)

###### searchTerm

`string`

#### Returns

`void`

***

### handleInputCleared()

> **handleInputCleared**(): `void`

Perform various actions when the input is cleared

#### Returns

`void`

***

### subscribe()

> **subscribe**\<`T`\>(`eventName`, `callback`): [`UnsubscribeFunction`](/reference/sdk/core/type-aliases/UnsubscribeFunction.md)

#### Type Parameters

• **T** *extends* keyof [`SubscriptionEventMap`](/reference/sdk/core/interfaces/SubscriptionEventMap.md)

#### Parameters

##### eventName

`T`

##### callback

[`SubscriptionEventCallback`](/reference/sdk/core/type-aliases/SubscriptionEventCallback.md)\<`T`\>

#### Returns

[`UnsubscribeFunction`](/reference/sdk/core/type-aliases/UnsubscribeFunction.md)
