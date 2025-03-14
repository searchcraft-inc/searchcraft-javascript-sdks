[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [JSX](/reference/sdk/js-vue/namespaces/JSX/README.md) / SearchcraftSearchResults

# Interface: SearchcraftSearchResults

This web component is responsible for displaying the results of a search query.
Once a query is submitted, the component formats and presents an ordered list of the results.
## Usage
```html
<!-- index.html -->
<searchcraft-search-results
  ad-interval="4"
  place-ad-at-start="false"
/>
```
```js
// index.js
const searchResults = document.querySelector('searchcraft-search-results');
searchResults.template = (item, index, { html }) => html`
 <h2>${item.title}</h2>
`;
searchResults.addEventListener('noResults', () => {
  console.log('No search results found');
});
```

## Properties

### template?

> `optional` **template**: [`SearchResultTemplate`](/reference/sdk/js-vue/type-aliases/SearchResultTemplate.md)\<`any`\>

A callback function responsible for rendering a result. Passed to `searchcraft-search-result`.
