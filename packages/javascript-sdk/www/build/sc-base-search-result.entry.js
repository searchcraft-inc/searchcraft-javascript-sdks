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
        return (h("div", { key: 'a53e68529aae9116059ab7d65c4f36b9775ea638', class: this.interactiveResult
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', id: 'searchcraft-item', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallbackFn, tabindex: '0' }, this.interactiveResult && (h("div", { key: 'ac37d29c4f648481c321c5e90c4335757ca02997', class: 'interactiveIconLarge' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' })))), h("div", { key: 'f8b0e4920ddb291c98a1141c6d2de290d7c13b49', class: 'imageContainer' }, h("img", { key: 'c7290769dc73f3fdffc20e06c196ec7d8ecc3eba', alt: this.imageAltText, class: isLightTheme ? 'imageLight' : 'imageDark', src: this.imageSrc })), h("div", { key: 'a7239d03376972a04e922ee8b2610f4febdb3678', class: 'contentContainer' }, h("h2", { key: 'a99f130058eb434360174d88cb60c3256f32ba52', class: isLightTheme ? 'headingLight' : 'headingDark' }, this.resultHeading, this.interactiveResult && (h("div", { key: '5886f2a3f81e3151be45216569fa0857da700a7c', class: 'interactiveIconSmall' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' }))))), h("h3", { key: 'ecbfb9d631e2bea73c55ad14f14fe48c2c3b7bc3', class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.resultSubheading), h("p", { key: '598adc026fb01f22eb8c7133edeb0e57c5875a1b', class: isLightTheme ? 'bodyContentLight' : 'bodyContentDark' }, this.resultBodyContent), h("button", { key: 'e8e53b900f1b6ce1f26b8c4dc58eeaf660dcfa9f', onClick: this.handleButtonClick, type: 'button' }, this.buttonLabel))));
    }
};
ScBaseSearchResult.style = scBaseSearchResultModuleCss;

export { ScBaseSearchResult as sc_base_search_result };

//# sourceMappingURL=sc-base-search-result.entry.js.map