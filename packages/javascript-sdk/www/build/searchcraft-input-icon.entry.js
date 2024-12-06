import { r as registerInstance, h } from './index-2e19f875.js';

const searchcraftInputIconModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.inputIconLTR{height:20px;left:15px;position:absolute;top:50%;transform:translateY(-50%);width:20px}.inputIconRTL{height:20px;position:absolute;right:15px;top:50%;transform:translateY(-50%);width:20px}";

const SearchcraftInputIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
        this.rightToLeftOrientation = false;
        this.height = 20;
        this.width = 20;
        this.theme = 'light';
    }
    isLightTheme() {
        return this.theme === 'light';
    }
    render() {
        return this.error ? (h("div", { class: this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR' }, this.isLightTheme() ? (h("searchcraft-search-icon-set", { height: this.height, type: 'error-light', width: this.width })) : (h("searchcraft-search-icon-set", { height: this.height, type: 'error-dark', width: this.width })))) : (h("div", { class: this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR' }, this.isLightTheme() ? (h("searchcraft-search-icon-set", { height: this.height, type: 'search-light', width: this.width })) : (h("searchcraft-search-icon-set", { height: this.height, type: 'search-dark', width: this.width }))));
    }
};
SearchcraftInputIcon.style = searchcraftInputIconModuleCss;

export { SearchcraftInputIcon as searchcraft_input_icon };

//# sourceMappingURL=searchcraft-input-icon.entry.js.map