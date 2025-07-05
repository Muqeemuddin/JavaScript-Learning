// JavaScript categorises datatypes in two categories.
// 1. Primitive datatypes and 2. Non Primitive datatypes or Reference Datatypes

// Primitive datatypes:
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Interesting thing about Symbol datatype.

const id = Symbol('123') // return type : symbol
const anotherId = Symbol('123')

// what do you think of the above two variables? are they same/equal or different?

console.log(id === anotherId) // result: false. On comparision, we find that no two Symbols are same. No matter if their symbols are generated using the same value.

// Reference Datatypes:
// Arrays, Objects, Functions (Yes! you read it correct. In JavaScripts, Functions can be treated as a variables, which are called as "object function".)

let lastTenMatchesScore = [3,4,2,0,1] // return type: object

const myObject = { 
    name : 'Muqeem',
    age : 21,
    isStudent : false
} // return type: object

const myFunction = function(){
    console.log(lastTenMatchesScore)
} // return type: function

console.log(typeof lastTenMatchesScore)

// article by ecma-international for referring the type of datatypes:
// https://262.ecma-international.org/5.1/#sec-11.4.3