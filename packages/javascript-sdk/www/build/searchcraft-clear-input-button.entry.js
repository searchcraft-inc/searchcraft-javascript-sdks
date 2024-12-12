import { r as registerInstance, a as createEvent, h } from './index-8211f330.js';
import { c as classNames } from './index-d6567b9c.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftClearInputButtonModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.inputClearButtonLTR{align-items:center;background:none;border:none;display:flex;height:20px;justify-content:center;padding:0;position:absolute;right:25px;top:50%;transform:translateY(-50%);width:20px}.inputClearButtonRTL{align-items:center;background:none;border:none;display:flex;height:20px;justify-content:center;left:25px;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:20px}";

const SearchcraftClearInputButton = class {
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
        return this.rightToLeftOrientation ? (h("button", { class: classNames('inputClearButtonRTL', '.sc-clear-input-button-rtl'), onClick: this.handleClearClick, type: 'button' }, this.isRequesting ? (this.isLightTheme ? (h("searchcraft-spinner-light", null)) : (h("searchcraft-spinner-dark", null))) : this.isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'clear-light' })) : (h("searchcraft-clear-icon-set", { type: 'clear-dark' })))) : (h("button", { class: classNames('inputClearButtonLTR', '.sc-clear-input-button-ltr'), onClick: this.handleClearClick, type: 'button' }, this.isRequesting ? (this.isLightTheme ? (h("searchcraft-spinner-light", null)) : (h("searchcraft-spinner-dark", null))) : this.isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'clear-light' })) : (h("searchcraft-clear-icon-set", { type: 'clear-dark' }))));
    }
};
SearchcraftClearInputButton.style = searchcraftClearInputButtonModuleCss;

export { SearchcraftClearInputButton as searchcraft_clear_input_button };

//# sourceMappingURL=searchcraft-clear-input-button.entry.js.map