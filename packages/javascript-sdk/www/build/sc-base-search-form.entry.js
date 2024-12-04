import { r as registerInstance, a as createEvent, h } from './index-b6929a4b.js';
import { u as useSearchcraftStore, a as useThemeStore, g } from './store-7f65fa54.js';
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
        return (h("form", { key: '8e2b978ddbbcae01f1e055014013fbf57cac1551', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("sc-input-label", { key: '0cd6f1275fa2db8fb5104cb7d7ae29952ba0acc7', label: this.labelForInput }), h("div", { key: '5c3d2b08e8b7a279cfd9c0060e12630ee11762e0', class: 'searchContainer' }, this.rightToLeftOrientation && h("sc-button", { key: '9b40d561818354337d1f5cd1513f11dd3c00faac' }), h("sc-input", { key: '0319bace906712ade30b5b94dd544f556889b85e', onClearInput: this.handleClearInput, rightToLeftOrientation: this.rightToLeftOrientation, onSearchInputChange: this.handleSearchInputChange, query: this.query }), !this.rightToLeftOrientation && (h("sc-button", { key: '3c434324d66d72e846a5cb91df3ceae3a5c8108d', onButtonClick: this.handleFormSubmit }))), this.error && h("sc-error-message", { key: 'bf1f0eee26315393ae06b708ac1da12dcba05137', errorMessage: this.errorMessage })));
    }
};
ScBaseSearchForm.style = scBaseSearchFormModuleCss;

export { ScBaseSearchForm as sc_base_search_form };

//# sourceMappingURL=sc-base-search-form.entry.js.map