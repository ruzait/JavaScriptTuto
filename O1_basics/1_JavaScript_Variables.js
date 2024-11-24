/* Variables are Containers for Storing Data */

// JavaScript Variables can be declared in 4 ways:
// 1. Automatically
// 2. var
// 3. let
// 4. const




/* --- 1. Automatically Declared Variables --- */
// Automatically declared when first used (not recommended as it's implicit global scope)
autoa = 5;
autob = 6;
autoc = autoa + autob;
console.log("Automatically Declared Variables:", autoc); // Output: 11















/* --- 2. var --- */
var vara = 5;
var varb = 6;
var varc = vara + varb;
console.log("Using var:", varc); // Output: 11

/* 
Characteristics of var:
- Function-scoped.
- Can be redeclared and updated.
- Can be accessed before declaration due to hoisting, but its value will be undefined.
- Avoid using var in modern JavaScript.
*/

var varx = 10;
var varx = 20; // Redeclaration allowed
console.log("Redeclared var:", varx); // Output: 20















/* --- 3. let --- */
let leta = 5;
let letb = 6;
let letc = leta + letb;
console.log("Using let:", letc); // Output: 11

/* 
Characteristics of let:
- Block-scoped (only available inside the block {} where it's defined).
- Cannot be redeclared in the same scope.
- Can be updated.
- Cannot be accessed before declaration.
*/

let letx = 10;
letx = 20; // Updating allowed
console.log("Updated let:", letx); // Output: 20

let z = 5;
// let z = 15; // Error: Cannot redeclare 'z'











/* --- 4. const --- */
const consta = 5;
const constb = 6;
const constc = consta + constb;
console.log("Using const:", constc); // Output: 11

/* 
Characteristics of const:
- Block-scoped (only available inside the block {} where it's defined).
- Cannot be redeclared or updated.
- Must be initialized at the time of declaration.
*/

const constx = 10;
// j = 20; // Error: Assignment to constant variable
// const k; // Error: Missing initializer in const declaration




/* 
Summary:
- Use `let` for variables that need to be updated.
- Use `const` for variables that won’t change.
- Avoid using `var` in modern JavaScript to prevent scoping issues.
*/