const score = 400     //Would detect it's a number
const num = new Number(400)  //Specifically a number

//num now has number properties like toString which would convert this into a string and then all the properties of string can be used, toFixed which specifies the precision values upto which length

//toPrecision starts its priority from before the decimal. 

const number = 123.49
console.log(number.toPrecision(3));  //Would give 25. If it's 123.49 would give 123

//localestring converts big numbers to us standard or en-IN then to Indian standard
const money = 100000
console.log(money.toLocaleString('en-IN'))

//++++++++++++++++++++++++++++++++++++++++++++Math

//Math library has diff functions like abs, round, ceil (4.9 to 5, 4.2 to 5), floor (4.9 to 4)

console.log(Math.random())
const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)   //To generate a random number between min and max
