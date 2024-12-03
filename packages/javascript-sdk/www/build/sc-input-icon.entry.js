import { h, r as registerInstance } from './index-b2fefddc.js';

const SearchIconLight = () => (h("svg", { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none' },
    h("title", null, "Searchcraft Search Icon Light"),
    h("path", { d: 'M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z', stroke: '#404040', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' })));
const SearchIconDark = () => (h("svg", { width: '18', height: '18', viewBox: '0 0 18 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    h("title", null, "Searchcraft Search Icon Dark"),
    h("path", { d: 'M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z', stroke: '#E6E6E6', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' })));
const SearchIconLightError = () => (h("svg", { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none' },
    h("title", null, "Searchcraft Error Search Icon Light"),
    h("path", { d: 'M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z', stroke: '#737373', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' })));
const SearchIconDarkError = () => (h("svg", { width: '18', height: '18', viewBox: '0 0 18 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    h("title", null, "Searchcraft Error Search Icon Dark"),
    h("path", { d: 'M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z', stroke: '#BFBFBF', "stroke-width": '1.5', "stroke-linecap": 'round', "stroke-linejoin": 'round' })));

const scInputIconModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.inputIconLTR{height:20px;left:10px;position:absolute;top:11px;width:20px}.inputIconRTL{height:20px;position:absolute;right:10px;top:11px;width:20px}";

const ScInputIcon = class {
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
        return this.error ? (h("div", { class: this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR' }, this.isLightTheme ? h(SearchIconLightError, null) : h(SearchIconDarkError, null))) : (h("div", { class: this.rightToLeftOrientation ? 'inputIconRTL' : 'inputIconLTR' }, this.isLightTheme ? h(SearchIconLight, null) : h(SearchIconDark, null)));
    }
};
ScInputIcon.style = scInputIconModuleCss;

export { ScInputIcon as sc_input_icon };

//# sourceMappingURL=sc-input-icon.entry.js.map