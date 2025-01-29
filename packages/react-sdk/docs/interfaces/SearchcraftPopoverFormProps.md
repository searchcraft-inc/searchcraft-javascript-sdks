[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftPopoverFormProps

# Interface: SearchcraftPopoverFormProps

The props for the SearchcraftPopoverForm component.

## Extends

- `SearchcraftPopoverForm`

## Properties

### config

> **config**: `undefined` \| `SearchcraftConfig`

The Searchcraft config object.

#### Inherited from

`Components.SearchcraftPopoverForm.config`

***

### hotkey

> **hotkey**: `string`

The hotkey that activates the popover.

#### Inherited from

`Components.SearchcraftPopoverForm.hotkey`

***

### hotkeyModifier

> **hotkeyModifier**: `"ctrl"` \| `"meta"` \| `"alt"` \| `"option"`

The hotkey modifier that activates the popover. Used together with the `hotkey` prop.

#### Inherited from

`Components.SearchcraftPopoverForm.hotkeyModifier`

***

### popoverResultMappings

> **popoverResultMappings**: `undefined` \| `PopoverResultMappings`

Formats the content rendered for each result.

#### Inherited from

`Components.SearchcraftPopoverForm.popoverResultMappings`

***

### type

> **type**: `"inline"` \| `"fullscreen"` \| `"modal"`

The type of popover form to render.  - `inline` - Renders inline with the rest of the content on the page. The search results pop over the page content. - `fullscreen` - Renders in fullscreen view. Used together with the `searchcraft-popover-button` component. - `modal` - Renders in a modal view. Used together with the `searchcraft-popover-button` component.

#### Inherited from

`Components.SearchcraftPopoverForm.type`
