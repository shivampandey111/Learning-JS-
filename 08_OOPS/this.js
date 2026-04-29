function details(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`${this.username}`)
    }

    //return this                                by default it is return
}

//const userOne = details('Shivam', 12, false)
//const userTwo = details('Hello', 20, true)   //This would overwrite the previous values of userOne and on console.log(userOne), the values of userTwo would be printed. 
//So we use new keyword which is a constructor function which makes the instance of the function
const userOne = new details('Shivam', 12, false)
const userTwo = new details('Hello', 20, true)
console.log(userOne.constructor);

//instanceof checks whether the object is an instance of that class or constructor



// The usuage of new keyword 
/* (1) An empty object is created
(2)  A constructor function is then called because of new keyword and it passes all the arguments to that object
(3) Now all these arguments gets injected to this keyword 
(4) 
*/

let userName = 'Hello'

String.prototype.trueLen = function(){
    console.log(`${this}`)
    console.log(`True Len is: ${this.trim().length}`)
}
userName.trueLen()
'heloo   '.trueLen()