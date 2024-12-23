import {
  Component,
  h,
  State,
  Prop,
  Event,
  type EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';

import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'searchcraft-slider',
  styleUrl: 'searchcraft-slider.module.scss',
  shadow: false,
})
export class YearRangeSlider {
  @Prop() maxYear = new Date().getFullYear();
  @Prop() minYear = 2014;

  @State() endYear = this.maxYear;
  @State() hasSearched = false;
  @State() query = '';
  @State() resultsCount = 0;
  @State() startYear = this.minYear;

  @Event() rangeChanged: EventEmitter<{ startYear: number; endYear: number }>;

  private searchStore = useSearchcraftStore.getState();

  unsubscribe: () => void;

  componentDidLoad = () => {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (state.query.length > 0) {
        this.hasSearched = true;
        this.resultsCount = state.searchResults?.data?.hits?.length || 0;
      }
      this.query = state.query;
    });
  };

  disconnectedCallback = () => {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  };

  private updateYears = async () => {
    this.searchStore.setYearsRange([this.startYear, this.endYear]);

    try {
      if (typeof this.query === 'string' && this.query.trim() !== '') {
        await this.searchStore.search();
      }
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  handleStartChange(event: InputEvent) {
    this.startYear = Number.parseInt(
      (event.target as HTMLInputElement).value,
      10,
    );
    this.updateYears();
  }

  handleEndChange(event: InputEvent) {
    this.endYear = Number.parseInt(
      (event.target as HTMLInputElement).value,
      10,
    );
    this.updateYears();
  }

  render() {
    if (!this.query || this.resultsCount === 0) {
      return null;
    }

    const rangeMin = this.minYear;
    const rangeMax = this.maxYear;
    const startPercent =
      ((this.startYear - rangeMin) / (rangeMax - rangeMin)) * 100;
    const endPercent =
      ((this.endYear - rangeMin) / (rangeMax - rangeMin)) * 100;

    return (
      <div class='sliderContainer'>
        <label>Year Range</label>
        <div class='sliders'>
          <div
            class={classNames('activeRange', 'searchcraft-slider-active-range')}
            style={{
              left: `${startPercent}.65%`,
              width: `${endPercent - startPercent}%`,
            }}
          />
          <input
            class={classNames(
              'sliderPrimary startSlider',
              'searchcraft-slider-range-slider-start',
            )}
            max={this.minYear + 5}
            min={this.minYear}
            onInput={(event) => this.handleStartChange(event)}
            type='range'
            value={this.startYear}
          />
          <input
            class={classNames(
              'sliderSecondary endSlider',
              'searchcraft-slider-range-slider-end',
            )}
            max={this.maxYear}
            min={this.minYear + 5}
            onInput={(event) => this.handleEndChange(event)}
            type='range'
            value={this.endYear}
          />
        </div>
        <div
          class={classNames(
            'yearLabelContainer',
            'searchcraft-slider-year-label-container',
          )}
        >
          <span
            class={classNames(
              'yearLabel',
              'searchcraft-slider-start-year-label',
            )}
          >
            {this.startYear}
          </span>
          <span
            class={classNames('yearLabel', 'searchcraft-slider-end-year-label')}
          >
            {this.endYear}
          </span>
        </div>
      </div>
    );
  }
}
