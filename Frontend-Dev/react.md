# 📘 React
> [YT Playlist](https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&si=5yO85s7ERDZBhLOv)



## React Docs:
**INSTALLATION**
1. Getting Started
1. Add React to a Website
1. Create a New React App
1. CDN Links
1. Release Channels

**MAIN CONCEPTS**
1. Hello World
2. Introducing JSX
3. Rendering Elements
4. Components and Props
5. State and Lifecycle
6. Handling Events
7. Conditional Rendering
8. Lists and Keys
9. Forms
10. Lifting State Up
11. Composition vs Inheritance
12. Thinking In React


1. React is a JavaScript library for Focus on UI. created and maintained by Facebook.
2. **routing and http request are not included in react.**
3. Components based architecture. Only work in View layer. not like a MVC(Angular, JSP Servlets) or MVT(Django) framework.
4. React is declarative: You tell react what you want and react will build the UI. [stackoverflow](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)
   1. react will handle efficiently updating and rendering the components.
   2. DOM updates are handled gracefully in react.
5. seamlessly integrate react into any project. 
   1. just a portion of the page.
   2. `complete page`.
   3. entire application with react.
6. `JavaScript XML (JSX)` is used to write react components. `ES6` is used to write react components.
7. `single page applications (SPA)` are built using react.
9. React uses **Virtual DOM** exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM).

### Pre-requisites
1. `this` keyword in JavaScript.
2. filter, map and reduce in JavaScript.
  ```js
  const nums = [1, 2, 3, 4, 5, 5, 30, 76];
  const evens = nums.filter(n => n % 2 === 0); //  -<or>-

  const evens = nums.filter(function(n) {
    return n % 2 === 0;
  });

  const doubled = nums.map(n => n * 2);

  // .reduce() = reduce the elements of an array to a single value.
  const total = nums.reduce(sum);
  console.log(`$${total.toFixed(2)}`);

  function sum(accumulator, element) {
    return accumulator + element;
  } // 1st iter accumulator = 0, element = 1; 2nd iter accumulator = 1, element = 2; 3rd iter accumulator = 3, element = 3; ...

  const maxVal = nums.reduce((max, value) => {
    return Math.max(max, value);
  })

  ```
3. let & const, arrow functions, template literals [`${num}`], default parameters, object literals, rest and spread operators[...], destructuring, classes, promises, async/await, fetch API, modules, import/export, and more.
   1. Rest and spread operators: `...`
    ```js
    let array1 = ["one", "two", "three", "four"]
    let array2 = ["five", "six", "seven"]

    // Spread operator
    let finalArray = [...array1, ...array2]
    console.log(finalArray) //output: ["one", "two", "three", "four", "five", "six", "seven"]

    // rest operator
    let [first, ...rest] = array1
    console.log(first) //output:  one
    console.log(rest)  // output: ["two", "three", "four"]
    ```

### React Concepts:
1. Fundamentals
2. HTTP (Axios, Fetch API)
3. Routing
4. Redux
5. Hooks
6. Context API
7. Testing
8. Performance
9. Utility Libraries.

#### create a react app
```bash
npx create-react-app my-app
cd my-app
npm start
```
## JSX
```jsx
function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}



interface MyButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}
```


### objects
Object can store:
1. Functions
1. Other Objects
1. Symbols
1. Arrays
1. Regular Expressions
1. Dates
1. Promises
1. Maps and Sets

```jsx
const element = <h1>Hello, world!</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

const obj = {
  greet: function() {
    console.log("Hello!");
  }
};

obj.greet(); // Outputs: Hello!


const obj = {
  nestedObj: {
    key: "value"
  }
};

console.log(obj.nestedObj.key); // Outputs: value


const sym = Symbol("unique");
const obj = {
  [sym]: "Symbol value"
};

console.log(obj[sym]); // Outputs: Symbol value

const obj = {
  arrayProp: [1, 2, 3]
};

console.log(obj.arrayProp[0]); // Outputs: 1


const obj = {
  regex: /\d+/g
};

console.log("123abc456".match(obj.regex)); // Outputs: ["123", "456"]


const obj = {
  currentDate: new Date()
};

console.log(obj.currentDate); // Outputs: Current date and time


const obj = {
  asyncOperation: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 1000);
  })
};

obj.asyncOperation.then(result => console.log(result)); // Outputs: Promise resolved


const obj = {
  map: new Map([[1, 'one'], [2, 'two']]),
  set: new Set([1, 2, 3])
};

console.log(obj.map.get(1)); // Outputs: one
console.log(obj.set.has(3)); // Outputs: true
```


### Components
1. Components are the building blocks of a react application.
2. Components are reusable and can be nested inside other components.
3. can be functional or class-based.
4. Types stateful or stateless.
5. Components can be used to pass data from parent to child components.
#### Stateless Functional Components
- Functional components are simple functions that take props as an argument and return JSX.
- Properties(props)  -> js Function -> returns (JSX)

**Shortcut for creating a functional component:**
1. 'rfc', 'rfce', rafce', rafc' -> for creating a functional component.
2. rc -> for creating a class component...
3. 'rconst' -> for creating a constructor.
```js
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default MyComponent;
```
#### Class Components
- Class components are ES6 classes that extend from React.Component.
- Properties(props)  -> ES6 Class -> returns (JSX)
- this. keyword
- can maintain thair own data which is known as `state`. Stateful/Smart Components.
- complex UI Logic. lifecycle Hooks.
```js
import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
      return (
        <div>
          <h1>Hello, World!</h1>
        </div>
      );
    }
  }

export default MyComponent;
```
### JSX
```jsx
import React from 'react';

const MyComponent = () => {
  return React.createElement('div', null, React.createElement('h1', null, 'Hello, World!'));
  // indirectly REact libary is used to convert the html tages -> React.createElement() reason we import React from 'react';
};

export default MyComponent;
```
#### Names Replace
1. class -> className
2. for -> htmlFor
3. camelCase property naming convention.
   1. onclick -> onClick
   2. tabindex -> tabIndex


### Props
1. Props are used to pass data from parent to child components.
2. Props are **immutable**.
3. Props are passed as attributes to the component.
4. Props are accessed using `this.props` in class components and `props` in functional components.
5. Props can be used to pass functions as well.
```js
// App.jsx
  
  <Home name="Ayon" heroName="Google">
    <p>THis is childrel props</p>
  </Home>
  <Home name="ROcK" heroName="superman">
    <button type="">Button 🦋</button>
  </Home>

  // class component // directly you can use this.props.<name>
  <Welcome name="Google" heroName="AI" />
  <div>Welcome this is class {this.props.name}</div> 


import React from 'react';

const Home = props => {
    const {name, heroName, children} = props
    return (
        <div>
            <div> Home { name }  =+=  {heroName}🔑</div>
            { children }
        </div>
    )
}

export default Home;
```
```jsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  const handleEvent = () => {
    console.log('Button clicked!');
  };

  const callbackFunction = () => {
    console.log('Callback function called!');
  };

  const myStyle = {
    color: 'blue',
    fontSize: '18px',
  };

  const config = {
    isEnabled: true,
  };

  return (
    <div>
      <h1>App Component</h1>
      <MyComponent 
        dataProp="Hello, World!" 
        functionProp={handleEvent} 
        eventHandlerProp={handleEvent}
        booleanProp={true}
        callbackProp={callbackFunction}
        styleProp={myStyle}
        configProp={config}
      >
        <p>This is a child component.</p>
      </MyComponent>
    </div>
  );
};

export default App;

import React from 'react';

const MyComponent = ({ 
  dataProp,
  functionProp,
  children,
  eventHandlerProp,
  booleanProp,
  callbackProp,
  refProp,
  styleProp,
  configProp
}) => {

  const handleClick = () => {
    eventHandlerProp();
  };

  return (
    <div style={styleProp}>
      <p>Data Prop: {dataProp}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Boolean Prop: {booleanProp ? 'True' : 'False'}</p>
      <p>Config Prop: {configProp.isEnabled ? 'Enabled' : 'Disabled'}</p>
      <div>{children}</div>
    </div>
  );
};

export default MyComponent;
```
### State
1. State is used to store data that can be changed.
2. State is **mutable**.
3. State is accessed using `this.state` in class components.
4. State should be initialized in the constructor.
5. State can be updated using `this.setState()`.
6. State can be passed as props to child components.
```js
  // inside the constructor
    this.state = {
      count: 0
    }

    increment() {
      // this.setState({
      //   count: this.state.count + 1
      // })

      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }
    
    increment5() {
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
    } // for better performance react will set all the calls at onece.



      this.state.count = this.state.count + 1 // this will not work as expected.
      // alwase use this.setState() to update the state. the react will re-render the component and update the UI.
      // calles to setState are asynchronous.
      // to sync the state use callback function.

      this.setState({count: this.state.count + 1}, () => {c.l(count)})



<button onClick={() => this.setState({ count: this.state.count + 1 })}> Count {this.state.count}</button>
<button onClick={() => this.increment()}> Count {this.state.count}</button>
```
```js
import React, { Component } from "react";

// using component state, cause proportye are immutable
class Message extends Component {

    // fast type rconst
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome Ayon',
            count: 0
        }
    }

    subscribed(msd) {

        // this setState will all wase runs in the end of the functon call
        // this.setState({
        //     message: 'Thank you for subscribing' + msd + '!',
        //     count: this.state.count + 1
        // },
        // () => {
        //         console.log('callback value',this.state.count)
        //     }
        // )

        this.setState(prevState => ({
            message: 'Thank you for subscribing' + msd + '!',
            count: prevState.count + 1
        }), () => { console.log('callback value', this.state.count) });
        console.log(this.state.count)
    }

    subscribeFive() {
        this.subscribed()
        this.subscribed()
        this.subscribed()
        this.subscribed()
        this.subscribed()
    }

    render() {
        // const {name, heroName, children} = this.props
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <h2>Subscribed Times 🔄️:{this.state.count}</h2>
                <button onClick={() => this.subscribed(' Ayon')}>Subscribe 🍎</button>
                <button onClick={() => this.subscribeFive()}>Subscribe 5 🍎</button>
                {/* Binding Event Handlers  */}
                {/* <button onClick={this.subscribed.bind(this)}>Subscribe 🍎</button> */}
            </div>
        )
    }
}

export default Message;

```
Importent Points:
1. Never modify the state directly. use setState() method.
2. State updates may be asynchronous. insted use the callback function.
3. always make update using prevState.


### Props vs State
1. props get passed to the component whereas state is managed within the component.
2. Function parameters | variables defined in the function body.
3. props are immutable | state is mutable.
4. funk: props.<names>, class: this.props.<name>  | funk: useState Hook, class: this.state.<names>


### Destructuring props and state
```js
const {name, heroName, children} = props/this.props
const {name, heroName, children} = this.state
```

### Event Handling
1. Event handlers are called when an event is triggered.
2. it's not like will execute like a function eg. funk() this will allwase call whenever you render the component. so use `funk` instead of `funk()`.
```js
function clickHandel() {}
<button onClick={clickHandel}>Subscribe 🍎</button>

clickHandel() {}
<button onClick={this.clickHandel}>Subscribe 🍎</button>
```
#### Binding Event Handlers
1. Binding in the render method. this keyword will not work.
```js
```
TODO: ReactJS Tutorial - 14-16


### List Rendering
```js
import React from "react"

const Home = props => {
    const names = ['Ayon', 'Rock', 'Google', 'AI'];
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Ayon',
            age: 24,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Rock',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Google',
            age: 26,
            skill: 'Vue'
        },
        {
            id: 4,
            name: 'AI',
            age: 27,
            skill: 'Node'
        }
    ]
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
            {nameList}
            {persons.map(person => <h2 key={person.id}>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)}
            {persons.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}

export default Home;

```
TODO: ReactJS Tutorial - 18-19 - Lists and Keys, key anti parten.
 
### Styling and CSS Basics
TODO: ReactJS Tutorial - 20 - Styling and CSS Basics

### Basics of Form Handling
TODO: ReactJS Tutorial - 21 - Basics of Form Handling

### Component Lifecycle Methods
TODO: ReactJS Tutorial - 22 - 30 Component Lifecycle Methods.
**class components have lifecycle methods.**

w3: [React Component Lifecycle](https://www.w3schools.com/react/react_lifecycle.asp)
1. Mounting
   1. constructor()
   2. static getDerivedStateFromProps()
   3. render()
   4. componentDidMount()
2. Updating
   1. static getDerivedStateFromProps()
   2. shouldComponentUpdate()
   3. render()
   4. getSnapshotBeforeUpdate()
   5. componentDidUpdate()
3. Unmounting
   1. componentWillUnmount()
4. Error Handling


TODO: ReactJS Tutorial - 31 - 36

### Context
componentA -> passPorpec -> componentB -> passPorpec -> componentC ...
so we use context API to pass the props to the component without passing the props to the parent component.
TODO: ReactJS Tutorial - 37-40




### React and HTTP
Http Libraries:
1. Axios
2. Fetch API
3. jQuery
4. XMLHttpRequest...
```bash
npm install axios
```
API Endpoint: [jsonplaceholder](https://jsonplaceholder.typicode.com/)
```js
import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				List of posts
				{posts.length
					? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default PostList
```
```js
import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault() // to avoid page refresh
		console.log(this.state)
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { userId, title, body } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="userId"
							value={userId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="body"
							value={body}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm
```

### React Hooks
> [React Hooks](https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/)

TODO: React Hooks Tutorial 1 - complte

1. insted of setCount(count + 1) -> setCount(prevCount => prevCount + 1)

```js
import React, {useState} from 'react'
const [count, setCount] = useState(0);
useState(count + 1);
useState(prevCount => prevCount + 1)



const [name, setName] = useState({ firstName: '', seconeName: '' })
// onChange={e => setName({ e.target.keys: e.target.value })} dont know weather it works.
onChange={e => setName({ ...name, firstName: e.target.value })}


const [items, setItems] = useState([])

const addItem = () =>{
  // setItems(prevItem => )
  setItems([...items, {
    id: items.length,
    value: Math.floor(Math.random() * 10 + 1)
  }])
}

onClick={addItem}

```

#### useEffect Hook
1. useEffect is a hook that allows you to perform side effects in functional components.
Flow:
1. render the component(Mount): only the body()
2. if any thing from the dependency array changes then useEffect will first run the cleanup code and then run the useEffect code.
      first distroy it self Unmount -> then Mount.
```js
import React, {useState, useEffect} from 'react'
const [count, setCount] = useState(0);
useEffect(() => {
  // the code that we want to run
  document.title = `You clicked ${count} times`
  console.log('useEffect - Updating document title', count)
  return () => {
    // cleanup code
  }
}, [count]) // dependency array
```










