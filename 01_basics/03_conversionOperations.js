let score = "33"

let numberScore = Number(score)

console.log(typeof(numberScore))

let score1 = "33abc"

let numberScore1 = Number(score1) // How is it possible that the String is converted to a number. 

console.log(typeof(numberScore1)); 

console.log(numberScore1) // It doesn't convert the string into a number. it makes it a NaN which not a number. 

let num = 3

let booleanValueOfNum = Boolean(num) //So, any non zero number is converted to true and 0 is converted to false.

console.log(booleanValueOfNum) 

// similarly, an empty string is converted to false. and any string with elements is converted to true.


let name = "muqeem"

let booleanValueOfName = Boolean(name)

console.log(booleanValueOfName);


// ************************* Operations *******************************************

 