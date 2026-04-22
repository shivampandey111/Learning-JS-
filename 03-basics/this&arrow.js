const details = {
    username: "Shivam",
    age: 21,
    price: 999,

    welcomeMessage: function(){
    //    console.log(`${this.username}, welcome`) //This keyword is used to refer to the current context
    }
}

details.welcomeMessage    //Reference
details.welcomeMessage()   //welcomemessage is a method, so () for its execution
//Global object in a browser is window object, when using console.log(this) keyword in browser console, it refers to the window object as the current context but when using it here, it is an empty object  ***************************
function detail(){
    let username = "Shivam"
  //  console.log(this.username)    //username is a local varriable and not a property, this is a global object and it looks for properties
   // console.log(this)  //Depends weather strict or non strict, if not using strict, it would be window object and when using strict, it would be undefined
}
  

//Arrow Keyword
const name = () => {
    let username = "Shivam"
    console.log(this)
}
// name()

            //Syntax of arrow function
       const arrow = () => {}  //
        //Explicit return is when we specify the return statement and use it, compulsory when using {}
        
       //Implicit return 
 //      const sum = (num1, num2) => num1+num2 //We don't need to use parentheses and do not have to use return as the statement is written in the same line
       ////             OR
       const sum = (num1, num2) => (num1+num2) //When using (), we don't need to use return
   //    console.log(sum(3,4))

       //If we want to return an object implicitly
       const obj = (num1, num2) => ({username: "Shivam"})  //only {} is not allowed, it should be wrapped in ()

       