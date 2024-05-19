/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        // Check if array is empty
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        // Check if object is empty
        return Object.keys(obj).length === 0;
    }
    // For any other type (not expected per problem statement), return true
    return true;
};
