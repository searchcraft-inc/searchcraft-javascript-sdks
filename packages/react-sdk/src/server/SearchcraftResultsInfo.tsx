import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The Props for the SearchcraftResultsInfo component.
 */
interface SearchcraftResultsInfoProps
  extends Components.SearchcraftResultsInfo {}

/**
 * This React server component is designed to display the number of results returned from a search query.
 */
export async function SearchcraftResultsInfo(
  props: SearchcraftResultsInfoProps,
) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-results-info',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-results-info'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
