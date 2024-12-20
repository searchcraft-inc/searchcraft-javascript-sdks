import { Component, h, State, Prop } from '@stencil/core';
import classNames from 'classnames';

import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'searchcraft-slider',
  styleUrl: 'searchcraft-slider.module.scss',
  shadow: false,
})
export class SearchcraftSlider {
  @Prop() maxYear = new Date().getFullYear();
  @Prop() minYear = 2014;

  @State() endYear = this.maxYear;
  @State() hasSearched = false;
  @State() query = '';
  @State() resultsCount = 0;
  @State() startYear = this.minYear;

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

  private handleStartYearChange = (event: InputEvent) => {
    const value = Number.parseInt((event.target as HTMLInputElement).value, 10);
    this.startYear = Math.min(value, this.endYear);
    this.updateYears();
  };

  private handleEndYearChange = (event: InputEvent) => {
    const value = Number.parseInt((event.target as HTMLInputElement).value, 10);
    this.endYear = Math.max(value, this.startYear);
    this.updateYears();
  };

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
      <div class={classNames('slider', 'searchcraft-slider-container')}>
        <div
          class={classNames(
            'sliderRangeContainer',
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
            class={classNames('rangeSlider', 'searchcraft-slider-range-slider')}
            max={this.maxYear}
            min={this.minYear}
            onInput={this.handleStartYearChange}
            step='1'
            type='range'
            value={this.startYear}
          />
          <input
            class={classNames('rangeSlider', 'searchcraft-slider-range-slider')}
            max={this.maxYear}
            min={this.minYear}
            onInput={this.handleEndYearChange}
            step='1'
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
            class={classNames('yearLabel', 'searchcraft-slider-year-label')}
          >
            {this.startYear}
          </span>
          <span
            class={classNames('yearLabel', 'searchcraft-slider-year-label')}
          >
            {this.endYear}
          </span>
        </div>
      </div>
    );
  }
}
