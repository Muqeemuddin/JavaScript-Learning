// if statement

if(true){
    console.log("I'm the truth")
}

// falsy by defualt/ assume false values
// false, 0, -0, BigInt's 0n, NaN, null, undefined and ""(empty string) these all are considered as false in JavaScript. 

// Nullish Coalescing Operator (??) - This is used for replacing null or undefined values.
// example

let val = null??10 // helps in assuming default values when server returns a null value or undefined value back.
console.log(val)

function foo(){
    return null;
}

let val1 = foo()??"returned null"
console.log(val1);

// for of loop
const arr = [1,2,3,4,5,6]
for (const element of arr) {
    //console.log(element)
}

// for in loop

for (const key in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        //console.log(element)
    }
}

const map = new Map();
map.set('IN', "INDIA");
map.set('FR', 'France');
map.set('IN', "Indonesia");

// Map maintains the order of insertion and it doesn't allow duplicate keys.
// when entered duplicate key with different value that key gets updted in the map.

console.log(map)

// Iterate over map

for (const [key, value] of map) {
    console.log(key + ' = '+ value);
}

// Since the map looks same as object, if you try looping over the object it will give you an exception that objects are not
// iterable.

// But we can use the for in loop to loop over the objects
const myObject = {
    game1 : "Fifa25",
    game2 : "GTA",
    game3 : "WarFare"
}
for (const key in myObject) {
    console.log(myObject[key])
}

// Whagt about for..in loop on Maps? No. It will not work on maps.
// for..of works on iterables like arrays, set, maps etc.
// for..in works on objects that are enumarable. arrays and plain objects are enumerable.

// Another for loop which is greatly used by programmers.
// Many iterables comes with own foreach function defined with it.

const coding = ["java", "javascript", "C", "CPP", "kotlin", "ruby"]
coding.forEach((element) => {console.log(element)}) // forEach expects a callback function as argument.

// If you have a function defined somewhere else and you want to use it as a callback function argument then simply pass
// the function reference.

function print(element){
    console.log(element)
}

coding.forEach(print)
// forEach has access to not only element of an array, it has access to index and whole array as well

coding.forEach((element, index, array) => {
    console.log(element, index, array)
})

// forEach doesn't return any entry, although it doesn't give any error.

// for iterating and returning entries based on some condition we can use the filter method.

const code = coding.filter((item) => item==="ruby")
console.log(`found ${code} in the coding array`)