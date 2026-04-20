//Two types of declaration: Literal and constructor type

//Singleton isn't made when declaring literal type object and is made when declaring as a constructor type (not much clear for now) ***********

//Both type of declaration isn't any different, only difference is of singleton

//Object Literals 

const obj = {}

//Constructor object

//Object.create

const mySym = Symbol("key1")
const details = {
    name: "Shivam",
    //Now to take a symbol and put it into an object and print ******************symbol has been declared above
    [mySym]: "mykey1",   //Type would be symbol of mysym
    email: "shivam@gmail.com",
    city: "Bhopal",
    age: 18,
    isLoggedIn: false
}
//Internally keys are treated as strings
//Two formats to access the value of a key
//console.log(details.age)
//console.log(details["age"])

//To make the value inside an object unchangable, use freeze
//Object.freeze(details)
//console.log(details)

details.greeting = function(){
    //console.log("Hello")
}
details.greetingTwo = function(){
    //console.log(`Hello ${this.name}`)           //When we want to reference the same object, we can use this keyword
}
//console.log(details.greeting())
//console.log(details.greetingTwo())

//
const NewUser = new Object() //Singleton Object
const Newuser = {} //Not a singleton object

Newuser.id = "123"
NewUser.name = "Shivam"
NewUser.age = 18
// console.log(Newuser)

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}
console.log({obj1, obj2})   //Would give obj inside an obj, not merge them

const obj3 = Object.assign({}, obj2, obj1)  //As the assign copies all the properties from the source obj and copies it to target obj and retrun the target obj, {} ensures this would be the target obj and all other would be the source object
//console.log(obj3)

//Another method is the spread method, similar to the array


//Obj inside an array

const detail = [
    {
        id : "1",
        email: "h@gmail"
    },
    {
        id : "2",
        email: "4@gmail"
    },
    {
        id : "3",
        email: "g@gmail"
    }
]
//console.log(detail[0].id)   //Accessing the property of an object inside an array 

//console.log(Object.keys(details)) //Would print all the keys of the details objects in an array format

//Object.entries would convert individual key-value into an array
//To check whether a property exists or not
//console.log(details.hasOwnProperty('phone'))


//***************************************  Obj Destructuring */ 

const details1 = {
    name: "Shivam",
    email: "shivam@",
    city: "Rewa",
    age: 21
}

//One method is details.name 
//Another method is destructuring   const {propertyname} = from where do we want to take the property, obj name
const {name: nm} = details1
//console.log(name)
console.log(nm)

//API's are in json format, json is an object that has no name?? Just the basics for now, we get the data from the api in an object format, json. Sometimes, we can get the data from an api in array format too, which has number of objects within it