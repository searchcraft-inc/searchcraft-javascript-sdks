import { r as registerInstance, h } from './index-b6929a4b.js';

const scSpinnerLightModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const ScSpinnerLight = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'ebc1df9922b492af4888d373019f63fd32a4fc11', class: 'spinnerContainer' }, h("div", { key: '5d169edc870f1186e9b5da89531999a021a6b98e', class: 'spinnerLight' })));
    }
};
ScSpinnerLight.style = scSpinnerLightModuleCss;

export { ScSpinnerLight as S };

//# sourceMappingURL=sc-spinner-light-ad4153d8.js.map