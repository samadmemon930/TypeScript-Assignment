// Question 1 //

let username: string = "asad";
let age: number = 10;
let isStudent: boolean = true;

console.log(`Name: ${username}, Age: ${age}, Student: ${isStudent}`);



// Question 2 //
let Addnumber = (a: number, b: number): number => {
  return a + b;
};
console.log(Addnumber(9, 7));


// Question 3 //
let Cities: string[] = ["Hyderabad", "Karachi", "Lahore", "Islamabad", "Faisalabad"]
function printCities(): void {
  for (let item of Cities) {
    console.log(item);
  }
}

printCities();


// Question 4 //
let product: [number, string, number] = [1, "Smartphone", 499.99];
function printProductDetails(product: [number, string, number]) {
  console.log(`ID: ${product[0]}`);
  console.log(`Name: ${product[1]}`);
  console.log(`Price: ${product[2]}`);
}

printProductDetails(product);

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

console.log(printAddress("Silverstone Street","Los Angeles"));
console.log(printAddress("Highland Street","London","USA"));



// Question 8 //
interface User {
  username: string;      // Required property
  email?: string;        // Optional property
  phoneNumber?: string;  // Optional property
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

printUserDetails(user1); // User with email
printUserDetails(user2); // User without email and phone number













