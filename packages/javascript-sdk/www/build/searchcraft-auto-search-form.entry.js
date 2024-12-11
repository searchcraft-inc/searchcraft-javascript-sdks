import { r as registerInstance, a as createEvent, h } from './index-17269461.js';
import { u as useSearchcraftStore, p } from './store-881233b3.js';
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
        };
        this.handleInputKeyUp = (event) => {
            const target = event.detail;
            this.query = target;
            this.querySubmit.emit(this.query);
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            this.debounceTimeout = setTimeout(() => {
                this.query.trim() !== '' && this.runSearch();
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
        return (h("form", { key: '0e1dd8601cf2b8d36c87c5f0da40611b6e227991', class: `${formClass}`, onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: 'b576e1a0dd09397ba7d2ab7ae2068f1d8c7c59d5', label: this.labelForInput }), h("div", { key: '304e69a89c88a20ffbe411fc124b47d0dba32bf8', class: 'searchContainer' }, h("searchcraft-input", { key: '08147588fa4ece18be2fcd08aee450b636924bab', customStyles: parsedCustomStyles, "input-caption-value": this.inputCaptionValue, "is-requesting": this.isRequesting, "input-icon-height": this.inputIconHeight, "input-icon-width": this.inputIconWidth, onClearInput: this.handleClearInput, onInputKeyUp: this.handleInputKeyUp, onSearchInputChange: this.handleInputChange, "placeholder-value": this.placeholderValue, query: this.query, "right-to-left-orientation": this.rightToLeftOrientation })), this.error && (h("searchcraft-error-message", { key: '3c784617b106b5cc6dba1aed3cbbfe922c7c9701', errorMessage: 'Please enter a search query.' }))));
    }
};
SearchcraftAutoSearchForm.style = searchcraftAutoSearchFormModuleCss;

export { SearchcraftAutoSearchForm as searchcraft_auto_search_form };

//# sourceMappingURL=searchcraft-auto-search-form.entry.js.map