/*
    Classes
    - Classes are templates for creating objects.
    - They encapsulate data with code work on that data.
    - Classes in JavaScript are built on prototypes
      but also have some syntax and semantics that are
      unique to classes.

    - Supported Class features
      1. Constructors
      2. Static initialisation blocks
      3. Public methods and fields
      4. Static methods and fields
      5. Private methods and fields
      6. Inheritance
*/

// Creating a JavaScript Class
class CalenderDay {
    // Private fields
    #day;
    #month;
    #year

    // Constructor
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    // public method
    toString() {
        return `${this.day}-${this.month+1}-${this.year}`;
    }
}

// Using our JavaScript class
let day1 = new CalenderDay(1, 0, 2025);
console.log(day1.toString()); // 1-1-2025

