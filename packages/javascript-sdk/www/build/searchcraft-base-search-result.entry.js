import { r as registerInstance, a as createEvent, h, F as Fragment } from './index-8211f330.js';

const searchcraftBaseSearchResultModuleCss = "@charset \"UTF-8\";:root{--font-stack:Helvetica, Arial, sans-serif}.interactiveResultContainerLight{align-items:flex-start;border-radius:16px;display:flex;flex-direction:column;gap:16px;padding:8px;position:relative;background-color:#FAFAFA}@media (min-width: 600px){.interactiveResultContainerLight{flex-direction:row}}.interactiveResultContainerDark{align-items:flex-start;border-radius:16px;display:flex;flex-direction:column;gap:16px;padding:8px;position:relative;background-color:#2E2E2E}@media (min-width: 600px){.interactiveResultContainerDark{flex-direction:row}}.resultContainer{align-items:flex-start;display:flex;flex-direction:column;gap:16px}@media (min-width: 600px){.resultContainer{flex-direction:row}}.interactiveIconLarge{display:inline-block;position:absolute;right:5px;top:8px}@media (max-width: 600px){.interactiveIconLarge{display:none}}.interactiveIconSmall{display:inline-block;position:absolute;right:5px;top:-2px}@media (min-width: 600px){.interactiveIconSmall{display:none}}.imageContainer{max-width:100%}.contentContainer{max-height:100%;max-width:100%}@media (min-width: 600px){.contentContainer{max-width:50%}}.secondaryContentContainer{display:flex}.imageLight{border-radius:8px;max-height:100%;max-width:100%;border:1px solid #D9D9D9}.imageDark{border-radius:8px;max-height:100%;max-width:100%;border:1px solid #333}.headingLight{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0;position:relative;color:#292929}.headingDark{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0;position:relative;color:#FFF}.subheadingLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#737373}.subheadingDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;color:#BFBFBF}.primaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.primaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}.secondaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.secondaryContentLight::after{content:\"•\";color:#404040;font-size:1em;margin-left:5px;margin-right:5px}.secondaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}.tertiaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#404040}.tertiaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;color:#E6E6E6}";

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
        this.customStyles = '{}';
        this.headingText = '';
        this.imageDescription = '';
        this.imageSource = '';
        this.isInteractive = false;
        this.primaryContent = '';
        this.secondaryContent = '';
        this.subheadingText = '';
        this.tertiaryContent = '';
        this.themeMode = 'light';
        this.placeImageRight = false;
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
        const imageContainer = (h("div", { key: '782a9afdde95302699c6ec8353cd45dc6e320f1a', class: 'imageContainer' }, h("img", { key: 'd8eeced749b7674406f442cdb090c1a34f88ff0b', alt: this.imageDescription, class: isLightTheme ? 'imageLight' : 'imageDark', src: this.imageSource, style: styles.image || {} })));
        const contentContainer = (h("div", { key: 'ca21b8ada63ed3711607d4f79589999727a050a2', class: 'contentContainer' }, h("h2", { key: '524d1f6aa5d541218037c34dc8f49b47423980cc', class: isLightTheme ? 'headingLight' : 'headingDark', style: styles.heading || {} }, this.headingText), h("h3", { key: '3f3e54ef4139b5a2b9da663e4bde32081cc079c5', class: isLightTheme ? 'subheadingLight' : 'subheadingDark', style: styles.subheading || {} }, this.subheadingText), h("p", { key: '287b862d956bfaa5eababce2e7823dbfcbba0677', class: isLightTheme ? 'primaryContentLight' : 'primaryContentDark', style: styles.primaryContent || {} }, this.primaryContent), h("div", { key: 'f24cdc90dc2d5f1a26014a862a695d5008c54013', class: 'secondaryContentContainer' }, h("p", { key: 'cc83ebdab2e9620cfb2f639ec11546bb03d81d42', class: isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark', style: styles.secondaryContent || {} }, this.secondaryContent), h("p", { key: '8e1b759af47d8cf77183f202e38bf9ee4a12207c', class: isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark', style: styles.tertiaryContent || {} }, this.tertiaryContent)), this.buttonText && (h("button", { key: '3cb691cc79e29590d409257f1ad3c9dfae31bdae', onClick: this.handleButtonClick, style: styles.button || {}, type: 'button' }, this.buttonText))));
        return (h("div", { key: 'ef021b6d1dab9b8a35f7ef67158f7564d8edee87', class: this.isInteractive
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', onKeyDown: this.keyDownCallback, onClick: this.handleContainerClick, style: styles.container || {}, tabindex: '0' }, this.placeImageRight ? (h(Fragment, null, contentContainer, imageContainer)) : (h(Fragment, null, imageContainer, contentContainer))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map