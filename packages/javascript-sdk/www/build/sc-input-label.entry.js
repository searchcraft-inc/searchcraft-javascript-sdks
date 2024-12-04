import { r as registerInstance, h } from './index-b6929a4b.js';
import { c as classNames } from './index-d6567b9c.js';
import './_commonjsHelpers-63cbe26c.js';

const scInputLabelModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.labelLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#292929}.labelDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-top:4px;color:#FFF}";

const ScInputLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputLabelClassName = '';
        this.label = 'Enter Search';
        this.theme = 'light';
    }
    isLightTheme() {
        return this.theme === 'light';
    }
    render() {
        const labelStyle = this.isLightTheme ? 'labelLight' : 'labelDark';
        return (h("label", { key: 'a4ed0dfde3c0439c30c8b2515a9b284911ffbac8', class: classNames(labelStyle, this.inputLabelClassName), htmlFor: 'searchcraft-input-id' }, this.label));
    }
};
ScInputLabel.style = scInputLabelModuleCss;

export { ScInputLabel as sc_input_label };

//# sourceMappingURL=sc-input-label.entry.js.map