import { Component, h, Prop, State } from '@stencil/core';

import type { PopoverButtonTemplate } from '@searchcraft/core';

import { searchcraftStore } from '@store';

import { html } from '@utils';

/**
 * Renders a button which, when clicked, turns on popover visibility.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftPopoverButton } from "@searchcraft/react-sdk";
 * ````
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftPopoverButton } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-button>
 *   Open popover
 * </searchcraft-popover-button>
 * ```
 *
 * ```js
 * // index.js
 * const popoverButton = document.querySelector('searchcraft-popover-button');
 *
 * popoverButton.template = (isPopoverVisible, { html }) => html`
 *   <span>Click me</span>
 * `;
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftPopoverButton
 *   template={(isPopoverVisible, { html }) => html`
 *     <span>Click me</span>
 *   `}
 * >
 *   Open popover
 * </SearchcraftPopoverButton>
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftPopoverButton
 *   :template={(isPopoverVisible, { html }) => html`
 *     <span>Click me</span>
 *   `}
 * >
 *   Open popover
 * </SearchcraftPopoverButton>
 * ```
 */
@Component({
  tag: 'searchcraft-popover-button',
  shadow: false,
})
export class SearchcraftPopoverButton {
  /**
   * A callback function responsible for rendering the button contents.
   */
  @Prop() template?: PopoverButtonTemplate;
  /**
   * The type of popover button to render.
   */
  @Prop() type?: 'skeuomorphic';

  @State() hotkey;
  @State() hotkeyModifier;
  @State() hotkeyModifierSymbol;
  @State() isPopoverVisible;
  @State() userAgent;

  private unsubscribe: () => void = () => {};

  handleOnClick() {
    searchcraftStore.getState().setPopoverVisibility(true);
  }

  componentDidLoad() {
    const state = searchcraftStore.getState();
    this.hotkey = state.hotkey.toUpperCase();
    this.hotkeyModifier = state.hotkeyModifier;
    this.isPopoverVisible = state.isPopoverVisible;
    this.userAgent = this.setUserAgent();
    this.hotkeyModifierSymbol = this.setHotkeyModifierSymbol();

    this.unsubscribe = searchcraftStore.subscribe((state) => {
      this.hotkey = state.hotkey.toUpperCase();
      this.hotkeyModifier = state.hotkeyModifier;
      this.hotkeyModifierSymbol = this.setHotkeyModifierSymbol();
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  setUserAgent() {
    const userAgent = navigator.userAgent.toLowerCase();

    switch (true) {
      case userAgent.includes('windows'):
        return 'window';
      case userAgent.includes('mac'):
        return 'mac';
      default:
        return 'other';
    }
  }

  renderOptionSymbol = () => {
    return (
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 512 512'
        fill='none'
      >
        <title>Option key</title>
        <path
          d='M283,112c0-11.58,9.42-21,21-21h160c11.58,0,21,9.42,21,21s-9.42,21-21,21h-160c-11.58,0-21-9.42-21-21Z'
          fill='currentColor'
        />
        <path
          d='M485,400c0,11.58-9.42,21-21,21h-128c-8.29,0-15.82-4.9-19.19-12.47l-122.46-275.53H48c-11.58,0-21-9.42-21-21s9.42-21,21-21h160c8.29,0,15.82,4.9,19.19,12.47l122.46,275.53h114.35c11.58,0,21,9.42,21,21Z'
          fill='currentColor'
        />
      </svg>
    );
  };

  renderCtrlSymbol = () => {
    return (
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 512 512'
        fill='none'
      >
        <title>Ctrl key</title>
        <path
          d='M388.95,209.4c-.37,5.59-2.9,10.71-7.12,14.4-3.83,3.35-8.74,5.2-13.82,5.2-6.06,0-11.83-2.61-15.81-7.17l-96.2-109.94-96.2,109.94c-3.98,4.56-9.75,7.17-15.81,7.17-5.08,0-9.99-1.84-13.82-5.2-4.22-3.69-6.75-8.81-7.12-14.4-.38-5.6,1.45-11.01,5.15-15.23l112-128c3.98-4.56,9.74-7.17,15.8-7.17s11.82,2.61,15.8,7.17l112,128c3.7,4.22,5.53,9.63,5.15,15.23Z'
          fill='currentColor'
        />
      </svg>
    );
  };

  renderWindowsMetaSymbol = () => {
    return (
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 512 512'
        fill='none'
      >
        <title>Windows meta key</title>
        <path
          d='M206.115 255.957c-23.854-12.259-47.043-18.479-68.94-18.479-2.978 0-5.976 0.090-8.974 0.354-27.94 2.312-53.461 9.684-69.875 15.414-4.354 1.599-8.817 3.288-13.415 5.153l-44.911 155.697c30.851-11.416 58.146-16.969 83.135-16.969 40.423 0 69.764 15.104 93.996 30.652 11.481-38.959 39.022-133.045 47.241-161.162-5.975-3.642-12.038-7.285-18.257-10.66zM264.174 295.535l-45.223 157.074c13.416 7.686 58.549 32.025 93.106 32.025 27.896 0 59.126-7.148 95.417-21.896l43.178-150.988c-29.316 9.461-57.438 14.26-83.732 14.26-47.975 0-81.557-15.549-102.746-30.475zM146.411 184.395c38.559 0.399 67.076 15.104 90.708 30.251l46.376-158.672c-9.773-5.598-35.403-19.547-53.929-24.3-12.193-2.842-25.010-4.308-38.602-4.308-25.898 0.488-54.194 6.973-86.444 19.9l-44.22 155.298c32.404-12.218 60.322-18.17 86.043-18.17 0.023 0.001 0.068 0.001 0.068 0.001zM512 99.062c-29.407 11.416-58.104 17.233-85.514 17.233-45.843 0-79.646-15.901-101.547-31.183l-45.975 159.118c30.873 19.854 64.145 29.939 99.061 29.939 28.474 0 57.97-6.84 87.731-20.344l-0.091-1.111 1.867-0.443 44.468-153.209z'
          fill='currentColor'
        />
      </svg>
    );
  };

  renderMacMetaSymbol = () => {
    return (
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 512 512'
        fill='none'
      >
        <title>Mac meta key</title>
        <path
          d='M368,283h-43v-54h43c46.87,0,85-38.13,85-85s-38.13-85-85-85-85,38.13-85,85v43h-54v-43c0-46.87-38.13-85-85-85s-85,38.13-85,85,38.13,85,85,85h43v54h-43c-46.87,0-85,38.13-85,85s38.13,85,85,85,85-38.13,85-85v-43h54v43c0,46.87,38.13,85,85,85s85-38.13,85-85-38.13-85-85-85ZM325,144c0-23.71,19.29-43,43-43s43,19.29,43,43-19.29,43-43,43h-43v-43ZM144,187c-23.71,0-43-19.29-43-43s19.29-43,43-43,43,19.29,43,43v43h-43ZM187,368c0,23.71-19.29,43-43,43s-43-19.29-43-43,19.29-43,43-43h43v43ZM283,283h-54v-54h54v54ZM368,411c-23.71,0-43-19.29-43-43v-43h43c23.71,0,43,19.29,43,43s-19.29,43-43,43Z'
          fill='currentColor'
        />
      </svg>
    );
  };

  setHotkeyModifierSymbol() {
    switch (this.hotkeyModifier) {
      case 'ctrl':
        return this.userAgent === 'windows'
          ? this.renderCtrlSymbol()
          : this.renderMacMetaSymbol();
      case 'alt':
      case 'option':
        return this.renderOptionSymbol();
      default:
        return this.userAgent === 'windows'
          ? this.renderWindowsMetaSymbol()
          : this.renderMacMetaSymbol();
    }
  }

  renderSkeuomorphicSlot() {
    return (
      <div class='searchcraft-popover-button-wrapper'>
        <div class='searchcraft-popover-button-input'>
          <svg
            class='searchcraft-popover-button-input-search-icon'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <title>Search icon</title>
            <path
              d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <span>Search</span>
        </div>
        <div class='searchcraft-popover-button-keycaps'>
          <div class='searchcraft-popover-button-keycaps-keycap searchcraft-popover-button-keycaps-keycap-modifier'>
            <span>{this.hotkeyModifierSymbol}</span>
          </div>
          <div class='searchcraft-popover-button-keycaps-keycap searchcraft-popover-button-keycaps-keycap-key'>
            <span>{this.hotkey}</span>
          </div>
        </div>
      </div>
    );
  }

  renderSlot() {
    switch (this.type) {
      case 'skeuomorphic':
        return this.renderSkeuomorphicSlot();
      default:
        return (
          <div>
            <slot />
          </div>
        );
    }
  }

  render() {
    return (
      <button
        class={`searchcraft-popover-button ${this.type ? ` searchcraft-popover-button-${this.type}` : ''}`}
        innerHTML={
          typeof this.template !== 'undefined'
            ? this.template(this.isPopoverVisible, { html })
            : undefined
        }
        onClick={this.handleOnClick.bind(this)}
        type='button'
      >
        {typeof this.template !== 'undefined'
          ? undefined
          : this.type
            ? this.renderSlot()
            : 'Open Popover'}
      </button>
    );
  }
}
