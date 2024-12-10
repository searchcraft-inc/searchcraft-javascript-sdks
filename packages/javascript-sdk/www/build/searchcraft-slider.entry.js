import { r as registerInstance, h } from './index-17269461.js';
import { u as useSearchcraftStore } from './store-81542f52.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftSliderModuleCss = ".slider-container{display:flex;flex-direction:column;gap:10px;font-family:Arial, sans-serif;align-items:center}label{font-size:14px;font-weight:bold;margin-bottom:10px}.range-container{display:flex;width:100%;align-items:center}.range-slider{width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;margin:0 -1px;position:relative}.range-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;background:#007bff;border-radius:50%;border:2px solid #fff;cursor:pointer;position:relative}.range-slider::-moz-range-thumb{width:20px;height:20px;background:#007bff;border-radius:50%;border:2px solid #fff;cursor:pointer}.range-slider:before{content:\"\";position:absolute;height:4px;background:#007bff;border-radius:2px;left:0;right:0;z-index:-1}.year-labels{display:flex;justify-content:space-between;width:100%;margin-top:10px;font-size:12px;color:#555}.year-label{min-width:30px;text-align:center}";

const SearchcraftSlider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.searchStore = useSearchcraftStore.getState();
        this.updateYears = async () => {
            this.searchStore.setYearsRange([this.startYear, this.endYear]);
            try {
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
        return (h("div", { key: 'aa4d2b97eee19bf4cc11e371fa3b5d665dd73b9b', class: 'slider-container' }, h("label", { key: '2c761060f6c2f4ca46f5efc302fb26d9e27f2742' }, "Filter by Year"), h("div", { key: '8af4715f477ba0532d579b8623a98e59edafa1a0', class: 'range-container' }, h("input", { key: '67db3f340b5028abc347df42e986ceaf4739b8ad', type: 'range', min: this.minYear, max: this.maxYear, value: this.startYear, step: '1', onInput: this.handleStartYearChange, class: 'range-slider' }), h("input", { key: '6c985b9a42bdaa34356d5939d1a131892f7c9b21', type: 'range', min: this.minYear, max: this.maxYear, value: this.endYear, step: '1', onInput: this.handleEndYearChange, class: 'range-slider' })), h("div", { key: '36d330c09ebf5fa759b15f524a2f36de9b8dc91a', class: 'year-labels' }, h("span", { key: '22fabd65df46b06ccf4a8f16175c17ad11544746', class: 'year-label' }, this.startYear), h("span", { key: 'f42f3d507403adc72ff376b77565769af8c0fef6', class: 'year-label' }, this.endYear))));
    }
};
SearchcraftSlider.style = searchcraftSliderModuleCss;

export { SearchcraftSlider as searchcraft_slider };

//# sourceMappingURL=searchcraft-slider.entry.js.map