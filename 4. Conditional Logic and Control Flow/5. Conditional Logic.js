// Employee object
let employee = {
    firstName: "Simphiwekahle",
    lastName: "Ndimande",
    startDate: new Date(2023, 6, 5),
    serviceYears: 2,
    isEmployed: true,
    department: "ICT",
    title: "Junior Software Developer"
}

// Module introduction example 
let badgeColor;

if (employee.serviceYears < 5) {
    employee.badgeColor = "blue";
}
else if (employee.serviceYears < 10) {
    employee.badgeColor = "yellow";
}
else if (employee.serviceYears < 15) {
    employee.badgeColor = "red";
}
else if (employee.serviceYears < 20) {
    employee.badgeColor = "purple";
}
else {
    employee.badgeColor = "silver";
}

console.log(`Years: ${employee.serviceYears} \nBadge Colour: ${employee.badgeColor}`);

// Evaluating multiple conditions for truthyness in all conditions
if (employee.serviceYears > 5 && employee.department === "ICT") {
    console.log(`Employee meets the criteria`);
}
else {
    console.log(`Employee did not meet the criteria`);
}

// Evaluating multiple conditions for truthyness in one or more conditions
if (employee.serviceYears > 10 || employee.title.startsWith("Junior")) {
    console.log(`Employee meets the criteria`);
}
else {
    console.log(`Employee did not meet the criteria`);
}

// Evaluating for a condition to NOT be true
if (employee.serviceYears > 20 && !employee.isEmployed) {
    console.log(`Employee is eligible for full retirement benefits`);
}
else {
    console.log(`Employee does not qualify for full retirement benefits`);
}

// Using the tenarary operator
if (employee.serviceYears > 10) {
    employee.annualbonus = 1000;
}
else {
    employee.annualbonus = 500;
}
console.log(`Employee's annual bonus is ${employee.annualbonus}`)

employee.annualbonus = (employee.serviceYears > 10) ? 3000 : 1500; // This is a tenarary operator example
console.log(`Employee's annual bonus is ${employee.annualbonus}`)
