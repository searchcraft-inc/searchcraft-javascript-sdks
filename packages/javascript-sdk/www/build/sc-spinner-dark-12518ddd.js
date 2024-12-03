import { r as registerInstance, h } from './index-b2fefddc.js';

const scSpinnerDarkModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerDark{height:100%;width:100%;background:conic-gradient(#000 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const ScSpinnerDark = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '201b6ffa04c9ad69cb169dd385e25289bae6f98d', class: 'spinnerContainer' }, h("div", { key: 'e20614e8266fe57882f0ada0c210bb0b05e0fe99', class: 'spinnerDark' })));
    }
};
ScSpinnerDark.style = scSpinnerDarkModuleCss;

export { ScSpinnerDark as S };

//# sourceMappingURL=sc-spinner-dark-12518ddd.js.map