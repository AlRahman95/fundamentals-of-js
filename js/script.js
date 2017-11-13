//Declares variable
var myVar
//Assigns a floating point number value to the variable
var myVar = 0.7;

//Declares a variable and assigns a string value with single quotes
var myName = 'Altafur';

//Declares a variable and assigns a string value with double quotes
var mySentence = "What's up";
var newSentence = "and he said \"What's up\" to me";

//Strings cannot contain line breaks by default
var myLongString = "This actually isn't too long."

//Booleans are either true or false
var myBoolean = false;

var numA = 14;
var numB = 27;

//Addition in js is done with the + symbol
var sumOfAandB = numA + numB;

//This reassigns the value of numA variable to 32, and does not affect the value of sumOfAandB because it is after that variable because js reads from top to bottom. Therefore, sumOfAandB is still 41, but numAminusNumB is affected with the new value.
numA = 32;

//Substraction
var numAminusNumB = numA - numB;

//Multiplication is done through an *
var numC = 3 * 3;

//Division is done with /
var numD = 4/2;

//Exponents done with double *
var myExponent = 2 ** 4;

//Modulus is done with a % returning the remainder after division
var myModulus = 5 % 2;

//This is concatenation, adding strings together; spaces must be put manually using quotes
var myFullName = myName + " " + "Rahman";

//This creates a variable and assigns it to be an object
var me = {
  //Bbjects are made of named key value pairs
  name: "Altafur Rahman",
  age: 22,
  isAwesome: true,
  head: {
    eyes: 2,
    eyeColor: "brown",
    hairColor: "black",
  }
};

//Properties on the me object would generally be accessed using dot notation
//me.name would return Altafur Rahman, me.head.eyes woudl return 2

console.log(me.age);

//This sets the age property on the me object to the value of 30 which means you can change and reassign values of properties in objects using dot syntax
me.age = 23;

console.log(me.age);

//Arrays are key value pairs where the key is a number, arrays are created using [], and each element within the array is separated by a comma
var myArr = [55, "Tiger", true, me];

//Arrays in JavaScript start with a 0 index; to access elements within an array use [] with the index number; myArr[0] would be 55, myArr[2] would be true

console.log(myArr[0]);

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday"]

//Objects can hold arrays as the value for properties
//This adds a hobbies porperty to the me object and sets it to be an array so it can hold multiple values
me.hobbies = ["Code", "Music", "Food", "Games"];

console.log(me.hobbies[0]);

var something;
console.log(something);
//Something is undefined; the variable has been declared but a value has not been set

//If js encounters a variable that does not exists it will throw an error and stop executing any further script by default

//Null is nothing
var nothing = null;

//This is a function declaration that creates a function called sayHello
//Function declarations do not end with a semicolon
function sayHello() {
  console.log("Welcome to JavaScript City dude!");
}

//Calls or invokes the function to execute the code block within the function
sayHello();

//Function declarations are hoisted at the top of the document, so when invoked before it is declared, it will still run because the browser renders the function at the top and it is called afterwards
sayHelloTo("meee");

//This function takes in an argument called named. This argument will be set to a value once the function is invoked
//Variables created within a function are only available within that Function; this is called function scope
//Inside the function is an argument
function sayHelloTo(name) {
  var message = "Welcome to JavaScript " + name + "!";
  console.log(message);
}

//When you are invoking the function you are using a parameter
sayHelloTo("Bob Ross")
sayHelloTo(myFullName);
sayHelloTo();

//Function expressions are not hoisted to the top of the document. So if you invoke a function expression that has not been defined yet, or invoke it before it is defined, it will result in an error
// sumNums();

//This is a function expression that creates a function called sumNums
var sumNums = function(firstNum, secondNum) {
  var sum = firstNum + secondNum;
  //This will return the value of the sum variabe to where the function is called
  return sum;
  //Once a return statement is executed, no further code after it will be executed
  console.log("This will not display in the console");
};

//The value 4 is returned from the function, but it is not displayed in the console because the log method is not called
sumNums(2,2);

//Using the log method, the sumNums function will display the value that is returned in the console
console.log(sumNums(2,2));

//Returns the value from sumNums to the variable mySum
var mySum = sumNums(923, 13454);


var apollo = {
  isDog: true,
  breed: "mutt",
  legs: 4,
  age: 2,
  toys: ["Mrs Moose", "Bone", "Half Giraffe"],
  //This is the speak method on the apollo object, in JS methods are functions that are the property of an object
  speak: function() {
    console.log("woof woof");
  },
  sayHiTo: function(name, age) {
    console.log("Hi " + name + " woof woof!" + " You're " + age);
  }
};

//This invokes the speak method on the apollo object
apollo.speak();

//With functions that use multiple parameters, the order matters; supply the paramters in the same order in which the arguments are listed where the function is defined
apollo.sayHiTo("Stella", 2);

//The console is a global object created within the browser, and log is a method created within that object. Log can be accessed using the console object through dot syntax
console.log(console);
