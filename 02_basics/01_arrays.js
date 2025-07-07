// Arrays

let myArray = [1,2,3,4,5]
console.log(myArray[0])
console.log(myArray)

// Arrays by default are not strict datatype specific.

let dynamicDatatypeArray = [1,'a',"OMG",1.2, {name:"Muqeem"}]
console.log(dynamicDatatypeArray)

// Array Methods

// push method - to add elements
dynamicDatatypeArray.push("end of the array")

console.log(dynamicDatatypeArray)

// pop method- removes the last element of the array
// shift method - removes the first element of the array
// unshift method with an argument - inserts the argument(element) in the begining of the array.
// includes method - similar to isPresent method in java.
// indexOf() method - takes an argument and returns the index of the element if present otherwise -1.

 // Important note:
 // slice and splice methods. What is the difference? Great interview question.

 // To understand run the below code and see the difference yourself before I explain it to you.

 let someNumberArray = [1,2,3,4,5,6,7,8]
 console.log("A ", someNumberArray) // Yeah! don't be surprised. log function can take two arguments.

 let slicedArray = someNumberArray.slice(1,4)

 console.log(slicedArray);
 console.log("B ", someNumberArray);

 let splicedArray = someNumberArray.splice(1,4);

 console.log(splicedArray)
 console.log("C ", someNumberArray);

 // if you see too many results in the console, just comment out the log statements other than what you want. Simple.

 // Yes!! you are right. splice method modifies the original array. It's not just includes the end index but it modifies the original array.

 // Something very interesting I learned about the array in JavaScript.

 // What happens when you drop a piece of glass? it shatters and broken pieces spreads out on the floor.

 // Something similar happens when you drop an array. It gets spread into pieces.

 let arrayOfCookies = ["Double Choclate", "Peanut Butter", "caramel", "choclate dip"]
 let arrayOfChips = ["Takis", "Uncle Rays", "Doritos", "Pringles"]

 let droppedArrays = [...arrayOfCookies, ...arrayOfChips];
 console.log(droppedArrays) // I know it is similar to concate two arrays using concate method but isn't this more fun. Haha!! JavaScript is fun language.

 // Similar to Java's toCharArray() method. JavaScript provides from() method.

 console.log(Array.from("123456")); // Gives you an array of numbers.

 // Interesting Trivia!! What array would be created when you pass the argument as key-value object to from method?

 // Let's see.

 console.log(Array.from({"MissionImpossible":4, "Final Destination":4, "The White Tiger":5 })); // Surprised? it prints an empty array.

 // because javascript is confused about what array to be created. key array or a value array. 

// Array.from() is meant to work on iterables (like arrays, strings, sets)

// Here is a different way to extract the keys or values or even entries and return as arrays.
console.log(Object.keys({"MissionImpossible":4, "Final Destination":4, "The White Tiger":5 }));
