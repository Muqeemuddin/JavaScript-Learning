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


