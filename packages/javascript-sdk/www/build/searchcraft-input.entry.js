import { r as registerInstance, a as createEvent, h, F as Fragment } from './index-be6bffea.js';
import { c as classNames } from './index-d6567b9c.js';
import { p as parseCustomStyles } from './utils-f221d91f.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftInputModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.inputContainerLTR{position:relative}.inputContainerRTL{position:relative;margin-left:8px}.inputLightLTR{border:none;border-radius:8px;font-family:var(--font-stack);outline:none;padding-bottom:15px;padding-top:15px;background-color:#EDEDED;color:#292929;margin-right:8px;padding-left:36px;padding-right:16px}.inputLightLTR::placeholder{font-family:var(--font-stack);font-size:16px}.inputLightLTR::placeholder{color:#737373}.inputLightLTR:focus{outline:2px solid #000}.inputDarkLTR{border:none;border-radius:8px;font-family:var(--font-stack);outline:none;padding-bottom:15px;padding-top:15px;background-color:#1A1A1A;color:#FFF;margin-right:8px;padding-left:36px;padding-right:16px}.inputDarkLTR::placeholder{font-family:var(--font-stack);font-size:16px}.inputDarkLTR::placeholder{color:#BFBFBF}.inputDarkLTR:focus{outline:2px solid #FFF}.inputErrorLightLTR{border:none;border-radius:8px;font-family:var(--font-stack);outline:none;padding-bottom:15px;padding-top:15px;background-color:#EDEDED;color:#292929;outline:2px solid #c00;margin-right:8px;padding-left:36px;padding-right:16px}.inputErrorLightLTR::placeholder{font-family:var(--font-stack);font-size:16px}.inputErrorLightLTR::placeholder{color:#737373}.inputErrorLightLTR:focus{outline:2px solid #000}.inputErrorLightLTR:focus-visible{outline:2px solid #c00}.inputErrorDarkLTR{border:none;border-radius:8px;font-family:var(--font-stack);outline:none;padding-bottom:15px;padding-top:15px;background-color:#1A1A1A;color:#FFF;outline:2px solid #FFB3B3;margin-right:8px;padding-left:36px;padding-right:16px}.inputErrorDarkLTR::placeholder{font-family:var(--font-stack);font-size:16px}.inputErrorDarkLTR::placeholder{color:#BFBFBF}.inputErrorDarkLTR:focus{outline:2px solid #FFF}.inputErrorDarkLTR:focus-visible{outline:2px solid #FFB3B3}.inputLightRTL{border:none;border-radius:8px;font-family:var(--font-stack);outline:none;padding-bottom:15px;padding-top:15px;background-color:#EDEDED;color:#292929;margin-left:8px;padding-left:16px;padding-right:36px;text-align:right}.inputLightRTL::placeholder{font-family:var(--font-stack);font-size:16px}.inputLightRTL::placeholder{color:#737373}.inputLightRTL:focus{outline:2px solid #000}.inputDarkRTL{border:none;border-radius:8px;font-family:var(--font-stack);outline:none;padding-bottom:15px;padding-top:15px;background-color:#1A1A1A;color:#FFF;margin-left:8px;padding-left:16px;padding-right:36px;text-align:right}.inputDarkRTL::placeholder{font-family:var(--font-stack);font-size:16px}.inputDarkRTL::placeholder{color:#BFBFBF}.inputDarkRTL:focus{outline:2px solid #FFF}.inputErrorLightRTL{border:none;border-radius:8px;font-family:var(--font-stack);outline:none;padding-bottom:15px;padding-top:15px;background-color:#EDEDED;color:#292929;outline:2px solid #c00;margin-left:8px;padding-left:16px;padding-right:36px;text-align:right}.inputErrorLightRTL::placeholder{font-family:var(--font-stack);font-size:16px}.inputErrorLightRTL::placeholder{color:#737373}.inputErrorLightRTL:focus{outline:2px solid #000}.inputErrorLightRTL:focus-visible{outline:2px solid #c00}.inputErrorDarkRTL{border:none;border-radius:8px;font-family:var(--font-stack);outline:none;padding-bottom:15px;padding-top:15px;background-color:#1A1A1A;color:#FFF;outline:2px solid #FFB3B3;margin-left:8px;padding-left:16px;padding-right:36px;text-align:right}.inputErrorDarkRTL::placeholder{font-family:var(--font-stack);font-size:16px}.inputErrorDarkRTL::placeholder{color:#BFBFBF}.inputErrorDarkRTL:focus{outline:2px solid #FFF}.inputErrorDarkRTL:focus-visible{outline:2px solid #FFB3B3}";

const SearchcraftInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clearInput = createEvent(this, "clearInput", 7);
        this.searchInputChange = createEvent(this, "searchInputChange", 7);
        this.customStyles = {};
        this.error = false;
        this.formClassName = '';
        this.inputCaptionClassName = '';
        this.inputCaptionValue = '';
        this.inputClassName = '';
        this.placeholderValue = 'Enter Search';
        this.rightToLeftOrientation = false;
        this.query = '';
        this.theme = 'light';
    }
    get isLightTheme() {
        return this.theme === 'light';
    }
    handleInputChange(event) {
        const input = event.target;
        this.searchInputChange.emit(input.value);
    }
    handleClearInput() {
        if (this.clearInput) {
            this.clearInput.emit();
        }
    }
    render() {
        const containerClassName = this.rightToLeftOrientation
            ? 'inputContainerRTL'
            : 'inputContainerLTR';
        const inputClassName = classNames(this.error
            ? this.isLightTheme
                ? 'inputErrorLightRTL'
                : 'inputErrorDarkRTL'
            : this.isLightTheme
                ? 'inputLightLTR'
                : 'inputDarkLTR', 'searchcraft-input');
        const validatedCustomStyles = parseCustomStyles(this.customStyles);
        return (h("div", { key: '150906371494f26515d5e2bae47dfebf379bd401', class: classNames(containerClassName, this.formClassName, 'searchcraft-input-form') }, this.rightToLeftOrientation ? (h(Fragment, null, h("input", { class: classNames(inputClassName, 'searchcraft-input'), id: 'searchcraft-input-id', onChange: this.handleInputChange.bind(this), placeholder: this.placeholderValue, type: 'text', value: this.query, style: validatedCustomStyles }), this.inputCaptionValue && (h("searchcraft-input-caption", { inputCaptionClassName: this.inputCaptionClassName, inputCaptionValue: this.inputCaptionValue, rightToLeftOrientation: this.rightToLeftOrientation })), this.query.length > 0 && (h("searchcraft-clear-input-button", { onClearInput: this.handleClearInput, rightToLeftOrientation: this.rightToLeftOrientation })), h("searchcraft-input-icon", { error: this.error, rightToLeftOrientation: this.rightToLeftOrientation }))) : (h(Fragment, null, h("searchcraft-input-icon", { error: this.error, rightToLeftOrientation: this.rightToLeftOrientation }), h("input", { class: classNames(inputClassName, 'searchcraft-input'), id: 'searchcraft-input-id', onChange: this.handleInputChange.bind(this), placeholder: this.placeholderValue, type: 'text', value: this.query, style: validatedCustomStyles }), this.inputCaptionValue && (h("searchcraft-input-caption", { inputCaptionClassName: this.inputCaptionClassName, inputCaptionValue: this.inputCaptionValue, rightToLeftOrientation: this.rightToLeftOrientation })), this.query.length > 0 && (h("searchcraft-clear-input-button", { onClearInput: this.handleClearInput, rightToLeftOrientation: this.rightToLeftOrientation }))))));
    }
};
SearchcraftInput.style = searchcraftInputModuleCss;

export { SearchcraftInput as searchcraft_input };

//# sourceMappingURL=searchcraft-input.entry.js.map