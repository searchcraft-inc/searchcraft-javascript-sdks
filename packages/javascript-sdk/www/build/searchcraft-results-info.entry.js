import { r as registerInstance, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-18b7e3ea.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftResultsInfoModuleCss = ".container{display:flex;justify-content:flex-start}.resultsInfo{color:#292929;font-family:\"Brygada 1918\";font-size:18px;font-weight:600;line-height:20px}";

const SearchcraftResultsInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isRequesting = false;
        this.resultsCount = 0;
        this.responseTime = '';
        this.query = '';
    }
    connectedCallback() {
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            var _a, _b, _c, _d;
            this.isRequesting = state.isRequesting;
            this.resultsCount = ((_b = (_a = state.searchResults) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.count) || 0;
            this.responseTime = ((((_d = (_c = state.searchResults) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.time_taken) || 0) * 1000).toFixed(2);
            this.query = state.query || ''; // Update query from store
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
        return (h("div", { class: 'container' }, h("p", { class: 'resultsInfo' }, this.resultsCount, " results found in ", this.responseTime, "ms")));
    }
};
SearchcraftResultsInfo.style = searchcraftResultsInfoModuleCss;

export { SearchcraftResultsInfo as searchcraft_results_info };

//# sourceMappingURL=searchcraft-results-info.entry.js.map