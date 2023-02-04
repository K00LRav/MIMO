
//Minimum Value: Solution
//Prompt: Print the smallest number in the array

// Define an array of numbers
let numbers = [4, 2, 9, 6, 23, 10, 98, 34, 67, 1];

// Set the initial smallest value to the first number in the array
let smallest = numbers[0];

// Loop through the array starting from the second number
for (let i = 1; i < numbers.length; i++) {
  // If the current number is smaller than the current smallest value, update smallest
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

// Output the smallest value
console.log("The smallest value is:", smallest);


//Movie Ticket Prices: Solution
/* Prompt: Using if-else statements print the ticket prices based on age. Younger than 15 output '$5 children's ticket',
15-25: $10 ticket
25-60 : $20 ticket
60 and above: $15 senior ticket */

// Define the age of the ticket holder
let age = 25;

// Use an if-else statement with multiple branches to determine the price of the ticket
if (age < 15) {
  console.log("The ticket price is $5 for children under 15 years old.");
} else if (age >= 15 && age < 25) {
  console.log("The ticket price is $10 for people between 15 and 25 years old.");
} else if (age >= 25 && age < 60) {
  console.log("The ticket price is $20 for people between 25 and 60 years old.");
} else {
  console.log("The ticket price is $15 for senior citizens 60 years old and above.");
}


//Student GPA: Solution
/*Prompt: Create an array of student objects with name and GPA attributes. 
Using loops and if-else: if student has GPA BELOW 2.8 print 'needs a tutor', 
2.8 to 3.3 'is making progress, keep studying', 3.3 - 3.5 'solid GPA', 
3.5 and above 'is a scholar' */

// Define the first student object
let student1 = {
    name: "Jane",
    gpa: 3.8
  };
  
  // Define the second student object
  let student2 = {
    name: "Ashley",
    gpa: 3.6
  };
  
  // Define the third student object
  let student3 = {
    name: "Eric",
    gpa: 2.5
  };
  
  // Define the fourth student object
  let student4 = {
    name: "Davey",
    gpa: 3.4
  };
  
  // Define the fifth student object
  let student5 = {
    name: "Larry",
    gpa: 2.7
  };
  
  // Add all student objects to an array
  let students = [student1, student2, student3, student4, student5];
  
  // Loop through the array of student objects
  for (let i = 0; i < students.length; i++) {
    // Determine and output each student's GPA status
    if (students[i].gpa < 2.8) {
      console.log(students[i].name, "needs to see a tutor.");
    } else if (students[i].gpa >= 2.8 && students[i].gpa < 3.3) {
      console.log(students[i].name, "is making progress, keep studying.");
    } else if (students[i].gpa >= 3.3 && students[i].gpa < 3.5) {
      console.log(students[i].name, "has a solid GPA.");
    } else {
      console.log(students[i].name, "is a scholar.");
    }
  }