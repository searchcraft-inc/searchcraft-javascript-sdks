import { Component, Prop, h, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'sc-input-label',
  styleUrl: 'sc-input-label.module.scss',
  shadow: true,
})
export class ScInputLabel {
  @Prop() inputLabelClassName? = '';
  @Prop() label = 'Enter Search';
  @State() theme = 'light';

  private isLightTheme() {
    return this.theme === 'light';
  }

  render() {
    const labelStyle = this.isLightTheme ? 'labelLight' : 'labelDark';
    return (
      <label
        class={classNames(labelStyle, this.inputLabelClassName)}
        htmlFor='searchcraft-input-id'
      >
        {this.label}
      </label>
    );
  }
}
