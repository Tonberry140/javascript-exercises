const repeatString = function(toRepeat,howManyTimes) {
    let outputString = ``;

    if (howManyTimes < 0) { return "ERROR";}
  

    for(let i=0;i < howManyTimes;i++) {
        outputString += toRepeat;
    }
        return outputString

};

console.log(repeatString("hi", 4))

// Do not edit below this line
module.exports = repeatString;