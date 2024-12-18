import { r as registerInstance, a as createEvent, h } from './index-8211f330.js';
import { u as useSearchcraftStore, a as useThemeStore, g } from './store-01214c8a.js';
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
        return (h("form", { key: 'b7ec4a78fdb2fef83b7734cd3f3304726066f597', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: 'faf932837b0edf4c9c263558ed365c22ef82e71e', label: this.labelForInput }), h("div", { key: 'aa5c9d107d86d79bc37da1fa3f5e5fd9da3526a7', class: 'searchContainer' }, this.rightToLeftOrientation && h("searchcraft-button", { key: 'b8937b05ea7cfdb83a5f65f5dd6c7fd0ce46c49e' }), h("searchcraft-input", { key: '6d60cfa669d20323167e8c5930a56f56730e793c', onClearInput: this.handleClearInput, onSearchInputChange: this.handleSearchInputChange, query: this.query, rightToLeftOrientation: this.rightToLeftOrientation }), !this.rightToLeftOrientation && (h("searchcraft-button", { key: '622523c13da7f7f928c62a3d3c8d8bd2109c117f', onButtonClick: this.handleFormSubmit }))), this.error && (h("searchcraft-error-message", { key: 'c7fb8c7aa73f201b19cc86653cd685d159e34bfb', errorMessage: this.errorMessage }))));
    }
};
SearchcraftBaseSearchForm.style = searchcraftBaseSearchFormModuleCss;

export { SearchcraftBaseSearchForm as searchcraft_base_search_form };

//# sourceMappingURL=searchcraft-base-search-form.entry.js.map