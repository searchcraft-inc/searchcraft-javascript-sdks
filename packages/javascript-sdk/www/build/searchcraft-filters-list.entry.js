import { r as registerInstance, a as createEvent, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-01214c8a.js';
import { f as flattenFacets } from './utils-a3373179.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftFiltersListModuleCss = "@charset \"UTF-8\";.filtersList{width:100%}.checkboxLabel{align-items:center;color:#292929;display:flex;font-family:\"Source Sans Pro\";font-size:14px;font-weight:600;gap:14px}.checkboxLabel input[type=checkbox]{align-items:center;appearance:none;background-color:#EDEDED;border:1px solid #D9D9D9;cursor:pointer;display:flex;height:24px;justify-content:center;width:24px}.checkboxLabel input[type=checkbox]:checked{background-color:#000}.checkboxLabel input[type=checkbox]:checked::before{color:#fff;content:\"✔\"}.remainingFilterListCheckbox{margin-left:16px}.childCheckboxLabel{align-items:center;color:#292929;display:flex;font-family:\"Source Sans Pro\";font-size:14px;font-weight:600;gap:12px}.childCheckboxLabel input[type=checkbox]{align-items:center;appearance:none;background-color:#EDEDED;border:1px solid #D9D9D9;cursor:pointer;display:flex;height:24px;justify-content:center;width:24px}.childCheckboxLabel input[type=checkbox]:checked{background-color:#000}.childCheckboxLabel input[type=checkbox]:checked::before{color:#fff;content:\"✔\"}";

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
            const deduplicatedFilters = this.deduplicatePaths(Array.from(this.selectedFilters));
            this.filtersUpdated.emit(deduplicatedFilters);
            this.searchStore.setSelectedFilters(deduplicatedFilters);
            this.searchStore.search();
        };
        this.filters = [];
        this.dynamicFilters = [];
        this.isRequesting = false;
        this.query = '';
        this.resultsCount = 0;
        this.selectedFilters = new Set();
    }
    connectedCallback() {
        var _a;
        const state = this.searchStore; // Fetch the initial state
        // Initial population of facets if available
        if ((_a = state.searchResults) === null || _a === void 0 ? void 0 : _a.data.facets) {
            this.populateFiltersFromFacets(state.searchResults.data.facets);
        }
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            var _a, _b, _c, _d;
            if (!state.query || state.query.trim().length === 0) {
                if (this.selectedFilters.size > 0) {
                    this.selectedFilters.clear();
                    this.filtersUpdated.emit([]);
                    if (this.searchStore.selectedFilters.length > 0) {
                        this.searchStore.setSelectedFilters([]);
                    }
                }
            }
            this.query = state.query || '';
            this.isRequesting = state.isRequesting;
            this.resultsCount = ((_c = (_b = (_a = state.searchResults) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.hits) === null || _c === void 0 ? void 0 : _c.length) || 0;
            // Populate filters when facets are updated
            if ((_d = state.searchResults) === null || _d === void 0 ? void 0 : _d.data.facets) {
                this.populateFiltersFromFacets(state.searchResults.data.facets);
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
        const newFilters = flattenFacets(((_a = facets[0]) === null || _a === void 0 ? void 0 : _a.section) || []);
        const filtersMap = new Map();
        newFilters.forEach((filter) => {
            const key = filter.value.split('/').pop() || '';
            const existingFilter = filtersMap.get(key);
            if (!existingFilter ||
                filter.value.length < existingFilter.value.length) {
                filtersMap.set(key, filter);
            }
        });
        this.dynamicFilters = Array.from(filtersMap.values());
    }
    deduplicatePaths(filters) {
        const pathMap = new Map();
        filters.forEach((path) => {
            const key = path.split('/').pop() || '';
            const existingPath = pathMap.get(key);
            if (!existingPath || path.length < existingPath.length) {
                pathMap.set(key, path);
            }
        });
        return Array.from(pathMap.values());
    }
    formatLabel(label) {
        return label
            .replace(/-/g, ' ')
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    render() {
        if (!this.query || this.resultsCount === 0) {
            return null;
        }
        const filtersToRender = this.dynamicFilters.filter((filter) => !filter.value.includes('/', filter.value.indexOf('/') + 1));
        return (h("div", { class: 'filtersList' }, filtersToRender.map((filter) => {
            const isChecked = this.selectedFilters.has(filter.value);
            const children = this.dynamicFilters.filter((child) => child.value.startsWith(`${filter.value}/`) &&
                child.value !== filter.value);
            return (h("div", { key: filter.value }, h("label", { class: 'checkboxLabel' }, h("input", { class: 'filterCheckbox', checked: isChecked, onChange: (event) => this.handleFilterChange(filter.value, event.target.checked), type: 'checkbox' }), this.formatLabel(filter.label)), children.map((child) => {
                const isChildChecked = this.selectedFilters.has(child.value);
                return (h("label", { class: 'childCheckboxLabel', key: child.value, style: { marginLeft: '20px' } }, h("input", { class: 'childFilterCheckbox', checked: isChildChecked, onChange: (event) => this.handleFilterChange(child.value, event.target.checked), type: 'checkbox' }), this.formatLabel(child.label.split('/').pop() || '')));
            })));
        })));
    }
};
SearchcraftFiltersList.style = searchcraftFiltersListModuleCss;

export { SearchcraftFiltersList as searchcraft_filters_list };

//# sourceMappingURL=searchcraft-filters-list.entry.js.map