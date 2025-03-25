[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchParams

# Type Alias: SearchParams

> **SearchParams**: `object`

Parameters required to make a successful Search request.

## Type declaration

### mode

> **mode**: `"fuzzy"` \| `"exact"`

The search mode, which can be either 'fuzzy' or 'exact'.

### offset?

> `optional` **offset**: `number`

The starting point for the results, used for pagination.
Optional parameter.

### limit?

> `optional` **limit**: `number`

The number of results returned.
Optional parameter.

### order\_by?

> `optional` **order\_by**: `string`

The field to order the results by (e.g., 'date_published', 'title', etc.).
Optional parameter.

### searchTerm

> **searchTerm**: `string`

The search term provided by the user.

### sort?

> `optional` **sort**: `"asc"` \| `"desc"`

The sort order, which can be either 'asc' or 'desc'.
Optional parameter.

### facetPathsForIndexFields?

> `optional` **facetPathsForIndexFields**: `Record`\<`string`, [`FacetPathsForIndexField`](/reference/sdk/js-vue/type-aliases/FacetPathsForIndexField.md)\>

### rangeValueForIndexFields?

> `optional` **rangeValueForIndexFields**: `Record`\<`string`, [`RangeValueForIndexField`](/reference/sdk/js-vue/type-aliases/RangeValueForIndexField.md)\>
