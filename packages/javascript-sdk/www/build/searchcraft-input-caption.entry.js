import { r as registerInstance, h } from './index-8211f330.js';
import { c as classNames } from './index-d6567b9c.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftInputCaptionModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.inputCaptionLightLTR{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#404040}.inputCaptionDarkLTR{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#E6E6E6}.inputCaptionErrorLightLTR{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#990000}.inputCaptionErrorDarkLTR{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#FFB3B3}.inputCaptionLightRTL{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#404040;text-align:right}.inputCaptionDarkRTL{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#E6E6E6;text-align:right}.inputCaptionErrorLightRTL{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#990000;text-align:right}.inputCaptionErrorDarkRTL{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#FFB3B3;text-align:right}";

const SearchcraftInputCaption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
        this.inputCaptionClassName = '';
        this.inputCaptionValue = 'Enter Search';
        this.rightToLeftOrientation = false;
        this.theme = 'light';
    }
    isLightTheme() {
        return this.theme === 'light';
    }
    render() {
        return this.rightToLeftOrientation ? (h("p", { class: classNames(this.error
                ? this.isLightTheme
                    ? 'inputCaptionErrorLightRTL'
                    : 'inputCaptionErrorDarkRTL'
                : this.isLightTheme
                    ? 'inputCaptionLightRTL'
                    : 'inputCaptionDarkRTL', this.inputCaptionClassName, '.searchcraft-input-caption') }, this.inputCaptionValue)) : (h("p", { class: classNames(this.error
                ? this.isLightTheme
                    ? 'inputCaptionErrorLightLTR'
                    : 'inputCaptionErrorDarkLTR'
                : this.isLightTheme
                    ? 'inputCaptionLightLTR'
                    : 'inputCaptionDarkLTR', this.inputCaptionClassName, '.searchcraft-input-caption') }, this.inputCaptionValue));
    }
};
SearchcraftInputCaption.style = searchcraftInputCaptionModuleCss;

export { SearchcraftInputCaption as searchcraft_input_caption };

//# sourceMappingURL=searchcraft-input-caption.entry.js.map