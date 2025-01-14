import { Component, Prop, h } from '@stencil/core';

import type { SearchcraftConfig } from '@searchcraft/core';

import type { PopoverResultMappings } from 'types';

@Component({
  tag: 'searchcraft-popover-form',
  styleUrl: 'searchcraft-popover-form.module.scss',
  shadow: false,
})
export class SearchcraftPopoverForm {
  @Prop() config: SearchcraftConfig | undefined;
  @Prop() type: 'inline' | 'fullscreen' | 'modal' = 'inline';
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
