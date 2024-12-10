import { r as registerInstance, a as createEvent, h } from './index-17269461.js';
import { u as useSearchcraftStore, p } from './store-defec345.js';
import { p as parseCustomStyles } from './utils-7bff0c78.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftAutoSearchFormModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.formLTR{text-align:left;width:100%}.formRTL{text-align:right;width:100%}.searchContainer{align-items:center;display:flex;width:100%}";

const SearchcraftAutoSearchForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.querySubmit = createEvent(this, "querySubmit", 7);
        this.debounceTimeout = null;
        this.debounceDelay = 300; // 300ms debounce delay
        this.searchStore = useSearchcraftStore.getState();
        this.handleInputChange = (event) => {
            this.query = event.detail;
            this.querySubmit.emit(this.query);
            // Clear the previous debounce timeout
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            // Set a new debounce timeout
            this.debounceTimeout = setTimeout(() => {
                this.runSearch();
            }, this.debounceDelay);
        };
        this.handleClearInput = () => {
            this.query = '';
            if (typeof this.clearInput === 'function') {
                this.clearInput();
            }
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            this.error = false;
            this.searchResults = '';
        };
        this.runSearch = async () => {
            if (this.query.trim() === '') {
                this.error = true;
                this.searchResults = '';
            }
            else {
                this.error = false;
                this.searchStore.setQuery(this.query);
                try {
                    await this.searchStore.search();
                    this.searchResults = JSON.stringify(this.searchStore.searchResults);
                }
                catch (error) {
                    this.error = true;
                }
            }
        };
        this.handleFormSubmit = async (event) => {
            event.preventDefault();
            await this.runSearch();
        };
        this.autoSearchFormClass = '';
        this.clearInput = () => { };
        this.config = {
            apiKey: '',
            endpointURL: '',
            index: [],
        };
        this.customStylesForInput = {};
        this.inputCaptionValue = '';
        this.inputIconHeight = 20;
        this.inputIconWidth = 20;
        this.labelForInput = '';
        this.placeholderValue = 'Search here';
        this.rightToLeftOrientation = false;
        this.searchContainerClass = '';
        this.error = false;
        this.isRequesting = false;
        this.query = '';
        this.searchResults = '';
    }
    componentDidLoad() {
        const searchcraft = new p(this.config);
        this.searchStore.initialize(searchcraft, true);
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            this.isRequesting = state.isRequesting;
        });
    }
    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';
        const parsedCustomStyles = parseCustomStyles(this.customStylesForInput);
        return (h("form", { key: 'e53917499bb0c9d9b1dee9228dfc2a23779e0e0b', class: `${formClass}`, onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: '4cd0d995b2b9310a8bd61b5455f9702a1728b0aa', label: this.labelForInput }), h("div", { key: 'fb6ac5689051214091f748bd3e6c0b33730cd1ab', class: 'searchContainer' }, h("searchcraft-input", { key: '9cbfc5aa6ac302be48aee6622d2e397cd51ffd2b', customStyles: parsedCustomStyles, "input-caption-value": this.inputCaptionValue, "is-requesting": this.isRequesting, "input-icon-height": this.inputIconHeight, "input-icon-width": this.inputIconWidth, onClearInput: this.handleClearInput, onSearchInputChange: this.handleInputChange, "placeholder-value": this.placeholderValue, query: this.query, "right-to-left-orientation": this.rightToLeftOrientation })), this.error && (h("searchcraft-error-message", { key: '8f2c2b2a1bdad40b1a4e61f26586abd7b19988cf', errorMessage: 'Please enter a search query.' }))));
    }
};
SearchcraftAutoSearchForm.style = searchcraftAutoSearchFormModuleCss;

export { SearchcraftAutoSearchForm as searchcraft_auto_search_form };

//# sourceMappingURL=searchcraft-auto-search-form.entry.js.map