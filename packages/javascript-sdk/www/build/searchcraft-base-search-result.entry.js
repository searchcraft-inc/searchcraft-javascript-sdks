import { r as registerInstance, a as createEvent, h } from './index-8211f330.js';

const searchcraftBaseSearchResultModuleCss = ":root{--font-stack:Helvetica, Arial, sans-serif}.interactiveResultContainerLight{background-color:#FAFAFA;align-items:flex-start;border-radius:16px;display:flex;position:relative;flex-direction:column;gap:16px;padding:8px}@media (min-width: 600px){.interactiveResultContainerLight{flex-direction:row}}.interactiveResultContainerDark{background-color:#2E2E2E;align-items:flex-start;border-radius:16px;display:flex;position:relative;flex-direction:column;gap:16px;padding:8px}@media (min-width: 600px){.interactiveResultContainerDark{flex-direction:row}}.resultContainer{align-items:flex-start;display:flex;flex-direction:column;gap:16px}@media (min-width: 600px){.resultContainer{flex-direction:row}}.interactiveIconLarge{display:inline-block;position:absolute;right:5px;top:8px}@media (max-width: 600px){.interactiveIconLarge{display:none}}.interactiveIconSmall{position:absolute;right:5px;top:-2px;display:inline-block}@media (min-width: 600px){.interactiveIconSmall{display:none}}.imageContainer{max-height:540px;max-width:100%}@media (min-width: 600px){.imageContainer{max-height:175px}}.contentContainer{max-height:100%;max-width:100%}@media (min-width: 600px){.contentContainer{max-width:50%}}.imageLight{aspect-ratio:2/1;border-radius:8px;max-height:100%;max-width:100%;border:1px solid #D9D9D9}.imageDark{aspect-ratio:2/1;border-radius:8px;max-height:100%;max-width:100%;border:1px solid #333}.headingLight{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0px;position:relative;color:#292929}.headingDark{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0px;position:relative;color:#FFF}.subheadingLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#737373}.subheadingDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#BFBFBF}.primaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.primaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}.secondaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.secondaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}.tertiaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.tertiaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}";

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
        return (h("div", { key: '91cfc671b0b99082915df3eaafa053a9a7f77929', class: this.isInteractive
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', style: styles.container || {}, tabindex: '0', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallback }, h("div", { key: 'ccda236ef60aee285472155889c5490c69a86415', class: 'imageContainer' }, h("img", { key: 'e55d743952e2997d91f6486436e3a7955ffc1dcc', alt: this.imageDescription, src: this.imageSource, style: styles.image || {}, class: isLightTheme ? 'imageLight' : 'imageDark' })), h("div", { key: 'b0e831c0c7bfef46b8b6da4e84536adf3ebd7158', class: 'contentContainer' }, h("h2", { key: '54137612623a39d711f4e3c888bf2015b6fb9500', style: styles.heading || {}, class: isLightTheme ? 'headingLight' : 'headingDark' }, this.headingText), h("h3", { key: 'de46df990be3d0b5d2134d272e1766e911ab094a', style: styles.subheading || {}, class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.subheadingText), h("p", { key: 'd9e7656bc739b0dd2267f86ac51b17d9ca16da6a', style: styles.primaryContent || {}, class: isLightTheme ? 'primaryContentLight' : 'primaryContentDark' }, this.primaryContent), h("div", { key: 'bee9824406399e3ce7542285780fcfc86b09ca97' }, h("p", { key: '55d0decc83f5cbaef9f7e94d968e0309739c5921', style: styles.secondaryContent || {}, class: isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark' }, this.secondaryContent), h("p", { key: '5cbf7a1e84ebef1a7664f893c179220e907c38c3', style: styles.tertiaryContent || {}, class: isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark' }, this.tertiaryContent)), this.buttonText && (h("button", { key: 'aca1e02ea750b1cf6c86dc8e40443c77e33ad9eb', onClick: this.handleButtonClick, style: styles.button || {}, type: 'button' }, this.buttonText)))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map