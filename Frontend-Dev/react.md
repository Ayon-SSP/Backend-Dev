# 📘 React
> [YT Playlist](https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&si=5yO85s7ERDZBhLOv)

1. React is a JavaScript library for Focus on UI. created and maintained by Facebook.
2. **routing and http request are not included in react.**
3. Components based architecture.
4. react is declarative: you tell react what you want and react will build the UI.
   1. react will handle efficiently updating and rendering the components.
   2. DOM updates are handled gracefully in react.
5. seamlessly integrate react into any project. 
   1. just a portion of the page.
   2. `complete page`.
   3. entire application with react.
6. `JavaScript XML (JSX)` is used to write react components. `ES6` is used to write react components.
7. `single page applications (SPA)` are built using react.
8. only work in View layer. not like a MVC(Angular, JSP Servlets) or MVT(Django) framework.
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