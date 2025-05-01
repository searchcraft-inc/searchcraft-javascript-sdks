import {
  Component,
  Event,
  type EventEmitter,
  h,
  State,
  Prop,
} from '@stencil/core';
import {
  getDifferenceInUnits,
  getFormattedDateString,
  getStartOf,
} from '@utils';
import { throttle } from '@utils/throttle';
import classNames from 'classnames';

/**
 * This web component is designed to allow users to select a value from a range defined by a minimum and maximum value. The component renders a slider interface, which can be used to visually choose a value between two boundaries.
 *
 * @internal
 */
@Component({
  tag: 'searchcraft-slider',
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
   * The step amount for the slider inputs.
   */
  @Prop() step = 1;
  /** The type of data the sliders are using. */
  @Prop() dataType: 'number' | 'date' = 'number';
  /** The date granularity to use. Used to format date labels. */
  @Prop() dateGranularity?: 'year' | 'month' | 'day' | 'hour';

  @State() lowerBound = 0;
  @State() upperBound = 1;
  @State() endValue = 0;
  @State() startValue = 0;
  @State() lastFocusedHandle: 'min' | 'max' = 'max';

  throttledEmitUpdate: () => void = () => {};

  /**
   * When the range has changed.
   * */
  @Event() rangeChanged:
    | EventEmitter<{ startValue: number; endValue: number }>
    | undefined;

  connectedCallback() {
    switch (this.dataType) {
      case 'number':
        this.startValue = this.min;
        this.endValue = this.max;
        this.lowerBound = this.min;
        this.upperBound = this.max;
        break;
      case 'date': {
        this.startValue = 0;
        this.endValue = getDifferenceInUnits(
          this.dateGranularity || 'year',
          this.min,
          this.max,
        );
        this.lowerBound = 0;
        this.upperBound = this.endValue;

        break;
      }
    }

    this.throttledEmitUpdate = throttle(this.emitUpdate, 120);
  }

  private emitUpdate = async () => {
    switch (this.dataType) {
      case 'number':
        this.rangeChanged?.emit({
          startValue: this.startValue,
          endValue: this.endValue,
        });
        break;
      case 'date': {
        const granularity = this.dateGranularity || 'year';
        const startTimestamp = getStartOf(
          this.min,
          granularity,
          this.lowerBound + this.startValue,
        );
        const endTimestamp = getStartOf(
          this.min,
          granularity,
          this.lowerBound + this.endValue + 1,
        );
        this.rangeChanged?.emit({
          startValue: startTimestamp,
          endValue: endTimestamp,
        });
        break;
      }
    }
  };

  private handleStartValueChange = (event: InputEvent) => {
    const inputElement = event.target as HTMLInputElement;
    const value = Number.parseInt(inputElement.value, 10);
    this.lastFocusedHandle = 'min';

    if (value <= this.endValue) {
      this.startValue = value;
      this.throttledEmitUpdate();
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
      this.throttledEmitUpdate();
    } else {
      this.endValue = this.startValue;
      inputElement.value = `${this.startValue}`;
    }
  };

  private getLabel = (value): string => {
    switch (this.dataType) {
      case 'number':
        return `${this.startValue}`;
      case 'date': {
        const granularity = this.dateGranularity || 'year';
        const dateOffset = this.lowerBound + value;
        const timestamp = getStartOf(this.min, granularity, dateOffset);

        return getFormattedDateString(
          this.dateGranularity || 'year',
          new Date(timestamp),
        );
      }
    }
  };

  render() {
    const startPercent =
      ((this.startValue - this.lowerBound) /
        (this.upperBound - this.lowerBound)) *
      100;
    const endPercent =
      ((this.endValue - this.lowerBound) /
        (this.upperBound - this.lowerBound)) *
      100;

    const startLabel = this.getLabel(this.startValue);
    const endLabel = this.getLabel(this.endValue);

    return (
      <div class='searchcraft-slider'>
        <div class='searchcraft-slider-range'>
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
            max={this.upperBound}
            min={this.lowerBound}
            onInput={this.handleStartValueChange.bind(this)}
            step={this.step}
            style={{ zIndex: this.lastFocusedHandle === 'min' ? '2' : '1' }}
            type='range'
            value={this.startValue}
          />
          <input
            class={classNames(
              'searchcraft-slider-input',
              'searchcraft-slider-input-max-handle',
            )}
            max={this.upperBound}
            min={this.lowerBound}
            onInput={this.handleEndValueChange.bind(this)}
            step={this.step}
            style={{ zIndex: this.lastFocusedHandle === 'max' ? '2' : '1' }}
            type='range'
            value={this.endValue}
          />
        </div>
        <div class='searchcraft-slider-label'>
          <span class='searchcraft-slider-start-label'>{startLabel}</span>
          <span class='searchcraft-slider-end-label'>{endLabel}</span>
        </div>
      </div>
    );
  }
}
