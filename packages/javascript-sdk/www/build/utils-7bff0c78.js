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
function parseSearchKeys(searchKeys) {
    try {
        // Attempt to parse the string as JSON
        const parsedKeys = JSON.parse(searchKeys);
        if (Array.isArray(parsedKeys) &&
            parsedKeys.every((key) => typeof key === 'string')) {
            return parsedKeys; // Return the array if it's valid
        }
        console.warn('searchKeys must be a JSON array of strings. Defaulting to an empty array.');
        return [];
    }
    catch (error) {
        console.error('Failed to parse searchKeys:', error);
        return []; // Return an empty array in case of a parsing error
    }
}
function extractDynamicProperties(document, keys) {
    const extractedProperties = {};
    keys.forEach((key) => {
        extractedProperties[key] = document[key] || '';
    });
    return extractedProperties;
}
function serializeStyles(styles) {
    try {
        return JSON.stringify(styles);
    }
    catch (error) {
        console.error('Error serializing styles:', error);
        return '{}';
    }
}

export { parseSearchKeys as a, extractDynamicProperties as e, parseCustomStyles as p, serializeStyles as s };

//# sourceMappingURL=utils-7bff0c78.js.map