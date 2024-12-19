import { Component, h } from '@stencil/core';

@Component({
  tag: 'searchcraft-dash-icon',
  shadow: true,
})
export class SearchcraftDashIcon {
  render() {
    return (
      <svg width='14' height='3' viewBox='0 0 14 3' fill='none'>
        <title>Checkbox Dash</title>
        <line
          x1='1.5'
          y1='1.5'
          x2='12.5'
          y2='1.5'
          stroke='white'
          stroke-width='3'
          stroke-linecap='round'
        />
      </svg>
    );
  }
}
