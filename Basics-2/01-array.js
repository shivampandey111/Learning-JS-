//Arrays are resizable, can contain diff types of elements. zero based indexing

//Array operations create shallow copies(which points to the same reference). *****

const myArr = new Array(1,2,3,4,5,6,7)  //Arrays have prototypes which has functions within it and another proto within the proto which has further functions inside it

//Array Methods

myArr.push(8)
myArr.pop()

//Shift pops the first element and Unshift pushes the element in the first place of the array

//console.log(typeof(myArr.includes(9)))

const newArr = myArr.join  //Binds the element of the array and convert it into string 

const ny1 = myArr.slice(1,3) //Start from 1 index and go till 2 positions 
//console.log("Sliced Array", myArr)
//Slice does not manipulate the original array whereas splice does   ************
const ny2 = myArr.splice(1,3)
//console.log("Spliced Array", myArr)


const newhero = ['Me', 'I', 'Myself']
const Hero = ['Spidey', 'Scarlet', 'Strange']

// newhero.push(Hero)     //As array takes any type of data within it, it also takes hero as a data, as a single element. It does not merge it
// console.log(newhero[3][1])  //Output would be scarlet

//We can use concat to merge arrays, push returns the existing array and concat returns a new modified array

//Better method is to use spread

const ALLHero = [...newhero, ...Hero]
 // console.log(ALLHero)

//In case there's array inside another array, a situation where there's array within an array, we use flat along with depth, how much depth there is

const mergedArray = [1,2,3,[1,2],[3,[6,7,5]]]
// console.log(mergedArray.flat(Infinity))

//To convert any data in an array, use from

// console.log(Array.from("Shivam"))
// console.log(Array.from({name: "Shivam"})) // Here this won't be converted into an array and it would return an emtpy array, we need to specify what array we want, key or value **************************

const num1 = 100
const num2 = 200
const num3 = 300

console.log(Array.of(num1, num2, num3))
console.log(Array.from(num1)) //Empty
console.log(Array.from('100')) 
