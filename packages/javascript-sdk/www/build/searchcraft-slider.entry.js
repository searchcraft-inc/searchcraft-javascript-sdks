import { r as registerInstance, h } from './index-17269461.js';
import { u as useSearchcraftStore } from './store-881233b3.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftSliderModuleCss = ".slider-container{display:flex;flex-direction:column;gap:10px;font-family:Arial, sans-serif;align-items:center}label{font-size:14px;font-weight:bold;margin-bottom:10px}.range-container{display:flex;width:100%;align-items:center}.range-slider{width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;margin:0 -1px;position:relative}.range-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;background:#007bff;border-radius:50%;border:2px solid #fff;cursor:pointer;position:relative}.range-slider::-moz-range-thumb{width:20px;height:20px;background:#007bff;border-radius:50%;border:2px solid #fff;cursor:pointer}.range-slider:before{content:\"\";position:absolute;height:4px;background:#007bff;border-radius:2px;left:0;right:0;z-index:-1}.year-labels{display:flex;justify-content:space-between;width:100%;margin-top:10px;font-size:12px;color:#555}.year-label{min-width:30px;text-align:center}";

const SearchcraftSlider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.searchStore = useSearchcraftStore.getState();
        this.updateYears = async () => {
            const query = this.searchStore.query; // Get the query from the store
            this.searchStore.setYearsRange([this.startYear, this.endYear]);
            try {
                if (!query || query.trim() === '') {
                    console.warn('No query value, search request skipped.');
                    return;
                }
                await this.searchStore.search();
            }
            catch (error) {
                console.error('Search failed:', error);
            }
        };
        this.handleStartYearChange = (event) => {
            const value = Number.parseInt(event.target.value, 10);
            this.startYear = Math.min(value, this.endYear);
            this.updateYears();
        };
        this.handleEndYearChange = (event) => {
            const value = Number.parseInt(event.target.value, 10);
            this.endYear = Math.max(value, this.startYear);
            this.updateYears();
        };
        this.minYear = 2000;
        this.maxYear = new Date().getFullYear();
        this.startYear = this.minYear;
        this.endYear = this.maxYear;
    }
    render() {
        return (h("div", { key: 'ccd163c0f88079e160660ba5b9c156d5f70f10ce', class: 'slider-container' }, h("label", { key: '5d9de3a8b505532c8cc30d5bf696966d0e9f164a' }, "Filter by Year"), h("div", { key: '2e4a777292043eceb16a4ab84a486bf720e68fd9', class: 'range-container' }, h("input", { key: '2c1e0de5f5f72d7bed065ae75b1b247abdcb296e', type: 'range', min: this.minYear, max: this.maxYear, value: this.startYear, step: '1', onInput: this.handleStartYearChange, class: 'range-slider' }), h("input", { key: '0164aa19fce1d8ae9961cf42ac67e6b0a888f105', type: 'range', min: this.minYear, max: this.maxYear, value: this.endYear, step: '1', onInput: this.handleEndYearChange, class: 'range-slider' })), h("div", { key: '1363f66ede2565b7449493049fbeeb6fc54745d5', class: 'year-labels' }, h("span", { key: 'f2f1b964f9570d04f53fc591602d89ebe50d08a2', class: 'year-label' }, this.startYear), h("span", { key: '5ff46701e967bb257676a5db9cd19da9bc2d5467', class: 'year-label' }, this.endYear))));
    }
};
SearchcraftSlider.style = searchcraftSliderModuleCss;

export { SearchcraftSlider as searchcraft_slider };

//# sourceMappingURL=searchcraft-slider.entry.js.map