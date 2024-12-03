import { r as registerInstance, a as createEvent, h } from './index-b2fefddc.js';
import { u as useSearchcraftStore, b as useThemeStore, a } from './store-2132da59.js';
import './_commonjsHelpers-63cbe26c.js';

const scBaseSearchFormModuleCss = ".formLTR{font-family:Helvetica, Arial, sans-serif;text-align:left}.formRTL{font-family:Helvetica, Arial, sans-serif;text-align:right}.searchContainer{align-items:center;display:flex}";

const ScBaseSearchForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clearInput = createEvent(this, "clearInput", 7);
        this.clearInput = () => { };
        this.searchStore = useSearchcraftStore.getState();
        this.themeStore = useThemeStore.getState();
        this.componentDidLoad = () => {
            const searchcraft = new a(this.config);
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
        return (h("form", { key: '2f128025b9caa2ab8a888d461da9b162bbc30d2f', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("sc-input-label", { key: '110f30f0bbd27a0a512d9461a141198b738cc945', label: this.labelForInput }), h("div", { key: '5ec54632aeb5595f76a769d99801c8b92745bb05', class: 'searchContainer' }, this.rightToLeftOrientation && h("sc-button", { key: '753746e7c6bab72006e5a866609934e4738cb096' }), h("sc-input", { key: '823cda15577d253db0f1c30e3c8aa64fc19520ff', onClearInput: this.handleClearInput, rightToLeftOrientation: this.rightToLeftOrientation, onSearchInputChange: this.handleSearchInputChange, query: this.query }), !this.rightToLeftOrientation && (h("sc-button", { key: '99474f1a9fe35c18de0d6cc8ba9e70a4f1471c55', onButtonClick: this.handleFormSubmit }))), this.error && h("sc-error-message", { key: '03da10c2d3c51da69db971a0bfdbc7edbe218e1c', errorMessage: this.errorMessage })));
    }
};
ScBaseSearchForm.style = scBaseSearchFormModuleCss;

export { ScBaseSearchForm as sc_base_search_form };

//# sourceMappingURL=sc-base-search-form.entry.js.map