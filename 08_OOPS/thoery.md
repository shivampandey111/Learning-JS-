JS is a prototype based language. 
Objects in js are collection of properties and methods

# parts of OOP

Object Literal
Constructor
Prototype
Classes
Instances (new,this)


Suppose we create a function inside an object, and in that function we access the property of the object but as that function would have its own execution context, it won't be able to access the property which is not a part of the function, so we use 'this' keyword which refers to the current context

# Prototype
Basically everything in js is an object. If we declare an array, its prototype would be object but the object prototype would always be null.


Function