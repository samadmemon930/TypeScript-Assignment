// // Question 1 //

// let username: string = "asad";
// let age: number = 10;
// let isStudent: boolean = true;

// console.log(`Name: ${username}, Age: ${age}, Student: ${isStudent}`);


// // Question 2 //
// let Addnumber = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(Addnumber(9, 7));


// // Question 3 //
// let Cities: string[] = ["Hyderabad", "Karachi", "Lahore", "Islamabad", "Faisalabad"]
// function printCities(): void {
//   for (let item of Cities) {
//     console.log(item);
//   }
// }

// printCities();


// // Question 4 //
// let product: [number, string, number] = [1, "Smartphone", 499.99];
// function printProductDetails(product: [number, string, number]) {
//   console.log(`ID: ${product[0]}`);
//   console.log(`Name: ${product[1]}`);
//   console.log(`Price: ${product[2]}`);
// }

// printProductDetails(product);


// // Question 5 //
// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(greet("John"));


// // Question 6 //
// const calculateTotal = (price: number, discount?: number): number => {
//   const finalDiscount = discount || 0;
//   return price - (price * finalDiscount / 100);
// }
// console.log(calculateTotal(100));
// console.log(calculateTotal(100, 10));


// // Question 7 //
// const printAddress = (street: string, city: string, country?: string): string => {
//   if (country) {
//     return `${street}, ${city}, ${country}`;
//   } else {
//     return `${street}, ${city}`;
//   }
// }

// console.log(printAddress("Silverstone Street", "Los Angeles"));
// console.log(printAddress("Highland Street", "London", "USA"));



// // Question 8 //
// interface User {
//   username: string;
//   email?: string;
//   phoneNumber?: string;
// }

// function printUserDetails(user: User): void {
//   // Print the required username
//   console.log(`Username: ${user.username}`);

//   // Check and print email if it exists
//   if (user.email) {
//     console.log(`Email: ${user.email}`);
//   } else {
//     console.log("Email: Not provided");
//   }

//   // Check and print phone number if it exists
//   if (user.phoneNumber) {
//     console.log(`Phone Number: ${user.phoneNumber}`);
//   } else {
//     console.log("Phone Number: Not provided");
//   }
// }

// const user1: User = {
//   username: "john_doe",
//   email: "john@example.com"
// };

// const user2: User = {
//   username: "jane_doe"
// };

// printUserDetails(user1); // User with email
// printUserDetails(user2); // User without email and phone number


// // Question 9 //
// class Product {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;

//   constructor(id: number, name: string, price: number, quantity: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;


//   }
//   updateQuantity=(qty:number): void =>{
//     this.quantity += qty;
//   }

//   totalPrice = () :number =>{
//     return this.price*this.quantity;
//   }

// }

// var product1 = new Product(1,"ali",40,2)
// var product2 = new Product(2,"M.ali",30,1)

// product1.updateQuantity(5);
// console.log(product1.totalPrice());

// product2.updateQuantity(10);
// console.log(product2.totalPrice());


// // Question 11 //
// interface Car {
//   brand: string;
//   model: string;
//   year: number;
// }

// const SummarizeCar =(car:Car):string => {
// return `This car is a ${car.year} ${car.brand} ${car.model}`
// }

// const car:Car ={
//   brand: "Toyota",
//   model:"Corolla",
//   year:2020
// }

// console.log(SummarizeCar(car));


// // Question 12 //
// class Products {
//   id: number;
//   username: string;
//   price: number;
//   quantity: number;

//   constructor(id: number, username: string, price: number, quantity: number) {
//     this.id = id;
//     this.username = username;
//     this.price = price;
//     this.quantity = quantity;

//   }

// }

// const TotalPrice =(cart:Products[]):number=>{
//   let totalprice = 0;
//   for(let product of cart){
//     totalprice += product.price*product.quantity;
//   }
//   return totalprice;
// }

// const cart: Products[] = [
//   new Products(1, "Laptop", 1000, 2),
//   new Products(2, "Mouse", 25, 3),
//   new Products(3, "Keyboard", 50, 1)
// ];

// console.log(`Total price of all products in the cart: ${TotalPrice(cart)}`);


// // Question 13 //
// function findMax(numbers: number[]): number {
//   if (numbers.length === 0) {
//       throw new Error("Array is empty");
//   }
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] > max) {
//           max = numbers[i];
//       }
//   }
//   return max;
// }

// console.log(findMax([1, 2, 3, 4, 5]));
// console.log(findMax([1,3,9,11,5]));



// // Question 14 //
// class Person {
//   firstName:string;
//   lastName : string;


//   constructor(firstName:string,lastName : string){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getfullName () :string {
//   return `${this.firstName} ${this.lastName}`;
// }

// }

// const person = new Person("John", "Doe");

// console.log(person.getfullName());

// Question 15 //
// enum Color {
//     Red,
//     Green,
//     Blue
// }

// function colorToString(color: Color): string {
//     switch (color) {
//         case Color.Red:
//             return "Red";
//         case Color.Green:
//             return "Green";
//         case Color.Blue:
//             return "Blue";
//         default:
//             return "Unknown Color";
//     }
// }

// console.log(colorToString(Color.Red));   
// console.log(colorToString(Color.Green)); 
// console.log(colorToString(Color.Blue));  


// Question 17 //




// // Question 16 //
// interface Student {
//   name:string;
//   age:number;
//   grade:number;
// }

// const AverageGrade =(students:Student[]):number =>{
//   let totalGrade = 0;
//   for(let student of students){
//     totalGrade += student.grade;
//   }
//   return totalGrade/students.length;
  
// }

// const students:Student[]=[
// {name:"Ali",age:20,grade:90},
// {name:"Ahmed",age:21,grade:70},
// {name:"Asad",age:22,grade:50},
// ];

// console.log(AverageGrade(students));


// Question 22 //
// Define the TrafficLight enum with values Red, Yellow, and Green
enum TrafficLight {
    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
  }
  
  function getAction(light: TrafficLight): string {
    switch (light) {
      case TrafficLight.Red:
        return "Stop";
      case TrafficLight.Yellow:
        return "Get Ready";
      case TrafficLight.Green:
        return "Go";
      default:
        return "Unknown light"; // This handles any unexpected values
    }
  }
  
  console.log(getAction(TrafficLight.Red)); // Output: "Stop"
  console.log(getAction(TrafficLight.Yellow)); // Output: "Get Ready"
  console.log(getAction(TrafficLight.Green)); // Output: "Go"
  









