import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

/**
 * This web component serves as the input label for the searchcraft-input-form component.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-input-label label="Search" />
 * ```
 */
@Component({
  tag: 'searchcraft-input-label',
  shadow: false,
})
export class SearchcraftInputLabel {
  /**
   * The classname applied to the label element.
   */
  @Prop() inputLabelClassName? = '';
  @Prop() label: string;

  render() {
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
