import { r as registerInstance, a as createEvent, h, F as Fragment } from './index-be6bffea.js';
import { c as classNames } from './index-d6567b9c.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftButtonModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.buttonLight{border-radius:8px;display:flex;font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;padding:11px 20px;position:relative;background-color:#000;border:1px solid #E6E6E6;color:#FFF}.buttonLight:hover{cursor:pointer}.buttonLight:hover{background-color:#2E2E2E}.buttonLight:focus{outline:2px solid #000000}.buttonDark{border-radius:8px;display:flex;font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;padding:11px 20px;position:relative;background-color:#FFF;border:1px solid #404040;color:#292929}.buttonDark:hover{cursor:pointer}.buttonDark:hover{background-color:#FAFAFA}.buttonDark:focus{outline:2px solid #404040}.spinnerMarginRight{left:4px;margin-right:4px;position:absolute}.spinnerMarginLeft{left:4px;margin-left:4px;position:absolute}.buttonLabel{animation:right-and-back 0.2s;margin-left:4px;position:relative}@keyframes right-and-back{0%{right:-6px}50%{right:-12px}75%{right:-6px}100%{right:0px}}";

const SearchcraftButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClick = createEvent(this, "buttonClick", 7);
        this.handleClick = () => {
            this.buttonClick.emit(); // Emit the event instead of calling a function
        };
        this.iconElement = undefined;
        this.iconOnly = false;
        this.iconPosition = 'left';
        this.label = 'Search';
        this.isRequesting = false;
        this.theme = 'light';
    }
    getButtonStyle() {
        return this.theme === 'light' ? 'buttonLight' : 'buttonDark';
    }
    render() {
        const buttonStyle = this.getButtonStyle();
        return (h(Fragment, { key: '2a541236bdbaf73413ac6382dc50f2c5cdfe3d98' }, this.iconOnly ? (h("button", { class: classNames(buttonStyle, 'searchcraft-button'), onClick: this.handleClick, type: 'submit' }, this.isRequesting ? (h("searchcraft-spinner-dark", null)) : (this.iconElement))) : (h("button", { class: classNames(buttonStyle, 'searchcraft-button'), onClick: this.handleClick, type: 'submit' }, this.iconPosition === 'left' && this.isRequesting ? (h("div", { class: 'spinner-margin-right' }, h("searchcraft-spinner-dark", null))) : (this.iconElement), h("span", { class: classNames(this.isRequesting && 'button-label', 'searchcraft-button-label') }, this.label)))));
    }
};
SearchcraftButton.style = searchcraftButtonModuleCss;

export { SearchcraftButton as searchcraft_button };

//# sourceMappingURL=searchcraft-button.entry.js.map