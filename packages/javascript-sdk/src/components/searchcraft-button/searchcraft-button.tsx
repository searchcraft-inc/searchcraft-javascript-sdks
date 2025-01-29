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
   * The icon element.
   */
  @Prop() iconElement?: Element;
  /**
   * Should the button only display an icon.
   */
  @Prop() iconOnly = false;
  /**
   * The position of the icon.
   */
  @Prop() iconPosition = 'left';
  /**
   * The label for the button.
   */
  @Prop() label = 'Search';

  /**
   * When the button is clicked.
   */
  @Event() buttonClick!: EventEmitter<void>;

  private handleClick = () => {
    this.buttonClick.emit();
  };

  render() {
    return (
      <Fragment>
        {this.iconOnly ? (
          <button
            class={classNames('searchcraft-button')}
            onClick={this.handleClick}
            type='submit'
          >
            {this.iconElement}
          </button>
        ) : (
          <button
            class={classNames('searchcraft-button')}
            onClick={this.handleClick}
            type='submit'
          >
            {this.iconPosition === 'left' && this.iconElement}
            <span class={classNames('buttonLabel', 'searchcraft-button-label')}>
              {this.label}
            </span>
          </button>
        )}
      </Fragment>
    );
  }
}
