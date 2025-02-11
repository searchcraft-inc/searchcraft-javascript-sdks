import type { QueryItem, QueryObject, SearchParams } from '../types';

/**
 * Builds a query object for the search request.
 * @param {SearchParams} searchParams - The parameters for the search.
 * @returns {QueryObject} - A properly formatted query object.
 */
export function buildQueryObject(searchParams: SearchParams): QueryObject {
  const queryItems: QueryItem[] = [];
  let occur: 'must' | 'should' = 'should';

  if (searchParams.facetPathsForIndexFields) {
    Object.keys(searchParams.facetPathsForIndexFields).forEach((fieldName) => {
      const item = searchParams.facetPathsForIndexFields?.[fieldName];
      if (item) {
        occur = 'must';
        queryItems.push({
          occur,
          exact: {
            ctx: item.value,
          },
        });
      }
    });
  }

  if (searchParams.rangeValueForIndexFields) {
    Object.keys(searchParams.rangeValueForIndexFields).forEach((fieldName) => {
      const item = searchParams.rangeValueForIndexFields?.[fieldName];
      if (item) {
        occur = 'must';
        queryItems.push({
          occur,
          exact: {
            ctx: item.value,
          },
        });
      }
    });
  }

  if (searchParams.sort === 'desc') {
    searchParams.order_by = 'date_published';
  } else {
    searchParams.order_by = '';
  }

  queryItems.push({
    occur, // Valid, as 'occur' is a required property in QueryItem
    [searchParams.mode]: { ctx: searchParams.searchTerm }, // Ensure dynamic mode is inside queryType
  });

  return queryItems;
}
