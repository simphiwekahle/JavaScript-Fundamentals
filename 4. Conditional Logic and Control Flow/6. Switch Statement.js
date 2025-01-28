// Employee object
let employee = {
    firstName: "Simphiwekahle",
    lastName: "Ndimande",
    startDate: new Date(2023, 6, 5),
    serviceYears: 2,
    isEmployed: true,
    department: "ICT",
    title: "Junior Software Developer"
};

switch (employee.department) {
    case "ICT": 
        console.log(`Meet in Building 1`);
        break;
    case "Marketing":
        console.log(`Meet in Building 2`);
        break;
    case "HR":
        console.log(`Meet in Building 1`);
        break;
    default:
        console.log(`Meet in Building 3`);
};

/*
    Switch Statements
    - The switch statement evluates an expression, matching the
      expression's value against a series of case clauses with
      a matching value, until a break statement is encountered.
    - The default clause of a switch statement will be jumped
      to if no case matches the expression's value.
*/

switch (employee.department) {
    case "HR":
    case "ICT":
        console.log(`Meet in building 1`);
        break;
        case "Marketing":
            console.log(`Meet in Building 2`);
            break;
        default:
            console.log(`Meet in Building 3`);
};