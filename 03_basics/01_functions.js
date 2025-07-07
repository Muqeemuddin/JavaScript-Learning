// Functions are same as methods in java but provides more flexibility

// Syntax
function sayMyName(){
    console.log("My name is khan")
} // function defination

sayMyName() // function call

function sayMyNameTwo(name){
    console.log(`${name}. You are god damn right! `)
}

sayMyNameTwo("Hiesenberg")

function userLoggedIn(user){
    return `${user} just logged in.`
}

console.log(userLoggedIn("hacker"));

function openYoutube(user="guest"){ // default value
    console.log(`Signed in as ${user}`)
}

openYoutube('muqeemuddin')
openYoutube()

// Interesting things about JavaScript functions are
// 1. For a function that returns something, if you don't accept in a variable or directly print it. It will not give you any error.
// 2. In function call, it is allowed to just write a function name without any argument. Meaning, the result is not expected but
// Javascript will not throw any error.
// 3. Also, in function call, you can write just the name without any paranthesis and still compiler will not throw any error/exceptions.

// rest operator or spread operator. In java it is called as variable-length argument.

function items(...itemPrice){
    return itemPrice;
}

console.log(items(20,50,80))

function cartItems(item1price, item2price, ...remainingPrices){
    return remainingPrices;
}

console.log(cartItems(19.99, 24.99, 29.99, 44.99, 99.99))

// let's talk about the "this" keyword.
// this key word gives the context.
const myObj = {
    username : "Muqeem",
    age:21,
    myfunc:function(){
        console.log(this.username);
    }
}
console.log(myObj.myfunc())
console.log(this) // here the context is empty. if you run the same in browser it gives you window context.

// Function doesn't support the this keyword context.

function fun(){
    let games= "video games"
    console.log(this.games)
} // As you can see in the console, it doesn't print the string video games.

fun();