import { r as registerInstance, h } from './index-8211f330.js';

const searchcraftSpinnerDarkModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerDark{animation:spinning 1s linear infinite;background:conic-gradient(#000 50%, #FFFFFF);clip-path:circle(50%);height:100%;mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);width:100%}.spinnerLight{animation:spinning 1s linear infinite;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);height:100%;mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);width:100%}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const SearchcraftSpinnerDark = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '60b629930c2e2795236f6768b40c95ce9390e882', class: 'spinnerContainer' }, h("div", { key: 'bfef3329f2e81ecf6538738ac0213da6259dd1c3', class: 'spinnerDark' })));
    }
};
SearchcraftSpinnerDark.style = searchcraftSpinnerDarkModuleCss;

export { SearchcraftSpinnerDark as searchcraft_spinner_dark };

//# sourceMappingURL=searchcraft-spinner-dark.entry.js.map