[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / Searchcraft

# Class: Searchcraft

The consumer-facing Searchcraft class.

## Extends

- `SearchcraftCore`

## Constructors

### new Searchcraft()

> **new Searchcraft**(`config`): [`Searchcraft`](/reference/sdk/js-vue/classes/Searchcraft.md)

#### Parameters

##### config

`SearchcraftConfig`

#### Returns

[`Searchcraft`](/reference/sdk/js-vue/classes/Searchcraft.md)

#### Overrides

`SearchcraftCore.constructor`

## Properties

### config

> **config**: `SearchcraftConfig`

#### Inherited from

`SearchcraftCore.config`

***

### measureClient

> **measureClient**: `MeasureClient`

#### Inherited from

`SearchcraftCore.measureClient`

***

### searchClient

> **searchClient**: `SearchClient`

#### Inherited from

`SearchcraftCore.searchClient`

***

### adClient

> **adClient**: `AdClient`

#### Inherited from

`SearchcraftCore.adClient`

***

### userId

> **userId**: `string`

#### Inherited from

`SearchcraftCore.userId`

***

### getItems()

> **getItems**: (`searchParams`, `itemsCallback`, `adCallback`) => `void`

Gets items from the SearchClient and the AdClient.

#### Parameters

##### searchParams

`SearchParams`

##### itemsCallback

(`response`, `items`) => `void`

##### adCallback

(`adClientResponseItems`) => `void`

#### Returns

`void`

#### Inherited from

`SearchcraftCore.getItems`

## Methods

### emitEvent()

> **emitEvent**\<`T`\>(`eventName`, `event`): `void`

#### Type Parameters

• **T** *extends* keyof `SubscriptionEventMap`

#### Parameters

##### eventName

`T`

##### event

`SubscriptionEventMap`\[`T`\]

#### Returns

`void`

#### Inherited from

`SearchcraftCore.emitEvent`

***

### subscribe()

> **subscribe**\<`T`\>(`eventName`, `callback`): `UnsubscribeFunction`

#### Type Parameters

• **T** *extends* keyof `SubscriptionEventMap`

#### Parameters

##### eventName

`T`

##### callback

`SubscriptionEventCallback`\<`T`\>

#### Returns

`UnsubscribeFunction`

#### Inherited from

`SearchcraftCore.subscribe`

***

### handleAdContainerRendered()

> **handleAdContainerRendered**(`data`): `void`

Called when a `<searchcraft-ad>` component is rendered

#### Parameters

##### data

###### adClientResponseItem

`AdClientResponseItem`

###### adContainerId

`string`

###### adSource

`SearchcraftAdSource`

###### searchTerm

`string`

#### Returns

`void`

#### Inherited from

`SearchcraftCore.handleAdContainerRendered`

***

### handleInputCleared()

> **handleInputCleared**(): `void`

Perform various actions when the input is cleared

#### Returns

`void`

#### Inherited from

`SearchcraftCore.handleInputCleared`
