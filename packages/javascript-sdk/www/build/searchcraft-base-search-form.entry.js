import { r as registerInstance, a as createEvent, h } from './index-b6929a4b.js';
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
        return (h("form", { key: '6460e91d9c4a48c40476c18762b8b4873c157653', class: this.rightToLeftOrientation ? 'formRTL' : 'formLTR', onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: '9d0a89868c4dafae20e7437101c5639466fc2ffa', label: this.labelForInput }), h("div", { key: '441c0923111995fc0b04b0acb799ade4b2018be0', class: 'searchContainer' }, this.rightToLeftOrientation && h("searchcraft-button", { key: '2a0dc24c906917cd1ec5bd605e25a0a67bffee21' }), h("searchcraft-input", { key: '6744a36c97e03fbd10cc354653e32f0f7eac1c00', onClearInput: this.handleClearInput, rightToLeftOrientation: this.rightToLeftOrientation, onSearchInputChange: this.handleSearchInputChange, query: this.query }), !this.rightToLeftOrientation && (h("searchcraft-button", { key: '50ea437efebe7a62d6122fb6a76942861003884a', onButtonClick: this.handleFormSubmit }))), this.error && (h("searchcraft-error-message", { key: 'ae4b2fa7d874771af0b88757244abe5d50679d55', errorMessage: this.errorMessage }))));
    }
};
SearchcraftBaseSearchForm.style = searchcraftBaseSearchFormModuleCss;

export { SearchcraftBaseSearchForm as searchcraft_base_search_form };

//# sourceMappingURL=searchcraft-base-search-form.entry.js.map