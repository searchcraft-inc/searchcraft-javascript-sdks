import { r as registerInstance, h } from './index-b6929a4b.js';

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
        return (h("div", { key: 'ecc5a25d4d3b62e05d42f598729b1d01814b8fcf', class: this.interactiveResult
                ? isLightTheme
                    ? 'interactiveResultContainerLight'
                    : 'interactiveResultContainerDark'
                : 'resultContainer', id: 'searchcraft-item', onClick: this.handleContainerClick, onKeyDown: this.keyDownCallbackFn, tabindex: '0' }, this.interactiveResult && (h("div", { key: '87e127220351b279af1e37fdf3e88ea6b70f0c97', class: 'interactiveIconLarge' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' })))), h("div", { key: '2d7a7d8595a18e9bd26c27e219755226717b2d08', class: 'imageContainer' }, h("img", { key: '5924784ef50cb9dc7adff77da98a7c1ead352dee', alt: this.imageAltText, class: isLightTheme ? 'imageLight' : 'imageDark', src: this.imageSrc })), h("div", { key: '3d82a9273dea521758d50d14848bba3811903ecc', class: 'contentContainer' }, h("h2", { key: '7cf82eb29751f9429d19e205db3f1994668eabbf', class: isLightTheme ? 'headingLight' : 'headingDark' }, this.resultHeading, this.interactiveResult && (h("div", { key: 'e87e98bf6cec9d0f1454392542b54a4c4bef7a5f', class: 'interactiveIconSmall' }, isLightTheme ? (h("searchcraft-clear-icon-set", { type: 'arrow-light' })) : (h("searchcraft-clear-icon-set", { type: 'arrow-dark' }))))), h("h3", { key: '417f3bdda85bf740e963bcc1d9a02e2f542c7e30', class: isLightTheme ? 'subheadingLight' : 'subheadingDark' }, this.resultSubheading), h("p", { key: '9a6325680395fafb87aa6fd7d45d301f9dbbd947', class: isLightTheme ? 'bodyContentLight' : 'bodyContentDark' }, this.resultBodyContent), h("button", { key: '61aad813df6f8eff8548f960866d8b2357b74d7f', onClick: this.handleButtonClick, type: 'button' }, this.buttonLabel))));
    }
};
SearchcraftBaseSearchResult.style = searchcraftBaseSearchResultModuleCss;

export { SearchcraftBaseSearchResult as searchcraft_base_search_result };

//# sourceMappingURL=searchcraft-base-search-result.entry.js.map