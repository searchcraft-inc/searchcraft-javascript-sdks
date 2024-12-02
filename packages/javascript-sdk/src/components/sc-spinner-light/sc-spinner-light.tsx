import { Component, h } from '@stencil/core';

@Component({
  tag: 'sc-spinner-light',
  styleUrl: 'sc-spinner-light.module.scss',
  shadow: true,
})
export class ScSpinnerLight {
  render() {
    return (
      <div class='spinnerContainer'>
        <div class='spinnerLight' />
      </div>
    );
  }
}
