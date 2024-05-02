
// $(document).ready(function () {
//   $("button").click(
//     function () {
//       $("p").text("Hello World!");
//     }
//   )
// });


// Path: script.js

// $(document).ready(function () {
//   // $("btn").click(
//   //   function () {
//   //     $("p").text("Hello World!");
//   //   }
//   // );
//   // console.log("Hello World!");
//   // $("p").text("Hello World!");
//   $("#btn").click(
//     function () {
//       $("p").text("Hello World!");
//     }
//   );
// });

// var json_obj = {
//   "name": "John",
//   "age": 30,
//   "city": "New York",
//   "Language": ["English", "French"],
//   "married": false,
//   "spouse": null,
//   "children": [
//       {
//           "name": "Jane",
//           "age": 5
//       },
//       {
//           "name": "John",
//           "age": 7
//       }
//   ]
// };

// console.log(json_obj["children"][0]);
// json.parse() & json.stringify()

// welcome()
// function welcome() {
//   document.getElementById("welcomeId").innerHTML = "Hello World!";
// }


// var reDeclarableReAssignable = 10;
// reDeclarableReAssignable = 20;
// var reDeclarableReAssignable = 30;
// reDeclarableReAssignable = 40;

// let reAssignable = 30;
// reAssignable = 40; // cant declare again
// // let reAssignable = 50; // cant declare again

// const z = 40;
// // z = 50; // Error


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }; // Object with Object Methods
// person.age = 51;
// person["age"] = 52;
// console.log(person.age);

// console.log(person.fullName());


// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46; 

// console.log(person["firstName"]);
// console.log(person[0]); // undefined


// fetch('https://api.github.com/users')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// promises: without async/await


// async function myFunction() {
//   const r = await fetch('https://api.github.com/users');
//   const d = await r.json();
//   console.log(d);
//   const d0 = d[0];
//   console.log(d0);
// }

// myFunction();


// const nums = [1, 2, 3, 4, 5, 5, 30, 76];
// // const evens = nums.filter(n => n % 2 === 0);

// const maxVal = nums.reduce((max, value) => {
//   return Math.max(max, value);
// })

console.log('0' == false);
