import type {
  FacetPathsForIndexField,
  FacetPrime,
  RangeValueForIndexField,
  SDKDebugger,
  SearchcraftCore,
  SearchcraftResponse,
} from '@searchcraft/core';

/**
 * Callable functions made available by the SearchcraftStore.
 */
export interface SearchcraftStateFunctions {
  addFacetPathsForIndexField: (data: FacetPathsForIndexField) => void;
  addRangeValueForIndexField: (data: RangeValueForIndexField) => void;
  getSearchcraftInstance: () => SearchcraftCore | undefined;
  initialize: (searchcraft: SearchcraftCore, debug?: boolean) => void;
  removeFacetPathsForIndexField: (fieldName: string) => void;
  removeRangeValueForIndexField: (fieldName: string) => void;
  resetFacetPaths: () => void;
  search: () => Promise<void>;
  setFacets: (facets: FacetPrime) => void;
  setPopoverVisibility: (isVisible: boolean) => void;
  setSearchResults: (results: SearchcraftResponse | null) => void;
  setSearchTerm: (searchTerm: string) => void;
  setSearchMode: (mode: 'fuzzy' | 'exact') => void;
  setSortType: (type: 'asc' | 'desc') => void;
}

/**
 * Values stored in SearchcraftStore.
 */
export interface SearchcraftStateValues {
  core: SearchcraftCore | undefined;
  logger: SDKDebugger | undefined;
  facets: FacetPrime | undefined;
  facetPathsForIndexFields: Record<string, FacetPathsForIndexField>;
  isPopoverVisible: boolean;
  rangeValueForIndexFields: Record<string, RangeValueForIndexField>;
  searchMode: 'fuzzy' | 'exact';
  searchResults: SearchcraftResponse | null;
  searchTerm: string;
  sortType: 'asc' | 'desc';
}

export interface SearchcraftState
  extends SearchcraftStateFunctions,
    SearchcraftStateValues {}
