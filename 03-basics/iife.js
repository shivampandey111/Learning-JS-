//IIFE 
       //When we want a function to be immediatetly executed just after its declaration 
       //**** To stop the pollution happening from global scope
(function name2(){              //Named iife
    console.log(`Hello`);
})();

       //The iife should be explicitly stopped when it ends by using ; when we want to use next iife like this. Use ; when using two iffe's or more
 /*     (function name1(){
       console.log(`HELLO1`)
      })()  won't work */

//Arrow 
(() => {              //Unnamed iife
       console.log(`HELLO1`)
    })();

(
    (name) => {         //Named IIFE
        console.log(`${name}`)
    }
)("Shivam")  
