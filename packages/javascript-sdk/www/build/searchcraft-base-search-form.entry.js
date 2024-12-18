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
        return (h("form", { key: '57783f4ac11f450620b654fbe055aca60c62d2b3', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: '18e6ccd5d71a8047310a905babf8f140160f72b9', label: this.labelForInput }), h("div", { key: '1e09bda89bc5d07151cab10e7c740ec4e7a1bbde', class: 'searchContainer' }, this.rightToLeftOrientation && h("searchcraft-button", { key: '7a02987e6b19adce8142c14c20343952e30c8162' }), h("searchcraft-input", { key: 'a4e2e1f15b5a337ab954ad0a5c360717d7f5d494', onClearInput: this.handleClearInput, onSearchInputChange: this.handleSearchInputChange, query: this.query, rightToLeftOrientation: this.rightToLeftOrientation }), !this.rightToLeftOrientation && (h("searchcraft-button", { key: '7a46c5abc0142e9b55e573eb4c7bc36e0caded26', onButtonClick: this.handleFormSubmit }))), this.error && (h("searchcraft-error-message", { key: 'add2e4d7a6ff04466c18906faad244ce049d75a6', errorMessage: this.errorMessage }))));
    }
};
SearchcraftBaseSearchForm.style = searchcraftBaseSearchFormModuleCss;

export { SearchcraftBaseSearchForm as searchcraft_base_search_form };

//# sourceMappingURL=searchcraft-base-search-form.entry.js.map