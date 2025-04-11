# ☕ Java

> ### 🛢️Learning Source:
> **Oracle Docs:** https://docs.oracle.com/javase/tutorial
>
> **Kunal OOPs:** https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=wdLQQfKG84VjKypD
>
> **javatpoint:** https://www.javatpoint.com/java-oops-concepts
>
> **prepinsta**: https://prepinsta.com/java/introduction/
>
> **Code:** C:\CODE\1]_Lets_Compile\3]_learning_java\tuts_java**
>
> **Other Notes**: ref:📒[OneNotes] [Fullstack -> Programming -> Java]

============================================================================
Java ☕:
1. Architecture ✅
2. 🐳 Baby Runn ✅
3. Java guide: ✅
   1. Java Package ✅
   2. javadoc tags ✅
   3. Java Naming Convention ✅ 
4. Primitive Types ✅
	- Memory Allocation and Behavior of Primitive Data Types in Java 🛰️ ✅
5. Type conversion and Type casting ✅
6. Control Statements ✅
7. Object Oriented Programming in Java
   1. Object-Oriented design
   2. POJO vs JavaBean
   3. Class && Object
      - Methods:
      - Constructor
      - static keyword
      - this keyword
    	- Object lifecycle and memory management 🛰️
   4. Types of classes
         - Singleton class
   5. Inheritance
      - inheritance(IS-A)
      - aggregation(HAS-A)
   6. Polymorphism
      - Overloading, Overriding
      - Runtime Polymorphism
      - Super & Final Keyword
   7. Abstraction
      1. Abstract class
      2. Interface
      3. Marker Interface
      4. Abstract vs Interface
   8. Encapsulation
      - Access Modifiers in Java
      - Encapsulation
8. ⚓ Java Nested & Inner Classes
9.  Strings
10. Collections in Java
   1. ArrayList
   2. Map
   3. Set...
11. Java Lambda Expressions & Functional Interfaces & Stream 🤖
12. Enum in Java
13. Exception Handling ⚠️
14. Multithreading ref:📒[OneNotes] Fullstack -> Programming -> Java
15. 
16. 
============================================================================

Installation:
```bash
path:      C:\Program Files\Java\jdk-16.0.1\bin
classpath: C:\Program Files\Java\jdk-16.0.1\lib
JAVA_HOME: C:\Program Files\Java\jdk-16.0.1
```

## Architecture: 
- ![JDK(JRE(JVM, setofLibaries, other files, classLoder) dev tools [javac, java])](https://static.javatpoint.com/images/jdk2.png) [JDK, JRE, JVM image](res\jdk_jre_jvm.jpg) [chatgpt](https://chatgpt.com/share/67867c1e-0430-800f-b88b-9861ff1e18b9)
1. JDK (Java Development Kit)
	- **What it is:** JDK is a full toolkit for developing Java applications. It includes JRE, development tools (e.g., `javac` for compiling), and debugging utilities.
	- **Uses:** Required for writing, compiling, and debugging Java programs. | Developers use it to create Java applications.
2. JRE (Java Runtime Environment)
	- **What it is:** JRE is the environment required to run Java applications. It includes the JVM and libraries/classes necessary for execution.
	- **Uses:** Provides libraries and tools for running Java applications. | Suitable for users who want to run Java programs but not develop them.
3. JVM (Java Virtual Machine)
   - **What it is:** JVM is the runtime engine that executes Java bytecode. It's a part of JRE and ensures that Java programs run consistently across different platforms ("Write Once, Run Anywhere").
   - **Uses:** Converts bytecode to machine-specific instructions. | Manages memory (Garbage Collection). | Ensures security and performance of Java programs.
```css
Architecture 
	a. JDK -> Java Development Kit     ->will have files/exe which will support building of java app
				.java ->compile/debug->.class | JDK converts `.java` to `.class` javac compiler which is provided by jDK ***
	b. JRE -> Java Runtime Environment ->supports execution application build on java (platform independant)| only gives the envirment | executing Java bytecode | libraries and other components necessary for running Java applications | When you install the JRE on your system, you can run Java programs without needing to compile them yourself
	C. jvm -> java virtual machine (OS specific)
				.class-> executed ->.class which is platform independant
        eg. jar (Java ARchive) and .war (Web Application ARchive) files are OS-independent
```

Why?
What?
How ?


## 🐳 Baby Runn
############################################################################################

- Run the Java program:
```bash
  javac -d . Main.java
  java com.learn.basics.Main
```
- Direct run the java file: it will compile and run the file
```bash
	java Main.java
```
- More than one class in a Folder with package:
```bash
javac -d . *.java
java com.learn.basics.Main AYON 'SSP - software specialist programmer' 1 23 0.4
```
  Step1 -> a. Syntax -> Main.class
  Step2 -> java Main-> loading the class-> checking is it valid file-> if valid -> output
                                    else     -> error	
############################################################################################

**CODE Explanation:**
- Main Method: https://youtu.be/P-_Nzi_mCRo?si=e5UsnjQGmrB6R4Sb
- *Code:* [com.learn.basics.\*.java] `java-coffee`
- A .java file must have one public class, and the file name should match it. The JRE looks for the main method in that public class to start execution.

```java
/*
public: outside of application, so that JVM can access it. allways starts with Main class name.
    so public class an public method.
(String[] args): additional parameter are passed during execution of program. 
                   => run time arguments are passed as string array. && it's a dinamic array.
                   => String[] class in java which handels alphanumeric values.

static: The main method is the JVM's entry point; it must be static so it can run without creating an object.

*/
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
- Java is a platform independent language. *.class can be shared and runed on any OS.
- A `.java` file can have multiple classes, but only one public class, and the file name must match that public class.


Main main=new Main();

Main main => variable in your function pointing to the real object 
new Main() => actual object which has a memory
new	=> keyword used to allocate a memory to object
Main() => default constructor/non parameterised constructor 
	=> used in allocation of memory along with new keyword and always returns object
	=> Its a special method which don't have a return type

## 👷‍♂️ Java style guide
### Java Package
Java Package: java, lang, awt, javax, swing, net, io, util, sql etc.
Project must have one public class with public void static main(String [] args){}:- Main.java/App.java
Project all classes should be kept inside relevant packages 
package for Main.java => com.training.demo.Main.java
for classes which represents data => com.training.demo.model 
for classes which represents controllers => com.training.demo.controller
for classes which represents data access logic => com.training.demo.dao
for classes which represents services => com.training.demo.services

- If you import a package, subpackages will not be imported.
- 

Creating project certain -> business need
```css
package-> com.zomato
			controller
			view
			model 
```

package example:
<!-- use real world example which contains model, view, controle.. and all other utils and all types -->
```java
package com.example.model;
package com.example.view;
package com.example.controller;
package com.example.utils;
package com.example.services;
package com.example.dao;
package com.example.dto;
package com.example.exception;
package com.example.config;
package com.example.security;
package com.example.repository;
package com.example.entity;
package com.example.dto;
package com.example.beans;
package com.example.constants;
package com.example.enums;
// example -> zomato, swiggy, foodpanda, ubereats
package com.swiggy.model
package com.google.maps
package com.microsoft.office
package com.obms.model;
package com.obms.view;
```


### javadoc tags
Some of the commonly used tags in documentation comments:

| Tag        | Syntax                  | Description                                                                                       |
|------------|-------------------------|---------------------------------------------------------------------------------------------------|
| {@docRoot} | {@docRoot}              | To depict relative path to root directory of generated document from any page.                    |
| @author    | @author name - text     | To add the author of the class.                                                                   |
| @code      | {@code text}            | To show the text in code font without interpreting it as html markup or nested javadoc tag.       |
| @version   | @version version-text   | To specify "Version" subheading and version-text when -version option is used.                    |
| @since     | @since release          | To add "Since" heading with since text to generated documentation.                                |
| @param     | @param parameter-name description | To add a parameter with given name and description to 'Parameters' section.             |
| @return    | @return description     | Required for every method that returns something (except void)                                    |


### Java Naming Convention
 - package -> smallCase -> com.trainer.java
    - com.swiggy.model
    - com.google.maps
    - com.microsoft.office
 - class -> PascalCase -> Circle, Rectangle
 - interface -> PascalCase -> Shape, Drawable
 - method -> camelCase -> calculateArea(), getArea()
 - variable -> cameCase -> number1, totalAmount(alphanumeric, numbers start with 2nd charater)
 - constant -> UPPER_CASE -> PI, MAX_VALUE
 - enum -> PascalCase -> WeekDays, Months
 - annotation -> PascalCase -> Override, Deprecated
 - exception -> PascalCase -> IOException, SQLException
 - thread -> camelCase -> mainThread, childThread



## Primitive Types 
Primitive Types(simple types):
  - byte, short, int, and long for integer values
  - float and double for real/fractional values
  - char for letters, digits, symbols, punctuation
  - boolean for true and false
Literals(constants values):
  - values of one of these types
  - 'A', -7, 3.5, true
  eg. int x = 10; [variable var_name = value;] where 10(value) is literal.

8 Data types
Primitive: byte,short,int,long,float,double,char,boolean
Wrapper Class: Byte,Short,Integer,Long,Float,Double,Char,Boolean

-- variable 
	1. declare
	2. initialize
	3. use
C/c++ forgot initialize add junk variable 
Java if you do not provide values/initialize in case of class Field variable
byte	0
short	0
int		0
long	0L
float	0.0f
double	0.0
char	null \000  -> '' and strings are ""
boolean	false

Programming 
Networking   Source <====> Destination => Object
1. wrapping		int->Integer
2. unwrapping  Integer=>int

Java Numeric Default :  check(package com.training.demo;)
Number without decimal : int			123,12345
Number with decimal    : double 		12.12
Float : 12.12F
Long  : 123L


-  Incase of local variables we must follow 
	1. declare
	2. initialize
	3. use 

1. Local variable -> function paratmeters {} variable
2. Field/Instance -> class , private, the get initialised when constructor => multiple copies
3. static variable-> single copy(for all object) *** 
### Memory Allocation and Behavior of Primitive Data Types in Java
```java
1. Local Variables (Declared Inside Methods)
void someMethod() {
    int var; // Memory is NOT allocated until assigned. | declared | uninitialized
    var = 10; // Now memory is allocated on the `stack`.
}

2. Instance Variables (Declared at Class Level Without static)
class MyClass {
    int var; // Memory is allocated on the heap when an object is created.
}

MyClass obj = new MyClass(); // `var` is initialized to 0 and stored in the heap. | 
// obj (the reference variable) is stored in stack memory. |
// The object created by new MyClass() is stored in the heap. | 
// The reference variable obj in the stack points to the object's memory address in the heap.
stack [obj(poiting to `1100`)] -> heap "add(1100): [var = 0]"

3. Static Variables (Declared at Class Level with static)
class MyClass {
    static int var; // Stored in the method area(part of JVM memory)., initialized to 0. | Memory is allocated only once when the class is loaded,
}
```
### memory management and object lifecycle
- `Premitive data` types are stored in `stack` and can't access if not initialized(a = 5) | Objects are stored in Heap if not initialized then it will be `null` (like array contains 0, string contains null object contains null...).
- `Heap memory` is not contiguous.
  - static block: loaded even before object creation.
  - object block: only if we create obj.

- in `java premitive datatypes` are not created as objects(they are stored in stack it self) but String is created as object. (objects are stored in heap memory) but 10, 2.95, 'a', 9_452_123 are `stored directly in the compiled code` cause they are objects.
  - `String str = new String("Hello");` // str is stored on the stack, but the String object "Hello" is stored on the heap
- what ever things are stored in the stack it give a unique id to it. that unique id -> contains the address of the object in the heap/stored directly in the compiled code.
- when a non-premitive is `final` we cannot reassign it.

**Understanding the Range of `int` in Java (4 Bytes / 32 Bits)**
```txt
int -> 4 bytes -> 32 bits -> 2^32 -> -2^31 to 2^31-1
x 0 0 0 0 0 0 0 
x 1 1 1 1 1 1 1
x = 1 (-ve) and 0 (+ve)
rest of 7 bits are used to store the number

Example:
0 0 0 0 0 0 0 binary = 0 Decimal
1 1 1 1 1 1 1 binary = 127 Decimal
Max = 2^31-1 = 2147483647
Min = -2^31 = -2147483648

Example:
1 0 0 0 0 0 0 0  binary = -2^31 = -2147483648
1 0 0 0 0 0 1 1  binary = -2^31+3 = -2147483645
Long (8 bytes)
Short (2 bytes)
Byte (1 byte)
Char (2 bytes) Unicode ASCII eg. 'A' = 65
Boolean (1 bit)
Float (4 bytes) eg. 3.14f or 3.14F
Double (8 bytes) eg. 3.14 (default) or 3.14d or 3.14D
```

## Type conversion and Type casting
- Type conversion is automatic (also called `implicit casting` or "type promotion").
- Typecasting is an `explicit conversion` performed by the programmer
```java
int x = 10;
long y = x; // implicit conversion
int z = (int) y; // explicit conversion
```

## Control Statements
> Javatpoint
1. Decision Making
	 - if-else-if-else ladder
	 - nested if statement
	 - switch statement
2. Looping
	 - for loop
	 - while loop
	 - do-while loop
	 - for-each loop
3. Jumping
   - break statement
	 - continue statement
	 - return statement

## Object Oriented Programming in Java
OOPs (Object-Oriented Programming System)
**Class:** A blueprint or template that defines the structure and behavior (properties and methods) of objects.
   *Example:* A "Car" class with attributes like color, brand, and speed and methods like start() and stop(). | logical construct
**Object:** (a real-world entity) An instance of a class that holds actual data and can use the defined methods.
   *Example:* myCar = Car() where myCar is an object of the Car class, and it could have color = "red" and speed = 120. | physical reality (occupies memory)
Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts:
> Encapsulation → Abstraction → Inheritance → Polymorphism
  1. Class
  2. Object
  3. Encapsulation
  4. Abstraction
  5. Inheritance
  6. Polymorphism

### Object-Oriented design PRINCIPLEs:
Apart from these concepts, there are some other terms which are used in Object-Oriented design:
  1. **Coupling:** refers to the degree of dependency between different classes or modules. Low coupling is desirable because it promotes better code reusability, maintainability, and flexibility.
  2. **Cohesion:** in software engineering refers to the degree to which the elements within a module or component belong together. It's a measure of how strongly related and focused the responsibilities of a module are. High cohesion is desirable because it leads to modules that are focused, understandable, and easier to maintain.
  3. **Association:** Association represents the relationship between the objects. Here, one object can be associated with one object or many objects. There can be four types of association between the objects:
  	- One to One
  	- One to Many
  	- Many to One, and
  	- Many to Many
  4. **Aggregation:** HAS-A relationship. 
  5. **Composition:** HAS-A relationship with a strong ownership.

OOP SOLID PRINCIPLE :
  1. S SRP :Single Responsibility Principle
  2. O OCP Open/Closed Principle : Open for extenstion Close for modification
  3. L LSP Liskov Substitution Principle: 
  4. I ISP Interface Segregation Principle:
  5. D DSP Dependency Inversion Principle:


### POJO vs JavaBean
> [pojo-in-java](https://www.javatpoint.com/pojo-in-java)
> Every JavaBean is a Pojo, but not every pojo is java bean

| Feature | POJO | Java Bean |
|---|---|---|
| Restrictions | No special restrictions | Must follow certain conventions |
| Member Control | Limited | Full control |
| Serializable | Can implement | Must implement |
| Field Access | By name | Getters and setters |
| Field Visibility | Any | Private |
| Constructor | May or may not have no-arg constructor | Must have no-arg constructor |
| Use Case | When you don't want to restrict members and give users complete access | When you want to restrict access to members and provide a controlled interface |

#### POJO:
POJO : Plain old Java Object 
**Rules**
1. Every class in Java is POJO 
2. No Extend, No Implement, No outside Annotations(@Entity): when it is not extending any classes MAY OR MAYNOT implement the serialziation package 
4. No extra stuffs or libaries.

```java
publicclass Student{  
  private int id;  
  private String name;  
  // ..
}  
```
Properties of POJO class
Below are some properties of the POJO class:
  The POJO class must be public.
  It must have a public default constructor.
  It may have the arguments constructor.
  All objects must have some public Getters and Setters to access the object values by other Java Programs.
  The object in the POJO Class can have any access modifies such as private, public, protected. But, all instance variables should be private for improved security of the project.
  A POJO class should not extend predefined classes.
  It should not implement prespecified interfaces.
  It should not have any prespecified annotation.


#### JavaBean:
If any class full fils below its a Java Bean
1. Class MUST has default constructor
2. class has private data members 
3. class has public getter and setter for private datamembers 
4. No public arg-constructor











#### New Keyword (Dynamic Memory Allocation):
- Allocating memory to objects and data structures at runtime using the `new` keyword. Unlike languages like C or C++, Java handles memory management automatically through its built-in **Garbage Collector (GC)**.
```java
int[] numbers = new int[5];
String name = new String("ChatGPT");
Student student = new Student(); // Allocating memory for a Student object
```
TODO: ... continue



































# Questions
Q: In classs with Without `this` and with `this` keyword?: [ChatGpt](https://chatgpt.com/share/67dce37f-0248-800f-a89f-f08bcc82efd2)
Q: Automatic Memory Management:
  Java uses Garbage Collection (GC) to automatically free memory occupied by objects that are no longer reachable, reducing memory leaks.
Q: Heap Memory Usage:
  Objects are allocated memory dynamically on the heap when created using the `new` keyword.
  References to these objects are stored in the stack.


