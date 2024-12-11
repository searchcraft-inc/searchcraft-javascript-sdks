import { r as registerInstance, h } from './index-17269461.js';

const searchcraftSpinnerDarkModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerDark{height:100%;width:100%;background:conic-gradient(#000 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const SearchcraftSpinnerDark = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'fa6235c4bf182daac64d41cd04a995aa3476b59a', class: 'spinnerContainer' }, h("div", { key: '68532114a4f25a5d12c8514e5c6d2984a68573af', class: 'spinnerDark' })));
    }
};
SearchcraftSpinnerDark.style = searchcraftSpinnerDarkModuleCss;

export { SearchcraftSpinnerDark as searchcraft_spinner_dark };

//# sourceMappingURL=searchcraft-spinner-dark.entry.js.map