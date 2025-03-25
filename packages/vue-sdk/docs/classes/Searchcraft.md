[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / Searchcraft

# Class: Searchcraft

The consumer-facing Searchcraft class.

## Extends

- [`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

## Constructors

### new Searchcraft()

> **new Searchcraft**(`config`): [`Searchcraft`](/reference/sdk/js-vue/classes/Searchcraft.md)

#### Parameters

##### config

[`SearchcraftConfig`](/reference/sdk/js-vue/interfaces/SearchcraftConfig.md)

#### Returns

[`Searchcraft`](/reference/sdk/js-vue/classes/Searchcraft.md)

#### Overrides

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`constructor`](/reference/sdk/js-vue/classes/SearchcraftCore.md#constructors)

## Properties

### config

> **config**: [`SearchcraftConfig`](/reference/sdk/js-vue/interfaces/SearchcraftConfig.md)

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`config`](/reference/sdk/js-vue/classes/SearchcraftCore.md#config-1)

***

### measureClient

> **measureClient**: `MeasureClient`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`measureClient`](/reference/sdk/js-vue/classes/SearchcraftCore.md#measureclient)

***

### searchClient

> **searchClient**: `SearchClient`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`searchClient`](/reference/sdk/js-vue/classes/SearchcraftCore.md#searchclient)

***

### adClient

> **adClient**: `AdClient`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`adClient`](/reference/sdk/js-vue/classes/SearchcraftCore.md#adclient)

***

### userId

> **userId**: `string`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`userId`](/reference/sdk/js-vue/classes/SearchcraftCore.md#userid)

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

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`getItems`](/reference/sdk/js-vue/classes/SearchcraftCore.md#getitems)

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

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`emitEvent`](/reference/sdk/js-vue/classes/SearchcraftCore.md#emitevent)

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

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`subscribe`](/reference/sdk/js-vue/classes/SearchcraftCore.md#subscribe)

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

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`handleAdContainerRendered`](/reference/sdk/js-vue/classes/SearchcraftCore.md#handleadcontainerrendered)

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

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`handleAdContainerViewed`](/reference/sdk/js-vue/classes/SearchcraftCore.md#handleadcontainerviewed)

***

### handleInputCleared()

> **handleInputCleared**(): `void`

Perform various actions when the input is cleared

#### Returns

`void`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md).[`handleInputCleared`](/reference/sdk/js-vue/classes/SearchcraftCore.md#handleinputcleared)
