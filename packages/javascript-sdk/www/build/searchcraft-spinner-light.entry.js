import { r as registerInstance, h } from './index-8211f330.js';

const searchcraftSpinnerLightModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerLight{animation:spinning 1s linear infinite;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);height:100%;mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);width:100%}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const SearchcraftSpinnerLight = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '5f8d9dbe616324b466436037581491efff818065', class: 'spinnerContainer' }, h("div", { key: '8152d98d48ac5a4a55c49048a385301238b54932', class: 'spinnerLight' })));
    }
};
SearchcraftSpinnerLight.style = searchcraftSpinnerLightModuleCss;

export { SearchcraftSpinnerLight as searchcraft_spinner_light };

//# sourceMappingURL=searchcraft-spinner-light.entry.js.map