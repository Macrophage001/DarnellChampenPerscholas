import * as Metho from "metho"

const target = Array.prototype

export const map = Metho.add(
    target,
    function map(fn) {
        let arr = []
        for (let i = 0; i < this.length; i++)
            arr.push(fn(this[i]))
        return arr
    }
)

export const combine = Metho.add(
    target,
    function combine(arr, fn) {
        return this.length > arr.length
            ? this.map((e, i) => fn(e, arr[i]))
            : arr.map((e, i) => fn(this[i], e));
    }
)