import { r as registerInstance, a as createEvent, h, F as Fragment } from './index-8211f330.js';

const searchcraftBaseSearchResultModuleCss = "@charset \"UTF-8\";:root{--font-stack:Helvetica, Arial, sans-serif}.interactiveResultContainerLight{align-items:flex-start;border-radius:16px;display:flex;flex-direction:column;gap:16px;padding:8px;position:relative;background-color:#FAFAFA}@media (min-width: 600px){.interactiveResultContainerLight{flex-direction:row}}.interactiveResultContainerDark{align-items:flex-start;border-radius:16px;display:flex;flex-direction:column;gap:16px;padding:8px;position:relative;background-color:#2E2E2E}@media (min-width: 600px){.interactiveResultContainerDark{flex-direction:row}}.resultContainer{align-items:flex-start;display:flex;flex-direction:column;gap:16px}@media (min-width: 600px){.resultContainer{flex-direction:row}}.interactiveIconLarge{display:inline-block;position:absolute;right:5px;top:8px}@media (max-width: 600px){.interactiveIconLarge{display:none}}.interactiveIconSmall{display:inline-block;position:absolute;right:5px;top:-2px}@media (min-width: 600px){.interactiveIconSmall{display:none}}.imageContainer{max-width:100%}.contentContainer{max-height:100%;max-width:100%}@media (min-width: 600px){.contentContainer{max-width:50%}}.secondaryContentContainer{display:flex}.imageLight{border-radius:8px;max-height:100%;max-width:100%;border:1px solid #D9D9D9}.imageDark{border-radius:8px;max-height:100%;max-width:100%;border:1px solid #333}.headingLight{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0;position:relative;-webkit-font-smoothing:antialiased;color:#292929}.headingDark{font-family:var(--font-stack);font-size:16px;font-weight:700;line-height:20px;margin-bottom:4px;margin-top:0;position:relative;-webkit-font-smoothing:antialiased;color:#FFF}.subheadingLight{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;-webkit-font-smoothing:antialiased;color:#737373}.subheadingDark{font-family:var(--font-stack);font-size:12px;font-weight:400;line-height:16px;margin-bottom:4px;margin-top:0px;-webkit-font-smoothing:antialiased;color:#BFBFBF}.primaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;-webkit-font-smoothing:antialiased;color:#404040}.primaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;-webkit-font-smoothing:antialiased;color:#E6E6E6}.secondaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;-webkit-font-smoothing:antialiased;color:#404040}.secondaryContentLight::after{content:\"•\";color:#404040;font-size:1em;margin-left:5px;margin-right:5px}.secondaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;-webkit-font-smoothing:antialiased;color:#E6E6E6}.tertiaryContentLight{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;-webkit-font-smoothing:antialiased;color:#404040}.tertiaryContentDark{font-family:var(--font-stack);font-size:16px;font-weight:400;line-height:20px;margin-bottom:4px;margin-top:0px;-webkit-font-smoothing:antialiased;color:#E6E6E6}";

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
        const imageContainer = this.imageSource && (h("div", { key: 'bc2c9e7e6fdfdd7a159adeaae93ee295f3871bb1', class: 'imageContainer' }, h("img", { key: '403cf6f083a0fab8c0d84f858e6f799bb5e39856', alt: this.imageDescription, class: isLightTheme ? 'imageLight' : 'imageDark', src: this.imageSource, style: styles.image || {} })));
        const contentContainer = (h("div", { key: 'ec56243d676a5dfbdc7d9dc5be9f2e078ab3e599', class: 'contentContainer' }, h("h2", { key: 'e2d73b3c6c18753fee3e3a2a8526a68c62a0a2f5', class: isLightTheme ? 'headingLight' : 'headingDark', style: styles.heading || {} }, this.headingText), h("h3", { key: 'fccf35b5a06c09c96150568d4cd71bacea1fe15d', class: isLightTheme ? 'subheadingLight' : 'subheadingDark', style: styles.subheading || {} }, this.subheadingText), h("p", { key: '95b64831fd0248f69773cafa6357133f9758748c', class: isLightTheme ? 'primaryContentLight' : 'primaryContentDark', style: styles.primaryContent || {} }, this.primaryContent), h("div", { key: 'f1e597968aab316067762bca3e39bccb50f3b34a', class: 'secondaryContentContainer' }, h("p", { key: '05ccdbb2854cd538fa2fd9e3a6efe8fa8ea46003', class: isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark', style: styles.secondaryContent || {} }, this.secondaryContent), h("p", { key: 'ca2b96c02c9d8b073b0e0cff3e288d9eba7e3cd1', class: isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark', style: styles.tertiaryContent || {} }, this.tertiaryContent)), this.buttonText && (h("button", { key: '9d728eb6dcc2cdc2d0b438e79286795835dbf9e6', onClick: this.handleButtonClick, style: styles.button || {}, type: 'button' }, this.buttonText))));
        return (h("div", { key: '44c9677d5c3c75439b9d73d8e60e5744d2ee9be0', class: this.isInteractive
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', onKeyDown: this.keyDownCallback, onClick: this.handleContainerClick, style: styles.container || {}, tabindex: '0' }, this.placeImageRight ? (h(Fragment, null, contentContainer, imageContainer)) : (h(Fragment, null, imageContainer, contentContainer))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map