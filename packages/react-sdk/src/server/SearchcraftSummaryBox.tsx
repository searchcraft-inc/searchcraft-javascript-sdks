import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The Props for the SearchcraftSummaryBox component.
 */
interface SearchcraftSummaryBoxProps extends Components.SearchcraftSummaryBox {}

/**
 * This React component displays an ai-generated summary of the given search term.
 */
export async function SearchcraftSummaryBox(props: SearchcraftSummaryBoxProps) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-summary-box',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-summary-box'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
