import { r as registerInstance, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-e533e567.js';
import { a as parseSearchKeys, s as serializeStyles, e as extractDynamicProperties } from './utils-e2076797.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftBaseSearchResultsModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.resultsContainer{display:flex;flex-direction:column;justify-content:center;margin:16px 20px}.resultsContainer>p{align-self:center}.resultsContainer>div{margin-bottom:20px}.resultsContainer>div img{height:300px;width:200px}.adSection{align-items:center;background-color:#F1F1F1;border:1px solid #DCDDDE;border-radius:16px;display:flex;flex-direction:column;font-size:16px;justify-content:center;margin:auto;min-height:150px;text-align:center;width:100%}.adSection p{margin-top:5px}.emptyState{text-align:center}";

const SearchcraftBaseSearchResults = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = '';
        this.searchResults = null;
        this.hasSearched = false;
        this.documentAttributesForDisplay = '';
        this.customStylesForResults = {};
        this.placeAdAtStart = true;
        this.placeAdAtEnd = false;
        this.adInterval = 4;
        this.formatTime = true;
        this.fallbackElement = null;
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
    timeAgo(timestamp) {
        const now = new Date();
        const inputTime = new Date(timestamp);
        const diffInSeconds = Math.floor((now.getTime() - inputTime.getTime()) / 1000);
        const minutes = Math.floor(diffInSeconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);
        if (minutes < 60) {
            return `${minutes}m ago`;
        }
        if (hours < 24) {
            return `${hours}h ago`;
        }
        if (days < 365) {
            return `${days}d ago`;
        }
        return `${years}y ago`;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!this.hasSearched) {
            return (h("div", { class: 'emptyState' }, h("slot", null)));
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
            // Apply timeAgo formatting if formatTime is true
            if (this.formatTime) {
                for (const key of parsedSearchKeys) {
                    if (dynamicProperties[key]) {
                        const value = dynamicProperties[key];
                        // Check if the value is a valid ISO timestamp
                        if (typeof value === 'string' &&
                            !Number.isNaN(Date.parse(value))) {
                            dynamicProperties[key] = this.timeAgo(value);
                        }
                    }
                }
            }
            return (h("searchcraft-base-search-result", { key: `${document.document_id}-${index}`, "button-callback": () => console.log('button callback'), "result-callback": () => console.log('interactive element'), "keydown-callback": () => console.log('keydown'), "is-interactive": true, "heading-text": dynamicProperties[parsedSearchKeys[0]], "subheading-text": dynamicProperties[parsedSearchKeys[1]], "primary-content": dynamicProperties[parsedSearchKeys[2]], "secondary-content": dynamicProperties[parsedSearchKeys[3]], "tertiary-content": dynamicProperties[parsedSearchKeys[4]], "image-source": dynamicProperties[parsedSearchKeys[parsedSearchKeys.length - 1]], "custom-styles": serializedStyles }));
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
            ((_g = (_f = (_e = this.searchResults) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.hits) === null || _g === void 0 ? void 0 : _g.length) === 0 && (h("searchcraft-error-message", { "error-message": `No search results found for "${this.query}" query` }))));
    }
};
SearchcraftBaseSearchResults.style = searchcraftBaseSearchResultsModuleCss;

export { SearchcraftBaseSearchResults as searchcraft_base_search_results };

//# sourceMappingURL=searchcraft-base-search-results.entry.js.map