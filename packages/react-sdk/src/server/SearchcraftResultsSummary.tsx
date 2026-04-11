import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The Props for the SearchcraftResultsSummary component.
 */
export interface SearchcraftResultsSummaryProps
  extends Components.SearchcraftResultsSummary {}

/**
 * This React component displays an ai-generated results summary of the given search term.
 */
export async function SearchcraftResultsSummary(
  props: SearchcraftResultsSummaryProps,
) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-results-summary',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchcraft-results-summary'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
