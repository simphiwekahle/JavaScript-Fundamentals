/*
    Data Type Conversion
    - Even JavaScript leverages dynamic typing, we need
      to understand how types work in the language.
    - This means knowing how to convert one type to another
      type.
    - This process of changing one type to another is called
      conversion.

    *Use Cases
    1. Joing a non-string value with a string.
    2. Formatting a number to be displayed as currency.
    3. Formatting an object, such as date, for display.
    4. Exporting an objectto a portable format.
    5. Evaluating an expression to a boolean value
*/

// Using the 'typeof' function
let strValue = "Hi";
console.log(typeof(strValue)); // string

let numValue = 1;
console.log(typeof(numValue)); // number

let boolValue = true;
console.log(typeof(boolValue)); // boolean

// 1. Joing a non-string value with a string
let age = 27;
let firstName = "Sphephelo";
let descriptiom = `${firstName} is ${age} years old`;
console.log(descriptiom); // Sphephelo is 27 years old

// 2. Converting a string to a mumber
let ageString = "27";
let ageNumber = Number(ageString);
console.log(typeof(ageNumber)); // number
console.log(ageNumber);
let ageNewNumber = new Number(ageString);
console.log(typeof(ageNewNumber)); // object
console.log(ageNewNumber);

// Not-a-Number
let ageString2 = "twenty-seven";
let ageNumber2 = Number(ageString2);
console.log(typeof(ageNumber2));
console.log(`Age string is: ${ageNumber2}`);
let isInvalid = isNaN(ageNumber2); // 'isNaN' not 'isNan' 
console.log(`Is Invalid: ${isInvalid}`); // True

// Converting a value into a boolean
let num1 = 1;
let num2 = 0;
let bool1 = Boolean(num1); // True
let bool2 = Boolean(num2); // False
console.log(`'bool1' is: ${bool1} and 'bool2' is: ${bool2}`);

let string1 = "Hello";
let bool3 = Boolean(string1); // True
let value1;
let bool4 = Boolean(value1); // False
console.log(`'bool3' is: ${bool3} and 'bool4' is: ${bool4}`);

// Converting a Boolean to a String (We've been doing this)
let bool5 = true;
console.log(`Bool5 is: ${bool5}`);
let boolToString = String(bool5);
console.log(boolToString); // True