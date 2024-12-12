import { r as registerInstance, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-1c3420ae.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftToggleButtonModuleCss = ".toggle-container{display:flex;align-items:center;font-size:14px;color:#333}.toggle-wrapper{box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.05);margin-left:10px;border:none;border-radius:16px;width:44px;height:26px;background:#ddd;position:relative;cursor:pointer}.toggle-wrapper.active{box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.05);background:#007DB3}.toggle-wrapper .toggle-switch{width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:calc(50% - 9px);left:4px;transition:transform 0.3s ease}.toggle-wrapper .toggle-switch.active{transform:translateX(16px)}";

const SearchcraftToggleButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.searchStore = useSearchcraftStore.getState();
        this.handleToggle = async () => {
            this.isActive = !this.isActive;
            if (this.type === 'mode') {
                const mode = this.isActive ? 'normal' : 'fuzzy';
                this.searchStore.setSearchParams({
                    mode,
                });
            }
            else if (this.type === 'sort') {
                const sort = this.isActive ? 'asc' : 'desc';
                this.searchStore.setSearchParams({
                    sort,
                });
            }
            try {
                await this.searchStore.search();
            }
            catch (error) {
                console.error('Search failed:', error);
            }
        };
        this.type = 'mode';
        this.isActive = false;
        this.query = '';
        this.resultsCount = 0;
    }
    componentDidLoad() {
        this.unsubscribe = useSearchcraftStore.subscribe((state) => {
            var _a, _b, _c;
            this.query = state.query || '';
            this.resultsCount = ((_c = (_b = (_a = state.searchResults) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.hits) === null || _c === void 0 ? void 0 : _c.length) || 0;
        });
    }
    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        // Render only if there's a query and results exist
        if (!this.query || this.resultsCount === 0) {
            return null;
        }
        const label = this.type === 'mode'
            ? 'Exact Match'
            : this.type === 'sort'
                ? 'Most Recent'
                : '';
        return (h("div", { class: 'toggle-container' }, h("span", null, label), h("button", { class: `toggle-wrapper ${this.isActive ? 'active' : ''}`, onClick: this.handleToggle, type: 'button' }, h("div", { class: `toggle-switch ${this.isActive ? 'active' : ''}` }))));
    }
};
SearchcraftToggleButton.style = searchcraftToggleButtonModuleCss;

export { SearchcraftToggleButton as searchcraft_toggle_button };

//# sourceMappingURL=searchcraft-toggle-button.entry.js.map