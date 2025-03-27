[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [JSX](/reference/sdk/js-vue/namespaces/JSX/README.md) / SearchcraftResultsInfo

# Interface: SearchcraftResultsInfo

This web component is designed to display the number of results returned from a search query.
@js-example ```html
<!-- index.html -->
<searchcraft-results-info />
```
```js
// index.js
const resultsInfo = document.querySelector('searchcraft-results-info');
resultsInfo.template = (info, { html }) => html`
  ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
`;
```
@react-example ```jsx
<SearchcraftResultsInfo
  template={(info, { html }) => html`
    ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
  `}
/>
@vue-example ```jsx
<SearchcraftResultsInfo
  :template={(info, { html }) => html`
    ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
  `}
/>

## Properties

### template?

> `optional` **template**: [`ResultsInfoTemplate`](/reference/sdk/js-vue/type-aliases/ResultsInfoTemplate.md)

A callback function responsible for rendering the results info.

#### Example
