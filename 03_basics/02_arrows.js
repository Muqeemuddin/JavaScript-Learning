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
console.log(userObj())