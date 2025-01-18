import { Component, h, Prop } from '@stencil/core';
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
   * Formats the content rendered for each result.
   */
  @Prop() popoverResultMappings: PopoverResultMappings | undefined;

  componentDidLoad() {}

  connectedCallback() {}

  disconnectedCallback() {}

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <p>[popover list view]</p>
      </div>
    );
  }
}
