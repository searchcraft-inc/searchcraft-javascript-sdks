import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'searchcraft-clear-icon-set',
  shadow: true,
})
export class SearchcraftClearIconSet {
  /**
   * Type of the icon to display.
   * Options: 'clear-light', 'clear-dark', 'arrow-light', 'arrow-dark'
   */
  @Prop() type: 'clear-light' | 'clear-dark' | 'arrow-light' | 'arrow-dark' =
    'clear-light';

  render() {
    switch (this.type) {
      case 'clear-light':
        return (
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='icon-title'
          >
            <title id='icon-title'>Searchcraft Clear Input Icon Light</title>
            <path
              d='M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
              stroke='black'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        );
      case 'clear-dark':
        return (
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='icon-title'
          >
            <title id='icon-title'>Searchcraft Clear Input Icon Dark</title>
            <path
              d='M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
              stroke='white'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        );
      case 'arrow-light':
        return (
          <svg
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='icon-title'
          >
            <title id='icon-title'>Searchcraft Arrow Right Icon Light</title>
            <path
              d='M7.5 15.0444L12.5 10.0444L7.5 5.04443'
              stroke='#737373'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        );
      case 'arrow-dark':
        return (
          <svg
            width='8'
            height='12'
            viewBox='0 0 8 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='icon-title'
          >
            <title id='icon-title'>Searchcraft Arrow Right Icon Dark</title>
            <path
              d='M1.5 11L6.5 6L1.5 1'
              stroke='#BFBFBF'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        );

      default:
        return null;
    }
  }
}
