[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [JSX](/reference/sdk/js-vue/namespaces/JSX/README.md) / SearchcraftInputForm

# Interface: SearchcraftInputForm

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

> `optional` **buttonPlacement**: `"left"` \| `"right"` \| `"none"`

Where to place the search button.

***

### core?

> `optional` **core**: [`SearchcraftCore`](/reference/sdk/js-vue/classes/SearchcraftCore.md)

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

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vue/interfaces/SearchcraftInputFormCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### onInputFocus()?

> `optional` **onInputFocus**: (`event`) => `void`

When the input becomes focused.

#### Parameters

##### event

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vue/interfaces/SearchcraftInputFormCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### onInputInit()?

> `optional` **onInputInit**: (`event`) => `void`

Event emitted when input initializes.

#### Parameters

##### event

[`SearchcraftInputFormCustomEvent`](/reference/sdk/js-vue/interfaces/SearchcraftInputFormCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### placeholderValue?

> `optional` **placeholderValue**: `string`

The input element's placeholder value.
