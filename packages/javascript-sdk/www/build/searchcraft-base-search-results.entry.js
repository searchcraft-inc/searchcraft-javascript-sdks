import { r as registerInstance, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-0451a982.js';
import { a as parseSearchKeys, s as serializeStyles, e as extractDynamicProperties, g as getFormattedTimeFromNow } from './utils-dbb6302b.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftBaseSearchResultsModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.resultsContainer{display:flex;flex-direction:column;justify-content:center;margin:16px 0}.resultsContainer>p{align-self:center}.resultsContainer>div{margin-bottom:20px}.resultsContainer>div img{height:300px;width:200px}.adSection{align-items:center;background-color:#F1F1F1;border:1px solid #DCDDDE;border-radius:16px;display:flex;flex-direction:column;font-size:16px;justify-content:center;margin:auto;min-height:150px;text-align:center;width:100%}.adSection p{margin-top:5px}.emptyState{text-align:center;width:100%}.errorMessageContainer{text-align:center}";

const SearchcraftBaseSearchResults = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.adInterval = 4;
        this.customStylesForResults = {};
        this.documentAttributesForDisplay = '';
        this.fallbackElement = null;
        this.formatTime = true;
        this.placeAdAtEnd = false;
        this.placeAdAtStart = true;
        this.hasSearched = false;
        this.query = '';
        this.searchResults = null;
    }
    componentDidLoad() {
        if (!this.documentAttributesForDisplay ||
            this.documentAttributesForDisplay.length === 0) {
            console.warn('No document attributes provided; using empty keys array.');
            this.documentAttributesForDisplay = '';
        }
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            if (state.query.length > 0) {
                this.hasSearched = true;
            }
            else {
                this.hasSearched = false;
            }
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
        if (!this.hasSearched) {
            return (h("div", { class: 'emptyState' }, h("slot", { name: 'empty-search' })));
        }
        if (!((_a = this.searchResults) === null || _a === void 0 ? void 0 : _a.data)) {
            console.warn('No search results data available');
            return h("div", { class: 'emptyState' }, "No results to display.");
        }
        const parsedSearchKeys = parseSearchKeys(this.documentAttributesForDisplay);
        const serializedStyles = typeof this.customStylesForResults === 'string'
            ? this.customStylesForResults
            : serializeStyles(this.customStylesForResults);
        const resultsComponents = (_d = (_c = (_b = this.searchResults) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.hits) === null || _d === void 0 ? void 0 : _d.map((document, index) => {
            const { doc: result } = document;
            const dynamicProperties = extractDynamicProperties(result, parsedSearchKeys);
            if (this.formatTime) {
                for (const key of parsedSearchKeys) {
                    if (dynamicProperties[key]) {
                        const value = dynamicProperties[key];
                        // Check if the value is a valid ISO timestamp
                        if (typeof value === 'string' &&
                            !Number.isNaN(Date.parse(value))) {
                            dynamicProperties[key] = getFormattedTimeFromNow(value);
                        }
                    }
                }
            }
            return (h("searchcraft-base-search-result", { "button-callback": () => console.log('button callback'), "custom-styles": serializedStyles, "image-source": dynamicProperties[parsedSearchKeys[parsedSearchKeys.length - 1]], "is-interactive": true, key: `${document.document_id}-${index}`, "keydown-callback": () => console.log('keydown'), "heading-text": dynamicProperties[parsedSearchKeys[0]], "primary-content": dynamicProperties[parsedSearchKeys[2]], "result-callback": () => console.log('interactive element'), "secondary-content": dynamicProperties[parsedSearchKeys[3]], "subheading-text": dynamicProperties[parsedSearchKeys[1]], "tertiary-content": dynamicProperties[parsedSearchKeys[4]] }));
        });
        const finalComponents = [];
        if (this.placeAdAtStart) {
            finalComponents.push(h("div", { key: 'ad-section-start', class: 'adSection' }, h("span", null, "##"), h("p", null, " Ad Impressions")));
        }
        if (this.adInterval > 0) {
            resultsComponents.forEach((component, index) => {
                finalComponents.push(component);
                if ((index + 1) % this.adInterval === 0) {
                    finalComponents.push(h("div", { key: `ad-section-${index + 1}`, class: 'adSection' }, h("span", null, "##"), h("p", null, " Ad Impressions")));
                }
            });
        }
        else {
            finalComponents.push(...resultsComponents);
        }
        if (this.placeAdAtEnd) {
            finalComponents.push(h("div", { key: 'ad-section-end', class: 'adSection' }, h("span", null, "##"), h("p", null, " Ad Impressions")));
        }
        return (h("div", { class: 'resultsContainer' }, finalComponents, this.query.length > 0 &&
            ((_g = (_f = (_e = this.searchResults) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.hits) === null || _g === void 0 ? void 0 : _g.length) === 0 && (h("div", { class: 'errorMessageContainer' }, h("searchcraft-error-message", { "error-message": `No search results found for "${this.query}" query` })))));
    }
};
SearchcraftBaseSearchResults.style = searchcraftBaseSearchResultsModuleCss;

export { SearchcraftBaseSearchResults as searchcraft_base_search_results };

//# sourceMappingURL=searchcraft-base-search-results.entry.js.map