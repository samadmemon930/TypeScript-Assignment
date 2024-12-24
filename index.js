// Question 1 //
var username = "asad";
var age = 10;
var isStudent = true;
console.log("Name: ".concat(username, ", Age: ").concat(age, ", Student: ").concat(isStudent));
// Question 2 //
var Addnumber = function (a, b) {
    return a + b;
};
console.log(Addnumber(9, 7));
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
var product = [1, "Smartphone", 499.99];
function printProductDetails(product) {
    console.log("ID: ".concat(product[0]));
    console.log("Name: ".concat(product[1]));
    console.log("Price: ".concat(product[2]));
}
printProductDetails(product);
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
printUserDetails(user1); // User with email
printUserDetails(user2); // User without email and phone number
