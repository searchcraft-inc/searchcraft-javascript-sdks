import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'searchcraft-input-label',
  styleUrl: 'searchcraft-input-label.module.scss',
  shadow: false,
})
export class SearchcraftInputLabel {
  @Prop() inputLabelClassName? = '';
  @Prop() label?: string;

  render() {
    if (!this.label) {
      return null;
    }
    return (
      <label class='searchcraft-input-label' htmlFor='searchcraft-input-id'>
        {this.label}
      </label>
    );
  }
}
