// Creating dates
let date1 = new Date("2025-01-01"); 
console.log(date1); // Assumes I passed values for utc and converts to my time zone

let date2 = new Date("January 01, 2025");
console.log(date2); // Assumes I'm already in my time zone

let date3 = new Date(); // Current time/now
console.log(date3);

/*
    Standard DateTime format
    - Date = 2025-01-01
    - Time = T07:00
    - Time Zone = +02:00
*/
let date4 = new Date("2025-01-01T07:00:00.000+02:00");
console.log(date4); // Returns the specified value

/*
    Utilising the date constructor
    - Year = 2025
    - Month Index = 0 (January) 'Jan'
    - Day of the month = 1
    - Hour = 7
    - Minutes = 0
    - Seconds = 0 
*/
let date5 = new Date(2025, 0, 1, 7, 0, 0);
console.log(date5); // Returns the specified value plus Time Zone

// Accessing elements from a date
console.log(`Full Year: ${date5.getFullYear()}`); // 2025
console.log(`Month (zero-indexed): ${date5.getMonth()}`); // 0
console.log(`Day of month: ${date5.getDate()}`); // 1
console.log(`Hours: ${date5.getHours()}`); // 2

//Milliseconds from the epoch (1st January 1970)
console.log(`Time: ${date5.getTime()}`);
let date6 = new Date(0);
console.log(date6.toUTCString()); // 01 Jan 1970 00:00:00 GMT
