export const tryCatch = (fn, fallback = (err) => console.error(err)) => {
    return (...args) => {
        try {
            return fn(...args)
        } catch (e) {
            return fallback(e)
        }
    }
}

export const generateUUID = (item) => {
    return `${item.toString()}-${Date.now}`
}

(() => {
    Array.remove = function (arr, ...indices) {
        let copyArr = arr.slice();
        for (let i = 0; i < indices.length; i++) {
            copyArr.splice(indices[i], 1);
        }
        return copyArr;
    }
})();