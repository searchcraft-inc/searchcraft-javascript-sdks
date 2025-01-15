import { Component, h, Prop } from '@stencil/core';
import type { PopoverResultMappings } from 'types';

@Component({
  tag: 'searchcraft-popover-list-view',
  styleUrl: 'searchcraft-popover-list-view.module.scss',
  shadow: false,
})
export class SearchcraftPopoverListView {
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
