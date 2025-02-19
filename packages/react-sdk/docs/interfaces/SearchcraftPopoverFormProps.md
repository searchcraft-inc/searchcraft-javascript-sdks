[**@searchcraft/react-sdk**](/reference/sdk/js-react/README.md)

***

[@searchcraft/react-sdk](/reference/sdk/js-react/globals.md) / SearchcraftPopoverFormProps

# Interface: SearchcraftPopoverFormProps

The props for the SearchcraftPopoverForm component.

## Extends

- `SearchcraftPopoverForm`

## Properties

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

### popoverResultMappings?

> `optional` **popoverResultMappings**: [`PopoverResultMappings`](/reference/sdk/js-react/type-aliases/PopoverResultMappings.md)

Formats the content rendered for each result.

#### Inherited from

`Components.SearchcraftPopoverForm.popoverResultMappings`

***

### type

> **type**: `"inline"` \| `"fullscreen"` \| `"modal"`

The type of popover form to render.  - `inline` - Renders inline with the rest of the content on the page. The search results pop over the page content. - `fullscreen` - Renders in fullscreen view. Used together with the `searchcraft-popover-button` component. - `modal` - Renders in a modal view. Used together with the `searchcraft-popover-button` component.

#### Inherited from

`Components.SearchcraftPopoverForm.type`
