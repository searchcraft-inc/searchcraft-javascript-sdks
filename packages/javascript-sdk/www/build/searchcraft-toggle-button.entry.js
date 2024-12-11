import { r as registerInstance, h } from './index-17269461.js';
import { u as useSearchcraftStore } from './store-881233b3.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftToggleButtonModuleCss = ".toggle-container{display:flex;align-items:center;font-size:14px;color:#333}.toggle-wrapper{box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.05);margin-left:10px;border:none;border-radius:16px;width:44px;height:26px;background:#ddd;position:relative;cursor:pointer}.toggle-wrapper.active{box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.05);background:#007DB3}.toggle-wrapper .toggle-switch{width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:calc(50% - 9px);left:4px;transition:transform 0.3s ease}.toggle-wrapper .toggle-switch.active{transform:translateX(16px)}";

const SearchcraftToggleButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // Zustand store hook
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
    }
    render() {
        const label = this.type === 'mode'
            ? 'Exact Match'
            : this.type === 'sort'
                ? 'Sort Order'
                : '';
        return (h("div", { key: 'e870921a4ac01a0c379e3c6a4402ee4c0ddb24dc', class: 'toggle-container' }, h("span", { key: 'd973186dcf0d22b932e9f487b5b35856b994ed56' }, label), h("button", { key: 'd19512f2912c12f694528ac7927245a540b1e80b', class: `toggle-wrapper ${this.isActive ? 'active' : ''}`, onClick: this.handleToggle, type: 'button' }, h("div", { key: '891d341399b2f5ffeb6dab7c4073769ca30f2cc8', class: `toggle-switch ${this.isActive ? 'active' : ''}` }))));
    }
};
SearchcraftToggleButton.style = searchcraftToggleButtonModuleCss;

export { SearchcraftToggleButton as searchcraft_toggle_button };

//# sourceMappingURL=searchcraft-toggle-button.entry.js.map