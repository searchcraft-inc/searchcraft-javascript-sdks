[**@searchcraft/core**](/reference/sdk/core/README.md)

***

[@searchcraft/core](/reference/sdk/core/globals.md) / SearchClientRequestProperties

# Interface: SearchClientRequestProperties

## Properties

### facetPathsForIndexFields?

> `optional` **facetPathsForIndexFields**: `Record`\<`string`, [`FacetPathsForIndexField`](/reference/sdk/core/interfaces/FacetPathsForIndexField.md)\>

The facet path value(s) specified by the `facets` filter items that the `searchcraft-filter-panel` renders.
There may be multiple rendered within a single filter panel.
Optional parameter.

***

### limit?

> `optional` **limit**: `number`

The number of results returned.
Optional parameter.

***

### mode

> **mode**: `"exact"` \| `"fuzzy"`

The search mode, which can be either 'fuzzy' or 'exact'.

***

### offset?

> `optional` **offset**: `number`

The starting point for the results, used for pagination.
Optional parameter.

***

### order\_by?

> `optional` **order\_by**: `string`

The field to order the results by (e.g., 'date_published', 'title', etc.).
Optional parameter.

***

### rangeValueForIndexFields?

> `optional` **rangeValueForIndexFields**: `Record`\<`string`, [`RangeValueForIndexField`](/reference/sdk/core/interfaces/RangeValueForIndexField.md)\>

The date range slider value(s) specified by the `dateRange` filter items that the `searchcraft-filter-panel` renders.
There may be multiple rendered within a single filter panel.
Optional parameter.

***

### searchTerm

> **searchTerm**: `string`

The search term provided by the user.

***

### sort?

> `optional` **sort**: `"desc"` \| `"asc"`

The sort order, which can be either 'asc' or 'desc'.
Optional parameter.
