/**
 * A Facet object returned in a search response.
 */
export type FacetRoot = {
  [key: string]: FacetChild[];
};

export type FacetPrime = FacetRoot[];

/**
 * Represents the structure of facets, which group search results into categories.
 */
export interface FacetChild {
  count: number;
  path: string;
  children?: FacetChild[];
}

export interface FacetChildObject {
  count: number;
  path: string;
  children: Record<string, FacetChildObject>;
}
