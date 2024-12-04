import { r as registerInstance, a as createEvent, h } from './index-b6929a4b.js';
import { g, u as useSearchcraftStore } from './store-7f65fa54.js';
import './_commonjsHelpers-63cbe26c.js';

const scAutoSearchFormModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.formLTR{text-align:left}.formRTL{text-align:right}.searchContainer{align-items:center;display:flex}";

const ScAutoSearchForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.querySubmit = createEvent(this, "querySubmit", 7);
        this.debounceTimeout = null;
        this.debounceDelay = 300; // 300ms debounce delay
        this.componentDidLoad = () => {
            const searchcraft = new g(this.config);
            this.searchStore.initialize(searchcraft, true);
        };
        // Initialize searchStore as a private field
        this.searchStore = useSearchcraftStore.getState();
        /**
         * Handles the input change event from sc-input
         */
        this.handleInputChange = (event) => {
            console.log(event);
            this.query = event.detail; // Update the query state with input value
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout); // Clear any existing timeout
            }
            // Emit querySubmit immediately for real-time updates
            this.querySubmit.emit(this.query);
            // Set a new debounce timeout to execute search after delay
            this.debounceTimeout = setTimeout(() => {
                this.runSearch(); // Execute search logic after typing stops
            }, this.debounceDelay);
        };
        /**
         * Handles the clear input event from sc-input
         */
        this.handleClearInput = () => {
            this.query = '';
            if (typeof this.clearInput === 'function') {
                this.clearInput();
            }
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout); // Clear the debounce timeout
            }
            // Reset error and search results
            this.error = false;
            this.searchResults = '';
        };
        /**
         * Runs the search logic
         */
        this.runSearch = async () => {
            if (this.query.trim() === '') {
                this.error = true;
                this.searchResults = '';
            }
            else {
                this.error = false;
                this.searchStore.setQuery(this.query); // Set the query in the searchStore
                await this.searchStore.search(); // Perform the search
                this.searchResults = JSON.stringify(this.searchStore.searchResults); // Store search results as JSON
            }
        };
        /**
         * Handles the form submission logic
         */
        this.handleFormSubmit = async (event) => {
            event.preventDefault();
            await this.runSearch(); // Trigger search logic on form submit
        };
        this.autoSearchFormClass = '';
        this.clearInput = () => { };
        this.config = {
            apiKey: '',
            endpointURL: '',
            index: [],
        };
        this.inputCaptionValue = '';
        this.labelForInput = 'Search';
        this.placeholderValue = 'Search here';
        this.rightToLeftOrientation = false;
        this.searchContainerClass = '';
        this.error = false;
        this.query = '';
        this.searchResults = '';
    }
    render() {
        const formClass = this.rightToLeftOrientation ? 'formRTL' : 'formLTR';
        return (h("form", { key: 'dcd7d06ddf326b57f0344e7b310a8c8ae33de16d', class: `${formClass}`, onSubmit: this.handleFormSubmit }, h("label", { key: '7861ea5884676bd092cfaa3cfb6a030edd3ccd62' }, this.labelForInput), h("div", { key: '9f5b805e3d6628d0e9ffc5c847c5efe25bf3fbb3', class: 'searchContainer' }, h("sc-input", { key: '326a3ddad583017871abbe1587722b3e32f015be', "placeholder-value": this.placeholderValue, query: this.query, "input-caption-value": this.inputCaptionValue, "right-to-left-orientation": this.rightToLeftOrientation, onSearchInputChange: this.handleInputChange, onClearInput: this.handleClearInput })), this.error && h("p", { key: '7a927de7fd3a307e6a39b3c0142acf954cd5bfc5', class: 'error' }, "Please enter a search query.")));
    }
};
ScAutoSearchForm.style = scAutoSearchFormModuleCss;

export { ScAutoSearchForm as sc_auto_search_form };

//# sourceMappingURL=sc-auto-search-form.entry.js.map