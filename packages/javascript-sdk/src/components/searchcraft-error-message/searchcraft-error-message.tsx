import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-error-message',
  styleUrl: 'searchcraft-error-message.module.scss',
  shadow: false,
})
export class SearchcraftErrorMessage {
  @Prop() errorMessage?: string;
  @Prop() theme: 'light' | 'dark' = 'light';

  render() {
    const errorMessageStyle =
      this.theme === 'light' ? 'errorMessageLight' : 'errorMessageDark';

    return (
      <p class={classNames(errorMessageStyle, 'searchcraft-error-message')}>
        {this.errorMessage || 'Search term is required.'}
      </p>
    );
  }
}
