// JavaScript Data Types
/* 
JavaScript has 8 Datatypes
    String
    Number
    Bigint
    Boolean
    Undefined
    Null
    Symbol
    Object
 */


// 1. String    
let name = "John Doe";
console.log(name);  
console.log(typeof name);


// 2. Number
let age = 25;
console.log(age);
console.log(typeof age);


// 3. BigInt
let big = 100n;
console.log(big);
console.log(typeof big);


// 4. Boolean  
let isAdmin = true;
console.log(isAdmin);
console.log(typeof isAdmin);


// 5. Undefined
let und;
console.log(und);
console.log(typeof und);


// 6. Null
let nul = null;
console.log(nul);
console.log(typeof nul);


// 7. Symbol
let sym = Symbol("John");
console.log(sym);
console.log(typeof sym);


// 8. Object
let person = { name: "John Doe", age: 25 };
console.log(person);
console.log(typeof person);


// 9. Array
let arr = [1, 2, 3, 4, 5]; 
console.log(arr);
console.log(typeof arr);


// 10. Function
let greet = function () {
    console.log("Hello, World!");
    };