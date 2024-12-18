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
function parseSearchKeys(documentAttributesForDisplay) {
    try {
        const parsedKeys = JSON.parse(documentAttributesForDisplay);
        if (Array.isArray(parsedKeys) &&
            parsedKeys.every((key) => typeof key === 'string')) {
            return parsedKeys;
        }
        console.warn('searchKeys must be a JSON array of strings. Defaulting to an empty array.');
        return [];
    }
    catch (error) {
        console.error('Failed to parse searchKeys:', error);
        return [];
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
function getFormattedTimeFromNow(timestamp) {
    const now = new Date();
    const inputTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - inputTime.getTime()) / 1000);
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);
    if (minutes < 60) {
        return `${minutes}m ago`;
    }
    if (hours < 24) {
        return `${hours}h ago`;
    }
    if (days < 365) {
        return `${days}d ago`;
    }
    return `${years}y ago`;
}
function flattenFacets(sections) {
    return sections.flatMap((section) => {
        const fullPath = section.path;
        const filter = {
            label: `${fullPath.replace(/^\//, '')} (${section.count})`,
            value: fullPath,
        };
        const children = section.children ? flattenFacets(section.children) : [];
        return [filter, ...children];
    });
}

export { parseSearchKeys as a, extractDynamicProperties as e, flattenFacets as f, getFormattedTimeFromNow as g, parseCustomStyles as p, serializeStyles as s };

//# sourceMappingURL=utils-a3373179.js.map