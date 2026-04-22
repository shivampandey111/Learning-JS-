function myName(){
    console.log("Shivam")
}

myName //Reference
myName() //Execution

function number(number1, number2){
    return number1 + number2
}

number()  //Undefined

function name(username = "Shivam"){          //By defualt value Shivam, otherwise whatever the argument that had been passed
    return `${username} just logged in`
}

function num(...num1){
    return num1
}
console.log(num(1,2,3,5,6)) //We are passing multiple argumentshere but due to the rest operator, they would be treated as one single value and returned in an array

//We can pass an object and array too as a parameter in a function. 
const myArray = [1,2,3,4]
function arr(anyArray){
    return anyArray[1]
}
console.log(arr(myArray))

//*****************************Hoisting*****************************************//

//One method of declaring function
addOne(6)
function addOne(num){
    return num+1
}                                             //This would work and return 7
//Another method of declaring function
addTwo(7)                                       //This would not work, cannot access before initialization
const addTwo = function(num){
    return num+2
}                                                  

