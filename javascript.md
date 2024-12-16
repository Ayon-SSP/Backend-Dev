# 🔰 Javascript

### Implementing Java script!!!
> can be done in 3 ways:
1. \<body>
2. \<head>
3. External file.

```html
<!DOCTYPE html>
<head>
  <title>Javascript cheatsheet</title>
  <script>
    alert('1. Hello, World!');
  </script> 
  <script src="script.js" [async/defer] ></script>
</head>
<body>

  ...
  <script>
    alert('2. Hello, World!');
  </script>
  <script src="script.js"></script> // best practice dont use this in head. cause it will block the rendering of the page. and if want to add use async or defer. eg. 
  /*
    <script src="script.js" async></script>
    <script src="script.js" defer></script>
  */
</body>
</html>
```
### Simple program
```html
  <button id="btn" onclick="welcome()">👋 Hi</button>
  <p id="welcomeId"></p>

 <script>
    function welcome() {
      document.getElementById("welcomeId").innerHTML = "Hello World!";
    }
  </script>
```
### Variables
> For more detail go to W3Schools
#### Types:
```javascript
// var
var reDeclarableReAssignable = 10;
reDeclarableReAssignable = 20;
var reDeclarableReAssignable = 30;
reDeclarableReAssignable = 40;
reDeclarableReAssignable = "Hi this is string!";

// let
let reAssignable = 30;
reAssignable = 40; // cant declare again
reAssignable = "Hi this is string!";
reAssignable = true;
reAssignable = 4;
// let reAssignable = 50; // cant declare again

// const
// Use const when you declare: Array, Object, Function, RegExp
const z = 40;
// reference is constant, not the value which are in the Heap.
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
const car = {type:"Fiat", model:"500", color:"white"};

const x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10



const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed


// z = 50; // Error
```
#### Data Types:
```javascript
let x = 10; // Number
let y = 3.14; // Number
let x = BigInt("123456789012345678901234567890"); // BigInt
let z = "Hello"; // String
let a = 'Hello'; // String
let b = true; // Boolean
let c = false; // Boolean
let d = null; // Null
let e; // Undefined
let f = [1, 2, 3, 4, 5]; <or> = new Array("Saab", "Volvo", "BMW");// Array
let g = {name: "John", age: 30}; // Object
const date = new Date("2022-03-25"); // Date
const letters = new Set(["a","b","c"]); // Set
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]); // Map
fruits.set("apples", 200);
fruits.get("apples");


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  salaryIncrement: function(percentage) {
    return this.salary + (this.salary * percentage / 100);
  }
}; // Object with Object Methods
person.age = 51; person["age"] = 52;
console.log(person.age);
console.log(person.fullName());

x = new String(); or y = new Number();
// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.



```
#### Operators:
> [Link](https://www.w3schools.com/js/js_operators.asp)
```javascript
// =, +, -, *, /, %, ++, --, +=, -=, *=, /=, %=, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ?:
// ==	equal to
// ===	equal value and equal type
let x, y = 5, z = 12;
x = y + z; // 17
let sum = 4 + 7+ " "  + "Doe" + 7 + 9 + 0;
sum -> 11 Doe790

typeof(5) -> number // Returns the type of a variable
```
```js
0 == false   // true
0 === false  // false, because they are of a different type
1 == "1"     // true, automatic type conversion for value only
1 === "1"    // false, because they are of a different type
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false

console.log(0 || 1); console.log("" || "a"); console.log(NaN || 1);
// 1				 "a"					 1
console.log(0 ?? 1); console.log("" ?? "a"); console.log(Nan ?? 1);
// 0				 ""						 Nan
console.log(undefined || 1);
// 1
console.log(undefined ?? 1);
// 1
```

#### JavaScript Identifiers / Names:
1. A letter (A-Z or a-z)
1. A dollar sign ($)
1. Or an underscore (_)


### JavaScript Display Possibilities
```js
console.log("Hello, World!"); // Console
window.alert("Hello, World!"); // Alert
window.print(); // Print in pdf or any other format
document.write("Hello, World!"); // Document
.innerHTML = "Hello, World!"; // Inner HTML
```
### JavaScript Syntax
```js
// Conditional Statements
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

### Arrays
```js
// Arrays
let cars = ["Saab", "Volvo", "BMW"];
let cars = new Array("Saab", "Volvo", "BMW");
cars.push("Audi"); or cars[cars.length] = "Audi";
cars.push[100] = "OOOO"; // ["Saab", "Volvo", "BMW", undefined, undefined, ...., "OOOO"]
cars[0] = "Toyota";
cars.length;
cars.sort();

// iteration display
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
} text += "</ul>";
let text = "<ul>";

// forEach() method
let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// Objects: If you use named indexes, JavaScript will redefine the array to an object.
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 

console.log(person["firstName"]); // John
console.log(person[0]); // undefined

[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat(['c']); // ['a', 'b', 'c']
['a', 'b', 'c'].join('-'); // a-b-c
['a', 'b', 'c'].slice(1, 3); // ['a','b']
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].lastindexOf('c'); // 0
['a', 'b', 'c','d','e'].splice(2, 0, "lol", "gg");// ['a', 'b','lol','gg', 'c','d','e']   0 - dont remove 1- to remov 
['a', 'b', 'c'].includes('c'); // true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
[2, 3, 4, 5].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // 7
[].valueOf()
[].toString() element becoms string
```

### Functions
```js
// Functions
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}


// auto call (funk reference)();
(function () {
  let x = "Hello!!";  // I will invoke myself
})();

// Arrow Functions
const x = (x, y) => x * y;


// Function Arguments Object
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}


```


### Classes
```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";




// Inheritance
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
```

### Error
Error in JavaScript 
  1. syntax errors 
  2. runtime errors 
  3. logical errors


```js
<p id="demo"></p>

<script>
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>
```

### DOM(Document Object Model)
> Link: [PPT](file:///E:/MY%20BAG/MAIN/Secondary/WP/PPT-203105353-3.pdf) search: `HTML DOM` many more 
> ![image](https://github.com/Ayon-SSP/Ayon-SSP/assets/80549753/af6103f7-99d1-4fe7-8532-671d67b10785)
> ![image](https://github.com/Ayon-SSP/Ayon-SSP/assets/80549753/ee7f929b-a8df-43bb-b512-7f87c195d24f)


```html
<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
```
```js
document.getElementById("demo").innerHTML = "My First JavaScript";
document.getElementById("demo").style.fontSize = "35px";
document.getElementById("demo").style.display = "none";



// Adding and Deleting Elements
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream

document.getElementById(id).onclick = function(){code} Adding event handler code to an onclick event

// Finding HTML Objects
document.anchors	Returns all <a> elements that have a name attribute	1
document.applets	Deprecated	1
document.baseURI	Returns the absolute base URI of the document	3
document.body	Returns the <body> element	1
document.cookie	Returns the document's cookie	1
document.doctype	Returns the document's doctype	3
document.documentElement	Returns the <html> element	3
document.documentMode	Returns the mode used by the browser	3
document.documentURI	Returns the URI of the document	3
document.domain	Returns the domain name of the document server	1
document.domConfig	Obsolete.	3
document.embeds	Returns all <embed> elements	3
document.forms	Returns all <form> elements	1
document.head	Returns the <head> element	3
document.images	Returns all <img> elements	1
document.implementation	Returns the DOM implementation	3
document.inputEncoding	Returns the document's encoding (character set)	3
document.lastModified	Returns the date and time the document was updated	3
document.links	Returns all <area> and <a> elements that have a href attribute	1
document.readyState	Returns the (loading) status of the document	3
document.referrer	Returns the URI of the referrer (the linking document)	1
document.scripts	Returns all <script> elements	3
document.strictErrorChecking	Returns if error checking is enforced	3
document.title	Returns the <title> element	1
document.URL	Returns the complete URL of the document	1


// JavaScript HTML DOM Elements
document.getElementById("intro");
document.getElementsByTagName("p");
document.getElementsByClassName("intro");
document.querySelectorAll("p.intro"); // list of all p elements with class="intro"
const radioButtons = document.querySelectorAll('input[type="radio"]');
document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World!";
}); // 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_addeventlistener'
-<or>-
let button = document.getElementById('btn');
button.addEventListener('click', function() {
  document.getElementById('welcomeId').textContent = 'Hello, World!';
});

button.addEventListener('change', function() {
      // Check which radio button is selected
      radioButtons.forEach(function(radio) {if (radio.checked) {selectedLanguage.textContent = "Selected language: " + radio.value;}});
    });


const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
```


### JavaScript Hoisting
1. the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution
2. Variables (var, let, const)
3. `var` is hoisted but initialized as undefined until the code is executed
    ```js
    console.log(a); // undefined (hoisted, but not initialized) Output: undefined
    var a = 10;

    console.log(b); // ReferenceError (temporal dead zone) err. Output: Cannot access 'b' before initialization
    let b = 20;
    ```
4. Function Declarations:
   - Fully hoisted (both declaration and body).
   - Can be called before their definition
    ```js
    greet(); // Works, logs "Hello"
    function greet() {
        console.log("Hello");
    }
    ```
5. Classes:
   - Hoisted but remain in a temporal dead zone (similar to let and const).
    ```js
    const obj = new MyClass(); // ReferenceError
    class MyClass {}
    ```
6. Function Expressions and Arrow Functions:
   - Treated like variables; only the variable declaration is hoisted, not the function itself.
   ```js
   console.log(add); // undefined
   var add = function () {
       console.log("Add");
   };

   console.log(subtract); // ReferenceError
   let subtract = () => console.log("Subtract");
   ```


### JS Async
#### **Callback Hell:**
```js
fetch(url, (result) => {
  result.json((result) => {
    let id = result.id;
    fetch(url + id, (result) => {
      result.json((result) => {
        console.log(result);
      });
    });
  });
});
```
states:
1. Pending -> success -> .then( callback )
2. pending -> error -> .catch( callback )

#### promise in javascript: 
[promise YT short](https://youtube.com/shorts/VC0W6F4CXpc?si=u4oCrrCsrxasBi97): it's like promiseing that definetly you will get the response. may take time but you will get the response.
**Promise:**
```js
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let id = data.id;
    return fetch(url + id);
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

> [YT short](https://youtube.com/shorts/Y4QRVrWV4oQ?si=_bbP9nKW-QX6m1r_)
```js
function authDetails(){...}

const res = authDetails();
console.log(res); // undefined, authDetails() is takes time to return the res. so res should wait untill it get the authDetails() response.

// with async
1. callbacks
2. promises
3. async/await

url = 'https://api.github.com/users';
// callbacks
fetch(url, (result) => {
  result.json((data) => {
    console.log(data);
  });
});


// promises: without async/await
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// -<or>-
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data[0];
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

this.setState(prevState => ({
            message: 'Thank you for subscribing' + msd + '!',
            count: prevState.count + 1
        }), () => { console.log('callback value', this.state.count) });

// async/await
async function myFunction() {
  const r = await fetch(url);
  const d = await r.json();
  const d0 = d[0];
  console.log(d0);
}

myFunction();
```

