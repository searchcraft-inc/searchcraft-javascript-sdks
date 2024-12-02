import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'sc-error-message',
  styleUrl: 'sc-error-message.module.scss',
  shadow: true, // Enable shadow DOM if desired
})
export class ErrorMessage {
  /**
   * The error message to display. Defaults to a standard message if not provided.
   */
  @Prop() errorMessage?: string;

  /**
   * The theme, which determines the style (light or dark).
   */
  @Prop() theme: 'light' | 'dark' = 'light';

  render() {
    const errorMessageStyle =
      this.theme === 'light' ? 'errorMessageLight' : 'errorMessageDark';

    return (
      <p class={classNames(errorMessageStyle)}>
        {this.errorMessage || 'Search term is required.'}
      </p>
    );
  }
}
