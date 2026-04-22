//Using for each loop, it can be used when performing operations on the items of the array or object but it does not return anything.

const num = [1,2,3,4,5,6,7,8,9,10]
/*
const res = num.forEach((item) => {
    console.log(item) 
})
console.log(res)            //Would be undefined

const res = num.forEach((item) => {
    console.log(item)
    return item             //Still undefined, for each does not return anything, one method is filter.
})

*/
/*
const res2 = []
num.forEach( (item) => {
    if(item>3){                    //Here even though we are using for each, we created another array in which we push our result, and thus can print that array, effectively returning something but not actually
        res.push(num)
    }
} ) 
    console.log(res2)                                    //Same as filter, but long method
*/
//                                        Filter         takes callback function
const res1 = num.filter( (item) => item>3 )
//              filter( (num) => condition)                 //Filter is a true or false
//console.log(res)   //The items which are greater than 3

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbook = books.forEach( (item) => item.genre === "History" )
userbook = books.forEach( (item) => { return item.publish>2000} )




//************************************   Map   ******************************************************************
 
const nums = [1,2,3,4,5,6,79,8]

//const res = nums.map( (item) => item + 10 )       //Unlike for each, this returns by default
//console.log(res)


//*******************************************    Chaining          */
const resChain = nums
                    .map( (num) => num*10 )
                    .map( (num) => num +1 )   //In this the above caluclated num array would be passed, not the values from the original nums, means in this the num would be of the previous chain 
                    .filter( (num) => num>10 )           


//************************************ Reduce ******************************************************************
const red = [1,2,34,4,5,6]

red.reduce( function(acc, currVal) {
    console.log(`Acc is ${acc} & CurrVal is ${currVal}`)
    return acc+currVal
}, 0)      //0 is the accumulator, where to start from initially
red.reduce( (acc, currVal) => (acc+currVal), 0)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
shoppingCart.reduce( (acc, item) => item.price + acc, 0)
