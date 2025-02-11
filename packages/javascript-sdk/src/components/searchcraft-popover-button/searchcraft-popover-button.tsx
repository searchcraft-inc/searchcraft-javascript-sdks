import { searchcraftStore } from '@store';
import { Component, h } from '@stencil/core';

/**
 * Renders a button which, when clicked, turns on popover visibility.
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
      <button type='button' onClick={this.handleOnClick.bind(this)}>
        <slot />
      </button>
    );
  }
}
