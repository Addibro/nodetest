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
exports.die = die;
exports.name = "My name exports";
