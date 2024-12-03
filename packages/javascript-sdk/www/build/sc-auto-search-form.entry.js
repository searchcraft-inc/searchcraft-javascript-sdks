import { r as registerInstance, a as createEvent, h } from './index-b2fefddc.js';
import { a, u as useSearchcraftStore } from './store-2132da59.js';
import './_commonjsHelpers-63cbe26c.js';

const scAutoSearchFormModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.formLTR{text-align:left}.formRTL{text-align:right}.searchContainer{align-items:center;display:flex}";

const ScAutoSearchForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.querySubmit = createEvent(this, "querySubmit", 7);
        this.debounceTimeout = null;
        this.debounceDelay = 300; // 300ms debounce delay
        this.componentDidLoad = () => {
            const searchcraft = new a(this.config);
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
        return (h("form", { key: '9c467f62b6464d5976a6cdbb17071777829fcd65', class: `${formClass}`, onSubmit: this.handleFormSubmit }, h("label", { key: '0740487a130c5427a2e7c7c7bf9b112fdd2038f7' }, this.labelForInput), h("div", { key: '1b1816b4c1fa472f1227110d480fc3014782383b', class: 'searchContainer' }, h("sc-input", { key: '2e8bd731c91b75db17f0c177c4e57e04268cb0dd', "placeholder-value": this.placeholderValue, query: this.query, "input-caption-value": this.inputCaptionValue, "right-to-left-orientation": this.rightToLeftOrientation, onSearchInputChange: this.handleInputChange, onClearInput: this.handleClearInput })), this.error && h("p", { key: '82aa93fa1e009d49adf7ba4e6568298686b9b3ec', class: 'error' }, "Please enter a search query."), this.searchResults && h("pre", { key: '3c7e024e7d961418d2330d1ce9d117e2a7f24051', class: 'results' }, this.searchResults)));
    }
};
ScAutoSearchForm.style = scAutoSearchFormModuleCss;

export { ScAutoSearchForm as sc_auto_search_form };

//# sourceMappingURL=sc-auto-search-form.entry.js.map