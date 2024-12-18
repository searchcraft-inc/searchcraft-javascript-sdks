import { r as registerInstance, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-01214c8a.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftSliderModuleCss = ".sliderContainer{display:flex;flex-direction:column;gap:10px;font-family:Arial, sans-serif;align-items:center;width:100%}.rangeContainer{display:flex;position:relative;width:100%;align-items:center}.rangeContainer .activeRange{position:absolute;top:50%;transform:translateY(-50%);height:4px;background:#007DB3;z-index:0;border-radius:2px}.rangeContainer .rangeSlider{width:100%;height:4px;background:transparent;border-radius:2px;outline:none;-webkit-appearance:none;appearance:none;position:absolute;margin:0}.rangeContainer .rangeSlider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;background-color:#FFF;border-radius:50%;border:2px solid #e6e6e6;cursor:pointer}.rangeContainer .rangeSlider::-moz-range-thumb{width:20px;height:20px;background-color:#FFF;border-radius:50%;border:2px solid #e6e6e6;cursor:pointer}.yearLabels{display:flex;justify-content:space-between;width:100%;margin-top:10px;font-size:15px;font-weight:600;font-family:\"Source Sans Pro\", sans-serif;color:#666}.yearLabel{min-width:30px;text-align:center}";

const SearchcraftSlider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.searchStore = useSearchcraftStore.getState();
        this.updateYears = async () => {
            this.searchStore.setYearsRange([this.startYear, this.endYear]);
            try {
                if (typeof this.query === 'string' && this.query.trim() !== '') {
                    await this.searchStore.search();
                }
                else {
                    console.warn('Query is missing or empty, skipping search request.');
                }
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
        this.maxYear = new Date().getFullYear();
        this.minYear = 2014;
        this.endYear = this.maxYear;
        this.hasSearched = false;
        this.query = '';
        this.resultsCount = 0;
        this.startYear = this.minYear;
    }
    componentDidLoad() {
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            var _a, _b, _c;
            if (state.query.length > 0) {
                this.hasSearched = true;
                this.resultsCount = ((_c = (_b = (_a = state.searchResults) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.hits) === null || _c === void 0 ? void 0 : _c.length) || 0;
            }
            this.query = state.query;
        });
    }
    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        if (!this.query || this.resultsCount === 0) {
            return null;
        }
        const rangeMin = this.minYear;
        const rangeMax = this.maxYear;
        const startPercent = ((this.startYear - rangeMin) / (rangeMax - rangeMin)) * 100;
        const endPercent = ((this.endYear - rangeMin) / (rangeMax - rangeMin)) * 100;
        return (h("div", { class: 'sliderContainer' }, h("div", { class: 'rangeContainer' }, h("div", { class: 'activeRange', style: {
                left: `${startPercent}%`,
                width: `${endPercent - startPercent}%`,
            } }), h("input", { class: 'rangeSlider', max: this.maxYear, min: this.minYear, onInput: this.handleStartYearChange, step: '1', type: 'range', value: this.startYear }), h("input", { class: 'rangeSlider', max: this.maxYear, min: this.minYear, onInput: this.handleEndYearChange, step: '1', type: 'range', value: this.endYear })), h("div", { class: 'yearLabels' }, h("span", { class: 'yearLabel' }, this.startYear), h("span", { class: 'yearLabel' }, this.endYear))));
    }
};
SearchcraftSlider.style = searchcraftSliderModuleCss;

export { SearchcraftSlider as searchcraft_slider };

//# sourceMappingURL=searchcraft-slider.entry.js.map