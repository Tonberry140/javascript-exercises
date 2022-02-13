const reverseString = function(a) {
let characters = a.split("");
let wordOutput =[];
for(let i = characters.length; i > -1; i--) {
wordOutput.push(characters[i]);
}
console.log(wordOutput);
return wordOutput.join("");
}
reverseString("pizza");
// Do not edit below this line
module.exports = reverseString;
