const removeFromArray = function(originalArray, ...args) {
    
for (let arg of args) {
    
    if(originalArray.indexOf(arg) > -1) {
      
        originalArray.splice(originalArray.indexOf(arg), 1)
    }
}
return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
