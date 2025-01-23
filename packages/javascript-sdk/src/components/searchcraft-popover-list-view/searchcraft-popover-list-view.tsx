import { Component, h, Prop } from '@stencil/core';

import { getDocumentValueFromSearchResultMapping } from '@utils';
import type { PopoverResultMappings } from 'types';

/**
 * This web component is designed to display a list of results within a popover interface.
 * It is consumed within the `searchcraft-popover-form` component.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-list-view />
 * ```
 */
@Component({
  tag: 'searchcraft-popover-list-view',
  styleUrl: 'searchcraft-popover-list-view.module.scss',
  shadow: false,
})
export class SearchcraftPopoverListView {
  /**
   * The mappings that define how the data in the documents are mapped to the
   * list-view-item elements.
   */
  @Prop() popoverResultMappings: PopoverResultMappings | undefined;
  /**
   * The documents to render in the list view.
   */
  @Prop() documents: Record<string, unknown>[] | undefined;

  renderDocument(document: Record<string, unknown>, index: number) {
    /**
     * Index field values -> Result container props mappings.
     */
    const titleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings.title,
    );
    const subtitleContent = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings.subtitle,
    );
    const href = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings.href,
    );
    const imageSource = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings.imageSource,
    );
    const imageAlt = getDocumentValueFromSearchResultMapping(
      document,
      this.popoverResultMappings.imageAlt,
    );

    return (
      <searchcraft-popover-list-item
        key={`${document.document_id}-${index}`}
        title-content={titleContent}
        subtitle-content={subtitleContent}
        image-src={imageSource}
        image-alt={imageAlt}
        href={href}
        document-position={index}
      />
    );
  }

  render() {
    return (
      <div class='searchcraft-popover-list-view'>
        {this.documents?.map((document, index) =>
          this.renderDocument(document, index),
        )}
      </div>
    );
  }
}
