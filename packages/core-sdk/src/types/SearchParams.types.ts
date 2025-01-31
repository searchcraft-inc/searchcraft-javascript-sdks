export type FacetPathsForIndexField = {
  fieldName: string;
  value: string;
};

export type RangeValueForIndexField = {
  fieldName: string;
  value: string;
};

/**
 * Represents a single condition in a complex query.
 */
export interface QueryItem {
  occur?: string;
  exact?: { ctx: string };
  fuzzy?: { ctx: string };
}

/**
 * Represents a simple query structure with a mode and context string.
 */
export type SimpleQuery = {
  [mode: string]: { ctx: string };
};

/**
 * Represents a complex query structure supporting multiple conditions.
 */
export type ComplexQuery = QueryItem[];

/**
 * QueryObject type can be either a simple or complex query.
 */
export type QueryObject = SimpleQuery | ComplexQuery;

/**
 * Parameters required to make a successful Search request.
 */
export type SearchParams = {
  /**
   * The search mode, which can be either 'fuzzy' or 'exact'.
   */
  mode: 'fuzzy' | 'exact';

  /**
   * The starting point for the results, used for pagination.
   * Optional parameter.
   */
  offset?: number;

  /**
   * The field to order the results by (e.g., 'date_published', 'title', etc.).
   * Optional parameter.
   */
  order_by?: string;

  /**
   * The search term provided by the user.
   */
  searchTerm: string;

  /**
   * The sort order, which can be either 'asc' or 'desc'.
   * Optional parameter.
   */
  sort?: 'asc' | 'desc';

  facetPathsForIndexFields?: Record<string, FacetPathsForIndexField>;
  rangeValueForIndexFields?: Record<string, RangeValueForIndexField>;
};
