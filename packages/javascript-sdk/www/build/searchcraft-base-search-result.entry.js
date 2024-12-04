import { r as registerInstance, h } from './index-be6bffea.js';

const searchcraftBaseSearchResultModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.interactiveResultContainerLight{background-color:#FAFAFA;align-items:flex-start;border-radius:16px;display:flex;position:relative;flex-direction:column;gap:16px;padding:8px}@media (min-width: 600px){.interactiveResultContainerLight{flex-direction:row}}.interactiveResultContainerDark{background-color:#2E2E2E;align-items:flex-start;border-radius:16px;display:flex;position:relative;flex-direction:column;gap:16px;padding:8px}@media (min-width: 600px){.interactiveResultContainerDark{flex-direction:row}}.resultContainer{align-items:flex-start;display:flex;flex-direction:column;gap:16px}@media (min-width: 600px){.resultContainer{flex-direction:row}}.interactiveIconLarge{display:inline-block;position:absolute;right:5px;top:8px}@media (max-width: 600px){.interactiveIconLarge{display:none}}.interactiveIconSmall{position:absolute;right:5px;top:-2px;display:inline-block}@media (min-width: 600px){.interactiveIconSmall{display:none}}.imageContainer{max-height:540px;max-width:100%}@media (min-width: 600px){.imageContainer{max-height:100%;max-width:50%}}.contentContainer{max-height:100%;max-width:100%}@media (min-width: 600px){.contentContainer{max-width:50%}}.imageLight{aspect-ratio:2/1;border-radius:8px;max-height:100%;max-width:100%;border:1px solid #D9D9D9}.imageDark{aspect-ratio:2/1;border-radius:8px;max-height:100%;max-width:100%;border:1px solid #333}.headingLight{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0px;position:relative;color:#292929}.headingDark{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0px;position:relative;color:#FFF}.subheadingLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#737373}.subheadingDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#BFBFBF}.bodyContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.bodyContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}";

const SearchcraftBaseSearchResult = class {
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
        return (h("div", { key: '4737d2abd5d200b2b2e6d143c42b83c805e6d6b5', class: this.interactiveResult
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', id: 'searchcraft-item', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallbackFn, tabindex: '0' }, this.interactiveResult && (h("div", { key: 'c75446240006174a428bb80efae2d1529fe33137', class: 'interactiveIconLarge' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' })))), h("div", { key: '36db3acdba7a4f2745280919f7b8774c97fe5bce', class: 'imageContainer' }, h("img", { key: '98b5f0883475abc49bc1b682dc3237ace35b73b1', alt: this.imageAltText, class: isLightTheme ? 'imageLight' : 'imageDark', src: this.imageSrc })), h("div", { key: 'ae7a01f884c33db23363141e61efd041139c8554', class: 'contentContainer' }, h("h2", { key: '5074799259065f9e30b04d218c11678344378b80', class: isLightTheme ? 'headingLight' : 'headingDark' }, this.resultHeading, this.interactiveResult && (h("div", { key: 'f68a661e54beb7a3e1bd0a68d181b6359d2d0788', class: 'interactiveIconSmall' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' }))))), h("h3", { key: '53f003663f1b3147492dea1901135fd37ebd29e0', class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.resultSubheading), h("p", { key: 'dd6bbfb2500f921d75d32a9eaedb11f7dff5bb5d', class: isLightTheme ? 'bodyContentLight' : 'bodyContentDark' }, this.resultBodyContent), h("button", { key: 'cf5b5ddf14f4689b9eeed78e6bbbd20262ebeb98', onClick: this.handleButtonClick, type: 'button' }, this.buttonLabel))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map