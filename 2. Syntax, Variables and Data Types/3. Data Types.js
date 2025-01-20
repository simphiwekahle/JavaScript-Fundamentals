/*
    Dyanamic Typing
    - JavaScript is a dynamic language with dynamic types.
    - Variables in JavaScript are not directly associated 
      with any particulat values type, and any variable can
      be assigned (and re-assigned) values of all types.
*/

// Memory in JavaScript 
/*
    Stack
    Heap
*/

// JavaScript Data Types
/*
    Primitives
    - In JavaScript, primitives are imutable, meaning they cannot be changed.
    - These values have no methods or properties and their data is stored directly
      into a stack, since the engine knows exactly how much memory to allocate
      that piece of data.
    - Primitives are passed by value.

    *Boolean
    *Number
    *BigInt
    *String
    *Symbol
    *Null
    *Undefinbed

    Objects
    - In JavaScript, objects are mutable, meaning that their contents can be
      changed without creating a new object.
    - Objects can contain a collection of properties.
    - They are passed by reference and stored on the heap.

    *Plain objects
    *Functions
    *Collection types (Array, Map, Set)
    *Dates
    *Class instances
    *Errors
    *Promises
*/

// Primitive Wrapper Methods
// String
let name = "Sphephelo";
let upperCaseName = name.toUpperCase();

console.log(`${upperCaseName}`); // Output ~ SPHEPHELO