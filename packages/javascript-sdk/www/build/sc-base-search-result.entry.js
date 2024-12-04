import { r as registerInstance, h } from './index-b6929a4b.js';

const scBaseSearchResultModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.interactiveResultContainerLight{background-color:#FAFAFA;align-items:flex-start;border-radius:16px;display:flex;position:relative;flex-direction:column;gap:16px;padding:8px}@media (min-width: 600px){.interactiveResultContainerLight{flex-direction:row}}.interactiveResultContainerDark{background-color:#2E2E2E;align-items:flex-start;border-radius:16px;display:flex;position:relative;flex-direction:column;gap:16px;padding:8px}@media (min-width: 600px){.interactiveResultContainerDark{flex-direction:row}}.resultContainer{align-items:flex-start;display:flex;flex-direction:column;gap:16px}@media (min-width: 600px){.resultContainer{flex-direction:row}}.interactiveIconLarge{display:inline-block;position:absolute;right:5px;top:8px}@media (max-width: 600px){.interactiveIconLarge{display:none}}.interactiveIconSmall{position:absolute;right:5px;top:-2px;display:inline-block}@media (min-width: 600px){.interactiveIconSmall{display:none}}.imageContainer{max-height:540px;max-width:100%}@media (min-width: 600px){.imageContainer{max-height:100%;max-width:50%}}.contentContainer{max-height:100%;max-width:100%}@media (min-width: 600px){.contentContainer{max-width:50%}}.imageLight{aspect-ratio:2/1;border-radius:8px;max-height:100%;max-width:100%;border:1px solid #D9D9D9}.imageDark{aspect-ratio:2/1;border-radius:8px;max-height:100%;max-width:100%;border:1px solid #333}.headingLight{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0px;position:relative;color:#292929}.headingDark{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0px;position:relative;color:#FFF}.subheadingLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#737373}.subheadingDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#BFBFBF}.bodyContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.bodyContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}";

const ScBaseSearchResult = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleButtonClick = () => {
            this.buttonCallbackFn();
        };
        this.handleContainerClick = () => {
            if (this.interactiveResult) {
                this.callbackFn();
            }
        };
        this.buttonCallbackFn = () => { };
        this.buttonLabel = '';
        this.callbackFn = () => { };
        this.imageAltText = '';
        this.imageSrc = '';
        this.interactiveResult = false;
        this.keyDownCallbackFn = () => { };
        this.resultBodyContent = '';
        this.resultHeading = '';
        this.resultSubheading = '';
        this.theme = 'light';
    }
    render() {
        const isLightTheme = this.theme === 'light';
        return (h("div", { key: '40e4f624b7be498998ae7fc2cf0b102117b4032a', class: this.interactiveResult
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', id: 'searchcraft-item', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallbackFn, tabindex: '0' }, this.interactiveResult && (h("div", { key: '47296d8c40e62c95a7e1c956623516a51a49baba', class: 'interactiveIconLarge' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' })))), h("div", { key: '32ab4c21b8823dc5f84ae39ced4b6be3bc82c1df', class: 'imageContainer' }, h("img", { key: '3605cf581fee8a98053705741ed7b679d3b342d7', alt: this.imageAltText, class: isLightTheme ? 'imageLight' : 'imageDark', src: this.imageSrc })), h("div", { key: 'e7ff445b795c332466508413dabff0bcb206a18a', class: 'contentContainer' }, h("h2", { key: 'ecca720ab97e116a91761c42023e2011551543b6', class: isLightTheme ? 'headingLight' : 'headingDark' }, this.resultHeading, this.interactiveResult && (h("div", { key: '888ce03c13b75dc6820d01d2213ea9fbd69f54e4', class: 'interactiveIconSmall' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' }))))), h("h3", { key: 'aad54639810f8cb08ed1d9e0f4d644bb6e12fa84', class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.resultSubheading), h("p", { key: '643477fa348537c6cbcc5a26f179aecea420ce0c', class: isLightTheme ? 'bodyContentLight' : 'bodyContentDark' }, this.resultBodyContent), h("button", { key: 'c618ca29d8cae58f60c9d938aadeaa31d4c98bd4', onClick: this.handleButtonClick, type: 'button' }, this.buttonLabel))));
    }
};
ScBaseSearchResult.style = scBaseSearchResultModuleCss;

export { ScBaseSearchResult as sc_base_search_result };

//# sourceMappingURL=sc-base-search-result.entry.js.map