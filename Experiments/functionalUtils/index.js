const express = require("express");

/**
 * Composes a series of functions and returns a function which returns the final result.
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

/**
 * Church Encodings: https://en.wikipedia.org/wiki/Church_encoding
 */

const I = a => a // Identity
const B = f => g => f(g()) // B-Combinator: Composes two functions
// const BB = f => g => a => b => f(b(g(a)))
const BB = B(B(B))
const Y   = f => (g = h => x => f(h(h))(x))(g) // Y-Combinator: Recursion
const C   = f => a => b => f(b)(a) // Cardinal - Flips parameters
const M   = f => f(f) // Mockingbird: Self-applicator
const V   = a => b => f => f(a)(b) // Vireo: Data Structure Pair
const Is0 = n => n(K(F))(T)

const K  = a => b => a
const KI = a => b => C(K)(a)(b)

const T = K
const F = KI

const n0    = f => a => a
const n1    = f => a => f(a)
const succ  = n => f => a => f(n(f)(a))
const vireo = a => b => f => f(a)(b)
const fst   = p => p(K)
const snd   = p => p(KI)
const add   = n => k => n(succ)(k)
const mult  = B
const pow   = n => k => k(n)
const phi   = p => p(snd(p))(succ(snd(p)))
const pred  = n => fst(n(phi)(V(n0)(n0)))
const sub   = n => k => k(pred)(n)

const NOT = p => p(F)(T)
const AND = p => q => p(q)(p)
const OR  = p => q => p(p)(q)
const LEQ = n => k => Is0(sub(n)(k))
const BEQ = p => q => p(q)(NOT(q))
const EQ  = n => k => AND(LEQ(n)(k))(LEQ(n)(k))
const GT  = n => k => BB(NOT)(LEQ)

const factorial = Y(fn => x => x == 0 ? 1 : x * fn(x - 1))

const reduce = function (obj, fn, initial) {
    let accumulator = initial
    for (let i = 0; i < obj.length; i++) 
        accumulator = fn(accumulator, obj[i])
    return accumulator
}

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