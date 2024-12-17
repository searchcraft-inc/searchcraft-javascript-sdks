import { r as registerInstance, h } from './index-8211f330.js';
import { u as useSearchcraftStore } from './store-18b7e3ea.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftToggleButtonModuleCss = ".toggle-wrapper{background:#ddd;border:none;border-radius:16px;box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.05);cursor:pointer;height:26px;margin-left:10px;position:relative;width:44px}.toggle-wrapper.active{background:#007DB3;box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.05)}.toggle-wrapper .toggle-switch{background:#fff;border-radius:50%;height:18px;left:4px;position:absolute;top:calc(50% - 9px);transition:transform 0.3s ease;width:18px}.toggle-wrapper .toggle-switch.active{transform:translateX(16px)}";

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
                const sort = this.isActive ? 'desc' : 'asc';
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
        if (!this.query || this.resultsCount === 0) {
            return null;
        }
        return (h("button", { class: `toggle-wrapper ${this.isActive ? 'active' : ''}`, onClick: this.handleToggle, type: 'button' }, h("div", { class: `toggle-switch ${this.isActive ? 'active' : ''}` })));
    }
};
SearchcraftToggleButton.style = searchcraftToggleButtonModuleCss;

export { SearchcraftToggleButton as searchcraft_toggle_button };

//# sourceMappingURL=searchcraft-toggle-button.entry.js.map