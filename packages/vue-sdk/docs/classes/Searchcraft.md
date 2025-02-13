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

### initClients()

> **initClients**(`config`, `sdkInfo`): `void`

#### Parameters

##### config

`SearchcraftConfig`

##### sdkInfo

`SearchcraftSDKInfo`

#### Returns

`void`

#### Inherited from

`SearchcraftCore.initClients`
