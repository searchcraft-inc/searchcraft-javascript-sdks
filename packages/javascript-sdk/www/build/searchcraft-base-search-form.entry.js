import { r as registerInstance, a as createEvent, h } from './index-be6bffea.js';
import { u as useSearchcraftStore, a as useThemeStore, g } from './store-7f65fa54.js';
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
        return (h("form", { key: 'cd49ea1fd8bb96e0f50bee5aea3d05795d6f661e', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: '58c287dbb66296dd082f8e0d54e4134cb1395d35', label: this.labelForInput }), h("div", { key: 'c90a528cd61f3637c1ba1b20d20dd0d6e72a2f23', class: 'searchContainer' }, this.rightToLeftOrientation && h("searchcraft-button", { key: '4bc6d120525d6ccf57f0233e60d5d0f8ebfde861' }), h("searchcraft-input", { key: '1755d284719f7f01879457031d9ea3657e81e48f', onClearInput: this.handleClearInput, rightToLeftOrientation: this.rightToLeftOrientation, onSearchInputChange: this.handleSearchInputChange, query: this.query }), !this.rightToLeftOrientation && (h("searchcraft-button", { key: '83e27608d2b95ad54f93e379a8187f6fec26c80a', onButtonClick: this.handleFormSubmit }))), this.error && (h("searchcraft-error-message", { key: 'b1d4aeaf93db571e66a455f035faa9a592eb57e1', errorMessage: this.errorMessage }))));
    }
};
SearchcraftBaseSearchForm.style = searchcraftBaseSearchFormModuleCss;

export { SearchcraftBaseSearchForm as searchcraft_base_search_form };

//# sourceMappingURL=searchcraft-base-search-form.entry.js.map