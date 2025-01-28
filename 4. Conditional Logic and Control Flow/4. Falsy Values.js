/*
    Falsy Values
    - A 'falsy' (sometimes written falsey) value is a value that is considered
      false when encountered in a Boolean context.
    - JavaScript uses type conversion to coerce any value to a Boolean in
      contexts that requires it, such as conditionals and loops.
*/

// Simple function to log out truthyness
const isTruthy = (name, exp) => {
    console.log(`${name}: ${Boolean(exp)}`);
}

// Numbers
isTruthy("val1", 0); // f
isTruthy("val2", 1); // t
isTruthy("val3", -1); // t
isTruthy("val4", NaN); // f
isTruthy("val5", -0n); // f

// Boolean, Null and Undefined
isTruthy("val6", undefined); // f
isTruthy("val7", null); // f
isTruthy("val8", false); // f

// Strings
isTruthy("val9", ""); // f
isTruthy("val10", "Hi"); // t
isTruthy("val11", "false"); // t

// Objects
isTruthy("val12", {}); // t

// Undefined variables
let var1;
isTruthy("val13", var1); // f
