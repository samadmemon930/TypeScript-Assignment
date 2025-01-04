// Question 1 //
let username: string = "asad";
let age: number = 10;
let isStudent: boolean = true;

console.log(`Name: ${username}, Age: ${age}, Student: ${isStudent}`);


// Question 2 //
const addNumbers = (a: number, b: number): number => {
  return a + b;
};
console.log(addNumbers(9, 7));


// Question 3 //
let Cities: string[] = ["Hyderabad", "Karachi", "Lahore", "Islamabad", "Faisalabad"]
function printCities(): void {
  for (let item of Cities) {
    console.log(item);
  }
}

printCities();


// Question 4 //
let productdetails: [number, string, number] = [1, "Smartphone", 499.99];
function printProductDetails(product: [number, string, number]) {
  console.log(`ID: ${product[0]}`);
  console.log(`Name: ${product[1]}`);
  console.log(`Price: ${product[2]}`);
}

printProductDetails(productdetails);


// Question 5 //
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("John"));


// Question 6 //
const calculateTotal = (price: number, discount?: number): number => {
  const finalDiscount = discount || 0;
  return price - (price * finalDiscount / 100);
}
console.log(calculateTotal(100));
console.log(calculateTotal(100, 10));


// Question 7 //
const printAddress = (street: string, city: string, country?: string): string => {
  if (country) {
    return `${street}, ${city}, ${country}`;
  } else {
    return `${street}, ${city}`;
  }
}

console.log(printAddress("Silverstone Street", "Los Angeles"));
console.log(printAddress("Highland Street", "London", "USA"));


// Question 8 //
interface User {
  username: string;
  email?: string;
  phoneNumber?: string;
}

function printUserDetails(user: User): void {
  // Print the required username
  console.log(`Username: ${user.username}`);

  // Check and print email if it exists
  if (user.email) {
    console.log(`Email: ${user.email}`);
  } else {
    console.log("Email: Not provided");
  }

  // Check and print phone number if it exists
  if (user.phoneNumber) {
    console.log(`Phone Number: ${user.phoneNumber}`);
  } else {
    console.log("Phone Number: Not provided");
  }
}

const user1: User = {
  username: "john_doe",
  email: "john@example.com"
};

const user2: User = {
  username: "jane_doe"
};

printUserDetails(user1);
printUserDetails(user2);


// Question 9 //
class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  // Method to update the quantity
  updateQuantity(newQuantity: number): void {
    this.quantity = newQuantity;
  }
  // Method to calculate the total price for the available stock
  calculateTotalPrice(): number {
    return this.price * this.quantity;
  }
}
// Create a new product instance
const product = new Product(1, 'Laptop', 1000, 5);
// Print the initial total price
console.log(`Total price for available stock: $${product.calculateTotalPrice()}`);
// Update the quantity
product.updateQuantity(10);
// Print the updated total price
console.log(`Updated total price for available stock: $${product.calculateTotalPrice()}`);


// Question 11 //
interface Car {
  brand: string;
  model: string;
  year: number;
}

const SummarizeCar = (car: Car): string => {
  return `This car is a ${car.year} ${car.brand} ${car.model}`
}

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
}

console.log(SummarizeCar(car));


// Question 12 //
class Products {
  id: number;
  username: string;
  price: number;
  quantity: number;

  constructor(id: number, username: string, price: number, quantity: number) {
    this.id = id;
    this.username = username;
    this.price = price;
    this.quantity = quantity;
  }

}

const TotalPrice = (cart: Products[]): number => {
  let totalprice = 0;
  for (let product of cart) {
    totalprice += product.price * product.quantity;
  }
  return totalprice;
}

const cart: Products[] = [
  new Products(1, "Laptop", 1000, 2),
  new Products(2, "Mouse", 25, 3),
  new Products(3, "Keyboard", 50, 1)
];

console.log(`Total price of all products in the cart: ${TotalPrice(cart)}`);


// Question 13 //
const findMax = (arr: number[]): number => {
  let max = arr[0];
  // Loop through the array and compare each number to find the largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([10, 20, 30, 5]));
console.log(findMax([-10, -20, -30, -5]));


// Question 14 //
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getfullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}

const person = new Person("John", "Doe");
console.log(person.getfullName());


// Question 15 //
enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

// Function that takes a Color and returns its string representation
function getColorString(color: Color): string {
  return color;
}

console.log(getColorString(Color.Red));
console.log(getColorString(Color.Green));
console.log(getColorString(Color.Blue));

// Question 16 //
interface Student {
  name: string;
  age: number;
  grade: number;
}

const AverageGrade = (students: Student[]): number => {
  let totalGrade = 0;
  for (let student of students) {
    totalGrade += student.grade;
  }
  return totalGrade / students.length;
}

const students: Student[] = [
  { name: "Ali", age: 20, grade: 90 },
  { name: "Ahmed", age: 21, grade: 70 },
  { name: "Asad", age: 22, grade: 50 },
];

console.log(AverageGrade(students));


// Question 18 //
interface Book {
  title: string;
  author: string;
  isAvailable: boolean;
}

class Library {
  name: string;
  books: Book[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  lendBook(title: string): void {
    const book = this.books.find(b => b.title === title && b.isAvailable);
    if (book) {
      book.isAvailable = false;
    } else {
      console.log(`Book not available: ${title}`);
    }
  }

  returnBook(title: string): void {
    const book = this.books.find(b => b.title === title && !b.isAvailable);
    if (book) {
      book.isAvailable = true;
    } else {
      console.log(`Book not found or not lent out: ${title}`);
    }
  }
}

// Example usage:
const myLibrary = new Library('City Library');
myLibrary.addBook({ title: '1984', author: 'George Orwell', isAvailable: true });
myLibrary.lendBook('1984');
myLibrary.returnBook('1984');


// Question 19 // 
function findUnique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

console.log(findUnique([1, 2, 3, 6, 5, 2, 5, 3]));
console.log(findUnique(["apple", "mango", "banana", "mango", "banana"]));


// Question 20 //
function truncateString(str: string, maxLength: number): string {
  // Check if the string length is greater than the maxLength
  if (str.length > maxLength) {
    // Truncate the string and add "..." at the end
    return str.substring(0, maxLength) + "...";
  } else {
    // Return the original string if it is shorter than or equal to maxLength
    return str;
  }
}

// Example usage:
console.log(truncateString("TypeScript is awesome!", 10));


// Question 21 //
interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
}

// Function to filter employees based on department
function filterEmployees(employees: Employee[], department: string): Employee[] {
  return employees.filter(employee => employee.department === department);
}

// Function to update specific properties of an employee
function updateEmployee(employee: Employee, updates: Partial<Employee>): Employee {
  return { ...employee, ...updates };
}

// Example usage
const employees: Employee[] = [
  { id: 1, name: 'Alice', department: 'HR', position: 'Manager' },
  { id: 2, name: 'Bob', department: 'IT', position: 'Developer' },
  { id: 3, name: 'Charlie', department: 'HR', position: 'Assistant' }
];

// Filter employees in HR department
const hrEmployees = filterEmployees(employees, 'HR');

// Update position of an employee
const updatedEmployee = updateEmployee(employees[0], { position: 'Senior Manager' });

console.log(hrEmployees);
console.log(updatedEmployee);


// Question 22 //
enum TrafficLight {
  Red = "Stop",
  Yellow = "Get Ready",
  Green = "Go"
}

// Function to return the action based on the traffic light color
function getAction(light: TrafficLight): string {
  return light;
}

console.log(getAction(TrafficLight.Red));
console.log(getAction(TrafficLight.Yellow));
console.log(getAction(TrafficLight.Green));












