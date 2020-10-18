// console.log("I'm working, I'm JS. ImBeautiful. I'm worth it");
// let a = 221;
// let b = a - 5;
// a = 4;
// console.log(b, a);

/* Data Type */
// String
// const what = "Jayson";
// console.log(what);

// Boolean
// const what = true;

// Number
// const what = 222;

//f Float
// const what = 55.2;
// console.log(what);

// const Monday = "Mon";
// const Tuesday = "Tue";
// const Wednesday = "Wed";
// const Thursday = "Thu";
// const Friday = "Fri";
// const Saturday = "Sat";
// const Sunday = "Sun";

// console.log(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday);

/* Array and Object */

// Array
// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(daysOfWeek[5]);

// Object
// Object에서는 const라도 내용을 바꿀 수 있다.
// const personInfo = {
//   nmae: "Jayson",
//   age: 34,
//   gender: "Male",
//   city: "Daegu",
//   isHandsome: true,
//   favMovie: ["Porest Gump", "Oldboy"],
//   favFood: [
//     { name: "kimchi", fatty: false },
//     { name: "Cheese burger", fatty: true },
//   ],
// };
// console.log(personInfo);
// console.log(personInfo.gender);

// personInfo.gender = "Female";
// console.log(personInfo.gender);
// console.log("Greetiings Nicolas");
// console.log("Hello Jun");
// console.log("Hello Liyn");
// console.log("Hello Dal");

// function sayHello(name, age) {
//   //   console.log("Hello!", name + "!", "You have", age, "years of age.");
//   return `Hello! ${name} you are ${age} years old`;
// }

// const greetNicolas = sayHello("Nicolas", 15);

// console.log(greetNicolas);

/* Calculator */
// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   abstract: function (a, b) {
//     return a - b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };
// const plus = calculator.plus(5, 5);
// const abstract = calculator.abstract(5, 5);
// const multiply = calculator.multiply(5, 5);
// const divide = calculator.divide(5, 5);
// const power = calculator.power(5, 5);

// console.log(plus);
// console.log(abstract);
// console.log(multiply);
// console.log(divide);
// console.log(power);
const title = document.querySelector("#title");
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";
// console.dir(document);

const CLICKED_CLASS = "clicked";

function handleClick() {
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
