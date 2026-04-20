/*

Two types of datatypes based on how they are stored in memory, primitive and non primitive

Primitive are call by values so whenever they are called, copy is given not the reference 
Strings, number, boolean, null, undefined, symbol, BigInt

Reference (Non primitve)
Arrays, Objects, Functions


*/

const id = Symbol('123')
const Id = Symbol('123')
//Both are different, unique

//Function can be stored within a variable
const func = function(){}

//The type of non primitve datatypes is function and especially object function in the case of function
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  object function
       Object  =>  object
       */


       //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       //Stack (Primitve) and Heap (Non Primitve), Stack changes are in value and Heap changes are in original
