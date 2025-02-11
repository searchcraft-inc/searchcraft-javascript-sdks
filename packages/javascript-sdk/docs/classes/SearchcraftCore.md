[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / SearchcraftCore

# Class: SearchcraftCore

Javascript Class providing the functionality to interact with the Searchcraft BE

## Extended by

- [`Searchcraft`](/reference/sdk/js-vanilla/classes/Searchcraft.md)

## Constructors

### new SearchcraftCore()

> **new SearchcraftCore**(`config`, `sdkInfo`): [`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md)

#### Parameters

##### config

[`SearchcraftConfig`](/reference/sdk/js-vanilla/interfaces/SearchcraftConfig.md)

##### sdkInfo

`SearchcraftSDKInfo`

#### Returns

[`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md)

## Properties

### adClient

> **adClient**: `undefined` \| `AdClient`

***

### config

> **config**: [`SearchcraftConfig`](/reference/sdk/js-vanilla/interfaces/SearchcraftConfig.md)

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

### initClients()

> **initClients**(`config`, `sdkInfo`): `void`

#### Parameters

##### config

[`SearchcraftConfig`](/reference/sdk/js-vanilla/interfaces/SearchcraftConfig.md)

##### sdkInfo

`SearchcraftSDKInfo`

#### Returns

`void`
