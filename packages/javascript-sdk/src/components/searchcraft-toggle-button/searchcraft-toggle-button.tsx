import { useSearchcraftStore } from '@provider/store';
import {
  Component,
  Event,
  h,
  Prop,
  State,
  type EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';

/**
 * This web component simulates a light switch functionality, providing a simple and intuitive toggle between two states—on and off.
 * It is consumed within the `searchcraft-filter-panel` component.
 */
@Component({
  tag: 'searchcraft-toggle-button',
  shadow: false,
})
export class SearchcraftToggleButton {
  /**
   * The label.
   */
  @Prop() label = 'Toggle';
  /**
   * The secondary label displayed below the main label.
   */
  @Prop() subLabel: string | undefined;

  /**
   * When the toggle element is changed.
   */
  @Event() toggleUpdated?: EventEmitter<boolean>;

  @State() isActive = false;
  @State() unsubscribe: (() => void) | undefined;
  @State() lastSearchTerm: string | undefined;

  private handleToggle = async () => {
    this.isActive = !this.isActive;
    this.toggleUpdated?.emit(this.isActive);
  };

  connectedCallback() {
    /** When the query changes, sets toggle button state back to inactive. */
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (
        state.searchTerm !== this.lastSearchTerm &&
        state.searchTerm.trim().length === 0
      ) {
        this.isActive = false;
      }
      this.lastSearchTerm = state.searchTerm;
    });
  }

  disconnectedCallback() {
    this.unsubscribe?.();
  }

  render() {
    return (
      <div class='searchcraft-toggle-button-container'>
        <div>
          <p class='searchcraft-toggle-button-label'>{this.label}</p>
          {this.subLabel && (
            <p class='searchcraft-toggle-button-sub-label'>{this.subLabel}</p>
          )}
        </div>
        <button
          class={classNames('searchcraft-toggle-button-background', {
            active: this.isActive,
          })}
          onClick={this.handleToggle}
          type='button'
        >
          <div
            class={classNames('searchcraft-toggle-button-handle', {
              active: this.isActive,
            })}
          />
        </button>
      </div>
    );
  }
}
