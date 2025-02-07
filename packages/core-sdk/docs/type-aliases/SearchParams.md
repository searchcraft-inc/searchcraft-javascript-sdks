[**@searchcraft/core**](/reference/sdk/core/README.md)

***

[@searchcraft/core](/reference/sdk/core/globals.md) / SearchParams

# Type Alias: SearchParams

> **SearchParams**: `object`

Parameters required to make a successful Search request.

## Type declaration

### facetPathsForIndexFields?

> `optional` **facetPathsForIndexFields**: `Record`\<`string`, [`FacetPathsForIndexField`](/reference/sdk/core/type-aliases/FacetPathsForIndexField.md)\>

### limit?

> `optional` **limit**: `number`

The number of results returned.
Optional parameter.

### mode

> **mode**: `"fuzzy"` \| `"exact"`

The search mode, which can be either 'fuzzy' or 'exact'.

### offset?

> `optional` **offset**: `number`

The starting point for the results, used for pagination.
Optional parameter.

### order\_by?

> `optional` **order\_by**: `string`

The field to order the results by (e.g., 'date_published', 'title', etc.).
Optional parameter.

### rangeValueForIndexFields?

> `optional` **rangeValueForIndexFields**: `Record`\<`string`, [`RangeValueForIndexField`](/reference/sdk/core/type-aliases/RangeValueForIndexField.md)\>

### searchTerm

> **searchTerm**: `string`

The search term provided by the user.

### sort?

> `optional` **sort**: `"asc"` \| `"desc"`

The sort order, which can be either 'asc' or 'desc'.
Optional parameter.
