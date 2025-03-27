[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [Components](/reference/sdk/js-vue/namespaces/Components/README.md) / SearchcraftSearchResults

# Interface: SearchcraftSearchResults

This web component is responsible for displaying the results of a search query. Once a query is submitted, the component formats and presents an ordered list of the results.
@js-example ```html
<!-- index.html -->
<searchcraft-search-results
  ad-interval="4"
  place-ad-at-start="true"
/>
```
```js
// index.js
const searchResults = document.querySelector('searchcraft-search-results');
searchResults.template = (item, index, { html }) => html`
 <h2>${item.title}</h2>
`;
```
@react-example ```jsx
<SearchcraftSearchResults
  adInterval={4}
  placeAdAtState={true}
  template={(item, index, { html }) => html`
    <h2>${item.title}</h2>
  `}
/>
```
@vue-example ```jsx
<SearchcraftSearchResults
  adInterval={4}
  placeAdAtState={true}
  :template={(item, index, { html }) => html`
    <h2>${item.title}</h2>
  `}
/>
```

## Extended by

- [`SearchcraftSearchResultsProps`](/reference/sdk/js-vue/interfaces/SearchcraftSearchResultsProps.md)

## Properties

### template?

> `optional` **template**: [`SearchResultTemplate`](/reference/sdk/js-vue/type-aliases/SearchResultTemplate.md)\<`any`\>

A callback function responsible for rendering a result. Passed to `searchcraft-search-result`.
