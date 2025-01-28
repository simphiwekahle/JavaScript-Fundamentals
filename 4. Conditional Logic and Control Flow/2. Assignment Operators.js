// Assignment =
let x = "This is a string";
let y = 42;
let z = false;
let date = new Date("July 5, 1997");

// Mathematical Assignments
let val1 = 3;
val1 += 6; // val1 = val1 + 6
console.log(`Val1: ${val1}`);

let val2 = 2;
val2 -= 1;
console.log(`Val2: ${val2}`);

let val3 = 7;
val3 *= 2;
console.log(`Val3: ${val3}`);

let val4 = 8;
val4 /= 4;
console.log(`Val4: ${val4}`);

let val5 = 3;
val5 **= 2;
console.log(`Val5: ${val5}`);

let val6 = 21;
val6 %= 10;
console.log(`Val6: ${val6}`);

// Assignment with increment and decrement operators
let val7 = 10;
let val8 = val7++; // Postfix
console.log(`Val7: ${val7} and Val8: ${val8}`);

let val9 = 10;
let val10 = --val9; // Prefix
console.log(`Val9: ${val9} and Val10: ${val10}`);

/*
    Increment and Decrement Operators
    - If used 'prefix', with operator before operand (eg.
      ++n), the increment operator increments and 'returns
      the value after incrementing'.
    - If used 'postfix', with operator after operand (eg.
      n++), the increment operator increments and 'returns
      the value before incrementing'.
*/