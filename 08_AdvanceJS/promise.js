// Promise is an object that represents an eventual completion(or failure) of
// an asyncronous operation(e.g., DB operation, Network connection, file reading).

// Best anaology of promise is like a nest you build on a tree.
// the nest might promise you eggs by some birds or not and you don't monitor the nest.

// promise creation.

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=>{ // why setTimeout method? We're using it simply because it's asyn function. You can use any async funtions.
        console.log('promise executed')
        resolve(); // Without calling the resolve method you miss the connection between
        // the promise creation and promise consumption. If you don't call it, then consumption code
        // will not be executed.
    }, 1000)
})

// promise consumed
promiseOne.then(()=>{
    console.log('promise resolved')
})

new Promise((resolve, reject) => {
    setTimeout(()=>{
        return resolve;
    }, 1000)
}).then((data)=>{
    console.log(data);
})
