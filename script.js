//Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

// const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;
// console.log(isEqualTo100(100, 0));
// console.log(isEqualTo100(50, 50));

//write a JavaScript program to get the extension of a filename.

// Exercise for tomorrow's class:

// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:

// 4: 2
// 9: 3
// 16: 4

// where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

// function calculateSquareRoots(numbers) {
//   // Calculate the square roots of each number in the array
//   const squareRoots = numbers.map(Math.sqrt);

//   // Print each number and its corresponding square root
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(`${numbers[i]}: ${squareRoots[i]}`);
//   }

//   // Return the array of square roots
//   return squareRoots;
// }

// const numbers = [4, 9, 16];
// calculateSquareRoots(numbers);

// Example usage:
// function sqrtReduce(numbers) {
//   return numbers.reduce((acc, num) => {
//     acc.push(Math.sqrt(num));
//     return acc;
//   }, []);
// }

// function printSquareRoots(numbers) {
//   const sqrtNumbers = numbers.map(math.sqrt);
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(`${numbers[i]}: ${sqrtNumbers[i]}`);
//   }
// }

// const numbers = [4, 9, 16];
// printSquareRoots(numbers);

// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of those numbers that are even. So for instance if you have an array [4, 9, 16, 25], the function should return [2, 4].

// function evenSquareRoots(numbers) {
//   return numbers
//     .map((num) => Math.sqrt(num)) // Get the square roots of all numbers
//     .filter((root) => root % 2 === 0); // Filter to keep only even numbers
// }

// const numbers = [4, 9, 16, 25, 36, 49, 56, 81];
// console.log(evenSquareRoots(numbers));

// Create a function that takes an array of numbers and a number x as arguments, and returns an array of the square roots of those numbers that are greater than x. So for instance if you have an array [4, 9, 16, 25, 36], and x is 3, then the function should return [4, 5, 6].

// function filterSquareRoots(numbers, x) {
//   return numbers
//     .map((num) => Math.sqrt(num)) // Compute the square root of each number
//     .filter((sqrt) => sqrt > x); // Filter out square roots that are not greater than x
// }

// const numbers = [4, 9, 16, 25, 36, 49];
// const x = 3;
// console.log(filterSquareRoots(numbers, x));

// Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

// function createNewString(str) {
//   if (str.length < 3) {
//     return str;
//   }

//   const firstThreeChars = str.slice(0, 3);
//   const lastThreeChars = str.slice(-3);

//   return firstThreeChars + lastThreeChars;
// }

// // Test cases
// console.log(createNewString("abcdef")); // Expected output: "abcdef"
// console.log(createNewString("abc")); // Expected output: "abcabc"
// console.log(createNewString("ab")); // Expected output: "ab"
// console.log(createNewString("a")); // Expected output: "a"
// console.log(createNewString("abcdefghi")); // Expected output: "abcghi"

//Write a JavaScript program to extract the first half of a string of even length.
// function getFirstHalf(str) {
//   // Check if the string length is even
//   if (str.length % 2 === 0) {
//     // Return the first half of the string
//     return str.slice(0, str.length / 2);
//   } else {
//     return "The length of the string is not even.";
//   }
// }

// // Example usage
// const inputString = "Judy"; // Example string of even length
// const result = getFirstHalf(inputString);
// console.log(result); // Output: Hello

//Write a JavaScript program to concatenate two strings except their first character.
// function conctString(str1, str2) {
//   // Remove the first character from each string and concatenate the rest
//   const result = str1.slice(1) + str2.slice(1);
//   return result;
// }

// // Example usage
// const string1 = "Hello";
// const string2 = "World";
// const result = conctString(string1, string2);
// console.log(result); // Output: elloorld

//Given two values, write a javascript program to find out which one is nearest to 100

//Given a year, report if it is a leap year in the 20th century

// function printLeapYears() {
//   for (let year = 1900; year <= 1999; year++) {
//     if (year % 4 === 0) {
//       console.log(year);
//     }
//   }
// }
// printLeapYears();

//Given the age of a person (80) who was born on February 29th, find out how many times the person has celebrated their birthday on the date that they were born.

// function countLeapBirthdays(age, birthYear) {
//   let leapYearCount = 0;
//   let currentYear = birthYear + age;
//   for (let year = birthYear; year <= currentYear; year++) {
//     if (year % 4 === 0) {
//       leapYearCount++;
//     }
//   }
//   return leapYearCount;
// }

// let age = 80;
// let birthYear = 1944;
// let leapBirthdays = countLeapBirthdays(age, birthYear);

// console.log(`${leapBirthdays} times.`);

// If a number is autobiographical, then the number's digits describe itself. The first digit is the amount of times the digit 0 appears, the second digit is the amount of times the digit 1 appears, the third digit is the amount of times the digit 2 appears, etc. This repeats for all digits of the number. The number 6210001000 is autobiographical, because it has six 0's, two 1's, one 2, zero 3's, zero 4's, zero 5's, one 6, zero 7's, zero 8's, and zero 9's.

// Create a function that takes an integer n and returns whether or not n is an autobiographical number.

// Examples
// isAutobiographical(6210001000) ➞ true

// isAutobiographical(12345) ➞ false

// isAutobiographical(1210) ➞ true
// // one 0, two 1's, one 2, zero 3's

// isAutobiographical(638) ➞ false

// isAutobiographical(0) ➞ false
// // claims no zeroes, however zero is the first digit
// Notes
// Numbers with more than 10 digits should always return false (9 is the highest digit in base 10, so you can't go higher than 9,999,999,999).
// n is always >= 0 and is always an integer.

function isAutobiographical(n) {
  // Convert the number to a string to easily access each digit
  const str = n.toString();
  const length = str.length;

  // If the number has more than 10 digits, it cannot be autobiographical
  if (length > 10) return false;

  // Create an array to count occurrences of each digit from 0 to 9
  const counts = new Array(10).fill(0);
  // console.log(counts);
  // Count each digit in the string
  for (let char of str) {
    counts[char]++;
  }
  console.log(counts);
}

//   // Check if each digit matches the count of its index
//   for (let i = 0; i < length; i++) {
//     if (counts[i] !== Number(str[i])) {
//       return false; // If any digit does not match, return false
//     }
//   }

//   return true; // If all digits match, return true
// }

console.log(isAutobiographical(1310));
