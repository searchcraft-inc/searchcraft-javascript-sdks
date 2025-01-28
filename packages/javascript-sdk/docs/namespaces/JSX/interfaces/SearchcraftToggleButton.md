[**@searchcraft/javascript-sdk**](https://docs.searchcraft.io/reference/sdk/js-vanilla/README.md)

***

[@searchcraft/javascript-sdk](https://docs.searchcraft.io/reference/sdk/js-vanilla/globals.md) / [JSX](https://docs.searchcraft.io/reference/sdk/js-vanilla/namespaces/JSX/README.md) / SearchcraftToggleButton

# Interface: SearchcraftToggleButton

This web component simulates a light switch functionality, providing a simple and intuitive toggle between two states—on and off.
It is consumed within the `searchcraft-filter-panel` component.

## Properties

### label?

> `optional` **label**: `string`

The label.

***

### onToggleUpdated()?

> `optional` **onToggleUpdated**: (`event`) => `void`

When the toggle element is changed.

#### Parameters

##### event

[`SearchcraftToggleButtonCustomEvent`](https://docs.searchcraft.io/reference/sdk/js-vanilla/interfaces/SearchcraftToggleButtonCustomEvent.md)\<`boolean`\>

#### Returns

`void`

***

### subLabel?

> `optional` **subLabel**: `string`

The secondary label displayed below the main label.
