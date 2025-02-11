[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [JSX](/reference/sdk/js-vanilla/namespaces/JSX/README.md) / SearchcraftInputForm

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
searchInputForm.config = {
  index: [],
  readKey: '',
  endpointUrl: '',
};
searchForm.addEventListener('querySubmit', (event) => {
  console.log('Query submitted', event.detail);
});
```

## Properties

### autoSearch?

> `optional` **autoSearch**: `boolean`

Whether or not to automatically submit the search term when the input changes.

***

### buttonLabel?

> `optional` **buttonLabel**: `string`

The label for the submit button.

***

### buttonPlacement?

> `optional` **buttonPlacement**: `"none"` \| `"left"` \| `"right"`

Where to place the search button.

***

### core?

> `optional` **core**: [`SearchcraftCore`](/reference/sdk/js-vanilla/classes/SearchcraftCore.md)

***

### customStyles?

> `optional` **customStyles**: `string` \| `Record`\<`string`, `string`\>

A custom styles object to be applied to the input element.

***

### inputLabel?

> `optional` **inputLabel**: `string`

The label rendered above the input.

***

### onInputBlur()?

> `optional` **onInputBlur**: (`event`) => `void`

When the input becomes unfocused.

#### Parameters

##### event

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vanilla/interfaces/SearchcraftInputFormCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### onInputCleared()?

> `optional` **onInputCleared**: (`event`) => `void`

When the input is cleared.

#### Parameters

##### event

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vanilla/interfaces/SearchcraftInputFormCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### onInputFocus()?

> `optional` **onInputFocus**: (`event`) => `void`

When the input becomes focused.

#### Parameters

##### event

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vanilla/interfaces/SearchcraftInputFormCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### onInputInit()?

> `optional` **onInputInit**: (`event`) => `void`

Event emitted when input initializes.

#### Parameters

##### event

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vanilla/interfaces/SearchcraftInputFormCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### onNoResultsReceived()?

> `optional` **onNoResultsReceived**: (`event`) => `void`

When no results are returned.

#### Parameters

##### event

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vanilla/interfaces/SearchcraftInputFormCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### onQuerySubmit()?

> `optional` **onQuerySubmit**: (`event`) => `void`

Event emitted when a query has been submitted.

#### Parameters

##### event

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vanilla/interfaces/SearchcraftInputFormCustomEvent.md)\<`string`\>

#### Returns

`void`

***

### placeholderValue?

> `optional` **placeholderValue**: `string`

The input element's placeholder value.

***

### searchTerm?

> `optional` **searchTerm**: `string`

The starting value of the input element.
