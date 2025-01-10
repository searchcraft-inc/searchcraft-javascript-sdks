import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'searchcraft-error-message',
  styleUrl: 'searchcraft-error-message.module.scss',
  shadow: false,
})
export class SearchcraftErrorMessage {
  @Prop() errorMessage?: string;

  render() {
    return (
      <p class='searchcraft-error-message'>
        {this.errorMessage || 'Search term is required.'}
      </p>
    );
  }
}
