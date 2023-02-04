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
} /*YOUR CODE HERE*/ (age >= 15 && age < 25) {
  console.log("The ticket price is $10 for people between 15 and 25 years old.");
} /*YOUR CODE HERE*/ (/*YOUR CODE HERE*/) {
  console.log("The ticket price is $20 for people between 25 and 60 years old.");
} /*YOUR CODE HERE*/ {
  console.log("The ticket price is $15 for senior citizens 60 years old and above.");
}