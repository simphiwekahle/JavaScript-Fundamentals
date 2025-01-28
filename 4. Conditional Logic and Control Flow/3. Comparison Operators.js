// Greater than and less than with numbers
let val1 = (7 > 5);
console.log(`Val1 is ${val1}`);

let val2 = 5 <= 3;
console.log(`Val2 is ${val2}`);

// Equality
let val3 = (3 === 3); // Strict Equality
console.log(`Val3 is ${val3}`);

let val4 = (true === false);
console.log(`Val4 is ${val4}`);

let val5 = ('Hi' !== 'hi'); // Strict Non-Equality Check
console.log(`Val5 is ${val5}`);

// Primitive equality (passed by value)
let str1 = "Hello";
let str2 = "Hello";
let val6 = (str1 === str2);
console.log(`Val6 is ${val6}`); // True

// Object equality (passed by reference)
let obj1 = {};
let obj2 = {};
let val7 = (obj1 === obj2);
console.log(`Val7: ${val7}`); // False
/*
    obj1 and obj2 are pointing to different blocks of memory.
*/

obj3 = obj2; // obj3 is pointing to the same block of memory as obj2
let val8 = (obj2 === obj3);
console.log(`Val8 is ${val8}`); // True

/*
    Standard and Strict Equality
    - In JavaScript, there are two different sets of equality operators.
    - The == and != operators are the standard equality oprators.
    - The === and !== are the strict equality operators.
    - The latter requires that both value and the type match.
*/

// Standard vs Strict equality
let val9 = ('42' == 42); // t
let val10 = ('42' === 42); // f
console.log(`Val9 is ${val9} and Val10 is ${val10}`);

let val11 = (undefined == null); // t
let val12 = (undefined === null); // f
console.log(`Val11 is ${val11} and Val12 is ${val12}`);

/* 
    Always use strict equality operators unless you fully
    understand the different behavior of the standard equality
    operator.
*/