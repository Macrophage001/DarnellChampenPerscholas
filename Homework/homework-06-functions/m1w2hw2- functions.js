/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/


maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1
  }
  return num2;
};


maxOfThree();


/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1, num2, num3) => {
  let result = num1;
  if (num2 > result) {
    result = num2;
  }
  if (num3 > result) {
    result = num3;
  }
  return result;
};


/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (char) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowel[i]) return true;
  }
  return false;
};


/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/


sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

multiplyArray = (arr) => {
  let sum = 0;
  let product = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
  return [sum, product];
};


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

numOfArguments = (arg1, arg2, arg3) => {
  return arguments.length;
}


/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/


reverseString = (str) => {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

// BONUS QUESTION PART 1:
String.prototype.reverseString = function () {
  let reverse = '';
  for (let i = this.length - 1; i >= 0; i--) {
    reverse += this[i];
  }
  return reverse;
}
console.log('Hello'.reverseString());

// BONUS QUESTION PART 2:

// Just a helper function if that's ok.
String.prototype.count = function (char) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === char) {
      count++;
    }
  }
  return count;
}

const getLetterCounts = (word) => {
  let dict = {};
  let countedLetters = [];
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (countedLetters.includes(letter)) {
      continue;
    }

    dict[letter] = word.count(letter);
    countedLetters.push(letter);
  }
  return dict;
}

console.log(getLetterCounts("Perscholas"));



/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (wordArr) => {
  let largestCount = 0;
  for (let i = 0; i < wordArr.length; i++) {
    let letterCount = wordArr[i].length;
    if (largestCount < letterCount) {
      largestCount = letterCount;
    }
  }
  return largestCount;
};


/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (wordArr, count) => {
  let filteredArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    let letterCount = wordArr[i].length;
    if (letterCount > count) {
      filteredArr.push(wordArr[i]);
    }
  }
  return filteredArr;
};