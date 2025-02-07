[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftTheme

# Function: SearchcraftTheme()

> **SearchcraftTheme**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A component that applies Searchcraft's built-in CSS theme to your page.
It does not render anything visible—its only function is to manage the CSS styles on the page.

## Parameters

### props

[`SearchcraftThemeProps`](/reference/sdk/js-react/interfaces/SearchcraftThemeProps.md)

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
import { SearchcraftTheme } from '@searchcraft/react-sdk';

const MyThemeProvider = () => {
  return <SearchcraftTheme theme="light" customTheme={'[]'} />;
};

export default MyThemeProvider;
```
