[**@searchcraft/core**](/reference/sdk/core/README.md)

***

[@searchcraft/core](/reference/sdk/core/globals.md) / SearchDocument

# Interface: SearchDocument\<T\>

* Generic data document returned within a SearchResult.
* Allows for extensibility with custom fields using a generic type parameter.

## Type Parameters

• **T** *extends* `Record`\<`string`, `string` \| `number`\> = `Record`\<`string`, `string` \| `number`\>

An optional type that defines additional properties on the document.

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `T`\[keyof `T`\]

## Properties

### id

> **id**: `number`
