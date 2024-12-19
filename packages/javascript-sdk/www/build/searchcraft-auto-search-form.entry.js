import { r as registerInstance, a as createEvent, h } from './index-8211f330.js';
import { u as useSearchcraftStore, g } from './store-01214c8a.js';
import { p as parseCustomStyles } from './utils-a3373179.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftAutoSearchFormModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.formLTR{font-family:var(--font-stack);text-align:left;width:100%}.formRTL{font-family:var(--font-stack);text-align:right;width:100%}";

const SearchcraftAutoSearchForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputClearedOrNoResults = createEvent(this, "inputClearedOrNoResults", 7);
        this.querySubmit = createEvent(this, "querySubmit", 7);
        this.debounceTimeout = null;
        this.debounceDelay = 0;
        this.searchStore = useSearchcraftStore.getState();
        this.handleInputChange = (event) => {
            this.query = event.detail;
            this.searchStore.setQuery(this.query);
            this.querySubmit.emit(this.query);
        };
        this.handleInputKeyUp = (event) => {
            const target = event.detail;
            if (target === this.query) {
                return;
            }
            this.query = target;
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            this.debounceTimeout = setTimeout(() => {
                if (this.query.trim() !== '') {
                    this.searchStore.setQuery(this.query);
                    this.querySubmit.emit(this.query);
                    this.runSearch();
                }
            }, this.debounceDelay);
        };
        this.handleClearInput = () => {
            this.query = '';
            this.searchStore.setQuery('');
            if (typeof this.clearInput === 'function') {
                this.clearInput();
            }
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            this.error = false;
            this.inputClearedOrNoResults.emit();
        };
        this.runSearch = async () => {
            if (this.query.trim() === '') {
                this.error = true;
                this.inputClearedOrNoResults.emit();
            }
            else {
                this.error = false;
                this.searchStore.setQuery(this.query);
                try {
                    await this.searchStore.search();
                }
                catch (error) {
                    this.error = true;
                    this.inputClearedOrNoResults.emit();
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
        this.searchResults = null;
    }
    componentDidLoad() {
        const searchcraft = new g(this.config);
        this.searchStore.initialize(searchcraft, true);
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            this.isRequesting = state.isRequesting;
            this.searchResults = Object.assign({}, state.searchResults);
        });
    }
    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        var _a, _b, _c;
        const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';
        const parsedCustomStyles = parseCustomStyles(this.customStylesForInput);
        if (this.query.length > 0 && ((_c = (_b = (_a = this.searchResults) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.hits) === null || _c === void 0 ? void 0 : _c.length) === 0) {
            this.inputClearedOrNoResults.emit();
        }
        return (h("form", { key: 'ddbf228562c84abe859aebbcec4382bd394ed005', class: `${formClass}`, onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: '04aafa67bfcda4d9d0b87f65c2b736fe45641666', label: this.labelForInput }), h("searchcraft-input", { key: '5738acc75f9faf9789ea642d785b4631b79aad4f', customStyles: parsedCustomStyles, "input-caption-value": this.inputCaptionValue, "input-icon-height": this.inputIconHeight, "input-icon-width": this.inputIconWidth, "is-requesting": this.isRequesting, onClearInput: this.handleClearInput, onInputKeyUp: this.handleInputKeyUp, onSearchInputChange: this.handleInputChange, "placeholder-value": this.placeholderValue, query: this.query, "right-to-left-orientation": this.rightToLeftOrientation }), this.error && (h("searchcraft-error-message", { key: '2f69b83537a0b34395d5617767b750e71e95706c', errorMessage: 'Please enter a search query.' }))));
    }
};
SearchcraftAutoSearchForm.style = searchcraftAutoSearchFormModuleCss;

export { SearchcraftAutoSearchForm as searchcraft_auto_search_form };

//# sourceMappingURL=searchcraft-auto-search-form.entry.js.map