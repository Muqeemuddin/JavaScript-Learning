// Objects can be defined in two ways
// Before we begin talking about defining the Objects, Let's learn about Singleton.

// Singleton : is the property of a class that allows only one instance to be created. Any other instance created will still
// share the same instance reference.

// Objects created using the constructor method are singleton classes. 
// Where as literal way of defining the object is not a singleton class.

const mySym = Symbol("key1")
// Object.create is a constructor way of creating objects.
// Object literal
const myObj = {
    name: "Muqeem",
    email : "muqeem@gmail.com",
    // Use Symbol as a key not as String
    [mySym] : "myKey1", // Here key is a Symbol not a String
    age: 23,
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// Here the keys type is string by default.

// Two ways to access the values of an object.
console.log(myObj.name) // accessing using a property
console.log(myObj["age"]) // accessing using a key as string.
console.log(typeof myObj[mySym])
console.log(myObj)

// Object.freeze(obj) // to freeze the object such that it's values cannot be changed.
// It doens't throw any error when trying to change, it just doesn't 

//Object.freeze(myObj)

myObj.name = "Muqeemuddin"

console.log(myObj)

// Funcation are also objects in javascripts. 

myObj.greeting = function(){
    console.log("Hello JS USER");
}

myObj.greetingTwo = function(){
    console.log(`Helo JS user: ${this.name}`)
}
console.log(myObj.greeting())
console.log(myObj.greetingTwo())

// Objects key, values and entries(key-value) can be extracted using the Object class methods
// example 

const obj = {
    name : "muqeem",
    age : 21
}

const me = Object.create(obj)

console.log(Object.keys(obj))
console.log(Object.values(obj))

// To check if object has a property, use hasOwnProperty() method from Object.

