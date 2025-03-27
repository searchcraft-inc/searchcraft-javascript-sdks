# searchcraft-results-info

## Overview

This web component is designed to display the number of results returned from a search query.

## Examples

### JavaScript

```html
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


### React

```jsx
<SearchcraftResultsInfo
  template={(info, { html }) => html`
    ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
  `}
/>


### Vue

```jsx
<SearchcraftResultsInfo
  :template={(info, { html }) => html`
    ${info.range[0]}-${info.range[1]} of ${info.count} results in ${info.responseTime}ms
  `}
/>


## Properties

| Property | Attribute | Description | Type | Default |
| -------- | --------- | ----------- | ---- | ------- |
| `template` | -- | A callback function responsible for rendering the results info. | `((data: { range: [number, number]; count: number; responseTime: string; }, utils: { html: TemplateHtml; }) => string) \| undefined` | `undefined` |

