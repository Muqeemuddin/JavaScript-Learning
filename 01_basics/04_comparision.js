// Basic compariosn operator that JavaScript supports are:
// console.log(2>1)
// console.log(2==1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2<=1)

// console.log("2">1) // Here Javascript compiler not only compares the two operands but also converts the string into number.
// // similarly
// console.log("02">1)

// From the below, we can understand that the conversion is not always predictable. In the first two comparisions, null is being converted
// to something, where as in the last statement it is being converted to a number which is zero. Hence that prints true while the first two
// prints false.
console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true

// For comparing values along with their datatypes, javascript provides the concept of strict comparision. i.e., === (Triple equals)
console.log("2"===2) //false