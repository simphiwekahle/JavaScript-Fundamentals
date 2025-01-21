// Creating a sing-line string
let firstName = "Sphephelo";
let lastName = 'Ndimande';
let title = `Software Development Engineer`;
console.log(`The Job title is ${title}`);

title = `Junior SDE`;
console.log(`The updated job title is ${title}`);

// String concatenation with the plus operator
let fullName = firstName + " " + lastName;

// String concatenation with template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Creating multi-line strings with \n
/*
    \n ~ represents a new line.
*/
let bio = "Line 1\nLine 2\nLine 3";
console.log(bio);

// Creating multi-line string with backticks
bio = `About ${fullName}:
${firstName} is a ${title}.`;

console.log(bio);

// Escaping characters
let quote = 'Sphephelo said, "JavaScript is essential."';
console.log(quote);

quote = "Sphephelo said, \"Javascript is essential.\"";
console.log(quote);

quote = `Javascript can use either 'single' and "double" quotes.`;
console.log(quote);

quote = `In JavaScript you must escape the \\ character.`;
console.log(quote);

// String length
let length = title.length;
console.log(`Title length: ${length}`);

// Access specific characters
let thirdCharacter = firstName[2];
console.log(`3rd character: ${thirdCharacter}`);

// Changing case
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName);
let lowerCasename = fullName.toLowerCase();
console.log(lowerCasename);

// Finding a substring
let index1 = fullName.indexOf("elo");
console.log(`Index 1: ${index1}`);
let index2 = fullName.indexOf("nde");
console.log(`Index 2: ${index2}`);
let index3 = fullName.indexOf("abc"); // Finding a value that doesn't exist.
console.log(`Index 2: ${index3}`); // -1

// Does a string contain a substring
let doesContain = fullName.includes("phe");
console.log(doesContain); // True
