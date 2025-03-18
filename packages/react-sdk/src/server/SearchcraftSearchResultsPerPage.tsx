import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The Props for the SearchcraftSearchResultsPerPage component.
 */
interface SearchcraftSearchResultsPerPageProps
  extends Components.SearchcraftSearchResultsPerPage {}

/**
 * This React server component is designed to choose the number of search results displayed.
 */
export async function SearchcraftSearchResultsPerPage(
  props: SearchcraftSearchResultsPerPageProps,
) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-search-results-per-page',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-search-results-per-page'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
