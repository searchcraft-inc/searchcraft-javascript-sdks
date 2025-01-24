[**@searchcraft/react-sdk**](../README.md)

***

[@searchcraft/react-sdk](../globals.md) / SearchcraftPopoverFormProps

# Interface: SearchcraftPopoverFormProps

Defined in: [packages/react-sdk/src/components/SearchcraftPopoverForm.tsx:6](https://bitbucket.org/madebychalk/searchcraft-javascript-sdks/src/13d0fd25669057ec4d2ef62d1e5c7048e667a0f0/packages/react-sdk/src/components/SearchcraftPopoverForm.tsx#lines-6)

## Extends

- `SearchcraftPopoverForm`

## Properties

### config

> **config**: `undefined` \| `SearchcraftConfig`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:340

The Searchcraft config object.

#### Inherited from

`Components.SearchcraftPopoverForm.config`

***

### hotkey

> **hotkey**: `string`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:344

The hotkey that activates the popover.

#### Inherited from

`Components.SearchcraftPopoverForm.hotkey`

***

### hotkeyModifier

> **hotkeyModifier**: `"ctrl"` \| `"meta"` \| `"alt"` \| `"option"`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:348

The hotkey modifier that activates the popover. Used together with the `hotkey` prop.

#### Inherited from

`Components.SearchcraftPopoverForm.hotkeyModifier`

***

### popoverResultMappings

> **popoverResultMappings**: `undefined` \| `PopoverResultMappings`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:352

Formats the content rendered for each result.

#### Inherited from

`Components.SearchcraftPopoverForm.popoverResultMappings`

***

### type

> **type**: `"inline"` \| `"fullscreen"` \| `"modal"`

Defined in: packages/javascript-sdk/dist/types/components.d.ts:356

The type of popover form to render.  - `inline` - Renders inline with the rest of the content on the page. The search results pop over the page content. - `fullscreen` - Renders in fullscreen view. Used together with the `searchcraft-popover-button` component. - `modal` - Renders in a modal view. Used together with the `searchcraft-popover-button` component.

#### Inherited from

`Components.SearchcraftPopoverForm.type`
