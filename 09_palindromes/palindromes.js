const palindromes = function (inputString) {
    // clean input string, remove spaces etc.
    var regex = /[.!£$%?,\s]/g;
    let cleanedString = inputString.replace(regex,"").toLowerCase();
    let reversedString = cleanedString.split("").reverse().join("");
    //check whether reversed clean string matches original cleaned string
    if(cleanedString == reversedString) {return true} 
    return false;
    };

// Do not edit below this line
module.exports = palindromes;
