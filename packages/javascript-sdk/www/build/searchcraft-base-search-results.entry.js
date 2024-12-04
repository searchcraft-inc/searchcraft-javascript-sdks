import { r as registerInstance, h } from './index-be6bffea.js';
import { u as useSearchcraftStore } from './store-7f65fa54.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftBaseSearchResultsModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.resultsContainer{display:flex;flex-direction:column;justify-content:center;margin:100px 20px}.resultsContainer>p{align-self:center}.resultsContainer>div{margin-bottom:20px}.resultsContainer>div img{height:300px;width:200px}";

const SearchcraftBaseSearchResults = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = '';
        this.searchResults = null;
    }
    componentDidLoad() {
        // Subscribe to state changes
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            console.log('Store updated:', state);
            this.searchResults = Object.assign({}, state.searchResults);
            this.query = state.query;
        });
        // Fetch initial state
        const { searchResults, query } = useSearchcraftStore.getState();
        console.log('Initial state:', searchResults, query);
        this.searchResults = searchResults;
        this.query = query;
    }
    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!((_a = this.searchResults) === null || _a === void 0 ? void 0 : _a.data)) {
            console.warn('No search results data available');
            return h("div", null, "No results to display.");
        }
        return (h("div", { class: 'resultsContainer' }, (_d = (_c = (_b = this.searchResults) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.hits) === null || _d === void 0 ? void 0 :
            _d.map((document, index) => {
                const { doc: result } = document;
                return (h("searchcraft-base-search-result", { key: `${result === null || result === void 0 ? void 0 : result.id}-${index}`, "button-label": 'View More', "callback-fn": () => console.log('interactive element'), "button-callback-fn": () => console.log('button callback'), "interactive-result": true, "image-src": result === null || result === void 0 ? void 0 : result.poster, "result-body-content": result === null || result === void 0 ? void 0 : result.overview, "result-heading": result === null || result === void 0 ? void 0 : result.title, "result-subheading": result === null || result === void 0 ? void 0 : result.release_date }));
            }), this.query.length > 0 &&
            ((_g = (_f = (_e = this.searchResults) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.hits) === null || _g === void 0 ? void 0 : _g.length) === 0 && (h("searchcraft-error-message", { "error-message": `No search results found for "${this.query}" query` }))));
    }
};
SearchcraftBaseSearchResults.style = searchcraftBaseSearchResultsModuleCss;

export { SearchcraftBaseSearchResults as searchcraft_base_search_results };

//# sourceMappingURL=searchcraft-base-search-results.entry.js.map