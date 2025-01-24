[@searchcraft/core](../README.md) / [Exports](../modules.md) / SearchcraftConfig

# Interface: SearchcraftConfig

All fields must be provided to the SDKs to use Searchcraft

## Table of contents

### Properties

- [endpointURL](SearchcraftConfig.md#endpointurl)
- [index](SearchcraftConfig.md#index)
- [readKey](SearchcraftConfig.md#readkey)
- [searchDebounceDelay](SearchcraftConfig.md#searchdebouncedelay)
- [userId](SearchcraftConfig.md#userid)

## Properties

### endpointURL

• **endpointURL**: `string`

Host IP Address and port number configured and created using Vektron

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:10](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-10)

___

### index

• **index**: `string`[]

Name or names of search indices configured using Vektron. Given as an array of strings

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:14](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-14)

___

### readKey

• **readKey**: `string`

The Index read key provided by Vektron.

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:22](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-22)

___

### searchDebounceDelay

• `Optional` **searchDebounceDelay**: `number`

The amount of delay, in milliseconds, to debounce search requests. Defaults to `0`.

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:26](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-26)

___

### userId

• `Optional` **userId**: `string`

A unique user identifier for the end user.

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:18](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-18)
