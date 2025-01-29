[**@searchcraft/javascript-sdk**](/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](/reference/sdk/js-vanilla/globals.md) / [JSX](/reference/sdk/js-vanilla/namespaces/JSX/README.md) / SearchcraftButton

# Interface: SearchcraftButton

This web component represents a button to be consumed within the `search-input-form` component.
It provides a clear, interactive way for users to submit search queries or trigger actions in a search interface.
It is consumed within the `searchcraft-input-form` component.

## Properties

### iconElement?

> `optional` **iconElement**: `Element`

The icon element.

***

### iconOnly?

> `optional` **iconOnly**: `boolean`

Should the button only display an icon.

***

### iconPosition?

> `optional` **iconPosition**: `string`

The position of the icon.

***

### label?

> `optional` **label**: `string`

The label for the button.

***

### onButtonClick()?

> `optional` **onButtonClick**: (`event`) => `void`

When the button is clicked.

#### Parameters

##### event

[`SearchcraftButtonCustomEvent`](/reference/sdk/js-vanilla/interfaces/SearchcraftButtonCustomEvent.md)\<`void`\>

#### Returns

`void`
