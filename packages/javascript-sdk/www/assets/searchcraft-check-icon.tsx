import { Component, h } from '@stencil/core';

@Component({
  tag: 'searchcraft-check-icon',
  shadow: true,
})
export class SearchcraftCheckIcon {
  render() {
    return (
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
        <title>Checkbox Check</title>
        <path
          d='M13.9999 2L5.74988 10L1.99988 6.36364'
          stroke='white'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    );
  }
}
