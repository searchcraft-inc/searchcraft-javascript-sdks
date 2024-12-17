import { Component, h, State, Prop } from '@stencil/core';
import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'searchcraft-slider',
  styleUrl: 'searchcraft-slider.module.scss',
  shadow: true,
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

  componentDidLoad() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      if (state.query.length > 0) {
        this.hasSearched = true;
        this.resultsCount = state.searchResults?.data?.hits?.length || 0;
      }
      this.query = state.query;
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  private updateYears = async () => {
    this.searchStore.setYearsRange([this.startYear, this.endYear]);

    try {
      if (typeof this.query === 'string' && this.query.trim() !== '') {
        await this.searchStore.search();
      } else {
        console.warn('Query is missing or empty, skipping search request.');
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
      <div class='sliderContainer'>
        <div class='rangeContainer'>
          <div
            class='activeRange'
            style={{
              left: `${startPercent}%`,
              width: `${endPercent - startPercent}%`,
            }}
          />
          <input
            class='rangeSlider'
            max={this.maxYear}
            min={this.minYear}
            onInput={this.handleStartYearChange}
            step='1'
            type='range'
            value={this.startYear}
          />
          <input
            class='rangeSlider'
            max={this.maxYear}
            min={this.minYear}
            onInput={this.handleEndYearChange}
            step='1'
            type='range'
            value={this.endYear}
          />
        </div>
        <div class='yearLabels'>
          <span class='yearLabel'>{this.startYear}</span>
          <span class='yearLabel'>{this.endYear}</span>
        </div>
      </div>
    );
  }
}
