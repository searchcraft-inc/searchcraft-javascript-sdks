import { r as registerInstance, h } from './index-17269461.js';

const searchcraftSpinnerLightModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const SearchcraftSpinnerLight = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'f1c941149c07dac7ee09eff1ae98dca00dcdf924', class: 'spinnerContainer' }, h("div", { key: '2f93e299ef12f4f382d189ab58c743ee9e981ce2', class: 'spinnerLight' })));
    }
};
SearchcraftSpinnerLight.style = searchcraftSpinnerLightModuleCss;

export { SearchcraftSpinnerLight as searchcraft_spinner_light };

//# sourceMappingURL=searchcraft-spinner-light.entry.js.map