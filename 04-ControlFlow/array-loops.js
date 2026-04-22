// For Of Loop 

const num = [1,3,5,6,8]
for (const val of num) {
   // console.log(val)
}

//Map: It is an object which holds key value pairs, each key is unique. Set is used to set the key and its value, get is used to get the value of that key, delete to delete. It remembers the original order of the insertion of the keys
const detail = new Map()
detail.set('IN', "India")
detail.set('US', "USA")
detail.set('FR', "France")

//console.log(detail)

for (const keys of detail) {
    console.log(keys)           //This would print the keys and values of the map in an array format
}       
for (const [key, value] of detail) {
    console.log(key, ":-", value)       //This would print the keys and value IN :- India
                                        //                                    US :- USA
                                        //                                    FR :- France
}  //Maps are iterable by for of loop, objects are not