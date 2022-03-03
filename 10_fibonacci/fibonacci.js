const fibonacci = function(numberInput) {
let fibArray = [1,1];
if(numberInput < 0) {
    return "OOPS"}
    
for (let i = 1; i < numberInput -1; i++) {
    let nextNo = fibArray[i] + fibArray[i-1];
    fibArray.push(nextNo);
}
return fibArray[fibArray.length - 1]
}
// Do not edit below this line
module.exports = fibonacci;
