import { r as registerInstance, a as createEvent, h } from './index-be6bffea.js';
import { u as useSearchcraftStore, g } from './store-7f65fa54.js';
import { p as parseCustomStyles } from './utils-f221d91f.js';
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
            console.log('Input changed:', this.query);
            this.querySubmit.emit(this.query);
            // Clear the previous debounce timeout
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            // Set a new debounce timeout
            this.debounceTimeout = setTimeout(() => {
                console.log('Debounced search triggered');
                this.runSearch();
            }, this.debounceDelay);
        };
        this.handleClearInput = () => {
            this.query = '';
            console.log('Input cleared');
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
            console.log('Running search with query:', this.query);
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
                    console.log('Search results:', this.searchResults);
                }
                catch (error) {
                    console.error('Search error:', error);
                    this.error = true;
                }
            }
        };
        this.handleFormSubmit = async (event) => {
            console.log('Form submitted');
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
        this.labelForInput = '';
        this.placeholderValue = 'Search here';
        this.rightToLeftOrientation = false;
        this.searchContainerClass = '';
        this.error = false;
        this.query = '';
        this.searchResults = '';
    }
    componentDidLoad() {
        const searchcraft = new g(this.config);
        this.searchStore.initialize(searchcraft, true);
        console.log('Component initialized');
    }
    render() {
        const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';
        const parsedCustomStyles = parseCustomStyles(this.customStylesForInput);
        return (h("form", { key: 'ed358643476ca7477b414e48919ab60513a430aa', class: `${formClass}`, onSubmit: this.handleFormSubmit }, h("searchcraft-input-label", { key: '9fced443e4460cb9a856d6f4caba10be15dbb0c5', label: this.labelForInput }), h("div", { key: 'd5c47fd4675f8513b6a5867553ad2c879e2cdba7', class: 'searchContainer' }, h("searchcraft-input", { key: 'ad11c74655a3d273b7aa414212a21ab07e77d110', customStyles: parsedCustomStyles, "input-caption-value": this.inputCaptionValue, onClearInput: this.handleClearInput, onSearchInputChange: this.handleInputChange, "placeholder-value": this.placeholderValue, query: this.query, "right-to-left-orientation": this.rightToLeftOrientation })), this.error && (h("searchcraft-error-message", { key: 'fed70fb48a6e636d708961aa921c5884e29ed852', errorMessage: 'Please enter a search query.' }))));
    }
};
SearchcraftAutoSearchForm.style = searchcraftAutoSearchFormModuleCss;

export { SearchcraftAutoSearchForm as searchcraft_auto_search_form };

//# sourceMappingURL=searchcraft-auto-search-form.entry.js.map