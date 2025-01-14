import { Component, Prop, Event, type EventEmitter, h } from '@stencil/core';

import type { SearchcraftConfig } from '@searchcraft/core';

import { parseCustomStyles } from '@utils/utils';

@Component({
  tag: 'searchcraft-auto-search-form',
  styleUrl: 'searchcraft-auto-search-form.module.scss',
  shadow: false,
})
export class SearchcraftAutoSearchForm {
  @Prop() autoSearchFormClass = '';
  @Prop() config: SearchcraftConfig | undefined;
  @Prop() customStylesForInput: string | Record<string, string> = {};
  @Prop() inputCaptionValue = '';
  @Prop() inputLabel = '';
  @Prop() placeholderValue = 'Search here';

  @Event() inputCleared: EventEmitter<void>;
  @Event() querySubmit: EventEmitter<string>;

  render() {
    const parsedCustomStyles = parseCustomStyles(this.customStylesForInput);
    return (
      <searchcraft-input
        config={this.config}
        autoSearch={true}
        buttonPlacement='none'
        inputLabel={this.inputLabel}
        customStyles={parsedCustomStyles}
        onInputCleared={() => this.inputCleared.emit()}
        placeholder-value={this.placeholderValue}
      />
    );
  }
}
