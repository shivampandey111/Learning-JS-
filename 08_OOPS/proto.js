let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.name = function(){
    console.log('Present')
}                     //Injected at the whole object, every array, string, func and other would have its access

heroPower.name()

let myarray = ['hello', 'hi']

Array.prototype.hello = function(){
    console.log('hello')
}                           //Injected at the array, only arrays would have its access
myarray.hello()
myarray.name()

//Inheritance 

//old syntax  __proto__
//New
Object.setPrototypeOf()   //