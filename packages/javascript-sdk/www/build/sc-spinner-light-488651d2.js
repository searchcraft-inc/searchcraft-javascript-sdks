import { r as registerInstance, h } from './index-b6929a4b.js';

const scSpinnerLightModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const ScSpinnerLight = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '441c0b81f3cad641a241728cf7ff441b55638b1e', class: 'spinnerContainer' }, h("div", { key: 'b9adb797867273d90cca18d14e356aba906898da', class: 'spinnerLight' })));
    }
};
ScSpinnerLight.style = scSpinnerLightModuleCss;

export { ScSpinnerLight as S };

//# sourceMappingURL=sc-spinner-light-488651d2.js.map