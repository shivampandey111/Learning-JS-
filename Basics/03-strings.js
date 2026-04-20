//String declaration
let name = "shivam"
let name1 = new String('Shivam')

//Strings have different methods like length, charAt, indexof

const myName = name1.substring(0, 4)  //O is from where to start and 4 is how many positions to go, 0,1,2,3

//Slice can also take negative values, trim removes starting space and end space
const url = "google.com"
const url1 = url.replace('com', 'hello')
console.log(url1)

//includes checks if a substring exists or not