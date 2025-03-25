[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftFilterPanel

# Variable: SearchcraftFilterPanel

> `const` **SearchcraftFilterPanel**: `DefineSetupFnComponent`\<[`SearchcraftFilterPanel`](/reference/sdk/js-vue/namespaces/JSX/interfaces/SearchcraftFilterPanel.md) & `InputProps`\<`string` \| `number` \| `boolean`\>, \{\}, \{\}, [`SearchcraftFilterPanel`](/reference/sdk/js-vue/namespaces/JSX/interfaces/SearchcraftFilterPanel.md) & `InputProps`\<`string` \| `number` \| `boolean`\>, `PublicProps`\> = `Component`

A component that represents a filter panel UI view, allowing users to refine and control their search queries by applying various filter criteria.

## Example

```vue
<script setup>
import SearchcraftFilterPanel from '@my-library/vue';
import filterItems from './filterItems';
</script>

<template>
  <SearchcraftFilterPanel :items="filterItems" />
</template>
```
