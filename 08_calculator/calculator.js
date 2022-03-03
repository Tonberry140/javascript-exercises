const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
let total = 0;
for (let i = 0; i < array.length; i++) {
  total += array[i];
}
return total;
};

const multiply = function(input) {
var out = input.reduce((total,item) =>
  total * item
)
return out;
};

const power = function(number, powerOf) {
  let output = 1;
	for(var i = 0; i<powerOf;i++) {
   output = output * number;
  }
  return output;
};

const factorial = function(input) {
	if(input === 0) {
    return 1;
  } else {
    let output = 1;
	for(var i = 1; i<=input;i++) {
   output = output * i;
  }
  return output;
};
  }


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
