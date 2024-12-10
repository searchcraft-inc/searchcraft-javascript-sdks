import { r as registerInstance, a as createEvent, h } from './index-17269461.js';
import { u as useSearchcraftStore, a as useThemeStore, p } from './store-defec345.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftBaseSearchFormModuleCss = ".formLTR{font-family:Helvetica, Arial, sans-serif;text-align:left}.formRTL{font-family:Helvetica, Arial, sans-serif;text-align:right}.searchContainer{align-items:center;display:flex}";

const SearchcraftBaseSearchForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clearInput = createEvent(this, "clearInput", 7);
        this.clearInput = () => { };
        this.searchStore = useSearchcraftStore.getState();
        this.themeStore = useThemeStore.getState();
        this.componentDidLoad = () => {
            const searchcraft = new p(this.config);
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
        return (h("form", { key: '631df92dc5f74183d0f7b751cac8c54eb839945f', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: '720225b78172b46946c0066196f638ec7e3cf56b', label: this.labelForInput }), h("div", { key: 'f3d910872486544459f0c47794bb3e9868e7b598', class: 'searchContainer' }, this.rightToLeftOrientation && h("searchcraft-button", { key: '5f6004218476222a5200bdec30613d84feb86bf7' }), h("searchcraft-input", { key: 'b1e78f8f90e9693ead63d2d52a4230c7a6ce5c30', onClearInput: this.handleClearInput, rightToLeftOrientation: this.rightToLeftOrientation, onSearchInputChange: this.handleSearchInputChange, query: this.query }), !this.rightToLeftOrientation && (h("searchcraft-button", { key: '1c94f36bae107fd85c0148877a26c3e2a4250284', onButtonClick: this.handleFormSubmit }))), this.error && (h("searchcraft-error-message", { key: 'cf2d7625ea16dba4f6729d0cd2709859f83a65cd', errorMessage: this.errorMessage }))));
    }
};
SearchcraftBaseSearchForm.style = searchcraftBaseSearchFormModuleCss;

export { SearchcraftBaseSearchForm as searchcraft_base_search_form };

//# sourceMappingURL=searchcraft-base-search-form.entry.js.map