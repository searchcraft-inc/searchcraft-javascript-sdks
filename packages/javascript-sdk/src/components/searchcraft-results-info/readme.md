# searchcraft-results-info



<!-- Auto Generated Below -->


## Overview

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

| Property          | Attribute       | Description                                    | Type                                                                                    | Default     |
| ----------------- | --------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------- | ----------- |
| `customFormatter` | --              | The custom formatter for the resulting string. | `((range: [string, string], count: string, responseTime: string) => void) \| undefined` | `undefined` |
| `customStyles`    | `custom-styles` | The custom styles object.                      | `string \| undefined`                                                                   | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
