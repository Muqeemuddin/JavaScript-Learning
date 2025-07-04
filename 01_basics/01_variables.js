const accountID = 123456  // it's a constant value that cannot be changed. If attempted to change compiler will throw an error.

// Two ways to declare variables
let accountEmail = "john.doe@gmail.com" // New way of declaring variables. 
var accountPassword = "12345" // old way of declaring variables which has a scope problem. Avoid using it.
accountCity = "Melborne" // Not recommended but it is possible to declare a variable without any type specified or keyword.

let accountState; // Unassigned variables are undefined not null or default value.

//accountID = 234

accountEmail = "jd@gmail.com"
accountPassword = "54321"
accountCity = "London"

console.log(accountID)
console.table([accountEmail, accountPassword, accountCity, accountState])
