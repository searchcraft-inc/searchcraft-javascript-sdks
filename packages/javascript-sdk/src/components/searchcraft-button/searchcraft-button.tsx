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
  shadow: false,
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
    this.buttonClick.emit();
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
