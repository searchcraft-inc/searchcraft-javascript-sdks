[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / SearchcraftInputForm

# Variable: SearchcraftInputForm

> `const` **SearchcraftInputForm**: `DefineSetupFnComponent`\<[`SearchcraftInputForm`](/reference/sdk/js-vue/namespaces/JSX/interfaces/SearchcraftInputForm.md) & `InputProps`\<`string` \| `number` \| `boolean`\>, \{\}, \{\}, [`SearchcraftInputForm`](/reference/sdk/js-vue/namespaces/JSX/interfaces/SearchcraftInputForm.md) & `InputProps`\<`string` \| `number` \| `boolean`\>, `PublicProps`\> = `Component`

A component that provides a user-friendly interface for querying an indexed dataset,
enabling users to easily search large collections of data. It abstracts the complexities
of index-based searching, making it accessible to users of all technical levels.

## Example

```vue
<script setup>
import SearchcraftInputForm from '@searchcraft/vue-sdk';
import searchcraftConfig from './searchcraftConfig';

const handleQuerySubmit = (event) => {
  console.log("Query submitted", event.detail);
};
</script>

<template>
  <SearchcraftInputForm
    :config="searchcraftConfig"
    :autoSearch="true"
    buttonPlacement="right"
    buttonLabel="Search"
    inputLabel="Search Database"
    :customStyles="{ border: '1px solid gray', padding: '5px' }"
    placeholderValue="Search here..."
    searchTerm=""
    @querySubmit="handleQuerySubmit"
    @inputCleared="() => console.log('Input cleared')"
    @noResultsReceived="() => console.log('No results found')"
    @inputFocus="() => console.log('Input focused')"
    @inputBlur="() => console.log('Input blurred')"
    @inputInit="() => console.log('Input initialized')"
  />
</template>
```
