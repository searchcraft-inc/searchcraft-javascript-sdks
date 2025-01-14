import { Component, h } from '@stencil/core';

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
