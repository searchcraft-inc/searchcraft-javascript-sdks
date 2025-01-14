import { Component, h, Event, Prop, type EventEmitter } from '@stencil/core';

import type { SearchcraftConfig } from 'components';

@Component({
  tag: 'searchcraft-base-search-form',
  styleUrl: 'searchcraft-base-search-form.module.scss',
  shadow: false,
})
export class SearchcraftBaseSearchForm {
  @Prop() config: SearchcraftConfig | undefined;
  @Prop() errorMessage = 'Search was unsuccessful';
  @Prop() inputLabel = 'Search';
  @Prop() buttonLabel = 'Find';
  @Prop() buttonPlacement: 'right' | 'left' = 'right';
  @Prop() placeholderValue = 'Search here';

  @Event() inputCleared: EventEmitter<void>;

  render() {
    return (
      <searchcraft-input
        config={this.config}
        autoSearch={false}
        buttonPlacement={this.buttonPlacement}
        buttonLabel={this.buttonLabel}
        inputLabel={this.inputLabel}
        onInputCleared={() => this.inputCleared.emit()}
        placeholder-value={this.placeholderValue}
      />
    );
  }
}
