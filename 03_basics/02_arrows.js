// arrow functions are functions whose syntax is little different.

const myFunction = () => {
    console.log("This is from my arrow function")
}

myFunction();

// In arrow function you can make use of implicit return.

const sum = (num1, num2) => (num1+num2) // If your function defination has only one line and it is returning,
//  then you can replace the flower bracket and return statement with paranthesis.
console.log(sum(2,3))

// Returning object using implicit return.

const userObj = () => ({username:"Muqeem"});
console.log(userObj());

// ***************** Immediately Invoked Function Expression (IIFE) ***************

// ()() this first bracket defines the function, the second bracket calls the function.
// IIFE's are used to define the functions that require immdeiate execution.

// the below is an example of named IIFE
(function someFunc(){
    console.log("Database server started")
})();

// Here is Unnamed IIFE
(() => {
    console.log("Unnamed IIFE function executed");
})();

// If any arguments need to be passed, then it happens through the call brackets.

((name) => {
    console.log(`unnmaed IIFE with argument ${name}`)
})("created by Muqeem")

