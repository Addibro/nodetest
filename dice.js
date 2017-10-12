// Object
var die = {
  size: 4,
  count: 3,

  roll: function() {
    return Math.ceil(this.size * Math.random());
  },

  setDieSize: function(dieSize) {
    this.size = dieSize;
  }
};

// what I want to make
// avaiable to other programs
exports.dieExport = die; // adding the die object to a property in exports called "dieExport"
exports.name = "My name exports";
