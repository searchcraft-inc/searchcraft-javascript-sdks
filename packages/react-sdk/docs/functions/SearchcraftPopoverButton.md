[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftPopoverButton

# Function: SearchcraftPopoverButton()

> **SearchcraftPopoverButton**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A button component that, when clicked, toggles the visibility of a popover.

## Parameters

### props

[`SearchcraftPopoverButtonProps`](/reference/sdk/js-react/interfaces/SearchcraftPopoverButtonProps.md)

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
import { SearchcraftPopoverButton } from '@searchcraft/react-sdk';

const MyPopoverTrigger = () => {
  return (
    <SearchcraftPopoverButton>
      Open Popover
    </SearchcraftPopoverButton>
  );
};

export default MyPopoverTrigger;
```
