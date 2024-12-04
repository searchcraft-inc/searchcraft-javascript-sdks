/**
 * Utility function to parse custom styles from a string or object.
 * @param styles - Custom styles as a stringified JSON or an object.
 * @returns {Record<string, string>} - Parsed styles as an object.
 */
function parseCustomStyles(styles) {
    if (typeof styles === 'string') {
        try {
            return JSON.parse(styles);
        }
        catch (error) {
            console.error('Invalid customStyles format:', styles);
            return {};
        }
    }
    return styles || {};
}

export { parseCustomStyles as p };

//# sourceMappingURL=utils-f221d91f.js.map