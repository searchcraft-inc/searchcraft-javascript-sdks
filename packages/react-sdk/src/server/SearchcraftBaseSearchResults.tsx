import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The props for the SearchcraftBaseSearchResults server component.
 */
interface SearchcraftBaseSearchResultsProps
  extends Components.SearchcraftBaseSearchResults {}

/**
 * A react server component that renders a list of search results with customizable styles, layout, and link behavior.
 */
export async function SearchcraftBaseSearchResults(
  props: SearchcraftBaseSearchResultsProps,
) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-base-search-results',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-base-search-results'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
