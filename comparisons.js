// In the exercises below, write your own code where indicated to achieve the desired result.
// One example is already completed. Your task is to complete any remaining prompt.
// Make sure to run the file in your command line using `node <filename>.js`

// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log(
  "Is numberTeachers greater than numberStudents?",
  numberTeachers > numberStudents
);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log(numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log(numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log(numberStudents >= 21);
// this should log: false

console.log("Part 2.");
// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a comment,in English, explaining what that line of code is doing, including what the comparison will evaluate to.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Compares if the variable friends is greater than the variable siblinges - result should be true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Compares if the variable attendees is not equal to the variable meals - result should be true

console.log("Part 3.");

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

console.log("Part 3. practice");
var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay === true && lovesTreats === true);

// YOU DO:
// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay === true || lovesDogPark === true);

// YOU DO:
// Determine if the dog loves to play and is a puppy
// HINT: Use the age variable and assume that a puppy is less than 2 years old
console.log(lovesToPlay === true && age < 2);
