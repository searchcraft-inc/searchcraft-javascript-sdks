import { r as registerInstance, h } from './index-be6bffea.js';

const searchcraftSpinnerLightModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const SearchcraftSpinnerLight = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'ad5224c97faf7e329d2a8904488c17dfd7414b9e', class: 'spinnerContainer' }, h("div", { key: '6336ce7737af65eedac46ee290b20291ce5b6096', class: 'spinnerLight' })));
    }
};
SearchcraftSpinnerLight.style = searchcraftSpinnerLightModuleCss;

export { SearchcraftSpinnerLight as searchcraft_spinner_light };

//# sourceMappingURL=searchcraft-spinner-light.entry.js.map