const express = require("express");

/**
 * Composes a series of functions and returns a function which yields the final result.
 */
const compose = (...fns) => x => fns.reduceRight((previousFn, currentFn) => currentFn(previousFn), x);

/**
 * Composes a series of functions and returns a function which yields the final result.
 * Top-Bottom Order.
 */
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

/**
 * Combines the given array with the input array using the input fn
 * @param {*} rightArr 
 * @param {*} fn 
 * @returns a new zipped array with length equal to smallest array.
 */
Array.prototype.zipMin = function (rightArr, fn) {
    return this.length < rightArr.length
        ? this.map((e, i) => fn(e, rightArr[i]))
        : rightArr.map((e, i) => fn(this[i], e));
}

/**
 * Combines the given array with the input array using the input fn
 * @param {*} rightArr 
 * @param {*} fn 
 * @returns a new zipped array with length equal to largest array.
 */
Array.prototype.zipMax = function (rightArr, fn) {
    return this.length > rightArr.length
        ? this.map((e, i) => fn(e, rightArr[i]))
        : rightArr.map((e, i) => fn(this[i], e));
}

;(() => {
    Function.prototype.signature = function () {
        let fn = this
        return function () {
            let result = fn.apply(this, arguments)
            return {
                params: arguments,
                ret: result,
                retType: typeof result,
                toString: () => fn.toString()
            }
        }
    }
})();

const Y = f => (g = h => x => f(h(h))(x))(g)
const factorial = Y(fn => x => x == 0 ? 1 : x * fn(x - 1))

const highestUnder = (arr, limit) => {
    let highest = -Infinity
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val > highest && val <= limit) {
            highest = val
            index = i
        }
    }
    return { highest, index }
}

let keys = [5000, 1000, 500, 100, 50, 10, 5, 1]
let symbols = ['V', 'M', 'D', 'C', 'L', 'X', 'V', 'I']

const toRoman = (num) => {
    let romanNumber = []
    while (num > 0) {
        let { highest, index } = highestUnder(keys, num)
        num -= highest
        romanNumber.push(symbols[index])
    }
    return romanNumber.reverse().reduce((previous, current) => previous + current, '')
}

const reduce = function (obj, fn, initial) {
    let accumulator = initial
    for (let i = 0; i < obj.length; i++) accumulator = fn(accumulator, obj[i])
    return accumulator
}

const romanMap = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
}

const result = reduce('IIIIVMMM', (prev, current) => prev += romanMap[current], 0)

console.log(result)