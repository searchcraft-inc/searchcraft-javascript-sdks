[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftPopoverForm

# Variable: SearchcraftPopoverForm

> `const` **SearchcraftPopoverForm**: `DefineSetupFnComponent`\<`SearchcraftPopoverForm` & `InputProps`\<`string` \| `number` \| `boolean`\>, \{\}, \{\}, `SearchcraftPopoverForm` & `InputProps`\<`string` \| `number` \| `boolean`\>, `PublicProps`\> = `Component`

A component that displays search results in a popover container that dynamically appears
when the user interacts with a search input field, or when a Popover Button has been clicked.

## Example

```vue
<script setup>
import SearchcraftPopoverForm from '@searchcraft/vue-sdk';
import searchcraftConfig from './searchcraftConfig';
import popoverResultMappings from './popoverResultMappings';
</script>

<template>
  <SearchcraftPopoverForm
    :config="searchcraftConfig"
    type="fullscreen"
    :popoverResultMappings="popoverResultMappings"
    hotkey="k"
    hotkeyModifier="meta"
  />
</template>
```
