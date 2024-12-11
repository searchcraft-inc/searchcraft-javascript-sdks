import { r as registerInstance, h } from './index-17269461.js';

const searchcraftInputIconModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.inputIconLTR{left:15px;position:absolute;top:50%;transform:translateY(-50%)}.inputIconRTL{position:absolute;right:15px;top:50%;transform:translateY(-50%)}";

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