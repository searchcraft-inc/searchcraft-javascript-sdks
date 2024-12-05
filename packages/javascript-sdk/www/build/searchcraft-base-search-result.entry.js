import { r as registerInstance, a as createEvent, h } from './index-be6bffea.js';

const searchcraftBaseSearchResultModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.interactiveResultContainerLight{background-color:#FAFAFA;align-items:flex-start;border-radius:16px;display:flex;position:relative;flex-direction:column;gap:16px;padding:8px}@media (min-width: 600px){.interactiveResultContainerLight{flex-direction:row}}.interactiveResultContainerDark{background-color:#2E2E2E;align-items:flex-start;border-radius:16px;display:flex;position:relative;flex-direction:column;gap:16px;padding:8px}@media (min-width: 600px){.interactiveResultContainerDark{flex-direction:row}}.resultContainer{align-items:flex-start;display:flex;flex-direction:column;gap:16px}@media (min-width: 600px){.resultContainer{flex-direction:row}}.interactiveIconLarge{display:inline-block;position:absolute;right:5px;top:8px}@media (max-width: 600px){.interactiveIconLarge{display:none}}.interactiveIconSmall{position:absolute;right:5px;top:-2px;display:inline-block}@media (min-width: 600px){.interactiveIconSmall{display:none}}.imageContainer{max-height:540px;max-width:100%}@media (min-width: 600px){.imageContainer{max-height:100%;max-width:50%}}.contentContainer{max-height:100%;max-width:100%}@media (min-width: 600px){.contentContainer{max-width:50%}}.imageLight{aspect-ratio:2/1;border-radius:8px;max-height:100%;max-width:100%;border:1px solid #D9D9D9}.imageDark{aspect-ratio:2/1;border-radius:8px;max-height:100%;max-width:100%;border:1px solid #333}.headingLight{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0px;position:relative;color:#292929}.headingDark{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0px;position:relative;color:#FFF}.subheadingLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#737373}.subheadingDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#BFBFBF}.primaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.primaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}.secondaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.secondaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}.tertiaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.tertiaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}";

const SearchcraftBaseSearchResult = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonCallback = createEvent(this, "buttonCallback", 7);
        this.keyDownCallback = createEvent(this, "keyDownCallback", 7);
        this.resultCallback = createEvent(this, "resultCallback", 7);
        this.buttonCallback = () => { }; // Callback for button click
        this.keyDownCallback = () => { }; // Callback for key down event
        this.resultCallback = () => { }; // Callback for result container click
        this.handleButtonClick = () => {
            this.buttonCallback();
        };
        this.handleContainerClick = () => {
            if (this.isInteractive) {
                this.resultCallback();
            }
        };
        this.buttonText = '';
        this.imageDescription = '';
        this.imageSource = '';
        this.isInteractive = false;
        this.primaryContent = '';
        this.secondaryContent = '';
        this.tertiaryContent = '';
        this.headingText = '';
        this.subheadingText = '';
        this.themeMode = 'light';
        this.customStyles = '{}';
    }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    parseStyles() {
        try {
            return JSON.parse(this.customStyles);
        }
        catch (error) {
            console.error('Error parsing custom styles:', error);
            return {};
        }
    }
    render() {
        const isLightTheme = this.themeMode === 'light';
        const styles = this.parseStyles();
        return (h("div", { key: '096a8c89cb39b5dca0949b11981747b55c6f374f', class: this.isInteractive
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', style: styles.container || {}, tabindex: '0', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallback }, h("div", { key: '91eb80e1c2e68c148e12bd6046bcfbe190c2560f', class: 'imageContainer' }, h("img", { key: 'e83722c85e2b32d359c702f968cdb9e84aab5f04', alt: this.imageDescription, src: this.imageSource, style: styles.image || {}, class: isLightTheme ? 'imageLight' : 'imageDark' })), h("div", { key: '7450df6c0f77ccccd74d23d05e0b8bc4b3211189', class: 'contentContainer' }, h("h2", { key: '480ae0e87ecdcb2bc93551a2bc8288ad38472128', style: styles.heading || {}, class: isLightTheme ? 'headingLight' : 'headingDark' }, this.headingText), h("h3", { key: '67a6e12968a53bcb3e6cb96a020cdbf69d5b66b4', style: styles.subheading || {}, class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.subheadingText), h("p", { key: '9ebc20428528e0abafa5c31f13e32aeb23f95648', style: styles.primaryContent || {}, class: isLightTheme ? 'primaryContentLight' : 'primaryContentDark' }, this.primaryContent), h("p", { key: '6e2d3491d45056f1a9805477d003938c22d5119b', style: styles.secondaryContent || {}, class: isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark' }, this.secondaryContent), h("p", { key: 'f1eed685d08cfc64a01f350940bbdfc2722ab4a2', style: styles.tertiaryContent || {}, class: isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark' }, this.tertiaryContent), this.buttonText && (h("button", { key: 'c53407c532f7c70e898cf025e1279f2081a7fb74', onClick: this.handleButtonClick, style: styles.button || {}, type: 'button' }, this.buttonText)))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map