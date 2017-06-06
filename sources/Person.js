
var Person = function(first, last, middle) {
  this.first = first;
  this.middle = middle;
  this.last = last;
};

Person.prototype = {

  whoAreYou : function() {
    return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
  }

  var a = NaN;

  if (a === NaN) {  // Noncompliant; always false
    console.log("a is not a number");  // this is dead code
  }

};
