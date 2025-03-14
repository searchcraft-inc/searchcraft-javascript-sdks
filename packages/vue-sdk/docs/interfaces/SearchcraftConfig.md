[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftConfig

# Interface: SearchcraftConfig

The SearchcraftConfig object is used to initialize Searchcraft in your application.

## Properties

### endpointURL

> **endpointURL**: `string`

Host IP Address and port number configured and created using Vektron

***

### index

> **index**: `string`[]

Name or names of search indices configured using Vektron. Given as an array of strings

***

### userId?

> `optional` **userId**: `string`

A unique user identifier for the end user.

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

### adSource?

> `optional` **adSource**: `"adMarketplace"` \| `"Nativo"` \| `"Custom"` \| `"None"`

Name of the ad source to use.

***

### admProductAdQuantity?

> `optional` **admProductAdQuantity**: `number`

The maximum number of product ads to show for a single search term.

***

### admTextAdQuantity?

> `optional` **admTextAdQuantity**: `number`

The maximum number of text ads to show for a single search term.

***

### admSub?

> `optional` **admSub**: `string`

The adm sub value.

***

### adContainerRenderedDebounceDelay?

> `optional` **adContainerRenderedDebounceDelay**: `number`

The amount of debounce delay to add before calling the ad_container_rendered event

***

### customAdStartQuantity?

> `optional` **customAdStartQuantity**: `number`

The number of custom ads to render at the start of the search results page.

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

### customAdTemplate?

> `optional` **customAdTemplate**: [`CustomAdTemplate`](/reference/sdk/js-vue/type-aliases/CustomAdTemplate.md)

A callback function responsible for rendering the custom ad containers.

***

### nativoPlacementId?

> `optional` **nativoPlacementId**: `number`

The placement id to use for Nativo ads.

***

### nativoAdClassName?

> `optional` **nativoAdClassName**: `string`

The class name for nativo ad containers.

***

### nativoAdStartQuantity?

> `optional` **nativoAdStartQuantity**: `number`

The number of custom ads to render at the start of the search results page.

***

### nativoAdEndQuantity?

> `optional` **nativoAdEndQuantity**: `number`

The number of custom ads to render at the end of the search results page.

***

### nativoAdInterstitialInterval?

> `optional` **nativoAdInterstitialInterval**: `number`

Renders a custom ad in between search results, at the specified interval.

***

### nativoAdInterstialStartIndex?

> `optional` **nativoAdInterstialStartIndex**: `number`

Specify how many normal search results to render before rendering the first interstitial ad grouping.

***

### nativoAdInterstitialQuantity?

> `optional` **nativoAdInterstitialQuantity**: `number`

Specifies the number of ads to be rendered in each interstitial in between search results.
