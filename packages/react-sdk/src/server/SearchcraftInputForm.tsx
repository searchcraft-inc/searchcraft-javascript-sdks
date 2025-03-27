import type { Components } from '@searchcraft/javascript-sdk';
import { getSearchcraftHtml } from './utils/getSearchcraftHtml';

/**
 * The props for the SearchcraftInputForm.
 */
interface SearchcraftInputFormProps extends Components.SearchcraftInputForm {}

/**
 * A react server component that provides a user-friendly interface for querying an indexed dataset,
 * enabling users to easily search large collections of data. It abstracts the complexities
 * of index-based searching, making it accessible to users of all technical levels.
 */
export async function SearchcraftInputForm(props: SearchcraftInputFormProps) {
  const { tag, html } = await getSearchcraftHtml(
    'searchcraft-input-form',
    props,
  );

  return (
    <div
      data-sc-component
      data-sc-tag-name='searchraft-input-form'
      data-sc-tag={tag}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html as TrustedHTML }}
    />
  );
}
