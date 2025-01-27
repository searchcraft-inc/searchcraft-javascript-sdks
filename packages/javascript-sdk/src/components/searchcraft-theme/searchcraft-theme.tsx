import { Component, Prop, h } from '@stencil/core';
import styles from '../../themes/hologram.css?raw';

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
  tag: 'searchcraft-theme',
  shadow: false,
})
export class SearchcraftErrorMessage {
  /**
   * The error message.
   */
  @Prop() errorMessage?: string;

  render() {
    return (
      <style>{styles}</style>
    );
  }
}
