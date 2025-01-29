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

### initClients()

> **initClients**(`config`, `sdkInfo`): `void`

#### Parameters

##### config

[`SearchcraftConfig`](/reference/sdk/core/interfaces/SearchcraftConfig.md)

##### sdkInfo

[`SearchcraftSDKInfo`](/reference/sdk/core/interfaces/SearchcraftSDKInfo.md)

#### Returns

`void`
