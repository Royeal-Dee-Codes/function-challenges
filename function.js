// 1: Write a program that takes an array of words and returns the longest word.

function findLongestWord(words) {
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const wordsArray = ["long", "longer", "longest"];
const longestWord = findLongestWord(wordsArray);
console.log("Answer 1");
console.log("The longest word is:", longestWord);

// 2: Write a program that swaps the first and last characters of a string.

function swapFirstAndLast(str) {
  if (str.length <= 1) {
    return str;
  } else {
    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    const swappedStr = lastChar + str.slice(1, -1) + firstChar;

    return swappedStr;
  }
}

const inputString = "Ryan";
const swappedString = swapFirstAndLast(inputString);
console.log("Answer 2");
console.log("Original string: ", inputString);
console.log("String with first and last characters swapped: ", swappedString);

// 3: Write a program that finds the sum of a list of numbers.

function sumOfNumbers(numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumOfNumbers(numbers);
console.log("Answer 3");
console.log("The sum of the numbers is:", totalSum);

// 4: Combine two arrays by alternatingly taking elements from each at every iteration.
function combineArrays(array1, array2) {
  const combinedArray = [];

  const maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) {
      combinedArray.push(array1[i]);
    }
    if (i < array2.length) {
      combinedArray.push(array2[i]);
    }
  }

  return combinedArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8, 10];
const combined = combineArrays(array1, array2);
console.log("Answer 4");
console.log("Combined array:", combined);

// 5: Create a title case program
function titleCase(str) {
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
}

const sentence = "I am a sentence";
const titleCasedSentence = titleCase(sentence);
console.log("Answer 5");
console.log("Title cased sentence:", titleCasedSentence);

// 6: Return longest word in a string
function longestWord2(str) {
  const words = str.split(" ");

  let longest = "";
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      longest = word;
      maxLength = word.length;
    }
  }

  return longest;
}

const inputString2 = "This string has several different values";
const longest = longestWord2(inputString2);
console.log("Answer 6");
console.log("The longest word is:", longest);

// 7: Write a program that takes a string and returns the letters in alphabetical order
function sortStringAlphabetically(str) {
  const chars = str.split("");

  const sortedChars = chars.sort();

  const sortedString = sortedChars.join("");

  return sortedString;
}

const inputString3 = "hi there";
const sortedString = sortStringAlphabetically(inputString3);
console.log("Answer 7");
console.log("String sorted alphabetically:", sortedString);

// 8: Write a program that returns extracted values from an array using specified indices and puts them into a new array.
function extractValuesFromArray(array, indices) {
  const extractedValues = [];

  for (let i = 0; i < indices.length; i++) {
    const index = indices[i];
    if (index >= 0 && index < array.length) {
      extractedValues.push(array[index]);
    }
  }

  return extractedValues;
}

const originalArray = ["a", "b", "c", "d"];
const specifiedIndices = [1, 3];
const extractedValues = extractValuesFromArray(originalArray, specifiedIndices);
console.log("Answer 8");
console.log("Extracted values:", extractedValues);

// 9: Complete the following steps:
// a. Create an object name 'user'. Give the object 2 (two) properties named userName and activeStatus
//the userName property should take any string value.
//the starter (or default) for the activeStatus property should be set to 'away'.
// b.Write an arrow function
//that changes the activeStatus to 'active'
//returns an interpolated string that contains the userName and activeStatus values.
//login(user) => 'ryan is active'
//Note: Use string interpolation. Avoid hardcoding this.
const user = {
  userName: "ryan",
  activeStatus: "away",
};

const login = (user) => {
  user.activeStatus = "active";
  return `${user.userName} is ${user.activeStatus}`;
};

console.log("Answer 9");
console.log(login(user));

// 10: Write a function that takes a base value and an exponent and will return the product (power).
function calculatePower(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

const base = 4;
const exponent = 2;
const result = calculatePower(base, exponent);
console.log("Answer 10");
console.log(`${base} raised to the power of ${exponent} is:`, result);
