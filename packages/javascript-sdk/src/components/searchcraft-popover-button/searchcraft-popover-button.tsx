import { searchcraftStore } from '@store';
import { Component, h } from '@stencil/core';

/**
 * Renders a button which, when clicked, turns on popover visibility.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftPopoverButton } from "@searchcraft/react-sdk";
 * ````
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftPopoverButton } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <searchcraft-popover-button>
 *   Open popover
 * </searchcraft-popover-button>
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftPopoverButton>
 *   Open popover
 * </SearchcraftPopoverButton>
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftPopoverButton>
 *   Open popover
 * </SearchcraftPopoverButton>
 * ```
 */
@Component({
  tag: 'searchcraft-popover-button',
  shadow: false,
})
export class SearchcraftPopoverButton {
  handleOnClick() {
    searchcraftStore.getState().setPopoverVisibility(true);
  }

  render() {
    return (
      <button
        class='searchcraft-popover-button'
        onClick={this.handleOnClick.bind(this)}
        type='button'
      >
        <slot />
      </button>
    );
  }
}
