import {
  Component,
  Event,
  h,
  Prop,
  State,
  type EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'searchcraft-toggle-button',
  styleUrl: 'searchcraft-toggle-button.module.scss',
  shadow: false,
})
export class SearchcraftToggleButton {
  /**
   * Type of the toggle - determines what it controls
   * 'mode': toggles between 'fuzzy' and 'normal'
   * 'sort': toggles between 'asc' and 'desc'
   */
  @Prop() label = 'Toggle';
  @Prop() subLabel: string | undefined;

  @Event() toggleUpdated: EventEmitter<boolean>;

  @State() isActive = false;

  private handleToggle = async () => {
    this.isActive = !this.isActive;
    this.toggleUpdated.emit(this.isActive);
  };

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
