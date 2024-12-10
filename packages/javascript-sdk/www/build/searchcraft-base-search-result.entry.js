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
        return (h("div", { key: 'e16bae2d337d064e057645cfb0ebf52346229b83', class: this.isInteractive
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', style: styles.container || {}, tabindex: '0', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallback }, h("div", { key: 'f2154ce85febbe54956a7f28292b13113e3048dd', class: 'imageContainer' }, h("img", { key: '8063fa3b88ba56b9cba63ded99967c8097b8b185', alt: this.imageDescription, src: this.imageSource, style: styles.image || {}, class: isLightTheme ? 'imageLight' : 'imageDark' })), h("div", { key: 'e04a38165dc98b0d72f215e4252f7065db3664d6', class: 'contentContainer' }, h("h2", { key: '33d2d3483d7c0f4e1ae7e15ba5895a8b15b45a34', style: styles.heading || {}, class: isLightTheme ? 'headingLight' : 'headingDark' }, this.headingText), h("h3", { key: '9587d0acea25ede251eba3e79dba932a5565f51a', style: styles.subheading || {}, class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.subheadingText), h("p", { key: '74f55a23963d5ddc8753d68b164587865da2dd13', style: styles.primaryContent || {}, class: isLightTheme ? 'primaryContentLight' : 'primaryContentDark' }, this.primaryContent), h("div", { key: 'db4e498b08c7075b276e90d8ed233dd48992ecdd' }, h("p", { key: 'c09d3164a15452c5fbfa23a54028f2080dd56550', style: styles.secondaryContent || {}, class: isLightTheme ? 'secondaryContentLight' : 'secondaryContentDark' }, this.secondaryContent), h("p", { key: 'ae78c4f53d9b12d62cad6b408aad5caf103303db', style: styles.tertiaryContent || {}, class: isLightTheme ? 'tertiaryContentLight' : 'tertiaryContentDark' }, this.tertiaryContent)), this.buttonText && (h("button", { key: '3ea036c680f3970e9d6f1b00b3505f11e338922c', onClick: this.handleButtonClick, style: styles.button || {}, type: 'button' }, this.buttonText)))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map