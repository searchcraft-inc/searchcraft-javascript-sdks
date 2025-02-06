[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftResultsInfo

# Function: SearchcraftResultsInfo()

> **SearchcraftResultsInfo**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A component that displays the number of results returned from a search query.

## Parameters

### props

[`SearchcraftResultsInfoProps`](/reference/sdk/js-react/interfaces/SearchcraftResultsInfoProps.md)

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
import { SearchcraftResultsInfo } from '@searchcraft/react-sdk';

const MyResultsInfo = () => {
  return <SearchcraftResultsInfo />;
};

export default MyResultsInfo;
```
