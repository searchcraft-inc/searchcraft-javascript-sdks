import { Component, Prop, h, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-input-label',
  styleUrl: 'searchcraft-input-label.module.scss',
  shadow: false,
})
export class SearchcraftInputLabel {
  @Prop() inputLabelClassName? = '';
  @Prop() label?: string;
  @State() theme = 'light';

  private isLightTheme() {
    return this.theme === 'light';
  }

  render() {
    if (!this.label) {
      return null;
    }
    const labelStyle = this.isLightTheme() ? 'labelLight' : 'labelDark';
    return (
      <label
        class={classNames(
          labelStyle,
          this.inputLabelClassName,
          'searchcraft-input-label',
        )}
        htmlFor='searchcraft-input-id'
      >
        {this.label}
      </label>
    );
  }
}
