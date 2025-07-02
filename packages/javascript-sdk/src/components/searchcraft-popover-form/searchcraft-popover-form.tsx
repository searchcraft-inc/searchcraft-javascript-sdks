import { Component, Element, Prop, State, h } from '@stencil/core';
import classNames from 'classnames';
import type {
  SearchClientResponseItem,
  AdClientResponseItem,
  PopoverResultMappings,
} from '@types';
import { registry } from '@classes/CoreInstanceRegistry';
import type { SearchcraftCore } from '@classes';

/**
 * This web component is designed to display search results in a popover container that dynamically appears when the user interacts with a search input field, or when a popover-button is pressed.
 *
 * @react-import
 * ```jsx
 * import { SearchcraftPopoverForm } from "@searchcraft/react-sdk";
 * ```
 *
 * @vue-import
 * ```jsx
 * import { SearchcraftPopoverForm } from "@searchcraft/vue-sdk";
 * ```
 *
 * @js-example
 * ```html
 * <!-- index.html -->
 * <searchcraft-popover-form type="inline" />
 * ```
 *
 * ```js
 * // index.js
 * const popoverForm = document.querySelector('searchcraft-popover-form');
 *
 * popoverForm.popoverResultMappings = {};
 * ```
 *
 * @react-example
 * ```jsx
 * <SearchcraftPopoverForm type="inline" popoverResultMappings={[]} />
 * ```
 *
 * @vue-example
 * ```jsx
 * <SearchcraftPopoverForm type="inline" :popoverResultMappings="[]"" />
 * ```
 *
 */
@Component({
  tag: 'searchcraft-popover-form',
  shadow: false,
})
export class SearchcraftPopoverForm {
  /**
   * The type of popover form to render.
   * - `inline` - Renders inline with the rest of the content on the page. The search results pop over the page content.
   * - `fullscreen` - Renders in fullscreen view. Used together with the `searchcraft-popover-button` component.
   * - `modal` - Renders in a modal view. Used together with the `searchcraft-popover-button` component.
   */
  @Prop() type?: 'inline' | 'fullscreen' | 'modal' = 'inline';
  /**
   * Formats the content rendered for each result.
   */
  @Prop() popoverResultMappings?: PopoverResultMappings;
  /**
   * The hotkey that activates the popover.
   */
  @Prop() hotkey?: string = 'k';
  /**
   * The hotkey modifier that activates the popover. Used together with the `hotkey` prop.
   */
  @Prop() hotkeyModifier?: 'ctrl' | 'meta' | 'alt' | 'option' = 'meta';
  /**
   * The id of the Searchcraft instance that this component should use.
   */
  @Prop() searchcraftId?: string;

  @State() isPopoverVisibleInState = false;
  @State() searchClientResponseItems: SearchClientResponseItem[] = [];
  @State() adClientResponseItems: AdClientResponseItem[] = [];
  @State() searchTerm: string | undefined;
  @State() isFocused = false;
  @State() breakpointSm = 576;
  @State() breakpointMd = 768;
  @State() breakpointLg = 992;
  @State() searchResultsPage;
  @State() searchResultsPerPage;

  @State() modalElement;

  @Element() hostElement!: HTMLElement;

  private unsubscribe: (() => void) | undefined;
  private cleanupCore?: () => void;
  core?: SearchcraftCore;

  onCoreAvailable(core: SearchcraftCore) {
    this.core = core;
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
    this.isPopoverVisibleInState = core.store.getState().isPopoverVisible;

    // Add event listeners
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('keydown', this.handleDocumentKeyDown);

    // Subscribe to state events
    this.unsubscribe = core.store.subscribe((state) => {
      if (this.isPopoverVisibleInState !== state.isPopoverVisible) {
        this.handlePopoverVisibilityChange(state.isPopoverVisible);
      }

      this.searchClientResponseItems = [...state.searchClientResponseItems];
      this.adClientResponseItems = [...state.adClientResponseItems];
      this.searchTerm = state.searchTerm;
      this.searchResultsPage = state.searchResultsPage;
      this.searchResultsPerPage = state.searchResultsPerPage;
    });

    // Set hotkey and hotkeyModifier in state.
    core.store
      .getState()
      .setHotKeyAndHotKeyModifier(this.hotkey, this.hotkeyModifier);
  }

  connectedCallback() {
    this.cleanupCore = registry.useCoreInstance(
      this.searchcraftId,
      this.onCoreAvailable.bind(this),
    );
  }

  disconnectedCallback() {
    this.unsubscribe?.();
    this.cleanupCore?.();
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
        this.core?.store.getState().setPopoverVisibility(false);
        break;
      default:
        return;
    }
  };

  handleInputInit = () => {
    const input = this.hostElement.querySelector(
      '.searchcraft-input-form-input',
    ) as HTMLInputElement | undefined;
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
      this.core?.store.getState().setPopoverVisibility(true);

      // Appends a popover form of type=`modal` to the body
      if (!this.modalElement) {
        this.modalElement = document.createElement('searchcraft-popover-form');
        this.modalElement.popoverResultMappings = this.popoverResultMappings;
        this.modalElement.setAttribute('type', 'fullscreen');
        this.modalElement.setAttribute('searchcraft-id', this.searchcraftId);
        document.body.appendChild(this.modalElement);
      }
    }
  }

  handleModalBackdropClick(_event: MouseEvent) {
    this.core?.store.getState().setPopoverVisibility(false);
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
          '.searchcraft-input-form-input',
        ) as HTMLInputElement | undefined;
        hostElementInput?.focus();
      } else {
        this.core?.store
          .getState()
          .setPopoverVisibility(!this.isPopoverVisibleInState);
      }
    }
  }

  handleCancelButtonClick() {
    this.core?.store.getState().setPopoverVisibility(false);
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
        '.searchcraft-popover-list-item-link',
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
        const input = document.querySelector('.searchcraft-input-form-input') as
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

    return (
      <div
        class={classNames(
          'searchcraft-popover-form searchcraft-popover-form-inline',
          {
            'searchcraft-popover-form-active': isListViewVisible,
          },
        )}
      >
        <div class='searchcraft-popover-form-input searchcraft-popover-form-inline-input'>
          <searchcraft-input-form
            onInputFocus={this.handleInputFocus.bind(this)}
            searchcraftId={this.searchcraftId}
          />
        </div>
        {isListViewVisible && (
          <div class='searchcraft-popover-form-inline-wrapper'>
            <searchcraft-popover-list-view
              popoverResultMappings={this.popoverResultMappings}
              searchClientResponseItems={this.searchClientResponseItems}
              adClientResponseItems={this.adClientResponseItems}
              searchResultsPage={this.searchResultsPage}
              searchResultsPerPage={this.searchResultsPerPage}
              searchcraftId={this.searchcraftId}
            />
            <searchcraft-popover-footer searchcraftId={this.searchcraftId} />
          </div>
        )}
      </div>
    );
  }

  renderModalPopover() {
    if (this.isPopoverVisibleInState) {
      return (
        <div
          class={classNames(
            'searchcraft-popover-form searchcraft-popover-form-modal',
            {
              'searchcraft-popover-form-active': this.hasResultsToShow,
            },
          )}
        >
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            class='searchcraft-popover-form-modal-backdrop'
            onClick={this.handleModalBackdropClick}
          />
          <div class='searchcraft-popover-form-modal-wrapper'>
            <div class='searchcraft-popover-form-input searchcraft-popover-form-modal-input'>
              <searchcraft-input-form
                onInputFocus={this.handleInputFocus.bind(this)}
                onInputInit={this.handleInputInit.bind(this)}
                searchcraftId={this.searchcraftId}
              />
              <button
                type='button'
                class='searchcraft-popover-form-cancel-button searchcraft-popover-form-modal-cancel-button'
                onClick={this.handleCancelButtonClick.bind(this)}
              >
                Cancel
              </button>
            </div>
            <div class='searchcraft-popover-form-modal-popover-list-view'>
              {this.hasResultsToShow && (
                <searchcraft-popover-list-view
                  popoverResultMappings={this.popoverResultMappings}
                  searchClientResponseItems={this.searchClientResponseItems}
                  adClientResponseItems={this.adClientResponseItems}
                  searchResultsPage={this.searchResultsPage}
                  searchResultsPerPage={this.searchResultsPerPage}
                  searchcraftId={this.searchcraftId}
                />
              )}
            </div>
            <searchcraft-popover-footer searchcraftId={this.searchcraftId} />
          </div>
        </div>
      );
    }
  }

  renderFullscreenPopover() {
    if (this.isPopoverVisibleInState) {
      return (
        <div
          class={classNames(
            'searchcraft-popover-form searchcraft-popover-form-fullscreen',
            {
              'searchcraft-popover-form-active': this.hasResultsToShow,
            },
          )}
        >
          <div class='searchcraft-popover-form-input searchcraft-popover-form-fullscreen-input'>
            <searchcraft-input-form
              onInputFocus={this.handleInputFocus.bind(this)}
              onInputInit={this.handleInputInit.bind(this)}
              searchcraftId={this.searchcraftId}
            />
            <button
              type='button'
              class='searchcraft-popover-form-cancel-button searchcraft-popover-form-fullscreen-cancel-button'
              onClick={this.handleCancelButtonClick.bind(this)}
            >
              Cancel
            </button>
          </div>
          <div class='searchcraft-popover-form-fullscreen-popover-list-view'>
            {this.hasResultsToShow && (
              <searchcraft-popover-list-view
                popoverResultMappings={this.popoverResultMappings}
                searchClientResponseItems={this.searchClientResponseItems}
                adClientResponseItems={this.adClientResponseItems}
                searchResultsPage={this.searchResultsPage}
                searchResultsPerPage={this.searchResultsPerPage}
                searchcraftId={this.searchcraftId}
              />
            )}
          </div>
          <searchcraft-popover-footer searchcraftId={this.searchcraftId} />
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
