var gradeBook = {

  // variables
  _grades: [], // _ in the beginning is a convention
  // that this variable only should be used by the object (gradeBook)
  _gradeLetters: [],


  // Functions
  addGrade: function(newGrade) {
    this._grades.push(newGrade);
  },

  getCountOfGrades: function() {
    return this._grades.length;
  },

  getAverage: function() {
    return this.getSum() / this._grades.length;
  },

  getSum: function() {
    var sum = 0;
    for (var i = 0; i < this._grades.length; i++) {
      sum += this._grades[i];
    }
    return sum;
  },

  reset: function() {
    this._grades = [];
  },

  getGrades: function(){
    return this._grades;
  },
  getGradeLetter: function(){
    var grades = this._grades;
    for (var i = 0; i < grades.length; i++) {
      if(grades[i] >= 90) {
          this._gradeLetters.push('A');
      } else if (grades[i] >= 80) {
          this._gradeLetters.push('B');
      } else if (grades[i] >= 70) {
          this._gradeLetters.push('C');
      } else if (grades[i] >= 60) {
          this._gradeLetters.push('D')
      } else {
          this._gradeLetters.push('F');
      }
    }
    return this._gradeLetters;
  },
  getAverageGradeLetter: function() {
    var average = this.getAverage();
    if(average >= 90) {
        return 'A'
    } else if (average >= 80) {
        return 'B'
    } else if (average >= 70) {
        return 'C'
    } else if (average >= 60) {
        return 'D'
    } else {
        return 'F'
    }
  }
};

exports.book = gradeBook;
