// will point to the export object in dice.js, to lookup what is exported from dice.js
var dice = require("./dice"); // this is an export object, not the die object itself

// get the die object from exports from "dice"
var die = dice.dieExport; // die is the name of the exports object in die
var dieName = dice.name;  // another export property form dice

// exports = {
//   dieExport: {...},
//   name: "My name exports"
// };


// die.setDieSize(6);
// console.log(die.roll());
var gradeBook = require('./Grader/lib/grades').book;// book is the name of the exports object in gradeBook

console.log(dice);
gradeBook.addGrade(100);
gradeBook.addGrade(50);
console.log(gradeBook.getGrades());
console.log('Average of grades: ' + gradeBook.getAverage());
console.log(gradeBook.getGradeLetter());
console.log('Average grade' + gradeBook.getAverageGradeLetter());
