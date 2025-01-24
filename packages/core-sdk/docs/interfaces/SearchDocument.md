[@searchcraft/core](../README.md) / [Exports](../modules.md) / SearchDocument

# Interface: SearchDocument\<T\>

* Generic data document returned within a SearchResult.
* Allows for extensibility with custom fields using a generic type parameter.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Record`\<`string`, `string` \| `number`\> = `Record`\<`string`, `string` \| `number`\> | An optional type that defines additional properties on the document. |

## Indexable

▪ [key: `string`]: `string` \| `number` \| `T`[keyof `T`]

## Table of contents

### Properties

- [id](SearchDocument.md#id)

## Properties

### id

• **id**: `number`

#### Defined in

[CoreSDKTypes/CoreSDKTypes.ts:113](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/9ae1822c027894501f0c9466b2735e3ddcdec128/packages/core-sdk/src/CoreSDKTypes/CoreSDKTypes.ts#lines-113)
