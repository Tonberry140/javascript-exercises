const findTheOldest = function(inputList) {
    let now = new Date();
   var peopleList = inputList.map(person => {
       if(!person.hasOwnProperty("yearOfDeath")) {
           person.yearOfDeath = now.getFullYear();
       }
       return person;
   })
return peopleList.reduce(function(eldest,current){
    
let eldestAge = eldest.yearOfDeath - eldest.yearOfBirth;
let currentAge = current.yearOfDeath - current.yearOfBirth;

if(currentAge > eldestAge) {
    return current;
} else {
    return eldest;
}
})
};

// Do not edit below this line
module.exports = findTheOldest;
