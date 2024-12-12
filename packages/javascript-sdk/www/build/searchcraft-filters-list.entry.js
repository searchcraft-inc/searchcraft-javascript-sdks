import { r as registerInstance, a as createEvent, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-18b7e3ea.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftFiltersListModuleCss = "@charset \"UTF-8\";.filtersList{padding:16px;width:100%}.checkboxLabel{align-items:center;color:#292929;display:flex;font-size:14px;font-weight:600;gap:12px}.checkboxLabel input[type=checkbox]{align-items:center;appearance:none;background-color:#EDEDED;border:1px solid #D9D9D9;cursor:pointer;display:flex;height:24px;justify-content:center;width:24px}.checkboxLabel input[type=checkbox]:checked{background-color:#000}.checkboxLabel input[type=checkbox]:checked::before{color:#fff;content:\"✔\";font-size:14px}.remainingFilterListCheckbox{margin-left:16px}.childCheckboxLabel{align-items:center;color:#292929;display:flex;font-size:14px;font-weight:600;gap:12px}.childCheckboxLabel input[type=checkbox]{align-items:center;appearance:none;background-color:#EDEDED;border:1px solid #D9D9D9;cursor:pointer;display:flex;height:24px;justify-content:center;width:24px}.childCheckboxLabel input[type=checkbox]:checked{background-color:#000}.childCheckboxLabel input[type=checkbox]:checked::before{color:#fff;content:\"✔\";font-size:14px}";

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
        this.initialFilters = [];
        this.isRequesting = false;
        this.selectedFilters = new Set();
        this.originalFilterCounts = {};
        this.query = '';
        this.resultsCount = 0;
    }
    connectedCallback() {
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            var _a, _b, _c, _d;
            this.isRequesting = state.isRequesting;
            this.query = state.query || '';
            this.resultsCount = ((_c = (_b = (_a = state.searchResults) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.hits) === null || _c === void 0 ? void 0 : _c.length) || 0;
            const facets = (_d = state.searchResults) === null || _d === void 0 ? void 0 : _d.data.facets;
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
        var _a;
        const newFilters = Object.entries(((_a = facets.section) === null || _a === void 0 ? void 0 : _a.counts) || {}).map(([key, count]) => {
            const filterValue = key;
            this.originalFilterCounts[filterValue] = `${count}`;
            return {
                label: `${key.replace(/^\//, '')} (${count})`,
                value: filterValue,
            };
        });
        // Update dynamic filters while preserving the initial filters
        const updatedFilters = [
            ...this.initialFilters,
            ...newFilters.filter((filter) => !this.initialFilters.some((initial) => initial.value === filter.value)),
        ];
        this.dynamicFilters = updatedFilters;
        // Store the initial filters only once
        if (this.initialFilters.length === 0) {
            this.initialFilters = [...updatedFilters];
        }
    }
    formatLabel(label) {
        return label
            .replace(/-/g, ' ') // Replace dashes with spaces
            .split(' ') // Split words
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter
            .join(' '); // Join words back into a single string
    }
    render() {
        if (!this.query || this.resultsCount === 0) {
            return null;
        }
        const filtersToRender = this.initialFilters.map((initialFilter) => {
            const isChecked = this.selectedFilters.has(initialFilter.value);
            const dynamicChildren = this.dynamicFilters.filter((dynamicFilter) => dynamicFilter.value.startsWith(initialFilter.value) &&
                dynamicFilter.value !== initialFilter.value);
            return Object.assign(Object.assign({}, initialFilter), { isChecked, children: dynamicChildren });
        });
        return (h("div", { class: 'filtersList' }, filtersToRender.map((filter) => (h("div", { key: filter.value }, h("label", { class: 'checkboxLabel' }, h("input", { class: 'filterCheckbox', checked: filter.isChecked, onChange: (event) => this.handleFilterChange(filter.value, event.target.checked), type: 'checkbox', value: filter.value }), this.formatLabel(filter.label)), filter.isChecked &&
            filter.children.map((childFilter) => {
                const childLabel = childFilter.label.split('/').pop(); // Get only the part after the last '/'
                return (h("label", { class: 'childCheckboxLabel', key: childFilter.value, style: { marginLeft: '20px' } }, h("input", { class: 'childFilterCheckbox', checked: this.selectedFilters.has(childFilter.value), onChange: (event) => this.handleFilterChange(childFilter.value, event.target.checked), type: 'checkbox', value: childFilter.value }), this.formatLabel(childLabel || '')));
            }))))));
    }
};
SearchcraftFiltersList.style = searchcraftFiltersListModuleCss;

export { SearchcraftFiltersList as searchcraft_filters_list };

//# sourceMappingURL=searchcraft-filters-list.entry.js.map