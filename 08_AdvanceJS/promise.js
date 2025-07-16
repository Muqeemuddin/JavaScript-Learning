// Promise is an object that represents an eventual completion(or failure) of
// an asyncronous operation(e.g., DB operation, Network connection, file reading).

// Best anaology of promise is like a nest you build on a tree.
// the nest might promise you eggs by some birds or not and you don't monitor the nest.

// promise creation.

const promiseOne = new Promise((resolve, reject) => {
    // Do async tasks
    // DB calls, cryptography, network calls
    setTimeout(()=>{ // why setTimeout method? We're using it simply because it's asyn function. You can use any async funtions.
        console.log('Async task completed') // This will be printed first no matter if it's after resolve. because consumption is after the creation.
        resolve(); // Without calling the resolve method you miss the connection between
        // the promise creation and promise consumption. If you don't call it, then consumption code
        // will not be executed.
    }, 3000)
})

// promise consumption
// .then has a direct connection with resolve.
promiseOne.then(()=>{
    console.log('promise consumed')
})

// It is not mondatory to store promise reference in a variable if you want to use it directly.
// Creation and consumption in one go.
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Async task2')
        resolve();
    }, 1000)
}).then(()=>{
    console.log('Task2 consumption complete.');
})

// Let's say you have contacted database and fetched some data that you want to consume.
const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let result = {username:'Muqeemuddin', password:'1234'}
        // anything can be passed in resolve - object, array, function ....
        return resolve(result);
    }, 1000)
})

promiseThree.then((data)=>{
    console.log(data)
})

// what if something went wrong when connecting to DB? how would you handle that?
const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        let result = {username:'Muqeemuddin', password:'Muq123'}
        if(!error){
            resolve(result);
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// In the cnsumption, you specified what to do if this go right. But what is the promise rejected?
// promiseFour.then((data)=>{
//     console.log(data)
// })

// Similar to resolve, if anything goes wrong, then the reject request propagates which can be handled
// using the catch method. catch is directly linked to the reject method.
// switch the error to true in promiseFour to see the working of below code.
promiseFour.then((data)=> console.log(data)).catch((error)=>console.log(error))

// Interesting Note: You can create a chain of thens. that is called thanable.
// See here:

promiseFour.then((data)=>{
    console.log(data)
    return data.username;
}).then((myUsername)=> console.log(myUsername))

// To increase the readability, developers prefer chaining to start from a new line.

promiseFour
.then((data)=>{
    console.log(data)
    return data.username;
})
.then((myUsername)=> console.log(myUsername))
.catch((err)=> console.log(err))
.finally(()=> console.log("Finally executes whether it's resoved or rejected"));

// Another method
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:'Javascript', password:'js123'})
        }else{
            reject('ERR: Something is not right at network')
        }
    },1000)
})

// This way of consumption waits for some time to finish the promise.
// which sometimes is rquirement.
// Here you gracefully accepted the resolve but what if there is a promise reject. how would you handle that
// since you are not using .then() or .catch()?
async function promiseConsumeFive(){
    const response = await promiseFive
    console.log(response)
}

promiseConsumeFive()

// To handle the errors, You have to use try-catch block.

const promiseSix = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:'Javascript', password:'js123'})
        }else{
            reject('ERR: Something is not right at network')
        }
    },1000)
})

// Here, you are handling both resolve and reject gracefully.
async function promiseConsumeSix(){
    
    try{
        const response = await promiseSix
        console.log(response)
    }catch(error){
        console.log(`Error: ${error}`)
    }
}

promiseConsumeSix()

// Now let's look at the fetch() method.
// Did you remeber, how many lines of code we were writing with XMLHttpRequest?
// fetch() takes all that burden.

async function getAllUsers(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    // here the data fetched is in string format.
    // parse it to jason to make some use of the data.
    const userData = users.json()
    console.log(userData);
}

getAllUsers(); // what happened? nothing printed on the console. Why?
// conversion of string to json also takes some time. Having await keyword allows the engine to wait before completion of the program.

async function getAllUsersAgain(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    // here the data fetched is in string format.
    // parse it to jason to make some use of the data.
    const userData = await users.json()
    console.log(userData);
}

getAllUsersAgain(); // Noticed something in the console?
// Although the getAllUserAgain function is at the end of the file but still it prints the output first
// even before the all console.log() method we wrote earlier. Why?

// That's because fetch() call backs are registered in the high priority queue/fetch queue.


// .then() and .catch() format looks easy, so can't we use fetch() with .then() and .catch()?
// of course you can use it.

fetch('https://api.github.com/users/muqeemuddin')
.then((data)=>{
    console.log(typeof data)
    return data.json()
    // if you noticed we didn't use the await keyword when parsing the response.
    // That's because then next then will not be executed until this 'then' is finished.
})
.then((gitHubuser)=>console.log(gitHubuser))
.catch((error)=>{
    console.log(`Error: ${error}`)
})
.finally(()=> console.log('Your request is either resolved or rejected.'))