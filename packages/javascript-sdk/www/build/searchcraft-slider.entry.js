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
        return (h("div", { key: '967543f3b4e300ab8827a45f639c1bc2449374ad', class: 'slider-container' }, h("label", { key: 'ec7ca5490e94ed01c481c1c9364f01fdfd9b33ad' }, "Filter by Year"), h("div", { key: 'f62f175847896274d9f14a4db0b46c1c3f16ba45', class: 'range-container' }, h("input", { key: '26dd5c96e0214ff3556976852fc8219e2b3bed54', type: 'range', min: this.minYear, max: this.maxYear, value: this.startYear, step: '1', onInput: this.handleStartYearChange, class: 'range-slider' }), h("input", { key: 'ff202e19f3547a3e122e1e2353a2952125fec8b8', type: 'range', min: this.minYear, max: this.maxYear, value: this.endYear, step: '1', onInput: this.handleEndYearChange, class: 'range-slider' })), h("div", { key: '41a1fad97bfe665b2adad15405c420c6dd7139a3', class: 'year-labels' }, h("span", { key: '165e23cdd74eb34d4f3469d7651e2e70b44f90ba', class: 'year-label' }, this.startYear), h("span", { key: 'c5e5bfc628bf09d1ec7fcc285cac7077a3c7059e', class: 'year-label' }, this.endYear))));
    }
};
SearchcraftSlider.style = searchcraftSliderModuleCss;

export { SearchcraftSlider as searchcraft_slider };

//# sourceMappingURL=searchcraft-slider.entry.js.map