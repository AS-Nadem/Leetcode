/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((result, item) => {
        const key = fn(item);  // Get the key using the provided function
        if (!result[key]) {
            result[key] = [];  // Initialize an array for this key if it doesn't exist
        }
        result[key].push(item);  // Push the current item into the array for this key
        return result;  // Return the accumulator for the next iteration
    }, {});  // Start with an empty object as the accumulator
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
