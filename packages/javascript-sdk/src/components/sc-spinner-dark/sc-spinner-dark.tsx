import { Component, h } from '@stencil/core';

@Component({
  tag: 'sc-spinner-dark',
  styleUrl: 'sc-spinner-dark.module.scss',
  shadow: true,
})
export class ScSpinnerDark {
  render() {
    return (
      <div class='spinnerContainer'>
        <div class='spinnerDark' />
      </div>
    );
  }
}
