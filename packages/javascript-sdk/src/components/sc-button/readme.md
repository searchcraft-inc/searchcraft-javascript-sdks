# sc-button



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default     |
| -------------- | --------------- | ----------- | --------- | ----------- |
| `iconElement`  | --              |             | `Element` | `undefined` |
| `iconOnly`     | `icon-only`     |             | `boolean` | `false`     |
| `iconPosition` | `icon-position` |             | `string`  | `'left'`    |
| `label`        | `label`         |             | `string`  | `'Search'`  |


## Events

| Event         | Description | Type                |
| ------------- | ----------- | ------------------- |
| `buttonClick` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [sc-base-search-form](../sc-base-search-form)

### Depends on

- [sc-spinner-dark](../sc-spinner-dark)

### Graph
```mermaid
graph TD;
  sc-button --> sc-spinner-dark
  sc-base-search-form --> sc-button
  style sc-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
