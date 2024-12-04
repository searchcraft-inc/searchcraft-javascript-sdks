import { Component, Prop, h, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-input-label',
  styleUrl: 'searchcraft-input-label.module.scss',
  shadow: true,
})
export class SearchcraftInputLabel {
  @Prop() inputLabelClassName? = '';
  @Prop() label?: string; // Make label optional
  @State() theme = 'light';

  private isLightTheme() {
    return this.theme === 'light';
  }

  render() {
    // Render nothing if no label prop is provided
    if (!this.label) {
      return null;
    }

    const labelStyle = this.isLightTheme() ? 'labelLight' : 'labelDark';

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
