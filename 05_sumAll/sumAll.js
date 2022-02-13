const sumAll = function(...inputs) {
    
for(let input of inputs) {
    if(input < 0 || typeof input != "number") {
        return 'ERROR';
    }
}
    let sortedInput = inputs.sort();
    let firstNumber = sortedInput[0];
    let secondNumber = sortedInput[1];

let total = 0;
for(let i = firstNumber; i <= secondNumber; i++) {
total += i;
}
return total;
};

// Do not edit below this line
module.exports = sumAll;
