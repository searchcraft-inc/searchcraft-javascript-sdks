[**@searchcraft/core**](/reference/sdk/core/README.md)

***

[@searchcraft/core](/reference/sdk/core/globals.md) / SearchcraftConfig

# Interface: SearchcraftConfig

The SearchcraftConfig object is used to initialize Searchcraft in your application.

## Properties

### admProductAdQuantity?

> `optional` **admProductAdQuantity**: `number`

***

### admSub

> **admSub**: `string`

***

### admTextAdQuantity?

> `optional` **admTextAdQuantity**: `number`

***

### adProvider?

> `optional` **adProvider**: [`SearchcraftAdProvider`](/reference/sdk/core/type-aliases/SearchcraftAdProvider.md)

Name of the ad provider to use.

***

### endpointURL

> **endpointURL**: `string`

Host IP Address and port number configured and created using Vektron

***

### index

> **index**: `string`[]

Name or names of search indices configured using Vektron. Given as an array of strings

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
