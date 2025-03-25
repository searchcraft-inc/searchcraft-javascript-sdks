[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftPopoverFormProps

# Interface: SearchcraftPopoverFormProps

The Props for the SearchcraftPopoverForm.

## Extends

- [`SearchcraftPopoverForm`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md)

## Properties

### hotkey

> **hotkey**: `string`

The hotkey that activates the popover.

#### Inherited from

[`SearchcraftPopoverForm`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md).[`hotkey`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md#hotkey)

***

### hotkeyModifier

> **hotkeyModifier**: `"ctrl"` \| `"meta"` \| `"alt"` \| `"option"`

The hotkey modifier that activates the popover. Used together with the `hotkey` prop.

#### Inherited from

[`SearchcraftPopoverForm`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md).[`hotkeyModifier`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md#hotkeymodifier)

***

### popoverResultMappings?

> `optional` **popoverResultMappings**: [`PopoverResultMappings`](/reference/sdk/js-vue/type-aliases/PopoverResultMappings.md)

Formats the content rendered for each result.

#### Inherited from

[`SearchcraftPopoverForm`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md).[`popoverResultMappings`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md#popoverresultmappings)

***

### type

> **type**: `"inline"` \| `"fullscreen"` \| `"modal"`

The type of popover form to render.  - `inline` - Renders inline with the rest of the content on the page. The search results pop over the page content. - `fullscreen` - Renders in fullscreen view. Used together with the `searchcraft-popover-button` component. - `modal` - Renders in a modal view. Used together with the `searchcraft-popover-button` component.

#### Inherited from

[`SearchcraftPopoverForm`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md).[`type`](/reference/sdk/js-vue/namespaces/Components/interfaces/SearchcraftPopoverForm.md#type)
