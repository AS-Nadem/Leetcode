class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * @return {number}
     */
    valueOf() {
        // Return the sum of all elements in the array
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    /**
     * @return {string}
     */
    toString() {
        // Return the array as a string in the specified format
        return `[${this.nums.join(',')}]`;
    }
}
