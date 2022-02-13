const ftoc = function(fValue) {
return parseFloat(((fValue - 32) * 5/9).toFixed(1));
};

const ctof = function(cValue) {
  return parseFloat((cValue * (9/5) +32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
