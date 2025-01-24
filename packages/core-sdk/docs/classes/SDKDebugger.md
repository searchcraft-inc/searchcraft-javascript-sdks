[@searchcraft/core](../README.md) / [Exports](../modules.md) / SDKDebugger

# Class: SDKDebugger

## Table of contents

### Constructors

- [constructor](SDKDebugger.md#constructor)

### Properties

- [logFormatter](SDKDebugger.md#logformatter)
- [logLevel](SDKDebugger.md#loglevel)

### Methods

- [debug](SDKDebugger.md#debug)
- [defaultFormatter](SDKDebugger.md#defaultformatter)
- [error](SDKDebugger.md#error)
- [info](SDKDebugger.md#info)
- [warn](SDKDebugger.md#warn)

## Constructors

### constructor

• **new SDKDebugger**(`options`): [`SDKDebugger`](SDKDebugger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SDKDebuggerOptions`](../interfaces/SDKDebuggerOptions.md) |

#### Returns

[`SDKDebugger`](SDKDebugger.md)

#### Defined in

[SDKDebugger/SDKDebugger.ts:17](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/SDKDebugger/SDKDebugger.ts#lines-17)

## Properties

### logFormatter

• `Private` **logFormatter**: (`level`: [`LogLevel`](../enums/LogLevel.md), `message`: `string`) => `string`

#### Type declaration

▸ (`level`, `message`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../enums/LogLevel.md) |
| `message` | `string` |

##### Returns

`string`

#### Defined in

[SDKDebugger/SDKDebugger.ts:15](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/SDKDebugger/SDKDebugger.ts#lines-15)

___

### logLevel

• `Private` **logLevel**: [`LogLevel`](../enums/LogLevel.md)

#### Defined in

[SDKDebugger/SDKDebugger.ts:14](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/SDKDebugger/SDKDebugger.ts#lines-14)

## Methods

### debug

▸ **debug**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[SDKDebugger/SDKDebugger.ts:27](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/SDKDebugger/SDKDebugger.ts#lines-27)

___

### defaultFormatter

▸ **defaultFormatter**(`level`, `message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../enums/LogLevel.md) |
| `message` | `string` |

#### Returns

`string`

#### Defined in

[SDKDebugger/SDKDebugger.ts:22](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/SDKDebugger/SDKDebugger.ts#lines-22)

___

### error

▸ **error**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[SDKDebugger/SDKDebugger.ts:45](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/SDKDebugger/SDKDebugger.ts#lines-45)

___

### info

▸ **info**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[SDKDebugger/SDKDebugger.ts:33](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/SDKDebugger/SDKDebugger.ts#lines-33)

___

### warn

▸ **warn**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[SDKDebugger/SDKDebugger.ts:39](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/SDKDebugger/SDKDebugger.ts#lines-39)
