var flat = function(arr, n) {
    // Helper function to flatten the array to the given depth
    function flatten(array, currentDepth) {
        let result = [];
        for (const item of array) {
            if (Array.isArray(item) && currentDepth < n) {
                result.push(...flatten(item, currentDepth + 1));
            } else {
                result.push(item);
            }
        }
        return result;
    }
    
    // Start flattening from depth 0
    return flatten(arr, 0);
};
