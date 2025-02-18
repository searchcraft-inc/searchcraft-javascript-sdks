import { Component, Prop } from '@stencil/core';
import styles from '../../themes/hologram.css?raw';

/**
 * This web component adds Searchcraft's built-in css theme to your page's <head> tag.
 * It does not render anything visible, its only function is to manage the css styles on the page.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-theme theme="light" custom-theme="{}" />
 * ```
 */
@Component({
  tag: 'searchcraft-theme',
  shadow: false,
})
export class SearchcraftTheme {
  /**
   * The name of the theme.
   */
  @Prop() theme?: string;
  /**
   * The custom theme configuration object.
   */
  @Prop() customTheme?: string;

  private camelToKebab = (string) => {
    return string
      .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`) // Convert uppercase letters to `-lowercase`
      .toLowerCase(); // Ensure the whole string is in lowercase
  };

  componentDidLoad() {
    // Inject style element
    const styleElement =
      document.querySelector('#searchcraft-theme') ||
      document.createElement('style');
    styleElement.innerHTML = styles;
    styleElement.id = 'searchcraft-theme';

    const head = document.head || document.getElementsByTagName('head')[0];

    if (!head.contains(styleElement)) {
      if (head.firstChild) {
        head.insertBefore(styleElement, head.firstChild);
      } else {
        head.appendChild(styleElement);
      }
    }

    // Add theme name to body
    document.body.dataset.theme = this.theme || 'light';

    // Add CSS variables from customTheme configuration to document
    Object.entries(JSON.parse(this.customTheme || '[]')).map(([key, value]) => {
      document.documentElement.style.setProperty(
        `--${this.camelToKebab(key)}`,
        `${value}`,
      );
    });
  }

  render() {
    return;
  }
}
