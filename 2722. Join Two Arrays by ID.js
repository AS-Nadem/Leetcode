var join = function(arr1, arr2) {
    // Create a map to store the objects by their id
    const map = new Map();
    
    // Function to merge two objects
    function mergeObjects(obj1, obj2) {
        const merged = { ...obj1 };
        for (const key in obj2) {
            merged[key] = obj2[key];
        }
        return merged;
    }
    
    // Add objects from arr1 to the map
    for (const obj of arr1) {
        map.set(obj.id, obj);
    }
    
    // Add/merge objects from arr2 to the map
    for (const obj of arr2) {
        if (map.has(obj.id)) {
            const mergedObject = mergeObjects(map.get(obj.id), obj);
            map.set(obj.id, mergedObject);
        } else {
            map.set(obj.id, obj);
        }
    }
    
    // Convert the map values to an array and sort by id
    const joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);
    
    return joinedArray;
};
