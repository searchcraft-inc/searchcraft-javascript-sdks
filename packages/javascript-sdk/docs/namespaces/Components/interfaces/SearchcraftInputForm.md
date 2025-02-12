[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [Components](/reference/sdk/js-vanilla/namespaces/Components/README.md) / SearchcraftInputForm

# Interface: SearchcraftInputForm

This web component provides a user-friendly interface for querying an indexed dataset, enabling users to easily search large collections of data.
It abstracts the complexities of index-based searching, making it accessible to users of all technical levels.
## Usage
```html
<!-- index.html -->
<searchcraft-input-form placeholder-value="Search here" />
```
```js
// index.js
const searchInputForm = document.querySelector('searchcraft-input-form');
```

## Properties

### autoSearch

> **autoSearch**: `boolean`

Whether or not to automatically submit the search term when the input changes.

***

### buttonLabel

> **buttonLabel**: `undefined` \| `string`

The label for the submit button.

***

### buttonPlacement

> **buttonPlacement**: `"none"` \| `"left"` \| `"right"`

Where to place the search button.

***

### core?

> `optional` **core**: [`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md)

***

### customStyles

> **customStyles**: `string` \| `Record`\<`string`, `string`\>

A custom styles object to be applied to the input element.

***

### inputLabel

> **inputLabel**: `undefined` \| `string`

The label rendered above the input.

***

### placeholderValue

> **placeholderValue**: `string`

The input element's placeholder value.

***

### searchTerm

> **searchTerm**: `string`

The starting value of the input element.
