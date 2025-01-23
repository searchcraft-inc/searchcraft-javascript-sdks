/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@searchcraft/javascript-sdk';

export const SearchcraftBaseSearchResult =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftBaseSearchResult>(
    'searchcraft-base-search-result',
    () => {},
    [
      'titleContent',
      'subtitleContent',
      'bodyContent',
      'footerContent',
      'buttonLabel',
      'buttonHref',
      'buttonTarget',
      'buttonRel',
      'containerHref',
      'containerTarget',
      'containerRel',
      'imageSrc',
      'imageAlt',
      'imagePlacement',
      'customStyles',
      'documentPosition',
    ],
  );

export const SearchcraftBaseSearchResults =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftBaseSearchResults>(
    'searchcraft-base-search-results',
    () => {},
    [
      'adInterval',
      'customStylesForResults',
      'searchResultMappings',
      'placeAdAtEnd',
      'placeAdAtStart',
      'resultImagePlacement',
      'buttonLabel',
      'buttonTarget',
      'buttonRel',
      'containerTarget',
      'containerRel',
      'noResults',
    ],
    ['noResults'],
  );

export const SearchcraftButton =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftButton>(
    'searchcraft-button',
    () => {},
    ['iconElement', 'iconOnly', 'iconPosition', 'label', 'buttonClick'],
    ['buttonClick'],
  );

export const SearchcraftErrorMessage =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftErrorMessage>(
    'searchcraft-error-message',
    () => {},
    ['errorMessage'],
  );

export const SearchcraftFacetList =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftFacetList>(
    'searchcraft-facet-list',
    () => {},
    ['fieldName', 'facetSelectionUpdated'],
    ['facetSelectionUpdated'],
  );

export const SearchcraftFilterPanel =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftFilterPanel>(
    'searchcraft-filter-panel',
    () => {},
    ['items'],
  );

export const SearchcraftInputForm =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftInputForm>(
    'searchcraft-input-form',
    () => {},
    [
      'config',
      'autoSearch',
      'buttonPlacement',
      'buttonLabel',
      'inputLabel',
      'customStyles',
      'placeholderValue',
      'searchTerm',
      'debounceDelay',
      'inputCleared',
      'noResultsReceived',
      'querySubmit',
      'inputFocus',
      'inputBlur',
    ],
    [
      'inputCleared',
      'noResultsReceived',
      'querySubmit',
      'inputFocus',
      'inputBlur',
    ],
  );

export const SearchcraftInputLabel =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftInputLabel>(
    'searchcraft-input-label',
    () => {},
    ['inputLabelClassName', 'label'],
  );

export const SearchcraftPopoverForm =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftPopoverForm>(
    'searchcraft-popover-form',
    () => {},
    ['config', 'type', 'popoverResultMappings'],
  );

export const SearchcraftPopoverListView =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftPopoverListView>(
    'searchcraft-popover-list-view',
    () => {},
    ['popoverResultMappings'],
  );

export const SearchcraftPopoverResult =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftPopoverResult>(
    'searchcraft-popover-result',
    () => {},
  );

export const SearchcraftResultsInfo =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftResultsInfo>(
    'searchcraft-results-info',
    () => {},
  );

export const SearchcraftSlider =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftSlider>(
    'searchcraft-slider',
    () => {},
    ['max', 'min', 'granularity', 'dataType', 'rangeChanged'],
    ['rangeChanged'],
  );

export const SearchcraftToggleButton =
  /*@__PURE__*/ defineContainer<JSX.SearchcraftToggleButton>(
    'searchcraft-toggle-button',
    () => {},
    ['label', 'subLabel', 'toggleUpdated'],
    ['toggleUpdated'],
  );
