# sc-base-search-result



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type                | Default   |
| ------------------ | ------------------- | ----------- | ------------------- | --------- |
| `buttonText`       | `button-text`       |             | `string`            | `''`      |
| `customStyles`     | `custom-styles`     |             | `string`            | `'{}'`    |
| `documentPosition` | `document-position` |             | `number`            | `0`       |
| `imageDescription` | `image-description` |             | `string`            | `''`      |
| `imageSource`      | `image-source`      |             | `string`            | `''`      |
| `isInteractive`    | `is-interactive`    |             | `boolean`           | `false`   |
| `linkHref`         | `link-href`         |             | `string`            | `''`      |
| `placeImageRight`  | `place-image-right` |             | `boolean`           | `false`   |
| `primaryContent`   | `primary-content`   |             | `string`            | `''`      |
| `secondaryContent` | `secondary-content` |             | `string`            | `''`      |
| `subtitleContent`  | `subtitle-content`  |             | `string`            | `''`      |
| `tertiaryContent`  | `tertiary-content`  |             | `string`            | `''`      |
| `themeMode`        | `theme-mode`        |             | `"dark" \| "light"` | `'light'` |
| `titleContent`     | `title-content`     |             | `string`            | `''`      |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `buttonCallback`  |             | `CustomEvent<any>` |
| `keyDownCallback` |             | `CustomEvent<any>` |
| `resultCallback`  |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [searchcraft-base-search-results](../searchcraft-base-search-results)

### Graph
```mermaid
graph TD;
  searchcraft-base-search-results --> searchcraft-base-search-result
  style searchcraft-base-search-result fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
