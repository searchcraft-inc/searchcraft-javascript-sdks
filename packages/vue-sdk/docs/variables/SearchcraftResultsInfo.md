[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftResultsInfo

# Variable: SearchcraftResultsInfo

> `const` **SearchcraftResultsInfo**: `DefineSetupFnComponent`\<[`SearchcraftResultsInfo`](/reference/sdk/js-vue/namespaces/JSX/interfaces/SearchcraftResultsInfo.md) & `InputProps`\<`string` \| `number` \| `boolean`\>, \{\}, \{\}, [`SearchcraftResultsInfo`](/reference/sdk/js-vue/namespaces/JSX/interfaces/SearchcraftResultsInfo.md) & `InputProps`\<`string` \| `number` \| `boolean`\>, `PublicProps`\> = `Component`

This Vue component is designed to display the number of results returned from a search query.

## Example

```vue
<script setup>
  import SearchcraftResultsInfo from '@searchcraft/vue-sdk';

  const customFormatter =  (range, count, responseTime) =>
    `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
</script>

<template>
  <SearchcraftResultsInfo :customFormatter="customFormatter" />
</template>
```
