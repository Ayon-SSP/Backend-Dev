# 
> In React (and JavaScript in general), there are several ways to export components or modules from a file. Here’s a breakdown of the different types of exports you can use:

### 1. Named Exports
Named exports allow you to export multiple variables, functions, or components from a single file. When importing, you need to use the same names as the exports.
**Example:**
```javascript
// File: MyComponent.js

export const MyComponent = () => {
  return <div>Hello World</div>;
};

export const AnotherComponent = () => {
  return <div>Another Component</div>;
};
```
Importing:
```javascript
import { MyComponent, AnotherComponent } from './MyComponent';
```

### 2. Default Exports
A default export allows you to export a single value or component from a file. The import statement does not require curly braces, and you can name the imported value anything you like.
**Example:**
```javascript
// File: MyComponent.js

const MyComponent = () => {
  return <div>Hello World</div>;
};

export default MyComponent;
```
Importing:
```javascript
import MyComponent from './MyComponent';
```

### 3. Combining Named and Default Exports
You can use both named and default exports in the same file.
**Example:**
```javascript
// File: MyComponents.js

export const AnotherComponent = () => {
  return <div>Another Component</div>;
};

const MyComponent = () => {
  return <div>Hello World</div>;
};

export default MyComponent;
```
Importing:
```javascript
import MyComponent, { AnotherComponent } from './MyComponents';
```