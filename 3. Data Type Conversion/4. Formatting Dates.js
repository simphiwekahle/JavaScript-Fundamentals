// Creating a Date
let date1 = new Date("2025-01-01T18:25:19+02:00");
console.log(`Date: ${date1}`);

// Display the calender date
console.log(`Calender Date: ${date1.toDateString()}`);

// Display a locale-specific date string
console.log(`Locale South Africa: ${date1.toLocaleDateString('en-ZA')}`);
console.log(`Locale USA: ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale United Kingdom: ${date1.toLocaleDateString('en-GB')}`);

// Display just the time
console.log(`Date Time: ${date1.toTimeString()}`);

// Display a locale-specific time string
console.log(`Locale Time - South Africa: ${date1.toLocaleTimeString('en-ZA')}`);
console.log(`Locale Time - USA: ${date1.toLocaleTimeString('en-US')}`);
console.log(`Locale Time - United Kingdom: ${date1.toLocaleTimeString('en-GB')}`);

// Custom date string
let options = {
    dateStyle: "short",
    timeStyle: "short"
};

console.log(`Custom Date - South Africa: ${date1.toLocaleString('en-ZA', options)}`);
console.log(`Custom Date - USA: ${date1.toLocaleString('en-US', options)}`);
console.log(`Custom Date - United Kingdom: ${date1.toLocaleString('en-Gb', options)}`);

