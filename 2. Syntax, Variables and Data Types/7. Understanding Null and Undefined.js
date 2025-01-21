/*/
    Undefined and Null
    - In JavaScript, undefined and null both represent something
      without a value but for different use cases.
    - If you define a variable but don't assign a value, the
      value is 'undefined'.
    - If you want something not to have a value, you can assign
      it to 'null'.
*/

let x;
console.log(x); // Undefined
console.log(typeof(x)); // Undefined
x = "Hello";
console.log(typeof(x)); // string
x = 90;
console.log(typeof(x)); // number

// How do we set a variable to a purposefully empty value
let manager = null;
console.log(manager); // null
console.log(typeof(manager)); // object