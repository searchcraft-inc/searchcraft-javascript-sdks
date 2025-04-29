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

### getResponseItems()

> **getResponseItems**(`properties`, `searchCallback`, `adCallback`): `void`

#### Parameters

##### properties

`string` | [`SearchClientRequestProperties`](/reference/sdk/core/interfaces/SearchClientRequestProperties.md)

##### searchCallback

(`response`, `items`, `supplementalResponse`) => `void`

##### adCallback

(`items`) => `void`

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

### handleAdContainerViewed()

> **handleAdContainerViewed**(`data`): `void`

Called when a `<searchcraft-ad>` is viewed

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
