import { r as registerInstance, a as createEvent, h } from './index-17269461.js';

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
        return (h("div", { key: '75a0ad165769abe4a2fd88557429e3d6d8501f57', class: this.isInteractive
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', style: styles.container || {}, tabindex: '0', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallback }, h("div", { key: 'ac0bcda0de332fb33264612fae9ad495e745641e', class: 'imageContainer' }, h("img", { key: '21095fea5e3ccad6790b67aaeb45c03324d3a69a', alt: this.imageDescription, src: this.imageSource, style: styles.image || {}, class: isLightTheme ? 'imageLight' : 'imageDark' })), h("div", { key: 'df4fdf102e048a80a89cc5e9c0972c1691fe0104', class: 'contentContainer' }, h("h2", { key: 'b996438b621d59e9bcf627799da9a48553489e57', style: styles.heading || {}, class: isLightTheme ? 'headingLight' : 'headingDark' }, this.headingText), h("h3", { key: '8b0d6c0a222598dd3ed39c60079fb45ecd472a7e', style: styles.subheading || {}, class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.subheadingText), h("p", { key: '3050a7e3c57ee363bc3f08c4fa3063ebe5c3c634', style: styles.primaryContent || {}, class: isLightTheme ? 'primaryContentLight' : 'primaryContentDark' }, this.primaryContent), h("div", { key: '77854c3cbf704d50ae3a171ba28f7180082bdb0e' }, h("p", { key: '37dfcc9be34483f7b9589dd46fbd3ede8d167b61', style: styles.secondaryContent || {}, class: isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark' }, this.secondaryContent), h("p", { key: '0cc56b9cccd4ee5d66ed658aca5980d215cba197', style: styles.tertiaryContent || {}, class: isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark' }, this.tertiaryContent)), this.buttonText && (h("button", { key: '35c067ea71d179352c757f78e079407e73f7644e', onClick: this.handleButtonClick, style: styles.button || {}, type: 'button' }, this.buttonText)))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map