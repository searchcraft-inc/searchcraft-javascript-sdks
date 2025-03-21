[**@searchcraft/core**](/reference/sdk/core/README.md)

***

[@searchcraft/core](/reference/sdk/core/globals.md) / SearchcraftConfig

# Interface: SearchcraftConfig

The SearchcraftConfig object is used to initialize Searchcraft in your application.

## Properties

### adContainerRenderedDebounceDelay?

> `optional` **adContainerRenderedDebounceDelay**: `number`

The amount of debounce delay to add before calling the ad_container_rendered event

***

### admProductAdQuantity?

> `optional` **admProductAdQuantity**: `number`

The maximum number of product ads to show for a single search term.

***

### admSub?

> `optional` **admSub**: `string`

The adm sub value.

***

### admTextAdQuantity?

> `optional` **admTextAdQuantity**: `number`

The maximum number of text ads to show for a single search term.

***

### adSource?

> `optional` **adSource**: `"adMarketplace"` \| `"Nativo"` \| `"Custom"` \| `"None"`

Name of the ad source to use.

***

### customAdEndQuantity?

> `optional` **customAdEndQuantity**: `number`

The number of custom ads to render at the end of the search results page.

***

### customAdInterstitialInterval?

> `optional` **customAdInterstitialInterval**: `number`

Renders a custom ad in between search results, at the specified interval.

***

### customAdInterstitialQuantity?

> `optional` **customAdInterstitialQuantity**: `number`

Specifies the number of ads to be rendered in each interstitial in between search results.

***

### customAdStartQuantity?

> `optional` **customAdStartQuantity**: `number`

The number of custom ads to render at the start of the search results page.

***

### customAdTemplate?

> `optional` **customAdTemplate**: [`CustomAdTemplateRenderFunction`](/reference/sdk/core/type-aliases/CustomAdTemplateRenderFunction.md)

A callback function responsible for rendering the custom ad containers.

***

### endpointURL

> **endpointURL**: `string`

Host IP Address and port number configured and created using Vektron

***

### index

> **index**: `string`[]

Name or names of search indices configured using Vektron. Given as an array of strings

***

### nativoAdClassName?

> `optional` **nativoAdClassName**: `string`

The class name for nativo ad containers.

***

### nativoAdEndQuantity?

> `optional` **nativoAdEndQuantity**: `number`

The number of custom ads to render at the end of the search results page.

***

### nativoAdInterstialStartIndex?

> `optional` **nativoAdInterstialStartIndex**: `number`

Specify how many normal search results to render before rendering the first interstitial ad grouping.

***

### nativoAdInterstitialInterval?

> `optional` **nativoAdInterstitialInterval**: `number`

Renders a custom ad in between search results, at the specified interval.

***

### nativoAdInterstitialQuantity?

> `optional` **nativoAdInterstitialQuantity**: `number`

Specifies the number of ads to be rendered in each interstitial in between search results.

***

### nativoAdStartQuantity?

> `optional` **nativoAdStartQuantity**: `number`

The number of custom ads to render at the start of the search results page.

***

### nativoPlacementId?

> `optional` **nativoPlacementId**: `number`

The placement id to use for Nativo ads.

***

### readKey

> **readKey**: `string`

The Index read key provided by Vektron.

***

### searchDebounceDelay?

> `optional` **searchDebounceDelay**: `number`

The amount of delay, in milliseconds, to debounce search requests. Defaults to `0`.

***

### searchResultsPerPage?

> `optional` **searchResultsPerPage**: `number`

The maximum number of results to return per page.

***

### userId?

> `optional` **userId**: `string`

A unique user identifier for the end user.
