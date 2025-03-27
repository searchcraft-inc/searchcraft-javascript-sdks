import { Component, h } from '@stencil/core';
import styles from '../../themes/hologram.css?raw';

/**
 * This web component adds Searchcraft's built-in css theme to your page. It does not render anything visible, its only function is to manage the css styles on the page.
 *
 * @js-example
 * ```html
 * <searchcraft-theme />
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftTheme />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftTheme />
 * ```
 */
@Component({
  tag: 'searchcraft-theme',
  shadow: false,
})
export class SearchcraftTheme {
  render() {
    return <style>{styles}</style>;
  }
}
