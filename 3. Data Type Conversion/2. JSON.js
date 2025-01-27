/*
    JSON
    - JavaScript Object Notation (JSON) enables developers
      to convert a JavaScript object into a string.
    - This string can be passed between applications, stored
      on the local file system, or loaded at runtime.

    1. It is similar to the object literal syntax.
    2. Requires double quotes for property names.
    3. Requires any string values to be in double
       quotes.
    4. Won't include undefined properties or functions.
    5. JavaScript has methods for converting to JSON and
       from JSON to an object.
*/

// Create a JavaScript Object
let employee = {
    firstName: "Sphephelo",
    lastName: "Ndimande",
    birthDate: new Date("July 5, 1997"),
    yearsEmployed: 2,
    department: "ICT",
    title: "Software Developer",
    isEMployed: true,
    salary: 15000
};
console.log(employee);

// Converting object to JSON String
let jsonEmployee = JSON.stringify(employee);
console.log(jsonEmployee);
jsonEmployee = JSON.stringify(employee, null, 2);
console.log(jsonEmployee);

// Converting JSOn back to JavaScript object
let objEmployee = JSON.parse(jsonEmployee);
console.log(objEmployee);

// Writing JSON Directly
let jsonString = `{
    "firstName": "Sphephelo",
    "lastName": "Ndimande"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);