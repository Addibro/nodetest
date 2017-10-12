const book = require('../lib/grades').book;

exports["setUp"] = function(callback) {
  book.reset();
  callback();
};

exports["Can do average grades"] = function(test) {
   book.addGrade(100);
   book.addGrade(50);
   var average = book.getAverage();
   test.equal(average, 75);
   test.done();
};

// [".."] this adds a property to the export object (can have spaces)
exports["Can add new grade"] = function(test) {
  book.addGrade(90); // add a grade
  var count = book.getCountOfGrades(); // get number of grades in book
  test.equal(count, 1); // count should be equal to 1
  test.done(); // say that test is done
};

exports["Can return sum of all grades"] = function(test) {
  book.addGrade(1);
  book.addGrade(1);
  var sum = book.getSum();
  test.equal(sum, 2);
  test.done();
};

exports["Can return grades"] = function(test) {
  book.addGrade(50);
  book.addGrade(23);
  var grades = book.getGrades();
  test.equal(grades, book._grades);
  test.done();
};

exports["Can compute letter grade of each grade"] = function(test) {
  book.addGrade(100);
  book.addGrade(90);
  var result = book.getGradeLetter();
  test.deepEqual(result, ['A', 'A']);
  test.done();
};

exports["Can compute average grade letter"] = function(test) {
  book.addGrade(100);
  book.addGrade(50);
  var result = book.getAverageGradeLetter();
  test.equal(result, 'C');
  test.done();
};

exports["Can return the highest grade"] = function (test) {
    book.addGrade(100);
    book.addGrade(50);
    book.addGrade(110);
    var result = book.getHighestGrade();
    test.equal(result, 110);
    test.done();
};
