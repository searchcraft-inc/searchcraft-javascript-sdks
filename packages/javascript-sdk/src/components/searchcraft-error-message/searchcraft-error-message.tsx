import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-error-message',
  styleUrl: 'searchcraft-error-message.module.scss',
  shadow: true,
})
export class SearchcraftErrorMessage {
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
