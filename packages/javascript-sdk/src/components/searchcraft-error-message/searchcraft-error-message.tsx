import { Component, h } from '@stencil/core';

/**
 * This web component is designed to display a user-friendly error message when a search query fails, providing clear feedback to users and enhancing their experience when an issue arises during the search process.
 *
 * @js-example
 * ```html
 * <searchcraft-error-message>
 *   No search results found for query
 * </searchcraft-error-message>
 * ```
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-error-message',
  shadow: false,
})
export class SearchcraftErrorMessage {
  render() {
    return (
      <div class='searchcraft-error-message'>
        <slot>Search term is required.</slot>
      </div>
    );
  }
}
