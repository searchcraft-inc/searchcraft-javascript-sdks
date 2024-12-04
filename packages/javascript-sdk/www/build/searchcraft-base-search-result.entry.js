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
        return (h("div", { key: '26e04a559c37ac68f1dc33d3810c66abc9755871', class: this.interactiveResult
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', id: 'searchcraft-item', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallbackFn, tabindex: '0' }, this.interactiveResult && (h("div", { key: '7d71fd1402fdafe67370eab10ca78ed385fb58d0', class: 'interactiveIconLarge' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' })))), h("div", { key: 'def02c3134ae8a756f196d9b9e4d90180767c8f8', class: 'imageContainer' }, h("img", { key: '5fb695256132b8b53f7008d67e2f5808bf3b6d28', alt: this.imageAltText, class: isLightTheme ? 'imageLight' : 'imageDark', src: this.imageSrc })), h("div", { key: 'cf533a08bcd15832ef6f7fd385c829ce8817435d', class: 'contentContainer' }, h("h2", { key: '9d9968ab969950008e1049177fb68d5d7ae00659', class: isLightTheme ? 'headingLight' : 'headingDark' }, this.resultHeading, this.interactiveResult && (h("div", { key: '56271a305c8290ebab89eeab75a466d666f26a2c', class: 'interactiveIconSmall' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' }))))), h("h3", { key: 'ea68f1f16f6b89979b3ba90a6e061809024e3498', class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.resultSubheading), h("p", { key: '0584a3077ff4f417e0d20d0acc28a624f5966e1c', class: isLightTheme ? 'bodyContentLight' : 'bodyContentDark' }, this.resultBodyContent), h("button", { key: '83ec2e81bd6dbe24d468cdee553c0c5a021f991b', onClick: this.handleButtonClick, type: 'button' }, this.buttonLabel))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map