import { Component } from '@stencil/core';
import styles from '../../themes/hologram.css?raw';

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
