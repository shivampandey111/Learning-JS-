function multiple(num){
    return num*5;
}
multiple.power = 2
//console.log(multiple.power)    //We can treat function like an object
//console.log(multiple.prototype)

function createUser(username, score){
    this.username = username;
    this.score = score;
}
//like there are pre-built methods that come with object like length etc. We can also create our own method and inject that into the prototype
//createUser.prototype.increment = function(){
 //   this.score++;   //Without using this, the function won't be able to execute as it doesn't know the current context, this is jis ne bhi. That means, do the job for whatever comes through
//}



/////New

//const obj = createUser('Shivam', 100)   //Here we haven't used new keyword
createUser.prototype.printMe = function(){
    console.log(`${this.score}`)
}
const obj = new createUser('Shivam', 100) 

obj.printMe()    //This would give an error

//
/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/