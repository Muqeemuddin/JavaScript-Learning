// String Concatination is something I know from the Java language and it is similar in JavaScript.
// Like String concatination in Java is not preferred, String concatination is not recommended in JavaScript as it is an old method.
// Prefer using String Interpolation. What is String Interpoplation?

// Here is an example of String interpolation which is better than a defination.

const name = "Muqeemuddin"
let profession = "Software Developer" // By default, The Javascript internally converts it to be a String Object.
let experience = 5
console.log(`My name is ${name} and I'm a ${profession} with more than ${experience} year of experience.`) // this method of combining the strings together is known as String Interpolation.

// Intersting note: on the variables in the String Interpolation, you can call funtions.

// example: 
console.log(`My name is ${name} and I'm a ${profession.toLocaleUpperCase()} with more than ${experience} year of experience.`)

// Another way to define/declare the String is:

const gameName = new String('Mario') // Here the string is an Object of Class String which has many inbuilt methods.
// Fact: These methods doesn't modify the original string rather it create a new modified string as a new variable.
