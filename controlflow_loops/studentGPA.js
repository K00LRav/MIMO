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
    /*YOUR CODE HERE*/
  };
  
  // Define the fourth student object
  /*YOUR CODE HERE*/
  
  // Define the fifth student object
  /*YOUR CODE HERE*/
  
  // Add all student objects to an array
  let students = [student1, student2, student3, student4, student5];
  
  // Loop through the array of student objects
  for (let i = 0; i < students.length; i++) {
    // Determine and output each student's GPA status
    if (students[i].gpa < 2.8) {
      console.log(/*YOUR CODE HERE*/, "needs to see a tutor.");
    } /*YOUR CODE HERE*/ (/*YOUR CODE HERE*/ >= 2.8 && students[i].gpa < 3.3) {
      console.log(s/*YOUR CODE HERE*/, "is making progress, keep studying.");
    } /*YOUR CODE HERE*/ (students[i].gpa >= 3.3 && /*YOUR CODE HERE*/) {
      console.log(students[i].name, "has a solid GPA.");
    } else {
      console.log(students[i].name, "is a scholar.");
    }
  }