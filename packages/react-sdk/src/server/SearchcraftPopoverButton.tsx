import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The props for the SearchcraftPopoverButton.
 */
interface SearchcraftPopoverButtonProps
  extends Components.SearchcraftPopoverButton {}

/**
 * A react server component that, when clicked, toggles the visibility of a popover.
 */
export async function SearchcraftPopoverButton(
  props: SearchcraftPopoverButtonProps,
) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-popover-button',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-popover-button'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
