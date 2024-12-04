import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'searchcraft-icon-set',
  shadow: true,
})
export class SearchcraftIconSet {
  /**
   * Type of the icon to display.
   * Options: ''search-light', search-dark', 'error-light', 'error-dark'
   */
  @Prop() type: 'search-light' | 'search-dark' | 'error-light' | 'error-dark' =
    'search-dark';

  render() {
    switch (this.type) {
      case 'search-light':
        return (
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='searchcraft-title'
          >
            <title id='searchcraft-title'>Searchcraft Search Icon Light</title>
            <path
              d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
              stroke='#404040'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        );
      case 'search-dark':
        return (
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='searchcraft-title'
          >
            <title id='searchcraft-title'>Searchcraft Search Icon Dark</title>
            <path
              d='M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z'
              stroke='#E6E6E6'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        );
      case 'error-light':
        return (
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='searchcraft-title'
          >
            <title id='searchcraft-title'>
              Searchcraft Error Search Icon Light
            </title>
            <path
              d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
              stroke='#737373'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        );
      case 'error-dark':
        return (
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='searchcraft-title'
          >
            <title id='searchcraft-title'>
              Searchcraft Error Search Icon Dark
            </title>
            <path
              d='M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z'
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
