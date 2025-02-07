[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftResultsInfo

# Function: SearchcraftResultsInfo()

> **SearchcraftResultsInfo**(`props`, `deprecatedLegacyContext`?): `ReactNode`

This React component is designed to display the number of results returned from a search query.

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
import React, { useEffect, useRef } from 'react';
import { SearchcraftResultsInfo } from '@searchcraft/react-sdk';

const MyResultsInfo = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current.customFormatter = (range, count, responseTime) =>
      `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
  });

  return <SearchcraftResultsInfo ref={ref} />;
};

export default MyResultsInfo;
```
