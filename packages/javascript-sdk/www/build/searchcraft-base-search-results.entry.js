import { r as registerInstance, h } from './index-be6bffea.js';
import { u as useSearchcraftStore } from './store-b50263a1.js';
import { a as parseSearchKeys, s as serializeStyles, e as extractDynamicProperties } from './utils-7bff0c78.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftBaseSearchResultsModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.resultsContainer{display:flex;flex-direction:column;justify-content:center;margin:100px 20px}.resultsContainer>p{align-self:center}.resultsContainer>div{margin-bottom:20px}.resultsContainer>div img{height:300px;width:200px}";

const SearchcraftBaseSearchResults = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = '';
        this.searchResults = null;
        this.searchKeys = '';
        this.customStylesForResults = {};
    }
    componentDidLoad() {
        if (!this.searchKeys || this.searchKeys.length === 0) {
            console.warn('No searchKeys provided; using empty keys array.');
            this.searchKeys = '';
        }
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            this.searchResults = Object.assign({}, state.searchResults);
            this.query = state.query;
        });
        const { searchResults, query } = useSearchcraftStore.getState();
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
        const parsedSearchKeys = parseSearchKeys(this.searchKeys);
        const serializedStyles = typeof this.customStylesForResults === 'string'
            ? this.customStylesForResults
            : serializeStyles(this.customStylesForResults);
        return (h("div", { class: 'resultsContainer' }, (_d = (_c = (_b = this.searchResults) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.hits) === null || _d === void 0 ? void 0 :
            _d.map((document, index) => {
                const { doc: result } = document;
                const dynamicProperties = extractDynamicProperties(result, parsedSearchKeys);
                return (h("searchcraft-base-search-result", { key: `${dynamicProperties.id}-${index}`, "button-callback": () => console.log('button callback'), "result-callback": () => console.log('interactive element'), "keydown-callback": () => console.log('keydown'), "is-interactive": true, "heading-text": dynamicProperties[parsedSearchKeys[0]], "subheading-text": dynamicProperties[parsedSearchKeys[1]], "primary-content": dynamicProperties[parsedSearchKeys[2]], "secondary-content": dynamicProperties[parsedSearchKeys[3]], "tertiary-content": dynamicProperties[parsedSearchKeys[4]], "image-source": dynamicProperties[parsedSearchKeys[parsedSearchKeys.length - 1]], "custom-styles": serializedStyles }));
            }), this.query.length > 0 &&
            ((_g = (_f = (_e = this.searchResults) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.hits) === null || _g === void 0 ? void 0 : _g.length) === 0 && (h("searchcraft-error-message", { "error-message": `No search results found for "${this.query}" query` }))));
    }
};
SearchcraftBaseSearchResults.style = searchcraftBaseSearchResultsModuleCss;

export { SearchcraftBaseSearchResults as searchcraft_base_search_results };

//# sourceMappingURL=searchcraft-base-search-results.entry.js.map