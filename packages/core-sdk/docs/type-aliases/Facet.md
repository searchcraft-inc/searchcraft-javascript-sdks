[**@searchcraft/core**](/reference/sdk/core/README.md)

***

[@searchcraft/core](/reference/sdk/core/globals.md) / Facet

# Type Alias: Facet

> **Facet**: `object`

## Type declaration

### count

> **count**: `number`

The count value just represents an arbitrary `count` metadata for this facet node.

### path

> **path**: `string`

The path of the facet. The path represents where in the facet tree structure
this facet exists. There is an arbitrary number of levels in a facet tree.

#### Example

```ts
'/sports/college' - Represents that this is the facet node exists at [root] -> [sports] -> [college] in the facet tree.
'/weather' - Represents that this facet exists at [root] -> [weather] in the facet tree
'/news/local' - [root] -> [news] -> [local]
```
