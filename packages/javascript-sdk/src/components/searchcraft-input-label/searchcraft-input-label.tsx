import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

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
      <label
        class={classNames('searchcraft-input-label', this.inputLabelClassName)}
        htmlFor='searchcraft-input-id'
      >
        {this.label}
      </label>
    );
  }
}
