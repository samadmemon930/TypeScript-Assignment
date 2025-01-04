var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Question 1 //
var username = "asad";
var age = 10;
var isStudent = true;
console.log("Name: ".concat(username, ", Age: ").concat(age, ", Student: ").concat(isStudent));
// Question 2 //
var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(9, 7));
// Question 3 //
var Cities = ["Hyderabad", "Karachi", "Lahore", "Islamabad", "Faisalabad"];
function printCities() {
    for (var _i = 0, Cities_1 = Cities; _i < Cities_1.length; _i++) {
        var item = Cities_1[_i];
        console.log(item);
    }
}
printCities();
// Question 4 //
var productdetails = [1, "Smartphone", 499.99];
function printProductDetails(product) {
    console.log("ID: ".concat(product[0]));
    console.log("Name: ".concat(product[1]));
    console.log("Price: ".concat(product[2]));
}
printProductDetails(productdetails);
// Question 5 //
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("John"));
// Question 6 //
var calculateTotal = function (price, discount) {
    var finalDiscount = discount || 0;
    return price - (price * finalDiscount / 100);
};
console.log(calculateTotal(100));
console.log(calculateTotal(100, 10));
// Question 7 //
var printAddress = function (street, city, country) {
    if (country) {
        return "".concat(street, ", ").concat(city, ", ").concat(country);
    }
    else {
        return "".concat(street, ", ").concat(city);
    }
};
console.log(printAddress("Silverstone Street", "Los Angeles"));
console.log(printAddress("Highland Street", "London", "USA"));
function printUserDetails(user) {
    // Print the required username
    console.log("Username: ".concat(user.username));
    // Check and print email if it exists
    if (user.email) {
        console.log("Email: ".concat(user.email));
    }
    else {
        console.log("Email: Not provided");
    }
    // Check and print phone number if it exists
    if (user.phoneNumber) {
        console.log("Phone Number: ".concat(user.phoneNumber));
    }
    else {
        console.log("Phone Number: Not provided");
    }
}
var user1 = {
    username: "john_doe",
    email: "john@example.com"
};
var user2 = {
    username: "jane_doe"
};
printUserDetails(user1);
printUserDetails(user2);
// Question 9 //
var Product = /** @class */ (function () {
    function Product(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // Method to update the quantity
    Product.prototype.updateQuantity = function (newQuantity) {
        this.quantity = newQuantity;
    };
    // Method to calculate the total price for the available stock
    Product.prototype.calculateTotalPrice = function () {
        return this.price * this.quantity;
    };
    return Product;
}());
// Create a new product instance
var product = new Product(1, 'Laptop', 1000, 5);
// Print the initial total price
console.log("Total price for available stock: $".concat(product.calculateTotalPrice()));
// Update the quantity
product.updateQuantity(10);
// Print the updated total price
console.log("Updated total price for available stock: $".concat(product.calculateTotalPrice()));
var SummarizeCar = function (car) {
    return "This car is a ".concat(car.year, " ").concat(car.brand, " ").concat(car.model);
};
var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(SummarizeCar(car));
// Question 12 //
var Products = /** @class */ (function () {
    function Products(id, username, price, quantity) {
        this.id = id;
        this.username = username;
        this.price = price;
        this.quantity = quantity;
    }
    return Products;
}());
var TotalPrice = function (cart) {
    var totalprice = 0;
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var product_1 = cart_1[_i];
        totalprice += product_1.price * product_1.quantity;
    }
    return totalprice;
};
var cart = [
    new Products(1, "Laptop", 1000, 2),
    new Products(2, "Mouse", 25, 3),
    new Products(3, "Keyboard", 50, 1)
];
console.log("Total price of all products in the cart: ".concat(TotalPrice(cart)));
// Question 13 //
var findMax = function (arr) {
    var max = arr[0];
    // Loop through the array and compare each number to find the largest
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
console.log(findMax([10, 20, 30, 5]));
console.log(findMax([-10, -20, -30, -5]));
// Question 14 //
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getfullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person("John", "Doe");
console.log(person.getfullName());
// Question 15 //
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
// Function that takes a Color and returns its string representation
function getColorString(color) {
    return color;
}
console.log(getColorString(Color.Red));
console.log(getColorString(Color.Green));
console.log(getColorString(Color.Blue));
var AverageGrade = function (students) {
    var totalGrade = 0;
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        totalGrade += student.grade;
    }
    return totalGrade / students.length;
};
var students = [
    { name: "Ali", age: 20, grade: 90 },
    { name: "Ahmed", age: 21, grade: 70 },
    { name: "Asad", age: 22, grade: 50 },
];
console.log(AverageGrade(students));
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
function findUnique(arr) {
    return Array.from(new Set(arr));
}
console.log(findUnique([1, 2, 3, 6, 5, 2, 5, 3]));
console.log(findUnique(["apple", "mango", "banana", "mango", "banana"]));
// Question 20 //
function truncateString(str, maxLength) {
    // Check if the string length is greater than the maxLength
    if (str.length > maxLength) {
        // Truncate the string and add "..." at the end
        return str.substring(0, maxLength) + "...";
    }
    else {
        // Return the original string if it is shorter than or equal to maxLength
        return str;
    }
}
// Example usage:
console.log(truncateString("TypeScript is awesome!", 10));
// Function to filter employees based on department
function filterEmployees(employees, department) {
    return employees.filter(function (employee) { return employee.department === department; });
}
// Function to update specific properties of an employee
function updateEmployee(employee, updates) {
    return __assign(__assign({}, employee), updates);
}
// Example usage
var employees = [
    { id: 1, name: 'Alice', department: 'HR', position: 'Manager' },
    { id: 2, name: 'Bob', department: 'IT', position: 'Developer' },
    { id: 3, name: 'Charlie', department: 'HR', position: 'Assistant' }
];
// Filter employees in HR department
var hrEmployees = filterEmployees(employees, 'HR');
// Update position of an employee
var updatedEmployee = updateEmployee(employees[0], { position: 'Senior Manager' });
console.log(hrEmployees);
console.log(updatedEmployee);
// Question 22 //
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Stop";
    TrafficLight["Yellow"] = "Get Ready";
    TrafficLight["Green"] = "Go";
})(TrafficLight || (TrafficLight = {}));
// Function to return the action based on the traffic light color
function getAction(light) {
    return light;
}
console.log(getAction(TrafficLight.Red));
console.log(getAction(TrafficLight.Yellow));
console.log(getAction(TrafficLight.Green));
