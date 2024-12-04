import { r as registerInstance, h } from './index-b6929a4b.js';

const scSpinnerLightModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const ScSpinnerLight = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'b0d6005dc80c5693786783c3883fc5e708e89bba', class: 'spinnerContainer' }, h("div", { key: 'c178a422c22c0984bb248e61932780afba451cdf', class: 'spinnerLight' })));
    }
};
ScSpinnerLight.style = scSpinnerLightModuleCss;

export { ScSpinnerLight as S };

//# sourceMappingURL=sc-spinner-light-b8b88e38.js.map