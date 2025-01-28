import { Component, Prop, h } from '@stencil/core';

/**
 * This web component is designed to display a user-friendly error message when a search query fails, providing clear feedback to users and enhancing their experience when an issue arises during the search process.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-error-message error-message="No search results found for query" />
 * ```
 */
@Component({
  tag: 'searchcraft-error-message',
  shadow: false,
})
export class SearchcraftErrorMessage {
  /**
   * The error message.
   */
  @Prop() errorMessage?: string;

  render() {
    return (
      <p class='searchcraft-error-message'>
        {this.errorMessage || 'Search term is required.'}
      </p>
    );
  }
}
