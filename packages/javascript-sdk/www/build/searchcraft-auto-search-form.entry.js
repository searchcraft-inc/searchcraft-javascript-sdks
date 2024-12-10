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
        return (h("form", { key: '6b735bbdba6e7ff105d176fffa32b9431d5c4e49', class: `${formClass}`, onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: 'c7284dead137677ee7cd6aedac4dbfb38fac8c4c', label: this.labelForInput }), h("div", { key: 'a59294d9b406a1df9beb6264808f6e6a43cedbdd', class: 'searchContainer' }, h("searchcraft-input", { key: 'c1faa2d11c94ec3d4d39456612209e72fd208629', customStyles: parsedCustomStyles, "input-caption-value": this.inputCaptionValue, "is-requesting": this.isRequesting, "input-icon-height": this.inputIconHeight, "input-icon-width": this.inputIconWidth, onClearInput: this.handleClearInput, onSearchInputChange: this.handleInputChange, "placeholder-value": this.placeholderValue, query: this.query, "right-to-left-orientation": this.rightToLeftOrientation })), this.error && (h("searchcraft-error-message", { key: 'b8b1e5b4b212a30f07f3756c8ce33c142e520420', errorMessage: 'Please enter a search query.' }))));
    }
};
SearchcraftAutoSearchForm.style = searchcraftAutoSearchFormModuleCss;

export { SearchcraftAutoSearchForm as searchcraft_auto_search_form };

//# sourceMappingURL=searchcraft-auto-search-form.entry.js.map