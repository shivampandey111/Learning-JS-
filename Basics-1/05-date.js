let date = new Date()
//Date is an object
// console.log(date)
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toDateString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
 console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString()); 

let today = Date.now()
console.log(today) //Gives the milisecond till now
let random = new Date("01-14-2026") 
// Comparison should be in miliseconds but to get the seconds
console.log(Math.floor((Date.now())/1000))  // **** To get the seconds

//Some more methods like getDate, getHours etc 
console.log(random.toLocaleString('default', {    //We define an obj inside a localestring and thus many parameters
    weekday: "long"
}))

