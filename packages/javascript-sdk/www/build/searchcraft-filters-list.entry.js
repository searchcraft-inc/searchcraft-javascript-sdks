import { r as registerInstance, a as createEvent, h } from './index-17269461.js';
import { u as useSearchcraftStore } from './store-81542f52.js';
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
            const filtersToRender = this.dynamicFilters.length > 0 ? this.dynamicFilters : this.filters;
            // Construct the original data dynamically from filtersToRender
            const originalData = {
                section: {
                    counts: filtersToRender.reduce((countsAcc, filter) => {
                        const [, facetValue] = filter.value.split(':');
                        countsAcc[`${facetValue}`] = Number.parseInt((filter.label.match(/\((\d+)\)$/) || [])[1] || '0', 10);
                        return countsAcc;
                    }, {}),
                },
            };
            const checkedCategories = selectedFiltersArray.map((filter) => filter.split(':')[1]);
            const filteredCounts = Object.keys(originalData.section.counts)
                .filter((key) => checkedCategories.includes(key))
                .reduce((acc, key) => {
                acc[key] = originalData.section.counts[key];
                return acc;
            }, {});
            const filteredData = {
                section: {
                    counts: filteredCounts,
                },
            };
            // Transform the filtered data into the facets structure
            const transformedFacets = {
                section: {
                    counts: filteredData.section.counts,
                },
            };
            // Emit the updated selected filters and update the search store
            this.filtersUpdated.emit(selectedFiltersArray);
            this.searchStore.setFacets(transformedFacets);
            this.searchStore.search();
        };
        this.filters = [];
        this.selectedFilters = new Set();
        this.dynamicFilters = [];
    }
    connectedCallback() {
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            var _a;
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
        const newFilters = Object.entries(facets).flatMap(([facetKey, facetData]) => Object.entries(facetData.counts).map(([value, count]) => ({
            label: `${facetKey}: ${value.replace(/^\//, '')} (${count})`,
            value: `${facetKey}:${value}`,
        })));
        this.dynamicFilters = newFilters;
    }
    render() {
        const filtersToRender = this.dynamicFilters.length > 0 ? this.dynamicFilters : this.filters;
        return (h("div", { key: '595a148c35071683f7612d115ee53ab23b926af4', class: 'filtersList' }, filtersToRender.map((filter) => {
            const filterLabel = filter.label.split(':')[1] || filter.label;
            return (h("label", { class: 'checkboxLabel', key: filter.label }, h("input", { class: 'filterListCheckbox', onChange: (event) => this.handleFilterChange(filter.value, event.target.checked), type: 'checkbox', value: filter.value }), filterLabel));
        })));
    }
};
SearchcraftFiltersList.style = searchcraftFiltersListModuleCss;

export { SearchcraftFiltersList as searchcraft_filters_list };

//# sourceMappingURL=searchcraft-filters-list.entry.js.map