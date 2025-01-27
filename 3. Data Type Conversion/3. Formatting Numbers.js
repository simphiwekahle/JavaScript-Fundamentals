/*
    Formatting Numvers
    - Use Cases
    -- Rounding a number to an integer value.
    -- Limiting the number of decimal places to display.
    -- Output a number using a format specific to a
       certain geographic area.
    -- Outputting a number for a specific currency format for an area.

    - Locale
    -- In computing, a local is a set of parameters that defines the
       user's language, region and any special variant preferences
       that the user wants to see in their user interface.
    -- Usually a locale identifier consists of at least a language
       code and a country/region code.
    -- Locale is an important aspect of "i18n" (internationalization).
    
    -- Basic Locale Code
    --- "en-US" (example)
    * en ~ language
    * US ~ region
*/

// Rounding number to an integer
let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`); 
console.log(`Ceiling: ${Math.ceil(num1)}`); // Give the next integer past past the given value
console.log(`Floor: ${Math.floor(num1)}`); // Give the integer that was previously passed

// Fixed
let fixed = num1.toFixed(3);
console.log(`Fixed Type: ${typeof(fixed)} Fixed Value: ${fixed}`);

// Display in locale-specific format
let num2 = 1_000_000;
console.log(`South Africa: ${num2.toLocaleString('en-ZA')}`); // 1 000 000
console.log(`USA: ${num2.toLocaleString('en-US')}`); // 1,000,000

// Intl Format Currency
let salary = 150000;
let monthlySalary = salary / 12;
console.log(`Montly Salary: ${monthlySalary.toFixed(2)}`);

let formatterRsa = new Intl.NumberFormat(
    'en-ZA', // Locale code
    {
        style: 'currency',
        currency: 'ZAR' // Local code's currency
    });
console.log(`South African Rands: ${formatterRsa.format(monthlySalary)}`); // R 12 500,00

let formatterUsa = new Intl.NumberFormat(
    'en-US',
    {
        style: 'currency',
        currency: 'USD'
    });
console.log(`US Dollars: ${formatterUsa.format(monthlySalary)}`); // $12,500.00
