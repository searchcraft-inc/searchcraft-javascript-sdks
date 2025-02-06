[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftBaseSearchResults

# Function: SearchcraftBaseSearchResults()

> **SearchcraftBaseSearchResults**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A component that renders a list of search results with customizable styles, layout, and link behavior.

## Parameters

### props

[`SearchcraftBaseSearchResultsProps`](/reference/sdk/js-react/interfaces/SearchcraftBaseSearchResultsProps.md)

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
import { SearchcraftBaseSearchResults } from '@searchcraft/react-sdk';
import searchResultMappings from './searchResultMappings';

const MySearchComponent = () => {
  return (
    <SearchcraftBaseSearchResults
      searchResultMappings={searchResultMappings}
      resultImagePlacement="left"
      buttonLabel="View More"
      buttonTarget="_blank"
      buttonRel="noopener"
      containerTarget="_self"
      containerRel="nofollow"
      onNoResults={() => console.log("No search results found")}
    />
  );
};

export default MySearchComponent;
```
