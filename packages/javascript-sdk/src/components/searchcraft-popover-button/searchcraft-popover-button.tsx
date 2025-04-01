import { searchcraftStore } from '@store';
import {
  Component,
  h,
  Host,
  Prop,
  State,
  type ComponentInterface,
} from '@stencil/core';

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
 * <searchcraft-popover-button>
 *   Open popover
 * </searchcraft-popover-button>
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftPopoverButton>
 *   Open popover
 * </SearchcraftPopoverButton>
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftPopoverButton>
 *   Open popover
 * </SearchcraftPopoverButton>
 * ```
 */
@Component({
  tag: 'searchcraft-popover-button',
  shadow: false,
})
export class SearchcraftPopoverButton implements ComponentInterface {
  /**
   * The type of popover button to render.
   */
  @Prop() type?: 'keycap';

  @State() hotkey;
  @State() hotkeyModifier;
  @State() hotkeyModifierSymbol;
  @State() userAgent;

  private unsubscribe: () => void = () => {};

  handleOnClick() {
    searchcraftStore.getState().setPopoverVisibility(true);
  }

  componentDidLoad() {
    this.hotkey = searchcraftStore.getState().hotkey.toUpperCase();
    this.hotkeyModifier = searchcraftStore.getState().hotkeyModifier;
    this.userAgent = this.setUserAgent();
    this.hotkeyModifierSymbol = this.setHotkeyModifierSymbol();

    this.unsubscribe = searchcraftStore.subscribe((state) => {
      this.hotkey = state.hotkey.toUpperCase();
      this.hotkeyModifier = state.hotkeyModifier;
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
        fill='currentColor'
      >
        <title>Option key</title>
        <path d='M464 416h-128c-6.323 0-12.053-3.724-14.621-9.502l-123.777-278.498h-149.602c-8.836 0-16-7.164-16-16s7.164-16 16-16h160c6.323 0 12.053 3.724 14.621 9.502l123.778 278.498h117.601c8.837 0 16 7.163 16 16s-7.163 16-16 16z' />
        <path d='M464 128h-160c-8.837 0-16-7.164-16-16s7.163-16 16-16h160c8.837 0 16 7.164 16 16s-7.163 16-16 16z' />
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
        fill='currentColor'
      >
        <title>Ctrl key</title>
        <path d='M368.007 224c-4.454 0-8.885-1.849-12.048-5.464l-99.959-114.239-99.959 114.239c-5.818 6.65-15.928 7.325-22.577 1.505-6.65-5.819-7.324-15.927-1.505-22.577l112-128c3.038-3.472 7.427-5.464 12.041-5.464s9.003 1.992 12.041 5.464l112 128c5.819 6.65 5.146 16.758-1.505 22.577-3.035 2.656-6.791 3.959-10.529 3.959z' />
      </svg>
    );
  };

  renderWindowsMetaSymbol = () => {
    return (
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 512 512'
        fill='currentColor'
      >
        <title>Windows meta key</title>
        <path d='M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z' />
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
        fill='currentColor'
      >
        <title>Mac meta key</title>
        <path d='M368 448c-44.112 0-80-35.888-80-80v-48h-64v48c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80h48v-64h-48c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80v48h64v-48c0-44.112 35.888-80 80-80s80 35.888 80 80-35.888 80-80 80h-48v64h48c44.112 0 80 35.888 80 80s-35.887 80-80 80zM320 320v48c0 26.467 21.533 48 48 48s48-21.533 48-48-21.533-48-48-48h-48zM144 320c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48v-48h-48zM224 288h64v-64h-64v64zM320 192h48c26.467 0 48-21.533 48-48s-21.533-48-48-48-48 21.533-48 48v48zM144 96c-26.467 0-48 21.533-48 48s21.533 48 48 48h48v-48c0-26.467-21.532-48-48-48z' />
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

  renderKeycapSlot() {
    return (
      <div class='searchcraft-popover-button-wrapper'>
        <div class='searchcraft-popover-button-input'>
          <svg
            class='searchcraft-popover-button-input-search-icon'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='searchcraft-title'
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
      case 'keycap':
        return this.renderKeycapSlot();
      default:
        return <slot />;
    }
  }

  render() {
    return (
      <Host>
        <button
          class={`searchcraft-popover-button${this.type ? ` searchcraft-popover-button-${this.type}` : ''}`}
          onClick={this.handleOnClick.bind(this)}
          type='button'
        >
          {this.renderSlot()}
        </button>
      </Host>
    );
  }
}
