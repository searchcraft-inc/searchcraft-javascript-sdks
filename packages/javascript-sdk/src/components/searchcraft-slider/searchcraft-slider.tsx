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

  @State() startYear = this.minYear;
  @State() endYear = this.maxYear;

  private searchStore = useSearchcraftStore.getState();

  private updateYears = async () => {
    this.searchStore.setYearsRange([this.startYear, this.endYear]);

    try {
      await this.searchStore.search();
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
    return (
      <div class='slider-container'>
        <label>Filter by Year</label>
        <div class='range-container'>
          <input
            type='range'
            min={this.minYear}
            max={this.maxYear}
            value={this.startYear}
            step='1'
            onInput={this.handleStartYearChange}
            class='range-slider'
          />
          <input
            type='range'
            min={this.minYear}
            max={this.maxYear}
            value={this.endYear}
            step='1'
            onInput={this.handleEndYearChange}
            class='range-slider'
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
