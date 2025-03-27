import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The props for the SearchcraftSearchResults server component.
 */
interface SearchcraftSearchResultsProps
  extends Components.SearchcraftSearchResults {}

/**
 * A react server component that renders a list of search results with customizable styles, layout, and link behavior.
 */
export async function SearchcraftSearchResults(
  props: SearchcraftSearchResultsProps,
) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-search-results',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-search-results'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
