import { Component, Prop, h } from '@stencil/core';

import type { SearchcraftConfig } from '@searchcraft/core';

import type { PopoverResultMappings } from 'types';

/**
 * This web component is designed to display search results in a popover container that dynamically appears when the user interacts with a search input field.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-form type="fullscreen" />
 * ```
 *
 * ```js
 * // index.js
 * const popoverForm = document.querySelector('searchcraft-popover-form');
 *
 * popoverForm.config = {
 *   index: [],
 *   readKey: '',
 *   endpointUrl: '',
 * };
 *
 * popoverForm.popoverResultMappings = containerHref: {
 *   fieldNames: [
 *    {
 *      fieldName: 'canonical_link',
 *      dataType: 'text',
 *    },
 *  ],
 * };
 * ```
 */
@Component({
  tag: 'searchcraft-popover-form',
  styleUrl: 'searchcraft-popover-form.module.scss',
  shadow: false,
})
export class SearchcraftPopoverForm {
  /**
   * The Searchcraft config object.
   */
  @Prop() config: SearchcraftConfig | undefined;
  /**
   * How the element is displayed.
   */
  @Prop() type: 'inline' | 'fullscreen' | 'modal' = 'inline';
  /**
   * Formats the content rendered for each result.
   */
  @Prop() popoverResultMappings: PopoverResultMappings | undefined;

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
        <searchcraft-input
          onInputFocus={() => console.log('focused')}
          onInputBlur={() => console.log('blurred')}
        />
        <searchcraft-popover-list-view
          popoverResultMappings={this.popoverResultMappings}
        />
      </div>
    );
  }
}
