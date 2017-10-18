//1. Write a function which takes an array of numbers, and returns the largest number in that array.
// function arraySort(a,b) {
//   return a - b;
// }
 var numArray = [1200, 0, 54, 2135, 3];
 numArray.sort(function(a,b) {return a-b;});
 // console.log(numArray.pop());




// 2. Write a function which, given a year as a number, returns whether that number is a leap year.
//
function leapYear(year) {
  if (year % 4 === 0 && ((year % 100 !== 0) && (year % 400 !== 0))) {
    return true;
  } else {
    return false;
  }
}
// console.log(leapYear(1900));



// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1
//
function arrayIntegerNotThere(arr) {
  for (var i=0; i < arr.length; i++) {
    if (arr[i].valueOf() !== i + 1) {
      return i + 1;
    }
    else if (i + 1 === arr.length ) {
      return i + 2;
    }
  }
}


 // console.log(arrayIntegerNotThere([3,4,5]));

// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
// [1,1,2,3,1,2,3] -> [1,2,3]
// [1,4,4,4,2,2,4,4,4] -> [1,4,2]
//
var arrayDuplicateIntegers = [1,1,2,3,1,2,3];
var integerNoDuplicates = [];

function firstLoop (arr) {
  integerNoDuplicates.push(arrayDuplicateIntegers[0]);
  for (var i=0; i < arrayDuplicateIntegers.length; i++) {
    compareLoop(arrayDuplicateIntegers[i]);
  }
}

function compareLoop(int) {
  for (var i=0; i < integerNoDuplicates.length; i++) {
    if (integerNoDuplicates.indexOf(int) === -1) {
      integerNoDuplicates.push(int);
    }
  }
}

firstLoop(arrayDuplicateIntegers);
console.log(integerNoDuplicates);
// for (var i=0; i < arrayDuplicateIntegers; i++) {
//   if (arrayDuplicateIntegers[i] !== integerNoDuplicates[i]) {
//       integerNoDuplicates.push(arrayDuplicateIntegers[i]);
//     }
//
// }
// console.log(integerNoDuplicates);
// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".
//
// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".
//
// (source: https://adriann.github.io/programming_problems.html)
//
// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false
//
// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
//
// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.
//
// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
//
// 9. Write a function which takes two sorted lists and merges them into a new sorted list.
//
// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
//
// (Source: https://adriann.github.io/programming_problems.html)
//
