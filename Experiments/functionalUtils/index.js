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

console.log(highestUnder([1, 2, 3, 4, 5, 6], 4));

const sig = (() => {
    const s = Symbol('sig')
    const f = () => {
        return function () {
            const paramRegex = /(?=\()(.*)(?=\))\)/g
            const returnRegex = /(return)(.*)/g
            let params = this.toString().match(paramRegex)[0];
            let returns = this.toString().match(returnRegex);
            let formattedReturn = ''
            for (let i = 0; i < returns.length; i++) {
                let ret = returns[i].replace('return', '')
                if (i === returns.length - 1) {
                    formattedReturn += ret
                } else {
                    formattedReturn += `${ret} | `
                }
            }
            delete Function.prototype[s];
            return `${params} ->${formattedReturn}`;
        }
    }

    Object.defineProperty(Function.prototype, s, { configurable: true, get: f });
    return s;
})();


const add = function (x, y) {
    return x + y;
};

console.log(add[sig]());

// function* range(start, end, step) {
//     while (start < end) {
//         yield start;
//         start += step;
//     }
// }

// for (let i of range(0, 10, 2)) {
//     console.log(i);
// }

const fibonacci = function* (numbers) {
    let pre = 0, cur = 1;
    while (numbers-- > 0) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
}

let [n1, n2, n3, ...others] = fibonacci(1000);

javascript: (function () {
    let autoCookieClicker = setInterval(() => {
        try {
            Game.ClickCookie();
        } catch (err) {
            clearInterval();
        }
    }, 10);
    let autoGoldenCookies = setInterval(() => {
        try {
            for (let h in Game.shimmers) {
                if (Game.shimmers[h].type === "golden") {
                    Game.shimmers[h].pop();
                }
            }
        } catch (err) {
            clearInterval();
        }
    }, 1000);
    let autoReindeer = setInterval(() => {
        try {
            for (let h in Game.shimmers) {
                if (Game.shimmers[h].type === "reindeer") {
                    Game.shimmers[h].pop();
                }
            }
        } catch (err) {
            clearInterval();
        }
    }, 1000);
    function getBuildingColorById(id) {
        let productsArray = [...document.querySelector('#products').children];
        productsArray.splice(0, 1);
        return productsArray[id].children[2].children[3].style.color;
    }
    function buyLowestPPBuilding() {
        let green = 'rgb(0, 255, 0)';
        let greenBulkOption = [...document.querySelector('#storeBulk').children].filter(div => div.style.color === green)[0];
        greenBulkOption.click();

        var buildings = [];
        Game.ObjectsById.forEach(function (building) {
            if (building.price < Game.cookies && getBuildingColorById(building.id) === green) {
                buildings.push({ id: building.id, price: building.price });
            }
        });
        if (buildings.length > 0) Game.ObjectsById[buildings.sort((a, b) => { return a.price - b.price })[0].id].buy();
    }

    let autoBuyBU = setInterval(() => {
        try {
            buyLowestPPBuilding();
        } catch (err) {
            clearInterval();
        }
    }, 250);

    function activateGodzamok() {
        let buildingList = [0, 2, 3, 4, 5, 0, 0];
        if (Game.hasGod('ruin')) {
            for (let theBuilding in buildingList) {
                let numCurrentBuilding = Game.ObjectsById[buildingList[theBuilding]].amount;

                if (numCurrentBuilding >= 100) {
                    let numCurrentBuildingsByHundred = parseInt(numCurrentBuilding / 100);
                    if (numCurrentBuildingsByHundred > 6) {
                        numCurrentBuildingsByHundred = 6;
                    }
                    l('storeBulkSell').click();
                    l('storeBulkMax').click();
                    Game.ObjectsById[buildingList[theBuilding]].sell(numCurrentBuilding);

                    l('storeBulkBuy').click();
                    l('storeBulk100').click();
                    for (let i = 0; i < numCurrentBuildingsByHundred; i++) {
                        Game.ObjectsById[buildingList[theBuilding]].buy();
                    }
                }
            }
        }
    }
    function initializeAutoGodzamok() {
        if (Game.hasGod('ruin')) {
            if ((
                Game.hasBuff('Elder frenzy') ||
                Game.hasBuff('Dragon Harvest') ||
                Game.hasBuff('Click frenzy') ||
                Game.hasBuff('Cursed finger') ||
                Game.hasBuff('Dragonflight') ||
                Game.hasBuff('High-five') ||
                Game.hasBuff('Congregation') ||
                Game.hasBuff('Luxuriant harvest') ||
                Game.hasBuff('Ore vein') ||
                Game.hasBuff('Oiled-up') ||
                Game.hasBuff('Juicy profits') ||
                Game.hasBuff('Fervent adoration') ||
                Game.hasBuff('Manabloom') ||
                Game.hasBuff('Delicious lifeforms') ||
                Game.hasBuff('Breakthrough') ||
                Game.hasBuff('Righteous cataclysm') ||
                Game.hasBuff('Golden ages') ||
                Game.hasBuff('Extra cycles') ||
                Game.hasBuff('Solar flare') ||
                Game.hasBuff('Winning streak')
            ) && !Game.hasBuff('Devastation') && Game.hasBuff('Frenzy')) {
                activateGodzamok();
            }
        }
    }
    let autoGodzamok = setInterval(() => {
        try {
            initializeAutoGodzamok();
        } catch (err) {
            console.log(err);
            clearInterval();
        }
    });
    function getFattestWrinklerId() {
        let fattestWrinklerId = undefined;

        for (let i = 0; i < Game.wrinklers.length; i++) {
            let currWrinkler = Game.wrinklers[i];
            let { sucked, type } = currWrinkler;

            if (type || !sucked) {
                continue;
            }
            if (fattestWrinklerId === undefined) {
                fattestWrinklerId = i;
                continue;
            }
            if (sucked > Game.wrinklers[fattestWrinklerId].sucked) {
                fattestWrinklerId = i;
            }
        }
        return fattestWrinklerId;
    }
    function getSuckingWrinklers() {
        let currSuckingWrinklers = 0;
        Game.wrinklers.forEach(wrinkler => {
            if (wrinkler.sucked) {
                currSuckingWrinklers++
            }
        });
        return currSuckingWrinklers;
    }
    let autoWrinklers = setInterval(() => {
        try {
            if (Game.getWrinklerMax() == getSuckingWrinklers()) {
                let fattestWrinklerId = getFattestWrinklerId();
                console.log(fattestWrinklerId);
                if (fattestWrinklerId !== undefined) {
                    Game.wrinklers[fattestWrinklerId].hp = 0;
                }
            }
        } catch (err) {
            clearInterval();
        }
    }, 5000);
})();