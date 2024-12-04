import { r as registerInstance, h } from './index-be6bffea.js';

const searchcraftInputIconModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.inputIconLTR{height:20px;left:10px;position:absolute;top:11px;width:20px}.inputIconRTL{height:20px;position:absolute;right:10px;top:11px;width:20px}";

const SearchcraftInputIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
        this.rightToLeftOrientation = false;
        this.theme = 'light';
    }
    isLightTheme() {
        return this.theme === 'light';
    }
    render() {
        return this.error ? (h("div", { class: this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR' }, this.isLightTheme ? (h("searchcraft-search-icon-set", { type: 'error-light' })) : (h("searchcraft-search-icon-set", { type: 'error-dark' })))) : (h("div", { class: this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR' }, this.isLightTheme ? (h("searchcraft-search-icon-set", { type: 'search-light' })) : (h("searchcraft-search-icon-set", { type: 'search-dark' }))));
    }
};
SearchcraftInputIcon.style = searchcraftInputIconModuleCss;

export { SearchcraftInputIcon as searchcraft_input_icon };

//# sourceMappingURL=searchcraft-input-icon.entry.js.map