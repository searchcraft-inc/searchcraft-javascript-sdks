# searchcraft-popover-list-item-ad



<!-- Auto Generated Below -->


## Overview

An inline ad meant to be rendered in a list of search results.

## Properties

| Property               | Attribute         | Description | Type                                                | Default     |
| ---------------------- | ----------------- | ----------- | --------------------------------------------------- | ----------- |
| `adClientResponseItem` | --                |             | `AdClientResponseItem \| undefined`                 | `undefined` |
| `adContainerId`        | `ad-container-id` |             | `string`                                            | `nanoid()`  |
| `adSource`             | `ad-source`       |             | `"Custom" \| "Nativo" \| "None" \| "adMarketplace"` | `'Custom'`  |


## Dependencies

### Used by

 - [searchcraft-base-search-results](../searchcraft-base-search-results)
 - [searchcraft-popover-list-view](../searchcraft-popover-list-view)

### Graph
```mermaid
graph TD;
  searchcraft-base-search-results --> searchcraft-ad
  searchcraft-popover-list-view --> searchcraft-ad
  style searchcraft-ad fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
