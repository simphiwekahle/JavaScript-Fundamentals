// Create an Object with an object literal (preferred)
let obj1 = {};

// Create an Object with a constructor
let obj2 = Object();

//Populate properties on an object
obj1.firstName = "Sphephelo";
obj1.lastName = "Ndimande";
obj1.isEmployed = true;
obj1.startDate = new Date("July 5, 1997");
obj1.age = 27;

console.log(obj1);

// Populate an Object on creation with object literal syntax
let obj3 = {
    firstName: "Simphiwekahle",
    lastName: "Ndimande",
    isEmployed: true,
    startDate: new Date("July 5, 1997"),
    age: 27
};
console.log(obj3);

// Accessing properties from an object
console.log(`First Name: ${obj1.firstName}`);
console.log(`Last Name: ${obj3.lastName}`);

// Delete properties from an object
delete obj3.firstName;
console.log(obj3);

// Accessing a property that doesn't exist
console.log(`Non-existing value: ${obj3.middleName}`); // Undefined

// Objects are passed by reference, not value
let obj4 = obj3;
obj4.lastName = "Gcwensa"; // Overrides 'lastName' from obj3
console.log(`Last Name (obj3): ${obj3.lastName}`);
