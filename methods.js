function evenSquareRoots(numbers) {
  return numbers
    .foreach((num) => Math.sqrt(num)) // Get the square roots of all numbers
    .filter((root) => root % 2 === 0); // Filter to keep only even numbers
}

const numbers = [4, 9, 16, 25, 36, 49, 56, 81];
console.log(evenSquareRoots(numbers));
