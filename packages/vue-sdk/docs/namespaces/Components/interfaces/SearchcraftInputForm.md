[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [Components](/reference/sdk/js-vue/namespaces/Components/README.md) / SearchcraftInputForm

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

## Extended by

- [`SearchcraftInputFormProps`](/reference/sdk/js-vue/interfaces/SearchcraftInputFormProps.md)

## Properties

### autoSearch

> **autoSearch**: `boolean`

Whether or not to automatically submit the search term when the input changes.

***

### buttonLabel?

> `optional` **buttonLabel**: `string`

The label for the submit button.

***

### buttonPlacement

> **buttonPlacement**: `"left"` \| `"right"` \| `"none"`

Where to place the search button.

***

### core?

> `optional` **core**: [`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

***

### customStyles

> **customStyles**: `string` \| `Record`\<`string`, `string`\>

A custom styles object to be applied to the input element.

***

### inputLabel?

> `optional` **inputLabel**: `string`

The label rendered above the input.

***

### placeholderValue

> **placeholderValue**: `string`

The input element's placeholder value.
