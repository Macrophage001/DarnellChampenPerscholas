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

// console.log(highestUnder([1, 2, 3, 4, 5, 6], 4));

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

class ArrayExtension extends Array {
    remove(...indices) {
        const removeArrayElements = (arr) => {
            let copyArr = arr.slice();
            for (let i = 0; i < indices.length; i++) {
                copyArr.splice(indices[i], 1);
            }
            return copyArr;
        }
        return removeArrayElements(this);
    }
    deepCopy() {
        const deepCopyArray = (arr) => {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === 'object') {
                    newArr[i] = deepCopyArray(arr[i]);
                } else {
                    newArr[i] = arr[i];
                }
            }
            return newArr;
        }
        return deepCopyArray(this);
    }
}

// console.log([1, 2, 3, 4, 5, 6].remove(1, 2, 3));

// console.log(add[sig]());

// function* range(start, end, step) {
//     while (start < end) {
//         yield start;
//         start += step;
//     }
// }

// for (let i of range(0, 10, 2)) {
//     console.log(i);
// }

// const fibonacci = function* (numbers) {
//     let pre = 0, cur = 1;
//     while (numbers-- > 0) {
//         [pre, cur] = [cur, pre + cur];
//         yield cur;
//     }
// }

// let [n1, n2, n3, ...others] = fibonacci(1000);

// javascript: (function () {
//     let autoCookieClicker = setInterval(() => {
//         try {
//             Game.ClickCookie();
//         } catch (err) {
//             clearInterval();
//         }
//     }, 10);
//     let autoGoldenCookies = setInterval(() => {
//         try {
//             for (let h in Game.shimmers) {
//                 if (Game.shimmers[h].type === "golden") {
//                     Game.shimmers[h].pop();
//                 }
//             }
//         } catch (err) {
//             clearInterval();
//         }
//     }, 1000);
//     let autoReindeer = setInterval(() => {
//         try {
//             for (let h in Game.shimmers) {
//                 if (Game.shimmers[h].type === "reindeer") {
//                     Game.shimmers[h].pop();
//                 }
//             }
//         } catch (err) {
//             clearInterval();
//         }
//     }, 1000);
//     function getBuildingColorById(id) {
//         let productsArray = [...document.querySelector('#products').children];
//         productsArray.splice(0, 1);
//         return productsArray[id].children[2].children[3].style.color;
//     }
//     function buyLowestPPBuilding() {
//         let green = 'rgb(0, 255, 0)';
//         let greenBulkOption = [...document.querySelector('#storeBulk').children].filter(div => div.style.color === green)[0];
//         greenBulkOption.click();

//         var buildings = [];
//         Game.ObjectsById.forEach(function (building) {
//             if (building.price < Game.cookies && getBuildingColorById(building.id) === green) {
//                 buildings.push({ id: building.id, price: building.price });
//             }
//         });
//         if (buildings.length > 0) Game.ObjectsById[buildings.sort((a, b) => { return a.price - b.price })[0].id].buy();
//     }

//     let autoBuyBU = setInterval(() => {
//         try {
//             buyLowestPPBuilding();
//         } catch (err) {
//             clearInterval();
//         }
//     }, 250);

//     function activateGodzamok() {
//         let buildingList = [0, 2, 3, 4, 5, 0, 0];
//         if (Game.hasGod('ruin')) {
//             for (let theBuilding in buildingList) {
//                 let numCurrentBuilding = Game.ObjectsById[buildingList[theBuilding]].amount;

//                 if (numCurrentBuilding >= 100) {
//                     let numCurrentBuildingsByHundred = parseInt(numCurrentBuilding / 100);
//                     if (numCurrentBuildingsByHundred > 6) {
//                         numCurrentBuildingsByHundred = 6;
//                     }
//                     l('storeBulkSell').click();
//                     l('storeBulkMax').click();
//                     Game.ObjectsById[buildingList[theBuilding]].sell(numCurrentBuilding);

//                     l('storeBulkBuy').click();
//                     l('storeBulk100').click();
//                     for (let i = 0; i < numCurrentBuildingsByHundred; i++) {
//                         Game.ObjectsById[buildingList[theBuilding]].buy();
//                     }
//                 }
//             }
//         }
//     }
//     function initializeAutoGodzamok() {
//         if (Game.hasGod('ruin')) {
//             if ((
//                 Game.hasBuff('Elder frenzy') ||
//                 Game.hasBuff('Dragon Harvest') ||
//                 Game.hasBuff('Click frenzy') ||
//                 Game.hasBuff('Cursed finger') ||
//                 Game.hasBuff('Dragonflight') ||
//                 Game.hasBuff('High-five') ||
//                 Game.hasBuff('Congregation') ||
//                 Game.hasBuff('Luxuriant harvest') ||
//                 Game.hasBuff('Ore vein') ||
//                 Game.hasBuff('Oiled-up') ||
//                 Game.hasBuff('Juicy profits') ||
//                 Game.hasBuff('Fervent adoration') ||
//                 Game.hasBuff('Manabloom') ||
//                 Game.hasBuff('Delicious lifeforms') ||
//                 Game.hasBuff('Breakthrough') ||
//                 Game.hasBuff('Righteous cataclysm') ||
//                 Game.hasBuff('Golden ages') ||
//                 Game.hasBuff('Extra cycles') ||
//                 Game.hasBuff('Solar flare') ||
//                 Game.hasBuff('Winning streak')
//             ) && !Game.hasBuff('Devastation') && Game.hasBuff('Frenzy')) {
//                 activateGodzamok();
//             }
//         }
//     }
//     let autoGodzamok = setInterval(() => {
//         try {
//             initializeAutoGodzamok();
//         } catch (err) {
//             console.log(err);
//             clearInterval();
//         }
//     });
//     function getFattestWrinklerId() {
//         let fattestWrinklerId = undefined;

//         for (let i = 0; i < Game.wrinklers.length; i++) {
//             let currWrinkler = Game.wrinklers[i];
//             let { sucked, type } = currWrinkler;

//             if (type || !sucked) {
//                 continue;
//             }
//             if (fattestWrinklerId === undefined) {
//                 fattestWrinklerId = i;
//                 continue;
//             }
//             if (sucked > Game.wrinklers[fattestWrinklerId].sucked) {
//                 fattestWrinklerId = i;
//             }
//         }
//         return fattestWrinklerId;
//     }
//     function getSuckingWrinklers() {
//         let currSuckingWrinklers = 0;
//         Game.wrinklers.forEach(wrinkler => {
//             if (wrinkler.sucked) {
//                 currSuckingWrinklers++
//             }
//         });
//         return currSuckingWrinklers;
//     }
//     let autoWrinklers = setInterval(() => {
//         try {
//             if (Game.getWrinklerMax() == getSuckingWrinklers()) {
//                 let fattestWrinklerId = getFattestWrinklerId();
//                 console.log(fattestWrinklerId);
//                 if (fattestWrinklerId !== undefined) {
//                     Game.wrinklers[fattestWrinklerId].hp = 0;
//                 }
//             }
//         } catch (err) {
//             clearInterval();
//         }
//     }, 5000);
// })();


const testCase2 = [1, 5, 12, 2, 51, 67, 1215, 2, 1285, 12, 123, 29, 52913, -2313, 1024, -1294, -92356];
// [1, 5, 12], [2, 51, 67]
// [0, 0, 0], [0, 0, 0]

const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }
}

const mergeSortMultipleArrays = (...arrs) => {
    if (arrs.length < 2) {
        return arrs[0];
    } else {
        const mid = Math.floor(arrs.length / 2);
        const left = arrs.slice(0, mid);
        const right = arrs.slice(mid);
        return merge(mergeSortMultipleArrays(...left), mergeSortMultipleArrays(...right));
    }
}

// console.log(mergeSortMultipleArrays([1, 5, 12], [2, 51, 67], [2, 51, 67]));

const countSmaller = (nums) => {
    let counts = [];
    let sortedNums = mergeSort(nums);
    for (let i = 0; i < nums.length; i++) {
        let idx = sortedNums.indexOf(nums[i]);
        counts.push(idx);
        sortedNums.splice(idx, 1);
    }
    return counts;
}

// console.log(countSmaller([5, 2, 6, 1]));

const searchMatrix = (matrix, target) => {
    if (matrix.length === 0) {
        return false;
    }
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--; // Move up.
        } else {
            row++; // Move right.
        }
    }
    return false;
}

const binarySearchMatrix = (matrix, target) => {
    let m = matrix.length;
    let n = matrix[0].length;

    let lo = 0;
    let hi = 0;
    let mid = 0;

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] <= target && matrix[i][n - 1] >= target) {
            lo = 0;
            hi = n - 1;
            if (lo === hi && matrix[i][lo] === target) {
                return true;
            }
            while (lo < hi) {
                mid = Math.floor((lo + hi) / 2);
                if (matrix[i][mid] === target) {
                    return true;
                } else if (matrix[i][mid] < target) {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
        }
    }
    return false;
}

// console.log(binarySearchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20));

const BFS = (grid, start, end) => {
    let queue = [start];
    let visited = new Set();
    while (queue.length) {
        let curr = queue.shift();
        if (curr.equals(end)) {
            return true;
        }
        let neighbors = curr.neighbors(grid);
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return false;
}

const findMedianSortedArrays = (nums1, nums2) => {
    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[mid] + mergedArray[mid - 1]) / 2;
    } else {
        return mergedArray[mid];
    }
}

// console.log(findMedianSortedArrays([1, 3], [2]));

const myAtoi = (s) => {
    let result = 0;
    let sign = 1;
    let i = 0;
    while (s[i] === ' ') {
        i++;
    }
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        sign = -1;
        i++;
    }
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        if (result * sign > 2147483647) {
            return 2147483647;
        } else if (result * sign < -2147483648) {
            return -2147483648;
        }
        i++;
    }
    return result * sign;
}

const lengthOfNumber = (num) => {
    if (num === 0) {
        return 1;
    } else if (num < 0) {
        return lengthOfNumber(-num) + 1;
    } else {
        let result = 0;
        while (num > 0) {
            num = Math.floor(num / 10);
            result++;
        }
        return result;
    }
}

const mergeTwoSortedArrays = (nums1, nums2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }
    return result;
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pull() {
        let result = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.bubbleDown();
        return result;
    }

    peek() {
        return this.heap[0];
    }

    bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            console.log("Parent Index: " + parent);
            if (this.heap[i] > this.heap[parent]) {
                let temp = this.heap[i];
                this.heap[i] = this.heap[parent];
                this.heap[parent] = temp;
                i = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown() {
        let i = 0;
        while (i < this.heap.length) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;
            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if (largest !== i) {
                let temp = this.heap[i];
                this.heap[i] = this.heap[largest];
                this.heap[largest] = temp;
                i = largest;
            } else {
                break;
            }
        }
    }
}

let rangeOfRandomNumbers = (n) => {
    let result = [];
    let queue = new PriorityQueue();
    for (let i = 0; i < n; i++) {
        queue.insert(Math.floor(Math.random() * n));
    }
    console.log("Heap: ", queue.peek());

    for (let i = 0; i < n; i++) {
        result.push(queue.pull());
    }
    return result;
}

const longestValidParentheses = (s) => {
    console.time("longestValidParentheses");
    let maxans = 0;
    let dp = new Array(s.length).fill(0);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            maxans = Math.max(maxans, dp[i]);
        }
    }
    console.timeEnd("longestValidParentheses");
    return maxans;
}

const longestValidParentheses2 = (s) => {
    console.time('longestValidParentheses2');
    let left = 0, right = 0, maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            maxLength = Math.max(maxLength, 2 * right);
        } else if (right > left) {
            left = right = 0;
        }
    }
    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            maxLength = Math.max(maxLength, 2 * left);
        } else if (left > right) {
            left = right = 0;
        }
    }
    console.timeEnd('longestValidParentheses2');
    return maxLength;
}

const generateRangeOfParentheses = (n) => {
    let result = [];
    for (let i = 0; i < n; i++) {
        Math.random() > 0.5 ? result.push('(') : result.push(')');
    }
    return result;
}

const binarySearch = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const findStartingAndEndingIndex = (nums, target) => {
    if (!nums.includes(target)) return [-1, -1];
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (!map[target]) {
                map[target] = [i];
            } else {
                map[target].push(i);
            }
        }
    }
    return [map[target][0], map[target][map[target].length - 1]];
}

const findStartingAndEndingIndex2 = (nums, target) => {
    console.time('findStartingAndEndingIndex2');
    if (!nums.includes(target)) return [-1, -1];
    let first = nums.indexOf(target);
    let last = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === target) {
            last = i;
            break;
        }
    }
    console.timeEnd('findStartingAndEndingIndex2');
    return [first, last];
}

// let nums = [15, 7, 7, 8, 8, 121];
// let target = 8;
// console.log(findStartingAndEndingIndex(nums, target));

const fibGood = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibGood(n - 1, memo) + fibGood(n - 2, memo);
    return memo[n];
}
const fibBad = (n) => {
    if (n <= 2) return 1;
    return fibBad(n - 1) + fibBad(n - 2);
}

// console.log(fibBad(50));

const gridTraveler = (m, n, memo = {}) => {
    const key = `${m},${n}`;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

console.log(gridTraveler(18, 18));