[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [Components](/reference/sdk/js-vanilla/namespaces/Components/README.md) / SearchcraftResultsInfo

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

### customFormatter()?

> `optional` **customFormatter**: (`range`, `count`, `responseTime`) => `void`

The custom formatter for the resulting string.

#### Parameters

##### range

\[`string`, `string`\]

##### count

`string`

##### responseTime

`string`

#### Returns

`void`

#### Example

***

### customStyles?

> `optional` **customStyles**: `string`

The custom styles object.
