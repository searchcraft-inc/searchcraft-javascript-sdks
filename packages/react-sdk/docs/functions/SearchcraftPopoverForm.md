[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftPopoverForm

# Function: SearchcraftPopoverForm()

> **SearchcraftPopoverForm**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A component that displays search results in a popover container that dynamically appears
when the user interacts with a search input field, or when a popover button is clicked.

## Parameters

### props

[`SearchcraftPopoverFormProps`](/reference/sdk/js-react/interfaces/SearchcraftPopoverFormProps.md)

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
import { SearchcraftPopoverForm } from '@searchcraft/react-sdk';
import searchcraftConfig from './searchcraftConfig';
import popoverResultMappings from './popoverResultMappings';

const MyPopoverSearch = () => {
  return (
    <SearchcraftPopoverForm
      config={searchcraftConfig}
      type="fullscreen"
      popoverResultMappings={popoverResultMappings}
      hotkey="k"
      hotkeyModifier="meta"
    />
  );
};

export default MyPopoverSearch;
```
