import {
  Component,
  Event,
  type EventEmitter,
  Prop,
  h,
  Fragment,
} from '@stencil/core';
import classNames from 'classnames';

/**
 * This web component represents a button to be consumed within the `search-input-form` component.
 * It provides a clear, interactive way for users to submit search queries or trigger actions in a search interface.
 * It is consumed within the `searchcraft-input-form` component.
 */
@Component({
  tag: 'searchcraft-button',
  shadow: false,
})
export class SearchcraftButton {
  /**
   * Controls the visual representation of the button.
   */
  @Prop() hierarchy?: 'primary' | 'tertiary' = 'primary';
  /**
   * Whether the button is disabled.
   */
  @Prop() disabled?: boolean = false;
  /**
   * The icon element.
   */
  @Prop() icon?: Element;
  /**
   * Should the button only display an icon.
   */
  @Prop() iconOnly?: boolean = false;
  /**
   * The position of the icon.
   */
  @Prop() iconPosition?: 'left' | 'right' = 'left';
  /**
   * The label for the button.
   */
  @Prop() label = 'Search';
  /**
   * The type of the button.
   */
  @Prop() type?: 'submit' | 'reset' | 'button' = 'button';
  /**
   * The event fired when the button is clicked.
   */
  @Event() buttonClick!: EventEmitter<void>;

  private handleButtonClick = () => {
    this.buttonClick.emit();
  };

  render() {
    return (
      <button
        aria-label={this.label}
        class={classNames('searchcraft-button', {
          'searchcraft-button-primary': this.hierarchy === 'primary',
          'searchcraft-button-tertiary': this.hierarchy === 'tertiary',
          'searchcraft-button-disabled': this.disabled,
        })}
        disabled={this.disabled}
        onClick={this.handleButtonClick}
        type={this.type}
      >
        {this.iconOnly ? (
          this.icon
        ) : (
          <Fragment>
            {this.iconPosition === 'left' && this.icon}
            <span>{this.label}</span>
            {this.iconPosition === 'right' && this.icon}
          </Fragment>
        )}
      </button>
    );
  }
}
