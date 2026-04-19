// console.log('Hello')

//Variables are declared using const and let. If the variable value is not defined at the time of declaration, it is undefined by default.

//Datatypes like number, bigint, bool, string etc.
//Null is a standalone value when we want smth to be intentionally empty and undefined when it is not defined

//Symbol to find the uniqueness of the components


//Null is an object type datatype while undefined is undefined datatype  (typeof)

let score = "33abs"
// console.log(typeof score)
let number = Number(score)
// console.log(typeof(number))
// console.log(number)
//type of number is number but when printing number, NaN, that means not a number 

// "33" would be 33, "33abs" would be NaN and true would be 1

let isLoggedIn = 1
//console.log(typeof isLoggedIn)
let bool = Boolean(isLoggedIn)
//console.log(bool)
//console.log(typeof bool)
//1 would be true 0 would be false
// "" would be false and "hello" would be true

//Arithmetic Operators Conversion
console.log("1" + 2 + 3) //string is priority and every other is treated as string
console.log(1 + '2' + 3) 
console.log(1 + 2 + "3") //number is priority 

//Logical operators comaparison
console.log("2">1) //true
console.log(null>0) //false
console.log(null == 0) //false
console.log(null>=0) //true
//Because equality and comparison operators work differently, comparison operators convert null to a number and they treat it as 0, that's why > and >= is false and true, equality does not convert. 
//Undefined would give false in all three cases 

//Use strict check === which checks for datatypes too 

//Avoid.


