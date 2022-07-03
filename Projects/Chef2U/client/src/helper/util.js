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