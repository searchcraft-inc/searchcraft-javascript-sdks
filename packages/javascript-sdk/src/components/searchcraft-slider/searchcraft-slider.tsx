import {
  Component,
  Event,
  type EventEmitter,
  h,
  State,
  Prop,
} from '@stencil/core';
import { getMillis } from '@utils/utils';
import classNames from 'classnames';

@Component({
  tag: 'searchcraft-slider',
  styleUrl: 'searchcraft-slider.module.scss',
  shadow: false,
})
export class SearchcraftSlider {
  @Prop() max = 100;
  @Prop() min = 0;
  @Prop() granularity: number = getMillis('month');

  @State() endValue = this.max;
  @State() startValue = this.min;
  @State() hasSearched = false;
  @State() query = '';
  @State() resultsCount = 0;

  @Event() rangeChanged: EventEmitter<{ startValue: number; endValue: number }>;

  componentDidLoad() {
    this.startValue = this.min;
    this.endValue = this.max;
  }

  private updateValues = async () => {
    this.rangeChanged.emit({
      startValue: this.startValue,
      endValue: this.endValue,
    });
  };

  private handlestartValueChange = (event: InputEvent) => {
    const value = Number.parseInt((event.target as HTMLInputElement).value, 10);
    if (value <= this.endValue) {
      this.startValue = value;
      this.updateValues();
    }
  };

  private handleendValueChange = (event: InputEvent) => {
    const value = Number.parseInt((event.target as HTMLInputElement).value, 10);
    if (value >= this.startValue) {
      this.endValue = value;
      this.updateValues();
    }
  };

  render() {
    const rangeMin = this.min;
    const rangeMax = this.max;
    const startPercent =
      ((this.startValue - rangeMin) / (rangeMax - rangeMin)) * 100;
    const endPercent =
      ((this.endValue - rangeMin) / (rangeMax - rangeMin)) * 100;

    return (
      <div
        class={classNames('sliderContainer', 'searchcraft-slider-container')}
      >
        <div
          class={classNames(
            'rangeContainer',
            'searchcraft-slider-range-container',
          )}
        >
          <div
            class={classNames('activeRange', 'searchcraft-slider-active-range')}
            style={{
              left: `${startPercent}%`,
              width: `${endPercent - startPercent}%`,
            }}
          />
          <input
            class={classNames(
              'rangeSlider',
              'searchcraft-slider-range-slider-start-thumb',
            )}
            max={this.max}
            min={this.min}
            onInput={this.handlestartValueChange}
            step={this.granularity}
            type='range'
            value={this.startValue}
          />
          <input
            class={classNames(
              'rangeSlider',
              'searchcraft-slider-range-slider-end-thumb',
            )}
            max={this.max}
            min={this.min}
            onInput={this.handleendValueChange}
            step={this.granularity}
            type='range'
            value={this.endValue}
          />
        </div>
        <div
          class={classNames(
            'yearLabels',
            'searchcraft-slider-year-label-container',
          )}
        >
          <span
            class={classNames(
              'yearLabel',
              'searchcraft-slider-start-year-label',
            )}
          >
            {this.startValue}
          </span>
          <span
            class={classNames('yearLabel', 'searchcraft-slider-end-year-label')}
          >
            {this.endValue}
          </span>
        </div>
      </div>
    );
  }
}
