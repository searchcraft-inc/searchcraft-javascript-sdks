import {
  Component,
  Event,
  type EventEmitter,
  Prop,
  h,
  State,
  Fragment,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-button',
  styleUrl: 'searchcraft-button.module.scss',
  shadow: true,
})
export class SearchcraftButton {
  @Prop() iconElement?: Element;
  @Prop() iconOnly = false;
  @Prop() iconPosition = 'left';
  @Prop() label = 'Search';

  @Event() buttonClick!: EventEmitter<void>;

  @State() isRequesting = false;
  @State() theme = 'light';

  private getButtonStyle() {
    return this.theme === 'light' ? 'buttonLight' : 'buttonDark';
  }

  private handleClick = () => {
    this.buttonClick.emit(); // Emit the event instead of calling a function
  };

  render() {
    const buttonStyle = this.getButtonStyle();

    return (
      <Fragment>
        {this.iconOnly ? (
          <button
            class={classNames(buttonStyle, 'searchcraft-button')}
            onClick={this.handleClick}
            type='submit'
          >
            {this.isRequesting ? (
              <searchcraft-spinner-dark />
            ) : (
              this.iconElement
            )}
          </button>
        ) : (
          <button
            class={classNames(buttonStyle, 'searchcraft-button')}
            onClick={this.handleClick}
            type='submit'
          >
            {this.iconPosition === 'left' && this.isRequesting ? (
              <div class='spinner-margin-right'>
                <searchcraft-spinner-dark />
              </div>
            ) : (
              this.iconElement
            )}
            <span
              class={classNames(
                this.isRequesting && 'button-label',
                'searchcraft-button-label',
              )}
            >
              {this.label}
            </span>
          </button>
        )}
      </Fragment>
    );
  }
}
