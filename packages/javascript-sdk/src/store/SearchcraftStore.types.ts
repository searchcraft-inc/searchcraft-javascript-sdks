import type { StoreApi } from 'zustand';
import type {
  FacetPathsForIndexField,
  FacetPrime,
  RangeValueForIndexField,
  SearchClientResponseItem,
  AdClientResponseItem,
  SearchClientRequestProperties,
} from '@types';

import type { SearchcraftCore } from '@classes';

/**
 * Callable functions made available by the SearchcraftStore.
 */
export interface SearchcraftStateFunctions {
  addFacetPathsForIndexField: (field: FacetPathsForIndexField) => void;
  addRangeValueForIndexField: (field: RangeValueForIndexField) => void;
  removeFacetPathsForIndexField: (fieldName: string) => void;
  removeRangeValueForIndexField: (fieldName: string) => void;
  resetSearchValues: () => void;
  search: () => Promise<void>;
  setPopoverVisibility: (isVisible: boolean) => void;
  setSearchResultsCount: (count: number) => void;
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
  cachedAdClientResponseItems: AdClientResponseItem[];
  core: SearchcraftCore | undefined;
  hotkey: string;
  hotkeyModifier: 'ctrl' | 'meta' | 'alt' | 'option';
  facetPathsForIndexFields: Record<string, FacetPathsForIndexField>;
  isPopoverVisible: boolean;
  isSearchInProgress: boolean;
  rangeValueForIndexFields: Record<string, RangeValueForIndexField>;
  searchMode: 'fuzzy' | 'exact';
  searchClientRequest:
    | SearchClientRequestProperties
    | string
    | undefined
    | null;
  searchClientResponseItems: SearchClientResponseItem[];
  cachedSearchClientResponseItems: SearchClientResponseItem[];
  searchResponseTimeTaken: number | undefined;
  searchResponseFacetPrime: FacetPrime | undefined | null;
  supplementalFacetPrime: FacetPrime | undefined | null;
  searchResultsCount: number;
  searchResultsPage: number;
  searchResultsPerPage: number;
  searchTerm: string;
  orderByField: string | undefined | null;
  sortType: 'asc' | 'desc' | undefined | null;
}

export interface SearchcraftState
  extends SearchcraftStateFunctions,
    SearchcraftStateValues {}

export type SearchcraftStore = StoreApi<SearchcraftState>;
