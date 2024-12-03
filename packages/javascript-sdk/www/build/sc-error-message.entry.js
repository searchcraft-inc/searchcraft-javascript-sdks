import { r as registerInstance, h } from './index-b2fefddc.js';
import { c as classNames } from './index-d6567b9c.js';
import './_commonjsHelpers-63cbe26c.js';

const scErrorMessageModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.errorMessageLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#990000}.errorMessageDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#FFB3B3}";

const ScErrorMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.errorMessage = undefined;
        this.theme = 'light';
    }
    render() {
        const errorMessageStyle = this.theme === 'light' ? 'errorMessageLight' : 'errorMessageDark';
        return (h("p", { key: '485fcb74212005ebf4f2d63576bca05d4b9a9867', class: classNames(errorMessageStyle) }, this.errorMessage || 'Search term is required.'));
    }
};
ScErrorMessage.style = scErrorMessageModuleCss;

export { ScErrorMessage as sc_error_message };

//# sourceMappingURL=sc-error-message.entry.js.map