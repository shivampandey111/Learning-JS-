//Control Flow: Flow of the execution of the code 

//if else, switch 

/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

//Truthy and Falsy
const userEmail = ""
if(userEmail){
    console.log("Has")
}
else console.log("No")

//Falsy values: 0, undefined, null, -0, false, BigInt 0n, "", NaN
//Truthy values: all other values, "0", '0', [], {}, function(){}

//We can check weather an array is empty or not by using its length
//For obj 
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}

//True statements: 
//          false == ''
//          false == 0
//          0 == '' 

//    Nullish Coalescing Operator: ??  //
//Checks the safety of null and undefined,  let var1 = 5 ?? 10 (5 would be assigned)
//                                          let var1 = null ?? 10 (10 would be assigned)
//                                          let var1 = undefined ?? 10 (10 would be assigned)

//  Ternary Operator ?  //
//  condition ? true : false 


//Loops: for, while, do-while (code is ran at least once before checking the condition)
//For and while loops are called entry control loops because they check the condition before entering the loop and do-while loop is called exit control loop as it runs the code atleast once before checking the condition