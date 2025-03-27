# searchcraft-search-results

This web component is responsible for displaying the results of a search query. Once a query is submitted, the component formats and presents an ordered list of the results.

## Import

```jsx
// react
import { SearchcraftSearchResults } from "@searchcraft/react-sdk";

// vue
import { SearchcraftSearchResults } from "@searchcraft/vue-sdk";
```


## Usage

**JavaScript:**

```html
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


**React:**

```jsx
<SearchcraftSearchResults
  adInterval={4}
  placeAdAtState={true}
  template={(item, index, { html }) => html`
    <h2>${item.title}</h2>
  `}
/>
```


**Vue:**

```jsx
<SearchcraftSearchResults
  adInterval={4}
  placeAdAtState={true}
  :template={(item, index, { html }) => html`
    <h2>${item.title}</h2>
  `}
/>
```


## Properties

| Property | Attribute | Description | Type | Default |
| -------- | --------- | ----------- | ---- | ------- |
| `template` | -- | A callback function responsible for rendering a result. Passed to `searchcraft-search-result`. | `((data: any, index: number, utils: { html: TemplateHtml; }) => string) \| undefined` | `undefined` |

