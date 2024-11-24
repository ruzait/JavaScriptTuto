// JavaScript String Comparison
// 1. Equality (==) and Strict Equality (===)

console.log('apple' == 'apple');  // true
console.log('apple' === 'apple'); // true
console.log('Apple' === 'apple'); // false (case-sensitive)
console.log(5 == '5');            // true (type coercion)
console.log(5 === '5');           // false (type coercion)
console.log(5 === 5);             // true
console.log(5 == 5);             // true



// Inequality (!=) and Strict Inequality (!==):
console.log('apple' != 'banana'); // true
console.log('apple' !== 'banana'); // true
console.log('apple' !== 'apple');  // false
console.log('apple' !== 'Apple');  // true (case-sensitive)
console.log(5 != '5');             // true (type coercion)
console.log(5 !== '5');            // true (type coercion)
console.log(5 !== 5);              // false
console.log(5 != 5);               // false



// 2. Greater Than (>) and Less Than (<)
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log('apple' > 'banana'); // false (string comparison is lexicographical)
console.log('banana' < 'apple'); // true (string comparison is lexicographical)
console.log(5 > '5');             // true (type coercion)
console.log(5 < '5');             // false (type coercion)
console.log('5' > 5);             // false (type coercion)
console.log('5' < 5);             // true (type coercion)
console.log('5' > '5');           // false (type coercion)
console.log('5' < '5');           // true (type coercion)

// 3. Greater Than or Equal To (>=) and Less Than or Equal To (<=)
console.log(5 >= 3); // true
console.log(5 <= 3); // false
console.log('apple' >= 'banana'); // false (string comparison is lexicographical)
console.log('banana' <= 'apple'); // true (string comparison is lexicographical)
console.log(5 >= '5');             // true (type coercion)
console.log(5 <= '5');             // true (type coercion)
console.log('5' >= 5);             // true (type coercion)
console.log('5' <= 5);             // true (type coercion)

// 4. JavaScript String Addition
console.log('Hello, ' + 'world!'); // Hello, world!
console.log('5' + 5);               // 55 (type coercion)
console.log(5 + '5');               // 55 (type coercion)
console.log('5' + '5');             // 55 (type coercion)
console.log('5' + 5 + '5');         // 555 (type coercion)


// 5.JavaScript Logical Operators
// 5.1. AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log(true && 5); // 5


// 5.2. OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true || 'hello'); // hello
console.log(false || 'hello'); // hello
console.log(true || 5); // 5

// 5.3. NOT (!)
console.log(!true); // false
console.log(!false); // true
console.log(!5); // false
console.log(!'hello'); // false
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true
console.log(!0); // true
console.log(!1); // false

// 6. Bitwise Operators
// 6.1. Bitwise AND (&)
console.log(5 & 3); // 1

// 6.2. Bitwise OR (|)
console.log(5 | 3); // 7

// 6.3. Bitwise XOR (^)
console.log(5 ^ 3); // 6

// 6.4. Bitwise NOT (~)
console.log(~5); // -6

// 6.5. Left Shift (<<) and Right Shift (>>)  
console.log(5 << 1); // 10
console.log(5 >> 1); // 2

// 6.6. unsigned right shift
console.log(5 >>> 1); // 2