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
var arrayDuplicateIntegers = [1,4,4,4,2,2,4,4,4];
var noDuplicateIntegers = [];

function loopOriginalArray (arr) {
  var noDuplicateIntegers = [];

  noDuplicateIntegers.push(arrayDuplicateIntegers[0]);
  for (var i=0; i < arrayDuplicateIntegers.length; i++) {
    if (noDuplicateIntegers.indexOf(arrayDuplicateIntegers[i]) === -1) {
      noDuplicateIntegers.push(arrayDuplicateIntegers[i]);
    }
  } return noDuplicateIntegers;
}

loopOriginalArray(arrayDuplicateIntegers);
// console.log(noDuplicateIntegers);











// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".
//
// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".
//
var originalEnglishString = "The quick brown fox";
var originalEnglishStringToArray = originalEnglishString.toLowerCase().split(' ');
var newStringToPigLatin = [];
function toPigLatin(arr) {
  for (var i=0; i < originalEnglishStringToArray.length; i++) {
    var pigString = arr[i].substring(1) + arr[i].substring(0,1) + 'ay';
    newStringToPigLatin.push(pigString);
  }
}
toPigLatin(originalEnglishStringToArray);
 // console.log(newStringToPigLatin.join(' '));

var pigLatinToEnglish = 'hetay uickqay rownbay oxfay';
var pigLatinStringToArray = pigLatinToEnglish.toLowerCase().split(' ');
var newStringToEnglish = [];
function toEnglish(arr) {
  for (var i=0; i < pigLatinStringToArray.length; i++) {
    var englishStringFinish = arr[i].substring(arr[i].length -3, arr[i].length -2) + arr[i].substring(0,arr[i].length -3);
    newStringToEnglish.push(englishStringFinish);
  }
}
toEnglish(pigLatinStringToArray);
// console.log(newStringToEnglish.join(' '));



// (source: https://adriann.github.io/programming_problems.html)















//
// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false
//
var array1ToPass = [2, 3, 4];
var array2ToPass = [1, 2, 3, 7];
var check = array1ToPass.map(function(element){
  return array2ToPass.includes(element);
});

// console.log(arr1Loop(array1ToPass, array2ToPass));

var array1ToPass = [];
var array2ToPass = [];
function arrayCompare(arr1, arr2) {
  if (arr1.length === arr2.length) {
    arr1.map(function(element){
      if (arr2.includes(element)) {
      return true;
      } else {
      return false;
  }
});
}
else {
  return false;
}
}
// console.log(arrayCompare(array1ToPass, array2ToPass));

// console.log(arrayCompare(array1ToPass, array2ToPass))






// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
//


function maxCutoff(arr, int) {
  var newArr = [];
  for (var i=0; i < arr.length; i++) {
    if (arr[i] <= int) {
      newArr.push(arr[i]);
    } else {
      arr[i] = int;
      newArr.push(arr[i]);
    }
  } return newArr;
}


// console.log(maxCutoff([1,5,7,3,1,5,7], 3));









// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.
//
// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
//




function tenRandom () {
  var tenArray =[];
  while (tenArray.length < 10) {
    var randomNumber = Math.floor(Math.random()*100);
    if (tenArray.indexOf(randomNumber) === -1 && randomNumber !== 0) {
      tenArray.push(randomNumber);
    }
  } return tenArray;
}

// console.log(tenRandom());











// 9. Write a function which takes two sorted lists and merges them into a new sorted list.
//
function sortLists(arr1, arr2) {
  var combinedArray = arr1.concat(arr2).sort(function(a,b) {return a-b;});
  return combinedArray;
}


// console.log(sortLists([1,2,5,6,9], [3,4,5,10]));



// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
//
// (Source: https://adriann.github.io/programming_problems.html)
//










// 10. Write a function which accepts two arrays as input. The function should remove all the items from the shorter array, and add them to the end of the longer array. If both arrays are the same length, the function should do nothing. This function does not need to return a value.
//
// ```javascript
var numbers = ['four', 'eleven'];
var animals = ['cat', 'bat', 'dolphin'];
// arrayTransfer(numbers, animals)
 // ['cat', 'bat', 'dolphin', 'four', 'eleven']
//

function arrayTransfer (arr1, arr2) {
  var newArray;
  if (arr1.length < arr2.length) {
    newArray = arr1.splice(0);
    loopForTransfer(newArray, arr2);
  }
  else if (arr1.length > arr2.length) {
    newArray = arr2.splice(0);
    loopForTransfer(newArray, arr1);
  } else {
    return;
  }
}
function loopForTransfer(smaller, larger) {
  for (var i=0; i < smaller.length; i++) {
    larger.push(smaller[i]);
  }
}
arrayTransfer(numbers, animals);
// console.log(numbers, animals);













// ```
//
// 11. Write a function that uses `Math.random()` to generate a random number between 0-1. Replace all the 3's with 8's, and replace all the 7's with 1's, then return this number. Note that this function should return a `number`, not a `string`.

// generate random
// convert to array
// loop over contents of array
//   change 3 to 8 and 7 to 1 with .slice()
// .join() to create string, Number() to convert to number
//
function randomNumberConversion() {
  var randomNumber = Math.random().toString().split('');
  for ( var i=0; i < randomNumber; i++ ) {
    if (randomNumber[i] === 3) {
    randomNumber.splice(i,1,'8');
      console.log(splicedNumber);
    }
    else if (randomNumber[i] === 7) {
    randomNumber.splice(i,1,'1');
      console.log(splicedNumber);
    }
  }
  randomNumber.join('');
  console.log(randomNumber)
  return Number(randomNumber);

}

// randomNumberConversion();


// console.log(randomNumberConversion());








//
// 12. Write a function which accepts a sentence as a string, and returns the longest word in that sentence.
//
// 'I ate toast for breakfast' -> 'breakfast'

// string to array
// sort array
// array to string
// return
//

function longestWord(str) {
  return str.split(' ').sort(function(a,b){
    return a.length - b.length;}).pop();
}
// console.log(longestWord('I ate toast for breakfast'));














// 13. Write a function which accepts a sentence as a string. Capitalize the first letter of each word of the string, and return that.
//
// 'I ate toast for breakfast' -> 'I Ate Toast For Breakfast'
// string to array
// loop over array
// slice first letter, get charCode of slice, subtract 32,concat to rest of word

function capitalizeFirst(str) {
  var splitString = str.split(' ');
  var capitalWord = [];
  for (var i=0; i < splitString.length; i++) {
    var firstLetterCode = splitString[i].charCodeAt(0);
    if (firstLetterCode > 90) {
      var capitalLetter = firstLetterCode - 32;
      capitalWord.push(String.fromCharCode(capitalLetter) + splitString[i].substring(1));
    } else {
      capitalWord.push(splitString[i]);
    }
  } return capitalWord.join(' ');
}

// console.log(capitalizeFirst('I ate toast for breakfast'));



//
//
// 14. Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns the number of days between them.
// '1998/01/24', '1999/01/25' -> 366
//
// 15. Write a function called `add` that adds two numbers together, and returns the result. The function must be defined such that it can be called in two different ways to achieve the same result. See the example below:
//
// ```javascript
// var seven = add(5,2) // returns 7
// seven = add(5)(2) // also returns 7
// ```
//
// 16. Write a function which takes one argument, and returns true if that argument is a whole number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, is a decimal number, or is not a number at all, return false.
function wholeNumberCheck(int) {
  if (int >= 0 && int % 1 === 0 && typeof int === 'number') {
  return true;
  } else {
  return false;
  }
}

// console.log(wholeNumberCheck(3));
// console.log(wholeNumberCheck(-3));
// console.log(wholeNumberCheck(3.2));
// console.log(wholeNumberCheck('bob'));


//
// 17. Write a function which returns a random integer from 1 to 10.
function randomInteger() {
  return Math.ceil(Math.random()*10);
}

console.log(randomInteger());
