# searchcraft-search-results-per-page

## Overview

This web component is designed to choose the number of search results displayed.

## Examples

### JavaScript

```html
<!-- index.html -->
<searchcraft-search-results-per-page increment="20" />
```


### React

```jsx
<SearchcraftSearchResultsPerPage increment={20} />
```


### Vue

```jsx
<SearchcraftSearchResultsPerPage increment="20" />
```


## Properties

| Property | Attribute | Description | Type | Default |
| -------- | --------- | ----------- | ---- | ------- |
| `increment` | `increment` | `The amount the options will increase (e.g. 20 = [20, 40, 60, 80, 100]).
The base value is defined by the `searchResultsPerPage` option in the configuration.` | `number \| string` | `20` |

