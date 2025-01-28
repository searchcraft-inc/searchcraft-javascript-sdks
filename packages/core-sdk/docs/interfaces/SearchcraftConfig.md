[**@searchcraft/core**](https://docs.searchcraft.io/reference/sdk/core/README.md)

***

[@searchcraft/core](https://docs.searchcraft.io/reference/sdk/core/globals.md) / SearchcraftConfig

# Interface: SearchcraftConfig

All fields must be provided to the SDKs to use Searchcraft

## Properties

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

### userId?

> `optional` **userId**: `string`

A unique user identifier for the end user.
