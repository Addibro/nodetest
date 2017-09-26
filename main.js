// will point to the export object in dice.js
var dice = require("./dice");
var gradeBook = require('./grader/lib/grades').book;// book is the name of the exports object in gradeBook
// get the die object från exports från "dice"
var die = dice.die; // die is the name of the exports object in die
// die.setDieSize(6);
// console.log(die.roll());


gradeBook.addGrade(100);
gradeBook.addGrade(50);
console.log(gradeBook.getGrades());
console.log('Average of grades: ' + gradeBook.getAverage());
console.log(gradeBook.getGradeLetter());
console.log('Average grade' + gradeBook.getAverageGradeLetter());
