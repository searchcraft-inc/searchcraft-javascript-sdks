[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftSearchResults

# Variable: SearchcraftSearchResults

> `const` **SearchcraftSearchResults**: `DefineSetupFnComponent`\<[`SearchcraftSearchResults`](/reference/sdk/js-vue/namespaces/JSX/interfaces/SearchcraftSearchResults.md) & `InputProps`\<`string` \| `number` \| `boolean`\>, \{\}, \{\}, [`SearchcraftSearchResults`](/reference/sdk/js-vue/namespaces/JSX/interfaces/SearchcraftSearchResults.md) & `InputProps`\<`string` \| `number` \| `boolean`\>, `PublicProps`\> = `Component`

A component that renders a list of search results with customizable styles, layout, and link behavior.

## Example

```vue
<script setup>
import SearchcraftSearchResults from '@searchcraft/vue-sdk';
import searchResultMappings from './searchResultMappings';

const handleNoResults = () => {
  console.log("No search results found");
};
</script>

<template>
  <SearchcraftSearchResults
    :searchResultMappings="searchResultMappings"
    resultImagePlacement="left"
    buttonLabel="View More"
    buttonTarget="_blank"
    buttonRel="noopener"
    containerTarget="_self"
    containerRel="nofollow"
    @noResults="handleNoResults"
  />
</template>
```
