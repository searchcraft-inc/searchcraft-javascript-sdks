import { r as registerInstance, a as createEvent, h } from './index-17269461.js';
import { u as useSearchcraftStore, a as useThemeStore, p } from './store-881233b3.js';
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
        return (h("form", { key: '89651e0b9946b082b8b917eb0d123ebb81d35f95', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: 'a2fa60cd906175920f087c7dc70a72cce8cbd91d', label: this.labelForInput }), h("div", { key: '503f42fb4a8f8ea42ed515d00da01cd293e4e15c', class: 'searchContainer' }, this.rightToLeftOrientation && h("searchcraft-button", { key: '4083b0336ec6bcc494c264ba066742b44d19811d' }), h("searchcraft-input", { key: '0a1cd6937843aff9ea6b6ca5ae5e9b18f14ee95a', onClearInput: this.handleClearInput, rightToLeftOrientation: this.rightToLeftOrientation, onSearchInputChange: this.handleSearchInputChange, query: this.query }), !this.rightToLeftOrientation && (h("searchcraft-button", { key: '321790c97a4541c6579bde2741876b2b244d7f48', onButtonClick: this.handleFormSubmit }))), this.error && (h("searchcraft-error-message", { key: '8ffa880fe34100813ac57ac861afab7a4a946cdb', errorMessage: this.errorMessage }))));
    }
};
SearchcraftBaseSearchForm.style = searchcraftBaseSearchFormModuleCss;

export { SearchcraftBaseSearchForm as searchcraft_base_search_form };

//# sourceMappingURL=searchcraft-base-search-form.entry.js.map