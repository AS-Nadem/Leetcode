/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        // Handle the case when obj is an array
        return obj.reduce((acc, item) => {
            // Recursively compact item
            const compactedItem = compactObject(item);
            // Only add non-falsy items to the result array
            if (Boolean(compactedItem)) {
                acc.push(compactedItem);
            }
            return acc;
        }, []);
    } else if (obj !== null && typeof obj === 'object') {
        // Handle the case when obj is an object
        return Object.keys(obj).reduce((acc, key) => {
            // Recursively compact the value
            const compactedValue = compactObject(obj[key]);
            // Only add non-falsy values to the result object
            if (Boolean(compactedValue)) {
                acc[key] = compactedValue;
            }
            return acc;
        }, {});
    } else {
        // For other types (primitive values), return the value as is
        return obj;
    }
};
