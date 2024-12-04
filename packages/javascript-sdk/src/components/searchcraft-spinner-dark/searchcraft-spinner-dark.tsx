import { Component, h } from '@stencil/core';

@Component({
  tag: 'searchcraft-spinner-dark',
  styleUrl: 'searchcraft-spinner-dark.module.scss',
  shadow: true,
})
export class SearchcraftSpinnerDark {
  render() {
    return (
      <div class='spinnerContainer'>
        <div class='spinnerDark' />
      </div>
    );
  }
}
