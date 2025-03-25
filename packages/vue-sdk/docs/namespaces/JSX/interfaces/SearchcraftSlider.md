[**@searchcraft/vue-sdk**](/reference/sdk/js-vue/README.md)

***

[@searchcraft/vue-sdk](/reference/sdk/js-vue/globals.md) / [JSX](/reference/sdk/js-vue/namespaces/JSX/README.md) / SearchcraftSlider

# Interface: SearchcraftSlider

This web component is designed to allow users to select a value from a range defined by a minimum and maximum value.
The component renders a slider interface, which can be used to visually choose a value between two boundaries.
It is consumed by the `searchcraft-filter-panel` component.

## Properties

### dataType?

> `optional` **dataType**: `"number"` \| `"date"`

The type of data allowed.

***

### granularity?

> `optional` **granularity**: `number`

The granularity that the value must adhere to.

***

### max?

> `optional` **max**: `number`

The maximum value allowed.

***

### min?

> `optional` **min**: `number`

The minimum value allowed.

***

### onRangeChanged()?

> `optional` **onRangeChanged**: (`event`) => `void`

When the range has changed.

#### Parameters

##### event

[`SearchcraftSliderCustomEvent`](/reference/sdk/js-vue/interfaces/SearchcraftSliderCustomEvent.md)\<`any`\>

#### Returns

`void`
