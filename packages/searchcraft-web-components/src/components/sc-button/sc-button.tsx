import { Component, Event, Prop, h, State, Fragment } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'sc-button',
  styleUrl: 'sc-button.module.scss',
  shadow: true,
})
export class ScButton {
  @Prop() iconElement?: Element;
  @Prop() iconOnly = false;
  @Prop() iconPosition = 'left';
  @Prop() label = 'Search';
  @Event() buttonClick?: () => void;

  @State() isRequesting = false;
  @State() theme = 'light';

  private getButtonStyle() {
    return this.theme === 'light' ? 'buttonLight' : 'buttonDark';
  }

  private handleClick = () => {
    if (this.buttonClick) {
      this.buttonClick();
    }
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
            {this.isRequesting ? <sc-spinner-dark /> : this.iconElement}
          </button>
        ) : (
          <button
            class={classNames(buttonStyle, 'searchcraft-button')}
            onClick={this.handleClick}
            type='submit'
          >
            {this.iconPosition === 'left' && this.isRequesting ? (
              <div class='spinner-margin-right'>
                <sc-spinner-dark />
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
