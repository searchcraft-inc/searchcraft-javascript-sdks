import { r as registerInstance, a as createEvent, h } from './index-8211f330.js';
import { u as useSearchcraftStore, a as useThemeStore, g } from './store-0451a982.js';
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
        return (h("form", { key: 'cb4cde6c85af6a2255c320d60d73715b70d7ac25', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: 'ab074deff9455564214048884d4c70471fc436ed', label: this.labelForInput }), h("div", { key: '6e5303909a1f7b46043bbcb34a7fcd634bdf8d9c', class: 'searchContainer' }, this.rightToLeftOrientation && h("searchcraft-button", { key: 'e9d05deaf806bd2ec200ee8280134a5ca0e29886' }), h("searchcraft-input", { key: 'b4f2ceb8668cba4027f51f9e9a0243315a5da31f', onClearInput: this.handleClearInput, onSearchInputChange: this.handleSearchInputChange, query: this.query, rightToLeftOrientation: this.rightToLeftOrientation }), !this.rightToLeftOrientation && (h("searchcraft-button", { key: '5b996184cd4962df5a197241a816bd9b95c75f09', onButtonClick: this.handleFormSubmit }))), this.error && (h("searchcraft-error-message", { key: '67cec6812561ac53bfa936aaa32937322a9af6ec', errorMessage: this.errorMessage }))));
    }
};
SearchcraftBaseSearchForm.style = searchcraftBaseSearchFormModuleCss;

export { SearchcraftBaseSearchForm as searchcraft_base_search_form };

//# sourceMappingURL=searchcraft-base-search-form.entry.js.map