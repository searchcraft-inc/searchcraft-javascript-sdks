[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / Searchcraft

# Class: Searchcraft

The consumer-facing `Searchcraft` class.

## Extends

- [`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md)

## Constructors

### new Searchcraft()

> **new Searchcraft**(`config`): [`Searchcraft`](/reference/sdk/js-vanilla/classes/Searchcraft.md)

#### Parameters

##### config

[`SearchcraftConfig`](/reference/sdk/js-vanilla/interfaces/SearchcraftConfig.md)

#### Returns

[`Searchcraft`](/reference/sdk/js-vanilla/classes/Searchcraft.md)

#### Overrides

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md).[`constructor`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md#constructors)

## Properties

### adClient

> **adClient**: `undefined` \| `AdClient`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md).[`adClient`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md#adclient)

***

### config

> **config**: [`SearchcraftConfig`](/reference/sdk/js-vanilla/interfaces/SearchcraftConfig.md)

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md).[`config`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md#config-1)

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

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md).[`getItems`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md#getitems)

***

### measureClient

> **measureClient**: `undefined` \| `MeasureClient`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md).[`measureClient`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md#measureclient)

***

### searchClient

> **searchClient**: `undefined` \| `SearchClient`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md).[`searchClient`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md#searchclient)

***

### userId

> **userId**: `string`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md).[`userId`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md#userid)

## Methods

### initClients()

> **initClients**(`config`, `sdkInfo`): `void`

#### Parameters

##### config

[`SearchcraftConfig`](/reference/sdk/js-vanilla/interfaces/SearchcraftConfig.md)

##### sdkInfo

`SearchcraftSDKInfo`

#### Returns

`void`

#### Inherited from

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md).[`initClients`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md#initclients)
