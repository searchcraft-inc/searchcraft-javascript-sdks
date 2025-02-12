import type {
  FacetPathsForIndexField,
  FacetPrime,
  RangeValueForIndexField,
  Logger,
  SearchcraftCore,
  SearchClientResponseItem,
  AdClientResponseItem,
} from '@searchcraft/core';

/**
 * Callable functions made available by the SearchcraftStore.
 */
export interface SearchcraftStateFunctions {
  addFacetPathsForIndexField: (data: FacetPathsForIndexField) => void;
  addRangeValueForIndexField: (data: RangeValueForIndexField) => void;
  getSearchcraftInstance: () => SearchcraftCore | undefined;
  initialize: (searchcraft: unknown, debug?: boolean) => void;
  removeFacetPathsForIndexField: (fieldName: string) => void;
  removeRangeValueForIndexField: (fieldName: string) => void;
  resetFacetPaths: () => void;
  search: () => Promise<void>;
  setPopoverVisibility: (isVisible: boolean) => void;
  setSearchClientResponseItems: (results: SearchClientResponseItem[]) => void;
  setSearchResultsPage: (page: number) => void;
  setSearchResultsPerPage: (perPage: number) => void;
  setSearchTerm: (searchTerm: string) => void;
  setSearchMode: (mode: 'fuzzy' | 'exact') => void;
  setSortType: (type: 'asc' | 'desc') => void;
}

/**
 * Values stored in SearchcraftStore.
 */
export interface SearchcraftStateValues {
  adClientResponseItems: AdClientResponseItem[];
  core: SearchcraftCore | undefined;
  logger: Logger | undefined;
  facetPathsForIndexFields: Record<string, FacetPathsForIndexField>;
  isPopoverVisible: boolean;
  isSearchInProgress: boolean;
  rangeValueForIndexFields: Record<string, RangeValueForIndexField>;
  searchMode: 'fuzzy' | 'exact';
  searchClientResponseItems: SearchClientResponseItem[];
  searchResponseTimeTaken: number | undefined;
  searchResponseFacetPrime: FacetPrime | undefined;
  searchResultsCount: number;
  searchResultsPage: number;
  searchResultsPerPage: number;
  searchTerm: string;
  sortType: 'asc' | 'desc';
}

export interface SearchcraftState
  extends SearchcraftStateFunctions,
    SearchcraftStateValues {}
