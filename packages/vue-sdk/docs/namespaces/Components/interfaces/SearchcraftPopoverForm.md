[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [Components](/reference/sdk/js-vue/namespaces/Components/README.md) / SearchcraftPopoverForm

# Interface: SearchcraftPopoverForm

This web component is designed to display search results in a popover container that dynamically appears when the user interacts with a search input field, or when a popover-button is pressed.
## Usage
```html
<!-- index.html -->
<searchcraft-popover-form type="fullscreen" />
```
```js
// index.js
const popoverForm = document.querySelector('searchcraft-popover-form');
popoverForm.popoverResultMappings = {
 containerHref: {
  fieldNames: [
   {
     fieldName: 'canonical_link',
     dataType: 'text',
   },
 ],
 };
```

## Extended by

- [`SearchcraftPopoverFormProps`](/reference/sdk/js-vue/interfaces/SearchcraftPopoverFormProps.md)

## Properties

### hotkey?

> `optional` **hotkey**: `string`

The hotkey that activates the popover.

***

### hotkeyModifier?

> `optional` **hotkeyModifier**: `"ctrl"` \| `"meta"` \| `"alt"` \| `"option"`

The hotkey modifier that activates the popover. Used together with the `hotkey` prop.

***

### popoverResultMappings?

> `optional` **popoverResultMappings**: [`PopoverResultMappings`](/reference/sdk/js-vue/type-aliases/PopoverResultMappings.md)

Formats the content rendered for each result.

***

### type?

> `optional` **type**: `"inline"` \| `"fullscreen"` \| `"modal"`

The type of popover form to render.  - `inline` - Renders inline with the rest of the content on the page. The search results pop over the page content. - `fullscreen` - Renders in fullscreen view. Used together with the `searchcraft-popover-button` component. - `modal` - Renders in a modal view. Used together with the `searchcraft-popover-button` component.
