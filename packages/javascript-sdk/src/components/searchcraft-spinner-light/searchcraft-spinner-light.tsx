import { Component, h } from '@stencil/core';

@Component({
  tag: 'searchcraft-spinner-light',
  styleUrl: 'searchcraft-spinner-light.module.scss',
  shadow: true,
})
export class SearchcraftSpinnerLight {
  render() {
    return (
      <div class='spinnerContainer'>
        <div class='spinnerLight' />
      </div>
    );
  }
}
