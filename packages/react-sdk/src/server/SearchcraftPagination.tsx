import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The props for the SearchcraftPagination component.
 */
interface SearchcraftPaginationProps extends Components.SearchcraftPagination {}

/**
 * This React server component is designed to facilitate pagination of search results.
 * Once a query is submitted, calculates the number for pages.
 */
export async function SearchcraftPagination(props: SearchcraftPaginationProps) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-pagination',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-pagination'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
