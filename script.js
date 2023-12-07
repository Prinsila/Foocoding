// 1. Strings!

console.log('task - 01');

// 1.1 Add the string to your file and log it.

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

// 1.2 Log the length of myString.

console.log("Length of myString:", myString.length);

// 1.3 Remove commas and replace them with spaces.

myString = myString.replace(/,/g, ' ');

// 1.4 Log myString to see if you succeeded.
console.log(myString);

// 2. Ayyays!

console.log('task - 02');

// 2.1 Add Mauro's favorite animal 'turtle' to the existing array.
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");

// 2.2 Log the new array.
console.log(favoriteAnimals);

// 2.3 Add Jim's favorite animal 'meerkat' after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, "meerkat");

// 2.4 Explain the new value of the array.
console.log("The new value of the array is: blowfish, meerkat, capricorn, giraffe");

// 2.5 Log the new array.
console.log(favoriteAnimals);

// 2.6 Log the length of the array.
console.log("The array has a length of: " + favoriteAnimals.length);

// 2.7 Delete 'giraffe' from the array.
favoriteAnimals.splice(favoriteAnimals.indexOf("giraffe"), 1);

// 2.8 Log the new array.
console.log(favoriteAnimals);

// 2.9 Find the index of 'meerkat'.
const meerkatIndex = favoriteAnimals.indexOf("meerkat");

// 2.10 Log the index of 'meerkat'.
console.log("The item you are looking for is at index: " + meerkatIndex);

console.log('task - 03');
// Create a function that takes 3 arguments and returns the sum of the these arguments.
const sumThree = (a, b, c) => a + b + c;
console.log(sumThree(1, 2, 3));

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

const colorCar = color => console.log(`a ${color} car`);
colorCar("red");

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const myObject = { prop1: "value1", prop2: "value2", prop3: "value3" };

const printProperties = obj => {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
};

printProperties(myObject);


// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

const vehicleType = (color, code) => console.log(`a ${color} ${code === 1 ? "car" : "motorbike"}`);
vehicleType("blue", 2); 

// Can you write the following without the if statement, but with just as a single line with console.log(...);?

console.log(3 === 3 ? "yes" : "no");

// Create a function called vehicle, like before, but takes another parameter cal led age, so that vehicle("blue", 1, 5) prints 'a blue used car'

const vehicle = (color, code, age) => {
  const vehicleTypes = ["car", "motorbike", "bike", "caravan"];
  const vehicleType = vehicleTypes[code - 1];
  const condition = age > 0 ? "used" : "new";
  console.log(`a ${color} ${condition} ${vehicleType}`);
};
vehicle("blue", 1, 5); 

// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
const vehicles = ["motorbike", "caravan", "bike"];
console.log(vehicles[2]); 

// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

vehicle("green", 3, 1);

// Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

let advertisement = "Amazing Joe's Garage, we service ";
for (let i = 0; i < vehicles.length; i++) {
  advertisement += vehicles[i] + "s";
  if (i < vehicles.length - 2) {
    advertisement += ", ";
  } else if (i === vehicles.length - 2) {
    advertisement += " and ";
  }
}
advertisement += ".";
console.log(advertisement);

//What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
// Create an empty object.
const emptyObject = {};

// Create an object that contains the teachers that you have had so far for the different modules.

const teachers = {
  mathTeacher: {
    name: "Mr. John",
    module: "Mathematics",
    students: ["Anna ", "tom", "alex"],
    languagesTaught: ["Mathematics"],
  },
  englishTeacher: {
    name: "Ms. Sara",
    module: "English Literature",
    students: ["sofia", "lina", "linda "],
    languagesTaught: ["English"],
  },
  scienceTeacher: {
    name: "Dr. sam",
    module: "Physics",
    students: ["mathia", "maria", "nico"],
    languagesTaught: ["Physics"],
  },
};

// Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y); 
console.log(x === y); 
console.log(z == y); 
console.log(z == x); 

// Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2.foo = "baz";
console.log(o3.foo); 

o1.foo = "qux";
console.log(o3.foo); 

// What does the following code return? (And why?)
let bar = 42;
console.log(typeof typeof bar); 



