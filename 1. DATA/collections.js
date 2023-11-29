// Convert Array to Set
function arrToSet(arr) {
    return new Set(arr);
}

// Convert Array to string
function arrToStr(arr) {
    return arr.toString().replaceAll(",", "");
}

// Convert Set to Array
function setToArr(set) {
    return Array.from(set);
}

// Convert Set to string
function setToStr(set) {
    let res = "";
    set.forEach((value) => {
        res += value;
    });
    return res;
}

// Convert string to Array
function strToArr(str) {
    return str.split("");
}

// Convert string to Set
function strToSet(str) {
    return new Set(str.split(""));
}

// Convert Map to Object
function mapToObj(map) {
    return Object.fromEntries(map);
}

// Convert Object to Array
function objToArr(obj) {
    return Object.values(obj);
}

// Convert Object to Map
function objToMap(obj) {
    return new Map(Object.entries(obj));
}

// Convert Array to Object
function arrToObj(arr) {
    return Object.assign({}, arr);
}

// Convert string to Object
function strToObj(str) {
    return Object.assign({}, str.split(""));
}

// Determine the super type of a value
function superTypeOf(value) {
    if (Array.isArray(value)) {
        return "Array";
    } else if (value instanceof Set) {
        return "Set";
    } else if (value instanceof Map) {
        return "Map";
    } else if (value === null) {
        return "null";
    } else if (typeof value === "object") {
        return "Object";
    } else if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    } else if (typeof value === "boolean") {
        return "Boolean";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "function") {
        return "Function";
    }
}
