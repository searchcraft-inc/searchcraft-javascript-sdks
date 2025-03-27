import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The props for the SearchcraftPopoverForm component.
 */
interface SearchcraftPopoverFormProps
  extends Components.SearchcraftPopoverForm {}

/**
 * A react server component that displays search results in a popover container that dynamically appears
 * when the user interacts with a search input field, or when a popover button is clicked.
 */
export async function SearchcraftPopoverForm(
  props: SearchcraftPopoverFormProps,
) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-popover-form',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-popover-form'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
