let currentDate = new Date();

console.log(currentDate);
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toISOString());
console.log(currentDate.toJSON());
console.log(currentDate.toLocaleDateString('en-IN'));

// datetype of a currentDate is Object.

let myCreatedDate = new Date(2023, 0, 12, 23,15);
console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("12-31-2025");
console.log(myCreatedDate2.toString());

// Date Object provides great number of methods to extract the required information or create customized formats.
// But, There is new Library in development called "Temporal" which addresses some issues of the Date class.

let myTimeStamp =Date.now(); // time in millisecond 
console.log(myTimeStamp);
// To convert a date in millisecond timestamp
console.log(currentDate.getTime());

// Of course to extract day, month, year. you can make use of get methods from the Date class.

// To create a custimized formats of date, including the timezone. We can make use of toLocaleString with object as an argument

console.log(currentDate.toLocaleString('default', {weekday:"long"}));





