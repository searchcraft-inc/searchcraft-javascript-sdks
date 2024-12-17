import { r as registerInstance, a as createEvent, h } from './index-8211f330.js';
import { u as useSearchcraftStore, a as useThemeStore, g } from './store-18b7e3ea.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftBaseSearchFormModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.formLTR{font-family:var(--font-stack);text-align:left}.formRTL{font-family:var(--font-stack);text-align:right}.searchContainer{align-items:center;display:flex}";

const SearchcraftBaseSearchForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clearInput = createEvent(this, "clearInput", 7);
        this.clearInput = () => { };
        this.searchStore = useSearchcraftStore.getState();
        this.themeStore = useThemeStore.getState();
        this.componentDidLoad = () => {
            const searchcraft = new g(this.config);
            this.searchStore.initialize(searchcraft, true);
        };
        this.handleFormSubmit = async (event) => {
            event.preventDefault();
            if (this.query.trim() === '') {
                this.error = true;
            }
            else {
                this.error = false;
                this.searchStore.setQuery(this.query);
                await this.searchStore.search();
                this.searchResults = JSON.stringify(this.searchStore.searchResults);
            }
        };
        this.handleSearchInputChange = (event) => {
            this.query = event.detail;
        };
        this.handleClearInput = () => {
            this.query = '';
            this === null || this === void 0 ? void 0 : this.clearInput();
        };
        this.toggleTheme = () => {
            this.themeStore.toggleTheme();
        };
        this.config = {
            apiKey: '',
            endpointURL: '',
            index: [],
        };
        this.errorMessage = 'Search was unsuccessful';
        this.labelForInput = 'Search';
        this.rightToLeftOrientation = false;
        this.error = false;
        this.query = '';
        this.searchResults = null;
    }
    render() {
        return (h("form", { key: '419514742ed966aedcba041eae337853ad811be7', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: 'daf9504d63660d0f2d7a8f95b6c59af7702dbf05', label: this.labelForInput }), h("div", { key: 'f3dd5108d3172390417c19bf51ad7c2b1c4ee999', class: 'searchContainer' }, this.rightToLeftOrientation && h("searchcraft-button", { key: 'd4d9c381be592d64464a846de72afd087ee40185' }), h("searchcraft-input", { key: 'db5b9f2b721f5d09faf245da4784a1f267406d71', onClearInput: this.handleClearInput, onSearchInputChange: this.handleSearchInputChange, query: this.query, rightToLeftOrientation: this.rightToLeftOrientation }), !this.rightToLeftOrientation && (h("searchcraft-button", { key: 'b07821ced7e60f29934170be742a67a030c172ef', onButtonClick: this.handleFormSubmit }))), this.error && (h("searchcraft-error-message", { key: 'd2977f59a562fdefc21018b739f48e5543854112', errorMessage: this.errorMessage }))));
    }
};
SearchcraftBaseSearchForm.style = searchcraftBaseSearchFormModuleCss;

export { SearchcraftBaseSearchForm as searchcraft_base_search_form };

//# sourceMappingURL=searchcraft-base-search-form.entry.js.map