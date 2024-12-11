import { r as registerInstance, a as createEvent, h } from './index-17269461.js';
import { u as useSearchcraftStore } from './store-881233b3.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftFiltersListModuleCss = "@charset \"UTF-8\";.filtersList{padding:16px}.checkboxLabel{align-items:center;color:#292929;display:flex;font-size:14px;font-weight:600;gap:12px}.checkboxLabel input[type=checkbox]{align-items:center;appearance:none;background-color:#EDEDED;border:1px solid #D9D9D9;cursor:pointer;display:flex;height:24px;justify-content:center;width:24px}.checkboxLabel input[type=checkbox]:checked{background-color:#000}.checkboxLabel input[type=checkbox]:checked::before{color:#fff;content:\"✔\";font-size:14px}";

const SearchcraftFiltersList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filtersUpdated = createEvent(this, "filtersUpdated", 7);
        this.searchStore = useSearchcraftStore.getState();
        this.handleFilterChange = (value, checked) => {
            if (checked) {
                this.selectedFilters.add(value);
            }
            else {
                this.selectedFilters.delete(value);
            }
            const selectedFiltersArray = Array.from(this.selectedFilters);
            this.filtersUpdated.emit(selectedFiltersArray);
            this.searchStore.setSelectedFilters(selectedFiltersArray);
            this.searchStore.search();
        };
        this.filters = [];
        this.dynamicFilters = [];
        this.isRequesting = false;
        this.selectedFilters = new Set();
        this.originalFilterCounts = {};
    }
    connectedCallback() {
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            var _a;
            this.isRequesting = state.isRequesting;
            const facets = (_a = state.searchResults) === null || _a === void 0 ? void 0 : _a.data.facets;
            if (facets) {
                this.populateFiltersFromFacets(facets);
            }
        });
    }
    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    populateFiltersFromFacets(facets) {
        const newFilters = Object.entries(facets).flatMap(([facetKey, facetData]) => Object.entries(facetData.counts).map(([value, count]) => {
            const filterValue = `${facetKey}:${value}`;
            this.originalFilterCounts[filterValue] = `${count}`; // Store the original count
            return {
                label: `${facetKey}: ${value.replace(/^\//, '')} (${count})`,
                value: filterValue,
            };
        }));
        this.dynamicFilters = newFilters;
    }
    render() {
        const checkedFilters = Array.from(this.selectedFilters).map((value) => {
            const count = this.originalFilterCounts[value] || '0';
            return {
                label: `${value.split(':')[1]} (${count})`,
                value,
            };
        });
        const remainingDynamicFilters = this.dynamicFilters.filter((filter) => !this.selectedFilters.has(filter.value));
        if (this.isRequesting) {
            return h("div", null, "Loading facets");
        }
        return (h("div", { class: 'filtersList' }, checkedFilters.map((filter) => (h("label", { class: 'checkboxLabel', key: filter.value }, h("input", { class: 'filterListCheckbox', checked: true, onChange: (event) => this.handleFilterChange(filter.value, event.target.checked), type: 'checkbox', value: filter.value }), filter.label))), remainingDynamicFilters.map((filter) => {
            const filterLabel = filter.label.split(':')[1] || filter.label;
            return (h("label", { class: 'checkboxLabel', key: filter.value }, h("input", { class: 'filterListCheckbox', checked: this.selectedFilters.has(filter.value), onChange: (event) => this.handleFilterChange(filter.value, event.target.checked), type: 'checkbox', value: filter.value }), filterLabel));
        })));
    }
};
SearchcraftFiltersList.style = searchcraftFiltersListModuleCss;

export { SearchcraftFiltersList as searchcraft_filters_list };

//# sourceMappingURL=searchcraft-filters-list.entry.js.map