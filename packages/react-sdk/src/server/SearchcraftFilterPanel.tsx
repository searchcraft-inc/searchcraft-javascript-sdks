import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The props for the SearchcraftFilterPanel.
 */
interface SearchcraftFilterPanelProps
  extends Components.SearchcraftFilterPanel {}

/**
 * A react server component that represents a filter panel UI view, allowing users to refine and control their search queries by applying various filter criteria.
 */
export async function SearchcraftFilterPanel(
  props: SearchcraftFilterPanelProps,
) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-filter-panel',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-filter-panel'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
