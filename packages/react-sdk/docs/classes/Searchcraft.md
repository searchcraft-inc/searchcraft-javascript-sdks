[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / Searchcraft

# Class: Searchcraft

The consumer-facing Searchcraft class.

## Extends

- `SearchcraftCore`

## Constructors

### new Searchcraft()

> **new Searchcraft**(`config`): [`Searchcraft`](/reference/sdk/js-react/classes/Searchcraft.md)

#### Parameters

##### config

`SearchcraftConfig`

#### Returns

[`Searchcraft`](/reference/sdk/js-react/classes/Searchcraft.md)

#### Overrides

`SearchcraftCore.constructor`

## Properties

### adClient

> **adClient**: `undefined` \| `AdClient`

#### Inherited from

`SearchcraftCore.adClient`

***

### config

> **config**: `SearchcraftConfig`

#### Inherited from

`SearchcraftCore.config`

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

***

### measureClient

> **measureClient**: `undefined` \| `MeasureClient`

#### Inherited from

`SearchcraftCore.measureClient`

***

### searchClient

> **searchClient**: `undefined` \| `SearchClient`

#### Inherited from

`SearchcraftCore.searchClient`

***

### userId

> **userId**: `string`

#### Inherited from

`SearchcraftCore.userId`

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
