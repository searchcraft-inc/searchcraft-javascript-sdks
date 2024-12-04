import { r as registerInstance, h } from './index-b6929a4b.js';

const scSpinnerDarkModuleCss = ".spinnerContainer{background-color:transparent;height:20px;width:20px}.spinnerDark{height:100%;width:100%;background:conic-gradient(#000 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}.spinnerLight{height:100%;width:100%;background:conic-gradient(#737373 50%, #FFFFFF);clip-path:circle(50%);mask-image:radial-gradient(circle at center, rgba(0, 0, 0, 0) 6.6666666667px, rgb(0, 0, 0) 6.6666666667px);animation:spinning 1s linear infinite}@keyframes spinning{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}";

const ScSpinnerDark = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '0232c7aff902bcb73e42a0ba5722a641ce2c3a28', class: 'spinnerContainer' }, h("div", { key: 'a5bb602a70eea0d465190bfd7caf356bf77f34c1', class: 'spinnerDark' })));
    }
};
ScSpinnerDark.style = scSpinnerDarkModuleCss;

export { ScSpinnerDark as S };

//# sourceMappingURL=sc-spinner-dark-830d169d.js.map