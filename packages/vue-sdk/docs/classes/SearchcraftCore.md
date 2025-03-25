[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftCore

# Class: SearchcraftCore

Javascript Class providing the functionality to interact with the Searchcraft BE

## Extended by

- [`Searchcraft`](/reference/sdk/js-vue/classes/Searchcraft.md)

## Constructors

### new SearchcraftCore()

> **new SearchcraftCore**(`config`, `sdkInfo`): [`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

#### Parameters

##### config

[`SearchcraftConfig`](/reference/sdk/js-vue/interfaces/SearchcraftConfig.md)

##### sdkInfo

[`SearchcraftSDKInfo`](/reference/sdk/js-vue/interfaces/SearchcraftSDKInfo.md)

#### Returns

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

## Properties

### config

> **config**: [`SearchcraftConfig`](/reference/sdk/js-vue/interfaces/SearchcraftConfig.md)

***

### measureClient

> **measureClient**: `MeasureClient`

***

### searchClient

> **searchClient**: `SearchClient`

***

### adClient

> **adClient**: `AdClient`

***

### userId

> **userId**: `string`

***

### getItems()

> **getItems**: (`searchParams`, `itemsCallback`, `adCallback`) => `void`

Gets items from the SearchClient and the AdClient.

#### Parameters

##### searchParams

[`SearchParams`](/reference/sdk/js-vue/type-aliases/SearchParams.md)

##### itemsCallback

(`response`, `items`) => `void`

##### adCallback

(`adClientResponseItems`) => `void`

#### Returns

`void`

## Methods

### emitEvent()

> **emitEvent**\<`T`\>(`eventName`, `event`): `void`

#### Type Parameters

• **T** *extends* keyof [`SubscriptionEventMap`](/reference/sdk/js-vue/interfaces/SubscriptionEventMap.md)

#### Parameters

##### eventName

`T`

##### event

[`SubscriptionEventMap`](/reference/sdk/js-vue/interfaces/SubscriptionEventMap.md)\[`T`\]

#### Returns

`void`

***

### subscribe()

> **subscribe**\<`T`\>(`eventName`, `callback`): [`UnsubscribeFunction`](/reference/sdk/js-vue/type-aliases/UnsubscribeFunction.md)

#### Type Parameters

• **T** *extends* keyof [`SubscriptionEventMap`](/reference/sdk/js-vue/interfaces/SubscriptionEventMap.md)

#### Parameters

##### eventName

`T`

##### callback

[`SubscriptionEventCallback`](/reference/sdk/js-vue/type-aliases/SubscriptionEventCallback.md)\<`T`\>

#### Returns

[`UnsubscribeFunction`](/reference/sdk/js-vue/type-aliases/UnsubscribeFunction.md)

***

### handleAdContainerRendered()

> **handleAdContainerRendered**(`data`): `void`

Called when a `<searchcraft-ad>` component is rendered

#### Parameters

##### data

###### adClientResponseItem

[`AdClientResponseItem`](/reference/sdk/js-vue/interfaces/AdClientResponseItem.md)

###### adContainerId

`string`

###### adSource

[`SearchcraftAdSource`](/reference/sdk/js-vue/type-aliases/SearchcraftAdSource.md)

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

[`AdClientResponseItem`](/reference/sdk/js-vue/interfaces/AdClientResponseItem.md)

###### adContainerId

`string`

###### adSource

[`SearchcraftAdSource`](/reference/sdk/js-vue/type-aliases/SearchcraftAdSource.md)

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
