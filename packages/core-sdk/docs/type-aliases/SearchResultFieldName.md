[**@searchcraft/core**](/reference/sdk/core/README.md)

***

[@searchcraft/core](/reference/sdk/core/globals.md) / SearchResultFieldName

# Type Alias: SearchResultFieldName

> **SearchResultFieldName**: `object`

A data type representing an index field value, along with properties
describing how to format and display the index field value.

## Type declaration

### dataType

> **dataType**: `"text"` \| `"date"` \| `"number"`

The data type to treat this index field as.

### dateFormatOptions?

> `optional` **dateFormatOptions**: `unknown`

TODO: Implement DateFormatOptions, for date formatting

### fieldName

> **fieldName**: `string`

The index field name.

### numberFormatLocale?

> `optional` **numberFormatLocale**: `string`

The locale to use when formatting dataType: `number`

### numberFormatOptions?

> `optional` **numberFormatOptions**: `Intl.NumberFormatOptions`

If it's a number, the number format to apply.
reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

### numberScale?

> `optional` **numberScale**: `number`

A scale factor to apply to a `number` value.
