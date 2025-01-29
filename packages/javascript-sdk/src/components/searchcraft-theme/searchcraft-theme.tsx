import { Component } from '@stencil/core';
import styles from '../../themes/hologram.css?raw';

/**
 * This web component adds Searchcraft's built-in css theme to your page's <head> tag.
 * It does not render anything visible, its only function is to manage the css styles on the page.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-theme />
 * ```
 */
@Component({
  tag: 'searchcraft-theme',
  shadow: false,
})
export class SearchcraftErrorMessage {
  componentDidLoad() {
    console.log('Loading theme...');
    console.log(styles);
    const styleTag =
      document.querySelector('#searchcraft-theme') ||
      document.createElement('style');
    styleTag.innerHTML = styles;
    styleTag.id = 'searchcraft-theme';

    const head = document.head || document.getElementsByTagName('head')[0];
    if (!head.contains(styleTag)) {
      if (head.firstChild) {
        head.insertBefore(styleTag, head.firstChild);
      } else {
        head.appendChild(styleTag);
      }
    } else {
    }
  }

  render() {
    return;
  }
}
