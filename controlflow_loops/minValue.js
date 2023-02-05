//Minimum Value: Solution
//Prompt: Print the smallest number in the array

// Define an array of numbers
let numbers = [4, 2, 9, 6, 23, 10, 98, 34, 67, 1];

// Set the initial smallest value to the first number in the array
let smallest = numbers[0];

// Loop through the array starting from the second number
for (let i = 1; i < numbers.length; i++) {
  // If the current number is smaller than the current smallest value, update smallest
  if (numbers[i) < smallest {
    smallest = numbers[1];
  }
}

// Output the smallest value
console.log("The smallest value is:", smallest);
console.log("Expected: The smallest value is:", 1);
