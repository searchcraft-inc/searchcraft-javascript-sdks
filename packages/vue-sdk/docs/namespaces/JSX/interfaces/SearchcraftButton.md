[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [JSX](/reference/sdk/js-vue/namespaces/JSX/README.md) / SearchcraftButton

# Interface: SearchcraftButton

This web component represents a button to be consumed within the `search-input-form` component.
It provides a clear, interactive way for users to submit search queries or trigger actions in a search interface.
It is consumed within the `searchcraft-input-form` component.

## Properties

### disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.

***

### hierarchy?

> `optional` **hierarchy**: `"primary"` \| `"tertiary"`

Controls the visual representation of the button.

***

### icon?

> `optional` **icon**: `Element`

The icon element.

***

### iconOnly?

> `optional` **iconOnly**: `boolean`

Should the button only display an icon.

***

### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

The position of the icon.

***

### label?

> `optional` **label**: `string`

The label for the button.

***

### onButtonClick()?

> `optional` **onButtonClick**: (`event`) => `void`

The event fired when the button is clicked.

#### Parameters

##### event

[`SearchcraftButtonCustomEvent`](/reference/sdk/js-vue/interfaces/SearchcraftButtonCustomEvent.md)\<`void`\>

#### Returns

`void`

***

### type?

> `optional` **type**: `"submit"` \| `"reset"` \| `"button"`

The type of the button.
