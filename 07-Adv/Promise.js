//Creation of a promise
//                 ```                       1)
const hello = new Promise(function(resolve, reject){       //Resolve and reject parts
        //Async tasks like crypto, network calls
        setTimeout(function(){
            console.log('Hello')
            resolve()    //calling resolve to connect then and promise
        }, 1000)
})

//Consumption of promise
//then is related to resolve
hello.then(function(){
    console.log('Promise Consumed'); 
})
                    //                      2)
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2');
}) 
//                                                        3)
//To pass the values from promise to then. 
const user = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({Username: 'Chai', Age: 18})
    })
})
user.then(function(user){
    console.log(user)
})

//                                                      4)
const four = new Promise(function(resolve, reject){
    let error = false;
    if(!error){
        resolve({username: 'Shivam', age: 18})
    } 
    else{
        reject('ERROR')
    }
})
.then((four) => {    //for promises
    console.log(four.username)      //the second then is used to avoid callback hell, keep readability, handle step by step async logic and chaininh
    return four.username
})
.then( (username) => {                       //if there are no errors this would run
    console.log(username)
} )
.catch( (error) => {console.log(error)} )   //for catching errors
.finally(()=>{console.log('Either done or rejected')})   //to know the status, would always be executed

                                                    //5)

const five = new Promise(function(resolve, reject){
    let error = false;
    if(!error){
        resolve({username: 'Shivam', age: 18})
    } 
    else{
        reject('ERROR')
    }
})
//Async and await along with catch block
// async function consumeFive(five){
//     const response = await five;   //If there is no error, this would be good but if there might be error, catch block is used
//     console.log(response);                     
// }
async function consumeFive(five){
    try {
        const response = await five;
        console.log(response)
    } catch (error) {
        console.log('error')     //Gracefully handling the error, can be done with then and catch too, both are good
    }
}


async function getUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')  //await is used for the tasks that takes time
//        const data = JSON.parse(response)     This also takes time, so use await
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log('E:', error)
    }
}


//can do the same with then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=>{
    return response.json()
} )
.then( (data) => {
    console.log(data)
} )
.catch( (error)=>{
    console.log('error')
})
