import { Component, h } from '@stencil/core';

/**
 * This web component is designed to display the content for a single result within a popover list item.
 * It is consumed within the `searchcraft-popover-list-view` component.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-result />
 * ```
 */
@Component({
  tag: 'searchcraft-popover-result',
  styleUrl: 'searchcraft-popover-result.module.scss',
  shadow: false,
})
export class SearchcraftPopoverResult {
  componentDidLoad() {}

  connectedCallback() {}

  disconnectedCallback() {}

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <p>[popover result]</p>
      </div>
    );
  }
}
