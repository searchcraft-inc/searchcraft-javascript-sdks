import { r as registerInstance, a as createEvent, h } from './index-b6929a4b.js';
import { c as classNames } from './index-d6567b9c.js';
import { S as ScSpinnerDark } from './sc-spinner-dark-830d169d.js';
import { S as ScSpinnerLight } from './sc-spinner-light-ad4153d8.js';
import './_commonjsHelpers-63cbe26c.js';

const scClearInputButtonModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.inputClearButtonLTR{align-items:center;background:none;border:none;display:flex;height:20px;justify-content:center;padding:0;position:absolute;right:25px;top:11px;width:20px}.inputClearButtonRTL{align-items:center;background:none;border:none;display:flex;height:20px;justify-content:center;left:25px;padding:0;position:absolute;top:11px;width:20px}";

const ScClearInputButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clearInput = createEvent(this, "clearInput", 7);
        // Added a click handler to emit the event
        this.handleClearClick = (event) => {
            event.preventDefault(); // Prevent default if necessary
            this.clearInput.emit(); // Emit the event
        };
        this.isRequesting = false;
        this.rightToLeftOrientation = false;
        this.theme = 'light';
    }
    isLightTheme() {
        return this.theme === 'light';
    }
    render() {
        return this.rightToLeftOrientation ? (h("button", { class: classNames('inputClearButtonRTL', '.sc-clear-input-button-rtl'), onClick: this.handleClearClick, type: 'button' }, this.isRequesting ? (this.isLightTheme ? (h(ScSpinnerLight, null)) : (h(ScSpinnerDark, null))) : this.isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'clear-light' })) : (h("searchcraft-clear-icon-set", { type: 'clear-dark' })))) : (h("button", { class: classNames('inputClearButtonLTR', '.sc-clear-input-button-ltr'), onClick: this.handleClearClick, type: 'button' }, this.isRequesting ? (this.isLightTheme ? (h(ScSpinnerLight, null)) : (h(ScSpinnerDark, null))) : this.isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'clear-light' })) : (h("searchcraft-clear-icon-set", { type: 'clear-dark' }))));
    }
};
ScClearInputButton.style = scClearInputButtonModuleCss;

export { ScClearInputButton as sc_clear_input_button };

//# sourceMappingURL=sc-clear-input-button.entry.js.map