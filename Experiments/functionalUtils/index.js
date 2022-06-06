import * as Metho from 'metho'
import { map } from '../metho-array/metho-array.js';

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

// /**
//  * Returns an object containing result of function call,
//  * as well as the signature for the function.
//  */
// const sig = Metho.add(Function.prototype, function () {
//     let fn = this
//     return function (...args) {
//         let result = fn.apply(this, args)
//         return {
//             params: args.map(arg => typeof arg),
//             ret: result,
//             signature: `${args.map(arg => typeof arg)} -> ${typeof result}`
//         }
//     }
// })

/**
 * Combinators
 */

// const I = a => a // Identity
// const A = f => a => f(a) // Apply
// const B = f => g => f(g()) // B-Combinator: Composes two functions
// const BB = f => g => a => b => f(b(g(a)))
// const Y = f => (g = h => x => f(h(h))(x))(g) // Y-Combinator: Recursion
// const C = f => a => b => f(b)(a) // Cardinal - Flips parameters
// const M = f => f(f) // Mockingbird: Self-applicator
// const V = a => b => c => c(a)(b) // Vireo: Data Structure Pair
// const S = a => b => c => a(c)(b(c)) // Starling - Passes the result of b(c) as a parameter to the result of a(c)

// const K = a => b => a
// const KI = K(I)
// const Is0 = n => n(K(F))(T)

// const T = K
// const F = KI

// const nil = () => { }
// const fst = p => p(K)
// const succ = n => f => a => f(n(f)(a))
// const snd = p => p(KI)
// const add = n => k => n(succ)(k)
// const mult = B
// const pow = n => k => k(n)
// const phi = p => p(snd(p))(succ(snd(p)))
// const pred = n => fst(n(phi)(V(n0)(n0)))
// const sub = n => k => k(pred)(n)

// const NOT = p => p(F)(T)
// const AND = p => q => p(q)(p)
// const OR = p => q => p(p)(q)
// const LEQ = n => k => Is0(sub(n)(k))
// const BEQ = p => q => p(q)(NOT(q))
// const EQ = n => k => AND(LEQ(n)(k))(LEQ(n)(k))
// const GT = n => k => BB(NOT)(LEQ)

// const factorial = Y(fn => x => x == 0 ? 1 : x * fn(x - 1))
// const fibY = Y(fn => n => memo => n in memo ? memo[n] : n <= 2 ? 1 : (memo[n] = fn(n - 1)(memo) + fn(n - 2)(memo), memo[n]))

// console.log(fibY(6)({}))
// console.log(fibY(7)({}))
// console.log(fibY(8)({}))
// console.log(fibY(50)({}))

// const reduce = function (obj, fn, initial) {
//     let accumulator = initial
//     for (let i = 0; i < obj.length; i++)
//         accumulator = fn(accumulator, obj[i])
//     return accumulator
// }

const highestUnder = (arr, limit) => {
    let highest = -Infinity
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val > highest && val < limit) {
            highest = val
            index = i
        }
    }
    return { highest, index }
}

const sig = (() => {
    const s = Symbol('sig')
    const f = function () {
        const paramRegex = /(?=\()(.*)(?=\))\)/g
        const returnRegex = /(return)(.*)/g
        let params = this.toString().match(paramRegex)[0]
        let returns = this.toString().match(returnRegex)
        let formattedReturn = ''
        for (let i = 0; i < returns.length; i++) {
            let ret = returns[i].replace('return', '')
            if (i === returns.length - 1) {
                formattedReturn += ret
            } else {
                formattedReturn += `${ret} | `
            }
        }
        delete Function.prototype[s]
        return `${params} ->${formattedReturn}`
    }

    Object.defineProperty(Function.prototype, s, { configurable: true, get: f }) // functionName[sig] = safer(?)
    // Object.defineProperty(Function.prototype, 'sig', { configurable: true, get: f }) // functionName.sig = may already have a property called sig = riskier
    return s
})()

const add = (x, y) => {
    return x + y;
}

console.log(add[sig])

// const solution = (arr, s) => {
//     let wordsMap = []
//     for (let i = 0; i < arr.length; i++) {
//         let wordMap = [];
//         let word = arr[i];
//         let lowestCount = Infinity
//         for (let j = 0; j < word.length; j++) {
//             let letter = word[j]
//             let letterCount = 0;
//             if (s.includes(letter)) {
//                 for (let k = 0; k < s.length; k++) {
//                     if (s[k] === letter) letterCount += 1
//                 }
//                 if (letterCount < lowestCount) {
//                     lowestCount = letterCount
//                 }
//                 s = s.replace(letter, '')
//             } else {
//                 break;
//             }
//             wordMap.push(lowestCount)
//         }
//         if (Object.keys(wordMap).length === word.length) {
//             wordsMap.push(wordMap[wordMap.length - 1])
//         }
//     }
//     return wordsMap;
// }
// console.log(solution(["BILL", "BOB"], "BILLOBILLOLLOBBI"))


let food = [
    'chicken', 'rice', 'vegetables'
]

food.map((foodItem, i) => {
    console.log(foodItem)
})

// Chicken, rice, vegetables

function myMap(arr, fn) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(fn(arr[i], i));
    }
    return arr2;
}