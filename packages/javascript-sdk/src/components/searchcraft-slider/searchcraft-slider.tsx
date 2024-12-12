import { Component, h, State, Prop } from '@stencil/core';
import { useSearchcraftStore } from '@provider/store';

@Component({
  tag: 'searchcraft-slider',
  styleUrl: 'searchcraft-slider.module.scss',
  shadow: true,
})
export class SearchcraftSlider {
  @Prop() minYear = 2000;
  @Prop() maxYear = new Date().getFullYear();

  @State() endYear = this.maxYear;
  @State() query = '';
  @State() startYear = this.minYear;
  @State() resultsCount = 0;

  unsubscribe: () => void;
  private searchStore = useSearchcraftStore.getState();

  componentDidLoad() {
    this.unsubscribe = useSearchcraftStore.subscribe((state) => {
      this.query = state.query || '';
      this.resultsCount = state.searchResults?.data?.hits?.length || 0;
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
    // Render only if there's a query and results exist
    if (!this.query || this.resultsCount === 0) {
      return null;
    }

    return (
      <div class='slider-container'>
        <label>Filter by Year</label>
        <div class='range-container'>
          <input
            class='range-slider'
            max={this.maxYear}
            min={this.minYear}
            onInput={this.handleStartYearChange}
            step='1'
            type='range'
            value={this.startYear}
          />
          <input
            class='range-slider'
            max={this.maxYear}
            min={this.minYear}
            onInput={this.handleEndYearChange}
            step='1'
            type='range'
            value={this.endYear}
          />
        </div>
        <div class='year-labels'>
          <span class='year-label'>{this.startYear}</span>
          <span class='year-label'>{this.endYear}</span>
        </div>
      </div>
    );
  }
}
