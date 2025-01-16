import {
  Component,
  Event,
  type EventEmitter,
  h,
  State,
  Prop,
} from '@stencil/core';
import { getMillis } from '@utils';
import classNames from 'classnames';

/**
 * This web component is designed to allow users to select a value from a range defined by a minimum and maximum value.
 * The component renders a slider interface, which can be used to visually choose a value between two boundaries.
 * It is consumed by the `searchcraft-filter-panel` component.
 */
@Component({
  tag: 'searchcraft-slider',
  styleUrl: 'searchcraft-slider.module.scss',
  shadow: false,
})
export class SearchcraftSlider {
  /**
   * The maximum value allowed.
   */
  @Prop() max = 100;
  /**
   * The minimum value allowed.
   */
  @Prop() min = 0;
  /**
   * The granularity that the value must adhere to.
   */
  @Prop() granularity: number = getMillis('month');
  /** The type of data allowed. */
  @Prop() dataType: 'number' | 'date' = 'number';

  @State() endValue = this.max;
  @State() startValue = this.min;
  @State() lastFocusedHandle: 'min' | 'max' = 'max';

  /**
   * When the range has changed.
   * */
  @Event() rangeChanged: EventEmitter<{ startValue: number; endValue: number }>;

  componentDidLoad() {
    this.startValue = this.min;
    this.endValue = this.max;
  }

  private emitUpdate = async () => {
    this.rangeChanged.emit({
      startValue: this.startValue,
      endValue: this.endValue,
    });
  };

  private handleStartValueChange = (event: InputEvent) => {
    const inputElement = event.target as HTMLInputElement;
    const value = Number.parseInt(inputElement.value, 10);
    this.lastFocusedHandle = 'min';
    if (value <= this.endValue) {
      this.startValue = value;
      this.emitUpdate();
    } else {
      this.startValue = this.endValue;
      inputElement.value = `${this.endValue}`;
    }
  };

  private handleEndValueChange = (event: InputEvent) => {
    const inputElement = event.target as HTMLInputElement;
    const value = Number.parseInt(inputElement.value, 10);
    this.lastFocusedHandle = 'max';
    if (value >= this.startValue) {
      this.endValue = value;
      this.emitUpdate();
    } else {
      this.endValue = this.startValue;
      inputElement.value = `${this.startValue}`;
    }
  };

  render() {
    const rangeMin = this.min;
    const rangeMax = this.max;
    const startPercent =
      ((this.startValue - rangeMin) / (rangeMax - rangeMin)) * 100;
    const endPercent =
      ((this.endValue - rangeMin) / (rangeMax - rangeMin)) * 100;

    const startLabel =
      this.dataType === 'number'
        ? this.startValue
        : new Date(this.startValue).getFullYear();

    const endLabel =
      this.dataType === 'number'
        ? this.endValue
        : new Date(this.endValue).getFullYear();

    return (
      <div class='searchcraft-slider-container'>
        <div class='searchcraft-slider-range-container'>
          <div
            class='searchcraft-slider-active-range'
            style={{
              left: `${startPercent}%`,
              width: `${endPercent - startPercent}%`,
            }}
          />
          <input
            class={classNames(
              'searchcraft-slider-input',
              'searchcraft-slider-input-min-handle',
            )}
            max={this.max}
            min={this.min}
            onInput={this.handleStartValueChange.bind(this)}
            step={this.granularity}
            style={{ zIndex: this.lastFocusedHandle === 'min' ? '2' : '1' }}
            type='range'
            value={this.startValue}
          />
          <input
            class={classNames(
              'searchcraft-slider-input',
              'searchcraft-slider-input-max-handle',
            )}
            max={this.max}
            min={this.min}
            onInput={this.handleEndValueChange.bind(this)}
            step={this.granularity}
            style={{ zIndex: this.lastFocusedHandle === 'max' ? '2' : '1' }}
            type='range'
            value={this.endValue}
          />
        </div>
        <div class='searchcraft-slider-label-container'>
          <span class='searchcraft-slider-label'>{startLabel}</span>
          <span class='searchcraft-slider-label'>{endLabel}</span>
        </div>
      </div>
    );
  }
}
