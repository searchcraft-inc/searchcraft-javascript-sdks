import type {
  FacetPathsForIndexField,
  FacetPrime,
  RangeValueForIndexField,
  Logger,
  SearchcraftCore,
  SearchClientResponseItem,
  AdClientResponseItem,
  SearchcraftResponse,
} from '@searchcraft/core';

/**
 * Callable functions made available by the SearchcraftStore.
 */
export interface SearchcraftStateFunctions {
  addFacetPathsForIndexField: (field: FacetPathsForIndexField) => void;
  addRangeValueForIndexField: (field: RangeValueForIndexField) => void;
  getSearchcraftCore: () => SearchcraftCore | undefined;
  init: (searchcraft: SearchcraftCore | undefined, debug?: boolean) => void;
  removeFacetPathsForIndexField: (fieldName: string) => void;
  removeRangeValueForIndexField: (fieldName: string) => void;
  resetFacetPaths: () => void;
  search: () => Promise<void>;
  set: (
    state:
      | Partial<SearchcraftState>
      | ((state: SearchcraftState) => Partial<SearchcraftState>),
  ) => SearchcraftState;
  setAdClientResponseItems: (items: AdClientResponseItem[]) => void;
  setSearchClientResponseItemsFromResponse: (
    response: SearchcraftResponse,
    items: SearchClientResponseItem[],
  ) => void;
  setInitialSearchClientResponseItemsFromResponse: (
    response: SearchcraftResponse,
    items: SearchClientResponseItem[],
  ) => void;
  setInitialQuery: (query: string) => void;
  setPopoverVisibility: (isVisible: boolean) => void;
  setSearchResultsCount: (count: number) => void;
  setSearchClientResponseItems: (items: SearchClientResponseItem[]) => void;
  setSearchResultsPage: (page: number) => void;
  setSearchResultsPerPage: (perPage: number) => void;
  setSearchTerm: (searchTerm: string) => void;
  setSearchMode: (mode: 'fuzzy' | 'exact') => void;
  setSortOrder: (props: {
    orderByField: string | null;
    sortType: 'asc' | 'desc' | null;
  }) => void;
  setHotKeyAndHotKeyModifier: (
    hotkey?: string,
    hotkeyModifier?: 'ctrl' | 'meta' | 'alt' | 'option',
  ) => void;
}

/**
 * Values stored in SearchcraftStore.
 */
export interface SearchcraftStateValues {
  adClientResponseItems: AdClientResponseItem[];
  core: SearchcraftCore | undefined;
  hotkey: string;
  hotkeyModifier: 'ctrl' | 'meta' | 'alt' | 'option';
  logger: Logger | undefined;
  facetPathsForIndexFields: Record<string, FacetPathsForIndexField>;
  initialQuery: string;
  initialSearchClientResponseItems: SearchClientResponseItem[];
  isPopoverVisible: boolean;
  isSearchInProgress: boolean;
  rangeValueForIndexFields: Record<string, RangeValueForIndexField>;
  searchMode: 'fuzzy' | 'exact';
  searchClientResponseItems: SearchClientResponseItem[];
  searchResponseTimeTaken: number | undefined;
  searchResponseFacetPrime: FacetPrime | undefined | null;
  searchResultsCount: number;
  searchResultsPage: number;
  searchResultsPerPage: number;
  searchTerm: string;
  orderByField: string | undefined | null;
  sortType: 'asc' | 'desc' | undefined | null;
  // Callbacks
  afterInit: (state: SearchcraftState) => void;
}

export interface SearchcraftState
  extends SearchcraftStateFunctions,
    SearchcraftStateValues {}
