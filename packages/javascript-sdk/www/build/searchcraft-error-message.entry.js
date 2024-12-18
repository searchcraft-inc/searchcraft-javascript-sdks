import { r as registerInstance, h } from './index-8211f330.js';
import { c as classNames } from './index-d6567b9c.js';
import './_commonjsHelpers-63cbe26c.js';

const searchcraftErrorMessageModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.errorMessageLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#990000}.errorMessageDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#FFB3B3}";

const SearchcraftErrorMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.errorMessage = undefined;
        this.theme = 'light';
    }
    render() {
        const errorMessageStyle = this.theme === 'light' ? 'errorMessageLight' : 'errorMessageDark';
        return (h("p", { key: '26a694924d601e2f755b86c4ca0f2a9042647553', class: classNames(errorMessageStyle) }, this.errorMessage || 'Search term is required.'));
    }
};
SearchcraftErrorMessage.style = searchcraftErrorMessageModuleCss;

export { SearchcraftErrorMessage as searchcraft_error_message };

//# sourceMappingURL=searchcraft-error-message.entry.js.map