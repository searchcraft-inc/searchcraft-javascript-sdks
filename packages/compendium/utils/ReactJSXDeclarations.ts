import type { Components } from '@searchcraft/javascript-sdk';

type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<First>}${KebabCase<Rest>}`
    : `${Uncapitalize<First>}-${KebabCase<Rest>}`
  : S;

type StencilFriendlyKeys<T> = Partial<{
  [K in keyof T as K extends string ? KebabCase<K> : K]: T[K];
}>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'searchcraft-ad': StencilFriendlyKeys<Components.SearchcraftAd>;
      'searchcraft-base-search-result': StencilFriendlyKeys<Components.SearchcraftBaseSearchResult>;
      'searchcraft-base-search-results': StencilFriendlyKeys<Components.SearchcraftBaseSearchResults>;
      'searchcraft-button': StencilFriendlyKeys<Components.SearchcraftButton>;
      'searchcraft-error-message': StencilFriendlyKeys<Components.SearchcraftErrorMessage>;
      'searchcraft-facet-list': StencilFriendlyKeys<Components.SearchcraftFacetList>;
      'searchcraft-filter-panel': StencilFriendlyKeys<Components.SearchcraftFilterPanel>;
      'searchcraft-input-form': StencilFriendlyKeys<Components.SearchcraftInputForm>;
      'searchcraft-input-label': StencilFriendlyKeys<Components.SearchcraftInputLabel>;
      'searchcraft-pagination': StencilFriendlyKeys<Components.SearchcraftPagination>;
      'searchcraft-popover-button': StencilFriendlyKeys<Components.SearchcraftPopoverButton>;
      'searchcraft-popover-form': StencilFriendlyKeys<Components.SearchcraftPopoverForm>;
      'searchcraft-popover-list-item': StencilFriendlyKeys<Components.SearchcraftPopoverListItem>;
      'searchcraft-popover-list-view': StencilFriendlyKeys<Components.SearchcraftPopoverListView>;
      'searchcraft-results-info': StencilFriendlyKeys<Components.SearchcraftResultsInfo>;
      'searchcraft-search-results-per-page': StencilFriendlyKeys<Components.SearchcraftSearchResultsPerPage>;
      'searchcraft-select': StencilFriendlyKeys<Components.SearchcraftSelect>;
      'searchcraft-slider': StencilFriendlyKeys<Components.SearchcraftSlider>;
      'searchcraft-theme': StencilFriendlyKeys<Components.SearchcraftTheme>;
      'searchcraft-toggle-button': StencilFriendlyKeys<Components.SearchcraftToggleButton>;
    }
  }
}
