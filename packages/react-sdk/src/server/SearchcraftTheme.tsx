import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The Props for the SearchcraftTheme component.
 */
interface SearchcraftThemeProps extends Components.SearchcraftTheme {}

/**
 * A react server component that applies Searchcraft's built-in CSS theme to your page.
 * It does not render anything visible—its only function is to manage the CSS styles on the page.
 */
export async function SearchcraftTheme(props: SearchcraftThemeProps) {
  const { tag, html } = await getSearchcraftHtml('searchcraft-theme', props);

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-theme'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
