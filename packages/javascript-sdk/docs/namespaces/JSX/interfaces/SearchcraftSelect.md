[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [JSX](/reference/sdk/js-vanilla/namespaces/JSX/README.md) / SearchcraftSelect

# Interface: SearchcraftSelect

This web component is designed to allow users to select between a group of options.
## Usage
```html
<!-- index.html -->
<searchcraft-select
 inputId="searchcraft-select"
 name="searchcraft-select"
 options="[{ label: 'label', value: 'value' }]"
/>
```

## Properties

### caption?

> `optional` **caption**: `string`

The caption displayed below the select input.

***

### customStyles?

> `optional` **customStyles**: `string`

A custom styles object.

***

### disabled?

> `optional` **disabled**: `boolean`

Whether the select input is disabled.

***

### inputId

> **inputId**: `string`

The ID for the select input.

***

### label?

> `optional` **label**: `string`

The label of the select input.

***

### labelId?

> `optional` **labelId**: `string`

The ID for the label of the select input.

***

### name

> **name**: `string`

The name of the select input.

***

### onSelectChange()?

> `optional` **onSelectChange**: (`event`) => `void`

The event fired when the select is changed.

#### Parameters

##### event

[`SearchcraftSelectCustomEvent`](/reference/sdk/js-vanilla/interfaces/SearchcraftSelectCustomEvent.md)\<`string`\>

#### Returns

`void`

***

### options?

> `optional` **options**: `string` \| [`SearchcraftSelectOption`](/reference/sdk/js-vanilla/type-aliases/SearchcraftSelectOption.md)[]

The options for the select input.
