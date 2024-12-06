import { r as registerInstance, h } from './index-2e19f875.js';

const searchcraftSpinnerDarkModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerDark{height:100%;width:100%;background:conic-gradient(#000 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const SearchcraftSpinnerDark = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '76685b09609a42adbff41ee43ecb4b4e161d4598', class: 'spinnerContainer' }, h("div", { key: '7e7a01010f21e5b95358b7385d41a45e90a5b3bd', class: 'spinnerDark' })));
    }
};
SearchcraftSpinnerDark.style = searchcraftSpinnerDarkModuleCss;

export { SearchcraftSpinnerDark as searchcraft_spinner_dark };

//# sourceMappingURL=searchcraft-spinner-dark.entry.js.map