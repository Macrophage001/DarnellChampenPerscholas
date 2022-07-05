const tryCatch = (fn, fallback = (err) => console.error(err)) => {
    return (...args) => {
        try {
            return fn(...args)
        } catch (e) {
            return fallback(e)
        }
    }
}

Array.prototype.remove = function (index) {
    return [...this.slice(0, this.indexOf(index)), ...this.slice(this.indexOf(index) + 1)];
}

module.exports = { tryCatch };