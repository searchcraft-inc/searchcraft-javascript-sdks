[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftPagination

# Function: SearchcraftPagination()

> **SearchcraftPagination**(`props`, `deprecatedLegacyContext`?): `ReactNode`

This React component is designed to facilitate pagination of search results.
Once a query is submitted, calculates the number for pages.

## Parameters

### props

[`SearchcraftPaginationProps`](/reference/sdk/js-react/interfaces/SearchcraftPaginationProps.md)

### deprecatedLegacyContext?

`any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

## Example

```tsx
import React from 'react';
import { SearchcraftPagination } from '@searchcraft/react-sdk';

const MyPaginationComponent = () => {
  return (
    // other searchcraft components
    <SearchcraftPagination />
  );
};

export default MyPaginationComponent;
```
