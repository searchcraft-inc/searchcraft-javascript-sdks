import { r as registerInstance, h } from './index-8211f330.js';

const searchcraftSpinnerDarkModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerDark{animation:spinning 1s linear infinite;background:conic-gradient(#000 50%, #FFFFFF);clip-path:circle(50%);height:100%;mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);width:100%}.spinnerLight{animation:spinning 1s linear infinite;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);height:100%;mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);width:100%}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const SearchcraftSpinnerDark = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'fbbd8b46026e1c1c83b59efd68a5cecdca7cad59', class: 'spinnerContainer' }, h("div", { key: '7fb274ca3ed3d9b69eef7faa77413b1e1fe68ef5', class: 'spinnerDark' })));
    }
};
SearchcraftSpinnerDark.style = searchcraftSpinnerDarkModuleCss;

export { SearchcraftSpinnerDark as searchcraft_spinner_dark };

//# sourceMappingURL=searchcraft-spinner-dark.entry.js.map