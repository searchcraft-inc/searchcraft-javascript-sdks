[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftFilterPanel

# Function: SearchcraftFilterPanel()

> **SearchcraftFilterPanel**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A component that represents a filter panel UI view, allowing users to refine and control their search queries by applying various filter criteria.

## Parameters

### props

[`SearchcraftFilterPanelProps`](/reference/sdk/js-react/interfaces/SearchcraftFilterPanelProps.md)

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
import { SearchcraftFilterPanel } from '@searchcraft/react-sdk';
import filterItems from './filterItems';

const MyFilterComponent = () => {
  return (
    <SearchcraftFilterPanel items={filterItems} />
  );
};

export default MyFilterComponent;
```
