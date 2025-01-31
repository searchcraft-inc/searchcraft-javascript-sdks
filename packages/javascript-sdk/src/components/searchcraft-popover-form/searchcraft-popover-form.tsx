import { Component, Element, Prop, State, h } from '@stencil/core';
import classNames from 'classnames';
import type {
  SearchcraftConfig,
  SearchClientResponseItem,
  AdClientResponseItem,
} from '@searchcraft/core';

import { useSearchcraftStore } from '@provider/store';
import type { PopoverResultMappings } from 'types';

/**
 * This web component is designed to display search results in a popover container that dynamically appears when the user interacts with a search input field.
 *
 * ## Usage
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-form type="fullscreen" />
 * ```
 *
 * ```js
 * // index.js
 * const popoverForm = document.querySelector('searchcraft-popover-form');
 *
 * popoverForm.config = {
 *   index: [index_name_from_vektron],
 *   readKey: 'read_key_from_vektron',
 *   endpointUrl: 'enpoint_url_from_vektron',
 * };
 *
 * popoverForm.popoverResultMappings = {
 *  containerHref: {
 *   fieldNames: [
 *    {
 *      fieldName: 'canonical_link',
 *      dataType: 'text',
 *    },
 *  ],
 *  };
 * ```
 */
@Component({
  tag: 'searchcraft-popover-form',
  shadow: false,
})
export class SearchcraftPopoverForm {
  /**
   * The Searchcraft config object.
   */
  @Prop() config: SearchcraftConfig | undefined;
  /**
   * The type of popover form to render.
   *
   * - `inline` - Renders inline with the rest of the content on the page. The search results pop over the page content.
   * - `fullscreen` - Renders in fullscreen view. Used together with the `searchcraft-popover-button` component.
   * - `modal` - Renders in a modal view. Used together with the `searchcraft-popover-button` component.
   */
  @Prop() type: 'inline' | 'fullscreen' | 'modal' = 'inline';
  /**
   * Formats the content rendered for each result.
   */
  @Prop() popoverResultMappings: PopoverResultMappings | undefined;
  /**
   * The hotkey that activates the popover.
   */
  @Prop() hotkey = 'k';
  /**
   * The hotkey modifier that activates the popover. Used together with the `hotkey` prop.
   */
  @Prop() hotkeyModifier: 'ctrl' | 'meta' | 'alt' | 'option' = 'meta';

  @State() isPopoverVisibleInState = false;
  @State() unsubscribe: (() => void) | undefined;
  @State() searchClientResponseItems: SearchClientResponseItem[] = [];
  @State() adClientResponseItems: AdClientResponseItem[] = [];
  @State() searchTerm: string | undefined;
  @State() isFocused = false;
  @State() breakpointSm = 576;
  @State() breakpointMd = 768;
  @State() breakpointLg = 992;

  @State() modalElement;

  @Element() hostElement!: HTMLElement;

  componentDidLoad() {
    // Loads the breakpoint values into state
    const computedStyle = getComputedStyle(document.documentElement);
    this.breakpointSm = Number.parseFloat(
      computedStyle.getPropertyValue('--sc-breakpoint-sm').trim(),
    );
    this.breakpointMd = Number.parseFloat(
      computedStyle.getPropertyValue('--sc-breakpoint-md').trim(),
    );
    this.breakpointLg = Number.parseFloat(
      computedStyle.getPropertyValue('--sc-breakpoint-lg').trim(),
    );
    // Set popover visiblity in state
    this.isPopoverVisibleInState =
      useSearchcraftStore.getState().isPopoverVisible;

    // Add event listeners
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('keydown', this.handleDocumentKeyDown);

    // Subscribe to state events
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (this.isPopoverVisibleInState !== state.isPopoverVisible) {
        this.handlePopoverVisibilityChange(state.isPopoverVisible);
      }

      this.searchClientResponseItems = [...state.searchClientResponseItems];
      this.adClientResponseItems = [...state.adClientResponseItems];
      this.searchTerm = state.searchTerm;
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  handleDocumentClick = (event: MouseEvent) => {
    if (!this.hostElement.contains(event.target as Node)) {
      this.isFocused = false;
    }
  };

  /**
   * Handles when popover visibility is changed in state
   */
  handlePopoverVisibilityChange(isVisible: boolean) {
    this.isPopoverVisibleInState = isVisible;
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';
  }

  /**
   * Actions to perform when various keys are pressed within the popover form.
   */
  handleDocumentKeyDown = (event: KeyboardEvent) => {
    // Document-scoped actions
    if (event.key === this.hotkey) {
      this.handleHotkeyPressed(event);
    }

    // Document-scoped -> Popover-scoped keyboard event boundary
    if (!this.hostElement.contains(document.activeElement)) {
      return;
    }

    // Popover-scoped actions
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        event.preventDefault();
        this.focusOnNextListItem(event.key);
        break;
      case 'Escape':
        useSearchcraftStore.getState().setPopoverVisibility(false);
        break;
      default:
        return;
    }
  };

  handleInputInit = () => {
    const input = this.hostElement.querySelector('.searchcraft-input') as
      | HTMLInputElement
      | undefined;
    input?.focus();
  };

  /**
   * When popover is `inline` and the viewport is at the smallest breakpoint,
   * focusing on the input will open a modal version of the popover form.
   */
  handleInputFocus() {
    this.isFocused = true;

    if (
      this.type === 'inline' &&
      window.visualViewport &&
      window.visualViewport.width < this.breakpointSm
    ) {
      useSearchcraftStore.getState().setPopoverVisibility(true);

      // Appends a popover form of type=`modal` to the body
      if (!this.modalElement) {
        this.modalElement = document.createElement('searchcraft-popover-form');
        this.modalElement.config = this.config;
        this.modalElement.popoverResultMappings = this.popoverResultMappings;
        this.modalElement.setAttribute('type', 'fullscreen');
        document.body.appendChild(this.modalElement);
      }
    }
  }

  handleModalBackdropClick(_event: MouseEvent) {
    useSearchcraftStore.getState().setPopoverVisibility(false);
  }

  /**
   * When a hotkey is pressed, tests if the modifiers also match.
   * If modifiers match, toggles visibility of the popover modal.
   */
  handleHotkeyPressed(event: KeyboardEvent) {
    if (
      (event.ctrlKey && this.hotkeyModifier === 'ctrl') ||
      (event.altKey && this.hotkeyModifier === 'alt') ||
      (event.metaKey && this.hotkeyModifier === 'meta')
    ) {
      event.preventDefault();
      if (this.type === 'inline' && !this.isPopoverVisibleInState) {
        const hostElementInput = this.hostElement.querySelector(
          '.searchcraft-input',
        ) as HTMLInputElement | undefined;
        hostElementInput?.focus();
      } else {
        useSearchcraftStore
          .getState()
          .setPopoverVisibility(!this.isPopoverVisibleInState);
      }
    }
  }

  handleCancelButtonClick() {
    useSearchcraftStore.getState().setPopoverVisibility(false);
  }

  /**
   * Moves focus to the next/previous list item in the list view. If you are at the top
   * of the list view, it moves focus back to the input.
   *
   * @param direction
   */
  focusOnNextListItem(direction: 'ArrowDown' | 'ArrowUp') {
    const listItems = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        'a.searchcraft-popover-list-item',
      ),
    ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

    const currentIndex = listItems.indexOf(
      document.activeElement as HTMLAnchorElement,
    );

    if (direction === 'ArrowDown') {
      listItems[(currentIndex + 1) % listItems.length]?.focus();
    } else if (direction === 'ArrowUp') {
      if (currentIndex >= 1) {
        listItems[currentIndex - 1]?.focus();
      } else {
        const input = document.querySelector('.searchcraft-input') as
          | HTMLInputElement
          | undefined;

        if (input) {
          input.focus();
          requestAnimationFrame(() => {
            input.selectionEnd = input.value.length;
            input.selectionStart = input.value.length;
          });
        }
      }
    }
  }

  get hasResultsToShow() {
    return (
      this.searchTerm &&
      this.searchTerm?.trim()?.length > 0 &&
      this.searchClientResponseItems.length > 0
    );
  }

  renderInlinePopover() {
    const isListViewVisible = this.hasResultsToShow && this.isFocused;

    const popoverFormClassNames = classNames(
      'searchcraft-popover-form searchcraft-popover-form-inline',
      {
        'searchcraft-popover-form-active': isListViewVisible,
      },
    );

    return (
      <div class={popoverFormClassNames}>
        <searchcraft-input-form
          config={this.config}
          onInputFocus={this.handleInputFocus.bind(this)}
        />
        {isListViewVisible && (
          <div class='searchcraft-popover-inline-wrapper-outer'>
            <div class='searchcraft-popover-inline-wrapper-inner'>
              <searchcraft-popover-list-view
                popoverResultMappings={this.popoverResultMappings}
                searchClientResponseItems={this.searchClientResponseItems}
                adClientResponseItems={this.adClientResponseItems}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  renderModalPopover() {
    if (this.isPopoverVisibleInState) {
      const popoverFormClassNames = classNames('searchcraft-popover-form', {
        'searchcraft-popover-form-active': this.hasResultsToShow,
      });

      return (
        <div class='searchcraft-popover-form-modal'>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            class='searchcraft-popover-form-modal-backdrop'
            onClick={this.handleModalBackdropClick}
          />
          <div class='searchcraft-popover-form-modal-inner'>
            <div class={popoverFormClassNames}>
              <div class='searchcraft-popover-form-input-wrapper'>
                <searchcraft-input-form
                  config={this.config}
                  onInputFocus={this.handleInputFocus.bind(this)}
                  onInputInit={this.handleInputInit.bind(this)}
                />
                <button
                  type='button'
                  class='searchcraft-popover-form-cancel-button'
                  onClick={this.handleCancelButtonClick.bind(this)}
                >
                  Cancel
                </button>
              </div>
              {this.hasResultsToShow && (
                <searchcraft-popover-list-view
                  popoverResultMappings={this.popoverResultMappings}
                  searchClientResponseItems={this.searchClientResponseItems}
                  adClientResponseItems={this.adClientResponseItems}
                />
              )}
            </div>
          </div>
        </div>
      );
    }
  }

  renderFullscreenPopover() {
    if (this.isPopoverVisibleInState) {
      return (
        <div class='searchcraft-popover-form-fullscreen'>
          <div class='searchcraft-popover-form'>
            <div class='searchcraft-popover-form-input-wrapper'>
              <searchcraft-input-form
                config={this.config}
                onInputFocus={this.handleInputFocus.bind(this)}
                onInputInit={this.handleInputInit.bind(this)}
              />
              <button
                type='button'
                class='searchcraft-popover-form-cancel-button'
                onClick={this.handleCancelButtonClick.bind(this)}
              >
                Cancel
              </button>
            </div>
            {this.hasResultsToShow && (
              <searchcraft-popover-list-view
                popoverResultMappings={this.popoverResultMappings}
                searchClientResponseItems={this.searchClientResponseItems}
                adClientResponseItems={this.adClientResponseItems}
              />
            )}
          </div>
        </div>
      );
    }
  }

  render() {
    switch (this.type) {
      case 'inline':
        return this.renderInlinePopover();
      case 'modal':
        return this.renderModalPopover();
      case 'fullscreen':
        return this.renderFullscreenPopover();
    }
  }
}
