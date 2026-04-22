const details = {
    name : "Shivam",
    age : 18,
    city: "Rewa"
}
for (const key in details) {
//    console.log(key)        //Would print the keys
}
for (const key in details) {
 //   console.log(details[key])   //Would print the values 
}

const arr = [1,2,3,4,5]
for (const val in arr) {
  //  console.log(arr[val])
}

//Maps are not iteratable by for in loop


//                                For Each              ///////////////////

const arr1 = [1,2,3,4,5]
arr1.forEach(function (val) {           //Callback func, val is the parameter which takes indivdual elements as an argument and then the operations can be performed on them 
   // console.log(val)
})
arr1.forEach( (num) => {             //Another method
  //  console.log(num)
} )
function printme(item){
   // console.log(item)
}
arr1.forEach(printme)             //Another method, notice printme is just a reference, not printme(), we are not executing that function

arr1.forEach( (item, index, arr) => {
 //   console.log(item, index, arr)          //Mulitple Parameters, items, index and the whole array list
}  )


// Multiple objects in an array (When the data are taken from database, it is in the array format and every value is an object, common scenario)

const detail1 = [
    {
        name: "Shivam",
        age: 18
    },
    {
        name: "S",
        age: 19
    },
    {
        name: "Sh",
        age: 8
    }
]

detail1.forEach( (item) => {
    console.log(item.age)
} )