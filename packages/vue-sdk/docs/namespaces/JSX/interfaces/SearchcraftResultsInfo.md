[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [JSX](/reference/sdk/js-vue/namespaces/JSX/README.md) / SearchcraftResultsInfo

# Interface: SearchcraftResultsInfo

This web component is designed to display the number of results returned from a search query.
## Usage
```html
<!-- index.html -->
<script>
 const resultsInfo = document.querySelector('searchcraft-results-info');
 resultsInfo.customFormatter = (range, count, responseTime) =>
   `${range[0]}-${range[1]} of ${count} results in ${responseTime}ms`;
</script>
<searchcraft-results-info />
```

## Properties

### template?

> `optional` **template**: [`ResultsInfoTemplate`](/reference/sdk/js-vue/type-aliases/ResultsInfoTemplate.md)

A callback function responsible for rendering the results info.

#### Example
