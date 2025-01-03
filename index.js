// // Question 1 //
// let username: string = "asad";
// let age: number = 10;
// let isStudent: boolean = true;
var Library = /** @class */ (function () {
    function Library(name) {
        this.books = [];
        this.name = name;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.lendBook = function (title) {
        var book = this.books.find(function (b) { return b.title === title && b.isAvailable; });
        if (book) {
            book.isAvailable = false;
        }
        else {
            console.log("Book not available: ".concat(title));
        }
    };
    Library.prototype.returnBook = function (title) {
        var book = this.books.find(function (b) { return b.title === title && !b.isAvailable; });
        if (book) {
            book.isAvailable = true;
        }
        else {
            console.log("Book not found or not lent out: ".concat(title));
        }
    };
    return Library;
}());
// Example usage:
var myLibrary = new Library('City Library');
myLibrary.addBook({ title: '1984', author: 'George Orwell', isAvailable: true });
myLibrary.lendBook('1984');
myLibrary.returnBook('1984');
// Question 19 //
// function findUnique<T>(arr: T[]): T[] {
//     return [...new Set(arr)]; // Use spread syntax to convert Set back to an array
// }
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(findUnique(numbers)); 
// const strings = ['apple', 'banana', 'apple', 'orange'];
// console.log(findUnique(strings)); 
// Question 20 //
// function truncateString(str: string, maxLength: number): string {
//   // Check if the string length is greater than the maxLength
//   if (str.length > maxLength) {
//     // Truncate the string and add "..." at the end
//     return str.substring(0, maxLength) + "...";
//   } else {
//     // Return the original string if it is shorter than or equal to maxLength
//     return str;
//   }
// }
// // Example usage:
// console.log(truncateString("TypeScript is awesome!", 10)); 
// Question 21 //
// interface Employee {
//   id: number;
//   name: string;
//   department: string;
//   position: string;
// }
// // Function to filter employees based on department
// function filterEmployees(employees: Employee[], department: string): Employee[] {
//   return employees.filter(employee => employee.department === department);
// }
// // Function to update specific properties of an employee
// function updateEmployee(employee: Employee, updates: Partial<Employee>): Employee {
//   return { ...employee, ...updates };
// }
// // Example usage
// const employees: Employee[] = [
//   { id: 1, name: 'Alice', department: 'HR', position: 'Manager' },
//   { id: 2, name: 'Bob', department: 'IT', position: 'Developer' },
//   { id: 3, name: 'Charlie', department: 'HR', position: 'Assistant' }
// ];
// // Filter employees in HR department
// const hrEmployees = filterEmployees(employees, 'HR');
// // Update position of an employee
// const updatedEmployee = updateEmployee(employees[0], { position: 'Senior Manager' });
// console.log(hrEmployees);
// console.log(updatedEmployee);
// Question 22 //
// enum TrafficLight {
//     Red = "Stop",
//     Yellow = "Get Ready",
//     Green = "Go"
// }
// // Function to return the action based on the traffic light color
// function getAction(light: TrafficLight): string {
//     return light; 
// }
// console.log(getAction(TrafficLight.Red));    
// console.log(getAction(TrafficLight.Yellow)); 
// console.log(getAction(TrafficLight.Green));  
