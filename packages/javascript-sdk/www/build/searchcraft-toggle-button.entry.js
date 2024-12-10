import { r as registerInstance, h } from './index-17269461.js';
import { u as useSearchcraftStore } from './store-81542f52.js';
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
        return (h("div", { key: 'dcd6218919aee583aa2d0f040ceb532393990601', class: 'toggle-container' }, h("span", { key: 'd220c0b99e2be5287715c89320fe5a6f73429cac' }, label), h("button", { key: '3ab6d5f9e34c74db32a66e4cbec722b70a0bc4d9', class: `toggle-wrapper ${this.isActive ? 'active' : ''}`, onClick: this.handleToggle, type: 'button' }, h("div", { key: '40d84691c377bbfc58623d926b10b6114b2ca5ca', class: `toggle-switch ${this.isActive ? 'active' : ''}` }))));
    }
};
SearchcraftToggleButton.style = searchcraftToggleButtonModuleCss;

export { SearchcraftToggleButton as searchcraft_toggle_button };

//# sourceMappingURL=searchcraft-toggle-button.entry.js.map