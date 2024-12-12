import { r as registerInstance, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-e533e567.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftSliderModuleCss = ".slider-container{display:flex;flex-direction:column;gap:10px;font-family:Arial, sans-serif;align-items:center}label{font-size:14px;font-weight:bold;margin-bottom:10px}.range-container{display:flex;width:100%;align-items:center}.range-slider{width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;margin:0 -1px;position:relative}.range-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;background-color:#FFF;border-radius:50%;border:1px solid #E6E6E6;cursor:pointer;position:relative}.range-slider::-moz-range-thumb{width:20px;height:20px;background-color:#FFF;border-radius:50%;border:1px solid #E6E6E6;cursor:pointer}.range-slider:before{content:\"\";position:absolute;height:4px;background-color:#FFF;border-radius:2px;left:0;right:0;z-index:-1}.year-labels{display:flex;justify-content:space-between;width:100%;margin-top:10px;font-size:12px;color:#555}.year-label{min-width:30px;text-align:center}";

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
        this.minYear = 2000;
        this.maxYear = new Date().getFullYear();
        this.endYear = this.maxYear;
        this.query = '';
        this.startYear = this.minYear;
        this.hasSearched = false;
    }
    componentDidLoad() {
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            if (state.query.length > 0) {
                this.hasSearched = true;
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
        if (!this.hasSearched) {
            return null;
        }
        return (h("div", { class: 'slider-container' }, h("label", null, "Filter by Year"), h("div", { class: 'range-container' }, h("input", { class: 'range-slider', max: this.maxYear, min: this.minYear, onInput: this.handleStartYearChange, step: '1', type: 'range', value: this.startYear }), h("input", { class: 'range-slider', max: this.maxYear, min: this.minYear, onInput: this.handleEndYearChange, step: '1', type: 'range', value: this.endYear })), h("div", { class: 'year-labels' }, h("span", { class: 'year-label' }, this.startYear), h("span", { class: 'year-label' }, this.endYear))));
    }
};
SearchcraftSlider.style = searchcraftSliderModuleCss;

export { SearchcraftSlider as searchcraft_slider };

//# sourceMappingURL=searchcraft-slider.entry.js.map