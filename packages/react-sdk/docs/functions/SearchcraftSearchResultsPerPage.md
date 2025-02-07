[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftSearchResultsPerPage

# Function: SearchcraftSearchResultsPerPage()

> **SearchcraftSearchResultsPerPage**(`props`, `deprecatedLegacyContext`?): `ReactNode`

This React component is designed to choose the number of search results displayed.

## Parameters

### props

[`SearchcraftSearchResultsPerPageProps`](/reference/sdk/js-react/interfaces/SearchcraftSearchResultsPerPageProps.md)

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
import { SearchcraftSearchResultsPerPage } from '@searchcraft/react-sdk';

const MyResultsPerPage = () => {
  return <SearchcraftSearchResultsPerPage increment={20} />;
};

export default MyResultsPerPage;
```
